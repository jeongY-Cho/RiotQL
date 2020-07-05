import { GraphQLServer } from "graphql-yoga";

import resolvers from "./resolvers";
import typeDefs from "./schema";

import * as dotenv from "dotenv";
import { ContextParameters } from "graphql-yoga/dist/types";
dotenv.config();

const RIOT_KEY = process.env.RIOT_KEY;
if (!RIOT_KEY) throw new Error("no RIOT_KEY in .env");

type Context = {
  RIOT_KEY: string;
} & ContextParameters;

const server = new GraphQLServer({
  typeDefs,
  // @ts-ignore
  resolvers,
  context: (request): Context => ({
    RIOT_KEY,
    ...request,
  }),
});

server.start(({ port }) => {
  console.log(`Starting on port: ${port}`);
});
