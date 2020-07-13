import axios from "axios";
import { writeFileSync } from "fs";
import * as dotenv from "dotenv";

dotenv.config();

let args = process.argv.slice(2);

if (!process.env.RIOT_OPENAPI_SCHEMA)
  throw new Error("no RIOT_OPENAPI_SCHEMA found in .env");
axios.get(process.env.RIOT_OPENAPI_SCHEMA).then((data) => {
  writeFileSync(args[0], JSON.stringify(data.data, undefined, 2));
});
