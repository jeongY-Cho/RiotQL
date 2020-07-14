// import { getHttpOperationsFromResource } from '@stoplight/prism-http'
// import { createServer } from '@stoplight/prism-http-server'
// import { createLogger } from '@stoplight/prism-core'

// async function createPrismServer() {
//   const operations = await getHttpOperationsFromResource('YOUR-URL')

//   const server = createServer(operations, {
//     components: {
//       logger: createLogger('TestLogger'),
//     },
//     cors: true,
//     config: {
//       checkSecurity: true,
//       validateRequest: true,
//       validateResponse: true,
//       mock: { dynamic: false },
//       errors: false,
//     },
//   })
//   await server.listen(4010)

//   return {
//     close: server.close.bind(server),
//   }
// }

// createPrismServer().then((server) => {
//   console.log(server)
// })

console.log(new Date().toLocaleDateString().replace(/\//g, '_'))
