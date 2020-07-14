import axios from 'axios'
import { writeFileSync, readFileSync, unlinkSync } from 'fs'
import * as dotenv from 'dotenv'
import * as path from 'path'

dotenv.config()

let args = process.argv.slice(2)

if (!process.env.RIOT_OPENAPI_SCHEMA)
  throw new Error('no RIOT_OPENAPI_SCHEMA found in .env')
axios.get(process.env.RIOT_OPENAPI_SCHEMA).then((data) => {
  let base = args[0]
  let localeDateString = new Date()
    .toLocaleString()
    .replace(/PM|AM|\s/g, '')
    .replace(/[\/,:]/g, '_')

  let fileName = 'riot-openapi-schema_' + localeDateString + '.oas.json'
  let filePath = path.join(base, fileName)

  const recordFile = './src/generated/SchemaRecord.json'
  let record = readFileSync(recordFile)
  let recordJson: string[] = JSON.parse(record.toString())
  recordJson.unshift(filePath)

  if (recordJson.length > 10) {
    let removeRecord = recordJson.pop()
    console.log(removeRecord)
    unlinkSync(removeRecord!)
  }

  writeFileSync(recordFile, JSON.stringify(recordJson, undefined, 2))
  writeFileSync(filePath, JSON.stringify(data.data, undefined, 2))
})
