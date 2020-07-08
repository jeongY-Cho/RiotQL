import { Resolvers, Game } from "../generated/graphql";
import Query from "./Query";
import Summonerv4Summoner from "./Summoner";
import { JSONObjectResolver } from "graphql-scalars";
import ChampionMastery from "./summoner/ChampionMastery";
import Clashv1PlayerRegistration from "./ClashPlayerRegistration";

const resolvers: Resolvers = {
  Query,
  SummonerV4Summoner,
  JSON: JSONObjectResolver,
  MatchList: {
    __resolveType(obj, context, info) {
      for (const node of info.fieldNodes[0].arguments!) {
        if (node.name.value === "game" && node.value.kind === "EnumValue") {
          switch (node.value.value) {
            case "League":
              return "Matchv4Matchlist";
            case "TFT":
              return "TFTMatchIdList";
            case "LOR":
              return null;
          }
        }
      }
      return null;
    },
  },
  ChampionMastery,
  Clashv1PlayerRegistration,
};
export default resolvers;
