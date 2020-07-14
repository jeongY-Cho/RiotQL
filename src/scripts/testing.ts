import { getHttpOperationsFromResource } from '@stoplight/prism-http'
import { createServer } from '@stoplight/prism-http-server'
import { createLogger } from '@stoplight/prism-core'
import axios from "axios"

require("dotenv").config()

async function createPrismServer() {
  const operations = await getHttpOperationsFromResource(process.env.RIOT_OPENAPI_SCHEMA!)

  const server = createServer(operations, {
    components: {
      logger: createLogger('TestLogger'),
    },
    cors: true,
    config: {
      checkSecurity: true,
      validateRequest: true,
      validateResponse: true,
      mock: { dynamic: true },
      errors: false,
    },
  })
  await server.listen(4010)

  return {
    close: server.close.bind(server),
  }
}

createPrismServer().then((server) => {
  axios.get("http://127.0.0.1:4010/lol/champion-mastery/v4/champion-masteries/by-summoner/asasdfasdf", { headers: { "X-Riot-Token": "abc" } }).then(res => {
    console.log(res)
  })
  console.log(server)
})

