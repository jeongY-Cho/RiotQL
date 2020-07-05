import { Resolvers } from "../generated/graphql";
import Query from "./Query";
import Summoner from "./Summoner";
import { JSONObjectResolver } from "graphql-scalars";

const resolvers: Resolvers = {
  Query,
  Summoner,
  JSON: JSONObjectResolver,
};
export default resolvers;
