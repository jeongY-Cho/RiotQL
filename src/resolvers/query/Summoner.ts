import {
  Summonerv4SummonerResolvers,
  Game,
  Region,
  RegionInput,
  Queue,
  AllRankedQueues,
  Clashv1Player,
  Clashv1PlayerRegistration,
} from "../../generated/graphql";
import { Context } from "../..";
import { removeNulls, groupRegions } from "../../utils";
import { AxiosResponse } from "openapi-client-axios";
import { parseResolveInfo } from "graphql-parse-resolve-info";

const matchList: Summonerv4SummonerResolvers<Context>["matchList"] = async (
  parent,
  { filter, game },
  context,
  info
) => {
  switch (game) {
    case Game.League:
      let res1 = await context.api(parent.region, "match-v4.getMatchlist", {
        encryptedAccountId: parent.accountId,
        ...removeNulls(filter),
      });
      return res1 ? res1.data : res1;

    case Game.Tft:
      let groupedRegion = groupRegions(parent.region);

      let res2 = await context.api(
        groupedRegion,
        "tft-match-v1.getMatchIdsByPUUID",
        { puuid: parent.puuid, count: removeNulls(filter?.count) }
      );
      if (!res2) return null;

      return {
        matches: res2.data,
      };

    default:
      return null;
  }
};

const activeMatch: Summonerv4SummonerResolvers<Context>["activeMatch"] = async (
  parent,
  args,
  context,
  info
) => {
  let res = await context.api(
    parent.region,
    "spectator-v4.getCurrentGameInfoBySummoner",
    { encryptedSummonerId: parent.id }
  );
  return res ? res.data : res;
};

const rank: Summonerv4SummonerResolvers<Context>["rank"] = async (
  parent,
  { queue },
  context,
  info
) => {
  // TODO ranked for lor, valorant
  let search: RegExp | undefined = undefined;
  let res: AxiosResponse;
  switch (queue) {
    case AllRankedQueues.RankedFlexSr:
      search = search || /ranked_flex_sr/i;
    case AllRankedQueues.RankedFlexTt:
      search = search || /ranked_flex_tt/i;
    case AllRankedQueues.RankedSolo_5x5:
      search = search || /ranked_solo_5x5/i;
      let res = await context.api(
        parent.region,
        "league-v4.getLeagueEntriesForSummoner",
        { encryptedSummonerId: parent.id }
      );
      if (!res) return null;

      for (const item of res.data) {
        if (search.test(item.queueType)) {
          return item;
        }
      }
      return null;
    case AllRankedQueues.RankedTft:
      res = await context.api(
        parent.region,
        "tft-league-v1.getLeagueEntriesForSummoner",
        { encryptedSummonerId: parent.id }
      );
      return res ? res.data[0] : res;
    default:
      return null;
  }
};

const championMastery: Summonerv4SummonerResolvers<
  Context
>["championMastery"] = async (parent, args, context, info) => {
  let parsedTree = parseResolveInfo(info);
  if (!parsedTree) {
    throw new Error();
  }

  // @ts-ignore
  if (parsedTree.fieldsByTypeName.ChampionMastery.score) {
    let scoreRes = await context.api(
      parent.region,
      "champion-mastery-v4.getChampionMasteryScore",
      { encryptedSummonerId: parent.id }
    );
    if (!scoreRes)
      throw new Error("no champion score returned; some stupid error");
    return {
      score: scoreRes.data,
      region: parent.region,
      summonerId: parent.id,
    };
  } else {
    return {
      score: 0,
      region: parent.region,
      summonerId: parent.id,
    };
  }
};

const clash: Summonerv4SummonerResolvers<Context>["clash"] = async (
  parent,
  args,
  context,
  info
) => {
  let res = await context.api(parent.region, "clash-v1.getPlayersBySummoner", {
    summonerId: parent.id,
  });

  // typecast because same but incompatable enums
  if (!res) return [];

  return (res.data.map((item) => ({
    ...item,
    region: parent.region,
  })) as unknown) as Clashv1PlayerRegistration[];
};

const resolvers: Summonerv4SummonerResolvers = {
  matchList,
  activeMatch,
  rank,
  championMastery,
  clash,
};

export default resolvers;
