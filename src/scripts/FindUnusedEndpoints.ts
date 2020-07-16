import * as fs from 'fs'
import { OperationMethods } from '../generated/riot-types'
import SwaggerParser from '@apidevtools/swagger-parser'
import * as path from 'path'

const walkSync = (dir: string, filelist: string[] = []) => {
  fs.readdirSync(dir).forEach((file) => {
    filelist = fs.statSync(path.join(dir, file)).isDirectory()
      ? walkSync(path.join(dir, file), filelist)
      : filelist.concat(path.join(dir, file))
  })
  return filelist
}
const argv = process.argv.slice(2)

async function findUnusedEndpoints() {
  // get list of files that use client
  let filelist = walkSync(path.join(process.cwd(), argv[0]))
  // get riot api schema
  let latestRecord = require('../../SchemaRecord.json')[0]
  let res = await SwaggerParser.bundle(latestRecord)

  // extract values
  let values = Object.values((await SwaggerParser.dereference(res)).paths)

  // get all opids
  let flattenedValues = new Set<string>(
    values.reduce((acc, cur) => {
      return acc.concat(
        Object.values(cur)
          .map((item: any) => item.operationId)
          .filter((item) => item),
      )
    }, [] as any[]),
  )
  let matches = new Set<string>()
  for (const file of filelist) {
    let fileBuffer = fs.readFileSync(file)
    let fileString = fileBuffer.toString()
    for (const opId of flattenedValues) {
      let regex = new RegExp(opId)
      if (regex.test(fileString)) {
        matches.add(opId)
      }
    }
  }
  console.log('Implemented:', matches)
  console.log('Not Implemented:', difference(flattenedValues, matches))
}

if (require.main === module) {
  findUnusedEndpoints()
}

function difference<T>(setA: Iterable<T>, setB: Iterable<T>) {
  let _difference = new Set(setA)
  for (let elem of setB) {
    _difference.delete(elem)
  }
  return _difference
}
