import { schema } from 'nexus'
import bath from 'bath-es5'
import { OpenAPIClient } from '../../../openapi-client-axios'
import { OperationMethods, PathsDictionary } from '../../generated/riot-types'

schema.extendType({
  type: 'Query',
  definition(t) {
    t.field('valorantContent', {
      type: 'Valcontentv1Content',
      args: {
        locale: 'Locale',
        region: schema.arg({ type: 'ValContentRegion', required: true }),
      },
      async resolve(root, args, context) {
        let baseURL = context.OpenAPI.getBaseURL()!
        let client = context.client as OpenAPIClient<
          OperationMethods,
          PathsDictionary
        >
        console.log(baseURL)
        let parseURL = baseURL.replace('americas', args.region.toLowerCase())
        console.log(baseURL, parseURL)
        try {
          // console.log(
          //   client['val-content-v1.getContent'](undefined, undefined, {
          //     headers: {
          //       'X-Riot-Token': process.env.RIOT_API_DEVELOPMENT_KEY,
          //     },
          //   }),
          // )
          // FIXME: something breaks this
          await client['val-content-v1.getContent'](
            { locale: args.locale ? args.locale : undefined },
            {},
            {
              baseURL: parseURL,
              headers: {
                'X-Riot-Token':
                  process.env.RIOT_API_VAL_KEY ||
                  process.env.RIOT_API_DEVELOPMENT_KEY ||
                  '',
              },
            },
          )
        } catch (e) {
          console.log(e.response)
        }
      },
    })
  },
})

schema.enumType({
  name: 'ValContentRegion',
  description: 'Valorant content regions',
  members: ['NA', 'BR', 'EU', 'KR', 'LATAM', 'NA'],
})

schema.enumType({
  name: 'Locale',
  description: 'Locale for localizedNames',
  members: [
    'arAE',
    'deDE',
    'enGB',
    'enUS',
    'esES',
    'esMX',
    'frFR',
    'idID',
    'itIT',
    'jaJP',
    'koKR',
    'plPL',
    'ptBR',
    'ruRU',
    'thTH',
    'trTR',
    'viVN',
    'zhCN',
    'zhTW',
  ],
})

function hyphenLocaleName(locale: string) {
  return locale.slice(0, 2) + '-' + locale.slice(2)
}

function unhyphenLocaleName(locale: string) {
  return locale.slice(0, 2) + locale.slice(3)
}

function unhyphenObject(localeObj: { [key: string]: string }) {
  return Object.keys(localeObj).reduce((acc, cur) => {
    acc[unhyphenLocaleName(cur)] = localeObj[cur]
    return acc
  }, {} as { [key: string]: string })
}
