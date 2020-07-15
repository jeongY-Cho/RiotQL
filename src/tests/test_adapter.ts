import { getHttpOperationsFromResource } from '@stoplight/prism-http'
import { createClientFromOperations } from '@stoplight/prism-http/dist/client'
import { AxiosRequestConfig, AxiosAdapter } from 'axios'
const SchemaRecord = require('../../SchemaRecord.json')

export default async function buildMockClient(): Promise<AxiosAdapter> {
  const latestSchema = SchemaRecord[0]
  const operations = await getHttpOperationsFromResource(latestSchema)
  const client = createClientFromOperations(operations, {
    // @ts-ignore
    mock: true,
    validateRequest: true,
    validateResponse: false,
  })
  return (config: AxiosRequestConfig) => {
    console.log(config)
    delete config.headers.Accept

    return new Promise(async (resolve, reject) => {
      try {
        // @ts-expect-error
        let res = await client.request(config.url!, config, config)
        // @ts-expect-error
        resolve(res)
      } catch (e) {
        reject(e)
      }
    })
  }
}
