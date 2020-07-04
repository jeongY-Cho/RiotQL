import { GraphQLServer } from "graphql-yoga";

import * as Query from "./resolvers/Query";

const resolvers = {
  Query,
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
});

server.start(({ port }) => {
  console.log(`Starting on port: ${port}`);
});
