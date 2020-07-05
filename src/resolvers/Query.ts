import { QueryResolvers, Summoner } from "../generated/graphql";
import { AxiosResponse } from "axios";
import { SummonerFetchers } from "../fetchers";

const info: QueryResolvers["info"] = function (parent, args, context, info) {
  return "This is a graphql wrapper of RIOT API";
};

const summoner: QueryResolvers["summoner"] = async function (
  parent,
  { region, ...arg },
  context,
  info
) {
  // TODO validation: there should only be one id specified
  let res: AxiosResponse<Summoner>;
  if (arg.encryptedAccountId)
    res = await SummonerFetchers.byAccountId(region, {
      accountId: arg.encryptedAccountId,
      RIOT_KEY: context.RIOT_KEY,
    });
  else if (arg.encryptedPUUID)
    res = await SummonerFetchers.byPUUID(region, {
      puuid: arg.encryptedPUUID,
      RIOT_KEY: context.RIOT_KEY,
    });
  else if (arg.summonerName)
    res = await SummonerFetchers.bySummonerName(region, {
      summonerName: arg.summonerName,
      RIOT_KEY: context.RIOT_KEY,
    });
  else if (arg.encryptedSummonerId)
    res = await SummonerFetchers.bySummonerId(region, {
      summonerId: arg.encryptedSummonerId,
      RIOT_KEY: context.RIOT_KEY,
    });
  else {
    throw new Error("no id given");
  }

  return res.data;
};

const QueryResolvers: QueryResolvers = {
  info,
  summoner,
};
export default QueryResolvers;
