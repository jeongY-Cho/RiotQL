import { schema, settings, server } from 'nexus'
import {
  Client,
  OperationMethods,
  PathsDictionary,
} from './generated/riot-types'
import * as dotenv from 'dotenv'
import { Region } from './types/Regions'

import OpenAPIClientAxios, {
  Operation,
  AxiosRequestConfig,
  OpenAPIClient,
} from '../openapi-client-axios'
import qs from 'qs'

dotenv.config()
settings.change({
  server: {
    port: parseInt(process.env.PORT!),
    playground: { path: '/playground' },
  },
  schema: {
    nullable: {
      outputs: false,
      inputs: true,
    },
  },
})

type OpMethodKeys = keyof OperationMethods
export enum APIKeyType {
  'League',
  'TFT',
  'VAL',
  'LOR',
  'DEV',
  'TOURNAMENT',
  'ANY',
}
export type ApiClient = <T extends OpMethodKeys>(
  keyType: APIKeyType,
  region: Region,
  endpoint: T,
  parameters?: Parameters<OperationMethods[T]>[0],
  data?: Parameters<OperationMethods[T]>[1],
  config?: Parameters<OperationMethods[T]>[2],
) => ReturnType<OperationMethods[T]> | Promise<null> | null

async function apiContext(options?: AxiosRequestConfig) {
  const RIOT_KEY = process.env.RIOT_KEY

  apiKeyAlerts()

  const APIKeyLookup: { [k in APIKeyType]: string } = {
    [APIKeyType.League]:
      process.env.RIOT_API_LEAGUE_KEY ||
      process.env.RIOT_API_DEVELOPMENT_KEY ||
      '',
    [APIKeyType.TFT]:
      process.env.RIOT_API_TFT_KEY ||
      process.env.RIOT_API_DEVELOPMENT_KEY ||
      '',
    [APIKeyType.LOR]:
      process.env.RIOT_API_LOR_KEY ||
      process.env.RIOT_API_DEVELOPMENT_KEY ||
      '',
    [APIKeyType.VAL]:
      process.env.RIOT_API_VAL_KEY ||
      process.env.RIOT_API_DEVELOPMENT_KEY ||
      '',
    [APIKeyType.DEV]: process.env.RIOT_API_DEVELOPMENT_KEY || '',
    [APIKeyType.TOURNAMENT]: process.env.RIOT_API_TOURNAMENT_KEY || '',
    [APIKeyType.ANY]:
      process.env.RIOT_API_LEAGUE_KEY ||
      process.env.RIOT_API_TFT_KEY ||
      process.env.RIOT_API_LOR_KEY ||
      process.env.RIOT_API_VAL_KEY ||
      process.env.RIOT_API_DEVELOPMENT_KEY ||
      '',
  }

  let latestRecord = require('../SchemaRecord.json')[0]
  const OpenAPI = new OpenAPIClientAxios({
    definition: latestRecord,
    validate: false,
    axiosConfigDefaults: {
      headers: {
        'X-Riot-Token': process.env.RIOT_KEY,
      },
      // @ts-ignore
      paramsSerializer: function (params) {
        return qs.stringify(params, { arrayFormat: 'repeat' })
      },
      ...options,
    },
  })

  await OpenAPI.init<Client>()
  const client = await OpenAPI.getClient<Client>()

  // add any adapter if not in testing environment
  // testing environment uses its own adapter.
  if (!process.env.TESTING && options?.adapter) {
    client.defaults.adapter = options.adapter
  }

  let api = <T extends keyof OperationMethods>(
    keyType: APIKeyType,
    region: Region,
    endpoint: T,
    parameters?: Parameters<OperationMethods[T]>[0],
    data?: Parameters<OperationMethods[T]>[1],
    config?: Parameters<OperationMethods[T]>[2],
  ) => {
    OpenAPI.withServer(0, { platform: region })
    let baseURL = OpenAPI.getBaseURL()

    let configWithRegion = {
      baseURL,
      headers: {
        'X-Riot-Token': APIKeyLookup[keyType],
      },
      ...config!,
    }

    try {
      // @ts-ignore
      return client[endpoint](parameters, data, configWithRegion) as ReturnType<
        OperationMethods[T]
      >
    } catch (err) {
      console.log(err)
      if (err.response?.status == 404) {
        return null
      }
      throw err
    }
  }
  return { api, client, OpenAPI } as {
    api: ApiClient
    client: OpenAPIClient<OperationMethods, PathsDictionary>
    OpenAPI: OpenAPIClientAxios
  }
}

