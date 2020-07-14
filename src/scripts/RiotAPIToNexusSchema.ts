import { convertSDL } from '@nexus/schema'
import { printSchema } from 'graphql'
import SwaggerParser from '@apidevtools/swagger-parser'
import { createGraphQLSchema } from 'openapi-to-graphql'

import * as dotenv from 'dotenv'
import * as fs from 'fs'
dotenv.config()

if (!process.env.RIOT_OPENAPI_SCHEMA)
  throw new Error('no riot api openapi schema link')

const args = process.argv.slice(2)
let latestRecord = require('../generated/SchemaRecord')[0]
let swaggerParser = new SwaggerParser()
swaggerParser.bundle(latestRecord).then(async (schemaBundle) => {
  // @ts-ignore
  let { schema, report } = await createGraphQLSchema(schemaBundle, {
    viewer: false,
    simpleNames: true,
    fillEmptyResponses: true,
  })
  let schemaStr = printSchema(schema)
  let queryRegex = /type Query \{.*?\n\}/gs
  let mutationRegex = /type Mutation \{.*?\n\}/gs
  let replacedSchemaStr = schemaStr
    .replace(queryRegex, '')
    .replace(mutationRegex, '')
    .replace(/dto\b/gim, '')
  console.log(report)
  const nexusSchema = convertSDL(replacedSchemaStr)
  const replacedNexusSchema = nexusSchema
    .replace(/=\s(.*?Type)\(/gm, '= schema.$1(')
    .replace(/import {.*?} from '@nexus\/schema';?/gm, '')

  fs.writeFileSync(args[0], 'import { schema } from "nexus"\n')
  fs.writeFileSync(args[0], replacedNexusSchema, { flag: 'a' })
})
