const NodeEnvironment = require('jest-environment-node')
const { getHttpOperationsFromResource } = require('@stoplight/prism-http')
const {
  createClientFromOperations,
} = require('@stoplight/prism-http/dist/client')
// const axios = require('axios').default
const SchemaRecord = require('../../SchemaRecord.json')
const { default: Axios } = require('axios')

class AxiosTestEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config)
    process.env.TESTING = 'true'
  }

  async setup() {
    const latestSchema = SchemaRecord[0]
    const operations = await getHttpOperationsFromResource(latestSchema)
    const client = createClientFromOperations(operations, {
      mock: true,
      validateRequest: true,
      validateResponse: false,
    })
    console.log('setup')
    Axios.defaults.adapter = function test(config) {
      return new Promise(async (resolve, reject) => {
        try {
          console.log(config)
          const res = await client.request(config.url, config, config)
          resolve(res)
        } catch (e) {
          reject(e)
        }
      })
    }
    console.log(Axios.defaults.adapter)
    return super.setup()
  }
}

module.exports = AxiosTestEnvironment
