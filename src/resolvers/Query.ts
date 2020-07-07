import { QueryResolvers, SummonerV4Summoner } from "../generated/graphql";
import { Context } from "..";
import { AxiosResponse } from "openapi-client-axios";
import { Components } from "../generated/riot-types";

const info: QueryResolvers["info"] = function (parent, args, context, info) {
  return {
    description: "This is a graphql wrapper of RIOT API",
    version: process.env.npm_package_version,
    constants:
      "https://developer.riotgames.com/docs/lol#general_game-constants",
    repo: "",
  };
};

const summoner: QueryResolvers<Context>["summoner"] = async (
  parent,
  {
    region,
    encryptedAccountId,
    encryptedPUUID,
    encryptedSummonerId,
    summonerName,
  },
  context,
  info
) => {
  // count number of ids supplied; if more than one throw error
  const count = [
    encryptedAccountId,
    encryptedPUUID,
    encryptedSummonerId,
    summonerName,
  ].filter(Boolean).length;
  if (count > 1) {
    throw new Error(
      `only one id type should be supplied got ${count} instead `
    );
  }

  // TODO conditional to not run getaccount if matchlist only and proper id supplied

  let res: AxiosResponse<Components.Schemas.SummonerV4SummonerDTO> | null;
  // call different endpoint by what was supplied
  if (encryptedAccountId) {
    res = await context.api(region, "summoner-v4.getByAccountId", {
      encryptedAccountId,
    });
  } else if (encryptedPUUID) {
    res = await context.api(region, "summoner-v4.getByPUUID", {
      encryptedPUUID,
    });
  } else if (encryptedSummonerId) {
    res = await context.api(region, "summoner-v4.getBySummonerId", {
      encryptedSummonerId,
    });
  } else if (summonerName) {
    res = await context.api(region, "summoner-v4.getBySummonerName", {
      summonerName,
    });
  } else {
    throw new Error("no id of any kind given");
  }
  return res
    ? ({
        ...res.data,
        region,
      } as SummonerV4Summoner)
    : null;
};

// const match: QueryResolvers["match"] = (parent, args, context, info) => {};

// const rankedList: QueryResolvers["rankedList"] = (
//   parent,
//   args,
//   context,
//   info
// ) => {};

// const rankedLeague: QueryResolvers["rankedLeague"] = (
//   parent,
//   args,
//   context,
//   info
// ) => {};

// const tournament: QueryResolvers["tournament"] = (
//   parent,
//   args,
//   context,
//   info
// ) => {};

// const featured_games: QueryResolvers["featured_games"] = (
//   parent,
//   args,
//   context,
//   info
// ) => {};

// const summoner: QueryResolvers["summoner"] = async function (
//   parent,
//   { region, ...args },
//   context,
//   info
// ) {
//   let selectionSetNames = info.fieldNodes[0].selectionSet?.selections.filter(
//     (item) => {
//       // @ts-ignore
//       return item.name.value !== "matchList";
//     }
//   );

//   let count = 0;
//   Object.values(args).forEach((arg) => {
//     if (Boolean(arg)) {
//       count++;
//     }
//   });

//   if (count > 1) {
//     throw new Error(
//       `only one id type should be supplied got ${count} instead `
//     );
//   }

//   let res: AxiosResponse<Omit<Summoner, "region">>;
//   if (
//     (selectionSetNames && selectionSetNames.length > 1) ||
//     !args.encryptedAccountId
//   ) {
//     if (args.encryptedAccountId)
//       res = await SummonerFetchers.byAccountId(region, {
//         accountId: args.encryptedAccountId,
//         RIOT_KEY: context.RIOT_KEY,
//       });
//     else if (args.encryptedPUUID)
//       res = await SummonerFetchers.byPUUID(region, {
//         puuid: args.encryptedPUUID,
//         RIOT_KEY: context.RIOT_KEY,
//       });
//     else if (args.summonerName)
//       res = await SummonerFetchers.bySummonerName(region, {
//         summonerName: args.summonerName,
//         RIOT_KEY: context.RIOT_KEY,
//       });
//     else if (args.encryptedSummonerId)
//       res = await SummonerFetchers.bySummonerId(region, {
//         summonerId: args.encryptedSummonerId,
//         RIOT_KEY: context.RIOT_KEY,
//       });
//     else {
//       throw new Error("no id given");
//     }
//   } else {
//     res = {
//       data: {
//         accountId: args.encryptedAccountId,
//       },
//     } as AxiosResponse;
//   }
//   return {
//     ...res.data,
//     region,
//   };
// };

// const match: QueryResolvers["match"] = async (parent, args, context, info) => {
//   return (
//     await matchByMatchId(args.region, {
//       matchId: args.matchId,
//       RIOT_KEY: context.RIOT_KEY,
//     })
//   ).data;
// };

const QueryResolvers: QueryResolvers = {
  info,
  summoner,
};
export default QueryResolvers;
