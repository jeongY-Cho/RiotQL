import { Resolvers, Game } from "../generated/graphql";
import Query from "./Query";
import SummonerV4Summoner from "./Summoner";
import { JSONObjectResolver } from "graphql-scalars";
import ChampionMastery from "./summoner/ChampionMastery";
import ClashV1PlayerRegistration from "./ClashPlayerRegistration";

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
              return "MatchV4Matchlist";
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
  ClashV1PlayerRegistration,
};
export default resolvers;
