import getHttpOperations, {
  getHttpOperationsFromResource,
} from '@stoplight/prism-http/dist/getHttpOperations'
import { createClientFromOperations } from '@stoplight/prism-http/dist/client'
import axios, { AxiosRequestConfig, AxiosAdapter } from 'axios'
import {
  createTestContext as originalCreateTestContext,
  TestContext,
} from 'nexus/testing'

// get latest schema record on import to minimize io operations
const SchemaRecord = require('../../SchemaRecord.json')
const latestRecordJson = JSON.stringify(require('../../' + SchemaRecord[0]))

export function createTestContext() {
  // guarantee that testing is true
  process.env.TESTING = 'true'
  let ctx = {} as TestContext // 2
  beforeAll(async () => {
    try {
      let testAdapter = await buildMockClient()
      axios.defaults.adapter = testAdapter
    } catch (e) {
      console.error(e)
    }

    Object.assign(ctx, await originalCreateTestContext()) // 3

    await ctx.app.start() // 4
  })
  afterAll(async () => {
    await ctx.app.stop() // 5
  })
  return ctx
}

export async function buildMockClient(): Promise<AxiosAdapter> {
  const operations = await getHttpOperations(latestRecordJson)
  const client = createClientFromOperations(operations, {
    checkSecurity: false,
    errors: false,
    mock: {
      dynamic: true,
    },
    validateRequest: true,
    validateResponse: false,
  })
  return (config: AxiosRequestConfig) => {
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
