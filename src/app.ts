/**
 * This file is your server entrypoint. Don't worry about its emptyness, Nexus handles everything for you.
 * However, if you need to add settings, enable plugins, schema middleware etc, this is place to do it.
 * Below are some examples of what you can do. Uncomment them to try them out!
 */

/**
 * Change a variety of settings
 */

// import { settings } from 'nexus'
//
// settings.change({
//   server: {
//     port: 4001
//   }
// })

/**
 * Add some schema middleware
 */

// import { schema } from 'nexus'
//
// schema.middleware((_config) => {
//   return async (root, args, ctx, info, next) {
//     ctx.log.trace('before resolver')
//     await next(root, args, ctx, info)
//     ctx.log.trace('after resolver')
//   }
// })

/**
 * Enable the Prisma plugin. (Needs `nexus-plugin-prisma` installed)
 */

// import { use } from 'nexus'
// import { prisma } from 'nexus-plugin-prisma'
//
// use(prisma())

import { schema, settings, server } from 'nexus'
import { Client, OperationMethods } from './generated/riot-types'
import * as dotenv from 'dotenv'
import { Region } from './types/Regions'

import OpenAPIClientAxios, {
  Operation,
  AxiosRequestConfig,
} from '../openapi-client-axios'
import qs from 'qs'

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

apiContext().then((api) => {
  schema.addToContext(() => {
    return {
      api,
    }
  })
})

type OpMethodKeys = keyof OperationMethods
export type ApiClient = <T extends OpMethodKeys>(
  region: Region,
  endpoint: T,
  parameters?: Parameters<OperationMethods[T]>[0],
  data?: Parameters<OperationMethods[T]>[1],
  config?: Parameters<OperationMethods[T]>[2],
) => ReturnType<OperationMethods[T]> | Promise<null> | null

async function apiContext(options?: AxiosRequestConfig) {
  dotenv.config()

  const RIOT_KEY = process.env.RIOT_KEY
  if (!process.env.RIOT_KEY || !process.env.RIOT_OPENAPI_SCHEMA) {
    throw new Error('no RIOT_KEY or no RIOT_OPENAPI_SCHEMA in .env')
  }

  const OpenAPI = new OpenAPIClientAxios({
    definition: './riot-openapi-schema.json',
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

  let api = <T extends keyof OperationMethods>(
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
      ...config,
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
  return api as ApiClient
}
apiContext()
  .then((api) => {
    schema.addToContext(() => {
      return {
        api,
      }
    })
  })
  .catch((err) => console.log(err))

server.express.get('/', (req, res) => {
  res.send('test')
})

process.on('unhandledRejection', (reason: any, promise) => {
  promise.then((...rets) => {
    console.log(rets)
  })
  console.log('Unhandled Rejection at:', reason.stack || reason)
  // Recommended: send the information to sentry.io
  // or whatever crash reporting service you use
})
