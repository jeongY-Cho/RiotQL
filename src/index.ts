import { GraphQLServer } from "graphql-yoga";

import resolvers from "./resolvers";
import typeDefs from "./schema";

import * as dotenv from "dotenv";
dotenv.config();

const RIOT_KEY = process.env.RIOT_KEY;

const server = new GraphQLServer({
  typeDefs,
  // @ts-ignore
  resolvers,
  context: {
    RIOT_KEY,
  },
});

server.start(({ port }) => {
  console.log(`Starting on port: ${port}`);
});
