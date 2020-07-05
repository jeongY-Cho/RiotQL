import { QueryResolvers, Summoner } from "../generated/graphql";
import { AxiosResponse } from "axios";
import { SummonerFetchers } from "../fetchers";

const info: QueryResolvers["info"] = function (parent, args, context, info) {
  return "This is a graphql wrapper of RIOT API";
};

const summoner: QueryResolvers["summoner"] = async function (
  parent,
  { region, ...args },
  context,
  info
) {
  let selectionSetNames = info.fieldNodes[0].selectionSet?.selections.filter(
    (item) => {
      // @ts-ignore
      return item.name.value !== "matchList";
    }
  );

  let count = 0;
  Object.values(args).forEach((arg) => {
    if (Boolean(arg)) {
      count++;
    }
  });

  if (count > 1) {
    throw new Error(
      `only one id type should be supplied got ${count} instead `
    );
  }

  let res: AxiosResponse<Omit<Summoner, "region">>;
  if (
    (selectionSetNames && selectionSetNames.length > 1) ||
    !args.encryptedAccountId
  ) {
    if (args.encryptedAccountId)
      res = await SummonerFetchers.byAccountId(region, {
        accountId: args.encryptedAccountId,
        RIOT_KEY: context.RIOT_KEY,
      });
    else if (args.encryptedPUUID)
      res = await SummonerFetchers.byPUUID(region, {
        puuid: args.encryptedPUUID,
        RIOT_KEY: context.RIOT_KEY,
      });
    else if (args.summonerName)
      res = await SummonerFetchers.bySummonerName(region, {
        summonerName: args.summonerName,
        RIOT_KEY: context.RIOT_KEY,
      });
    else if (args.encryptedSummonerId)
      res = await SummonerFetchers.bySummonerId(region, {
        summonerId: args.encryptedSummonerId,
        RIOT_KEY: context.RIOT_KEY,
      });
    else {
      throw new Error("no id given");
    }
  } else {
    console.log("no call");

    res = {
      data: {
        accountId: args.encryptedAccountId,
      },
    } as AxiosResponse;
  }
  return {
    ...res.data,
    region,
  };
};

const QueryResolvers: QueryResolvers = {
  info,
  summoner,
};
export default QueryResolvers;
