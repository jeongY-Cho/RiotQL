import { generateTypesForDocument } from '../../openapi-client-axios/typegen/typegen.js'
import * as fs from 'fs'
const SchemaRecord = require('../generated/SchemaRecord')
let latestSchema = SchemaRecord[0]

generateTypesForDocument(latestSchema).then((res) => {
  let writeStr = ''
  writeStr += res[0]
  writeStr += '\n\n'
  writeStr += res[1]
  writeStr += res[2]

  fs.writeFileSync('./src/generated/riot-types.d.ts', writeStr)
})
