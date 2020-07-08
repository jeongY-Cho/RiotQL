import { Resolvers, Game } from "../generated/graphql";
import Query from "./Query";
import Summonerv4Summoner from "./Summoner";
import Tournamentv4TournamentCode from "./Tournament";
import { JSONObjectResolver } from "graphql-scalars";
import ChampionMastery from "./summoner/ChampionMastery";
import Clashv1PlayerRegistration from "./ClashPlayerRegistration";

const resolvers: Resolvers = {
  Query,
  Summonerv4Summoner,
  JSON: JSONObjectResolver,
  ChampionMastery,
  Clashv1PlayerRegistration,
  Tournamentv4TournamentCode,
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
  Match: {
    __resolveType(obj, context, info) {
      for (const node of info.fieldNodes[0].arguments!) {
        if (node.name.value === "game" && node.value.kind === "EnumValue") {
          switch (node.value.value) {
            case "League":
              return "Matchv4Match";
            case "TFT":
              return "Tftmatchv1Match";
            case "LOR":
              return null;
          }
        }
      }
      return null;
    },
  },
};
export default resolvers;
