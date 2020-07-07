import * as fs from "fs";
import { printSchema } from "graphql";
import { createGraphQLSchema } from "openapi-to-graphql";
import SwaggerParser from "@apidevtools/swagger-parser";
import * as dotenv from "dotenv";
dotenv.config();

var args = process.argv.slice(2);

let swaggerParser = new SwaggerParser();
swaggerParser.bundle(args[0]).then(async (schemaBundle) => {
  // @ts-ignore
  let { schema, report } = await createGraphQLSchema(schemaBundle, {
    viewer: false,
  });
  let schemaStr = printSchema(schema);
  let queryRegex = /type Query \{.*?\n\}/gs;
  let mutationRegex = /type Mutation \{.*?\n\}/gs;
  let replacedSchemaStr = schemaStr
    .replace(queryRegex, "")
    .replace(mutationRegex, "")
    .replace(/dto\b/gim, "");
  console.log(report);
  fs.writeFileSync(args[1], replacedSchemaStr);
});

// let fileStr = fs.readFileSync("./src/schema/generated/schema.gql").toString();