apiContext()
  .then((api) => {
    schema.addToContext((): {
      api: ApiClient
      client: OpenAPIClient<OperationMethods, PathsDictionary>
      OpenAPI: OpenAPIClientAxios
    } => {
      return {
        ...api,
      }
    })
  })
  .catch((err) => console.log(err))

process.on('unhandledRejection', (reason: any, promise) => {
  promise.then((...rets) => {
    console.log(rets)
  })
  console.log('Unhandled Rejection at:', reason.stack || reason)
  // Recommended: send the information to sentry.io
  // or whatever crash reporting service you use
})

function apiKeyAlerts() {
  if (!process.env.RIOT_API_DEVELOPMENT_KEY) {
    console.info('no development key')
  }

  if (!process.env.RIOT_API_DEVELOPMENT_KEY) {
    if (!process.env.RIOT_API_LEAGUE_KEY) {
      console.info(
        'no RIOT_API_LEAGUE_KEY in .env; no RIOT_API_DEVLOPMENT_KEY either. Calls to these endpoints will throw errors.',
      )
    }
    if (!process.env.RIOT_API_TFT_KEY) {
      console.info(
        'no RIOT_API_TFT_KEY in .env; no RIOT_API_DEVLOPMENT_KEY either. Calls to these endpoints will throw errors.',
      )
    }
    if (!process.env.RIOT_API_LOR_KEY) {
      console.info(
        'no RIOT_API_LOR_KEY in .env; no RIOT_API_DEVLOPMENT_KEY either. Calls to these endpoints will throw errors.',
      )
    }
    if (!process.env.RIOT_API_VAL_KEY) {
      console.info(
        'no RIOT_API_VAL_KEY in .env; no RIOT_API_DEVLOPMENT_KEY either. Calls to these endpoints will throw errors.',
      )
    }
    if (!process.env.RIOT_API_TOURNAMENT_KEY) {
      console.info(
        'no RIOT_API_TOURNAMENT_KEY in .env; calls to tournament endpoint will throw errors',
      )
    }
  } else {
    if (!process.env.RIOT_API_LEAGUE_KEY) {
      console.info(
        'no RIOT_API_LEAGUE_KEY in .env falling back to RIOT_API_DEVELOPMENT_KEY',
      )
    }
    if (!process.env.RIOT_API_TFT_KEY) {
      console.info(
        'no RIOT_API_TFT_KEY in .env falling back to RIOT_API_DEVELOPMENT_KEY',
      )
    }
    if (!process.env.RIOT_API_LOR_KEY) {
      console.info(
        'no RIOT_API_LOR_KEY in .env falling back to RIOT_API_DEVELOPMENT_KEY',
      )
    }
    if (!process.env.RIOT_API_VAL_KEY) {
      console.info(
        'no RIOT_API_VAL_KEY in .env falling back to RIOT_API_DEVELOPMENT_KEY',
      )
    }
    if (!process.env.RIOT_API_TOURNAMENT_KEY) {
      console.info(
        'no RIOT_API_TOURNAMENT_KEY in .env; calls to tournament endpoint will throw errors',
      )
    }
    if (
      !(
        process.env.RIOT_API_LEAGUE_KEY ||
        process.env.RIOT_API_TFT_KEY ||
        process.env.RIOT_API_LOR_KEY ||
        process.env.RIOT_API_VAL_KEY ||
        process.env.RIOT_API_DEVELOPMENT_KEY ||
        ''
      )
    ) {
      console.info(`no keys declared in .env calls will throw errors`)
    }
  }
}
