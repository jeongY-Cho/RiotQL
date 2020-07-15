import { getHttpOperationsFromResource } from '@stoplight/prism-http'
import { createServer } from '@stoplight/prism-http-server'
import { createLogger } from '@stoplight/prism-core'
import axios from 'axios'
import OpenAPIClient from '../../openapi-client-axios'
import { Client, OperationMethods } from '../generated/riot-types'
import { createClientFromOperations } from '@stoplight/prism-http/dist/client'

require('dotenv').config()

getHttpOperationsFromResource(process.env.RIOT_OPENAPI_SCHEMA!).then(
  async (operations) => {
    const client = createClientFromOperations(operations, {
      // @ts-ignore
      mock: true,
      validateRequest: true,
      validateResponse: true,
    })
    let openApiClient = new OpenAPIClient({
      definition: process.env.RIOT_OPENAPI_SCHEMA!,
      axiosConfigDefaults: {
        headers: {
          'X-Riot-Token': 'abc',
        },
        adapter: (config) => {
          return new Promise(async (resolve, reject) => {
            // console.log(config)
            delete config.headers.Accept
            // @ts-ignore
            let res = await client.request(config.url!, config, config)
            console.log(res)
            // @ts-ignore
            resolve(res)
          })
        },
      },
    })
    let openapi = await openApiClient.getClient<Client>()
    openapi['account-v1.getActiveShard']({
      game: 'lor',
      puuid: 'asdklfalskdfj',
    })
  },
)

// async function createPrismServer() {
//   const operations = await getHttpOperationsFromResource(
//     process.env.RIOT_OPENAPI_SCHEMA!,
//   )

//   const server = createServer(operations, {
//     components: {
//       logger: createLogger('TestLogger'),
//     },
//     cors: true,
//     config: {
//       checkSecurity: true,
//       validateRequest: true,
//       validateResponse: true,
//       mock: { dynamic: true },
//       errors: false,
//     },
//   })
//   let str = await server.listen(4010)
//   let port = str.match(/\d+/)![0]
//   console.log(str)
//   return {
//     port,
//     server,
//     close: server.close.bind(server),
//   }
// }

// createPrismServer().then((server) => {
//   console.log(server.server.prism.request("dddfe", ))
//   console.log(server.port)
//   // axios
//   //   .get(
//   //     'http://127.0.0.1:4010/lol/champion-mastery/v4/champion-masteries/by-summoner/asasdfasdf',
//   //     { headers: { 'X-Riot-Token': 'abc' } },
//   //   )
//   //   .then((res) => {
//   //     console.log(res)
//   //   })
//   // axios
//   //   .get(
//   //     'http://localhost:4010/lol/champion-mastery/v4/champion-masteries/by-summoner/asasdfasdf',
//   //     { headers: { 'X-Riot-Token': 'abc' },
//   //     adapter: (config) =>{
//   //       return new Promise((resolve, reject)=>{

//   //       })
//   //     }
//   //   },
//   //   )
//   //   .then((res) => {
//   //     console.log(res)
//   //   })
//   // console.log(server)
// })

// axios.get('abc', {
//   baseURL: 'abcd/',
//   adapter: (config) => {
//     return new Promise((resolve, reject) => {
//       console.log(config)
//     })
//   },
// })
