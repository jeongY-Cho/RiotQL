import {
  QueryResolvers,
  Summonerv4Summoner,
  Game,
  Tftmatchv1Match,
  Matchv4Match,
  Tournamentv4TournamentCode,
  Tier,
  AllRankedQueues,
} from "../generated/graphql";
import { Context } from "..";
import { AxiosResponse } from "openapi-client-axios";
import { Components } from "../generated/riot-types";
import { groupRegions, removeNulls } from "../utils";

const info: QueryResolvers["info"] = function (parent, args, context, info) {
  return {
    description: "This is a graphql wrapper of RIOT API",
    version: process.env.npm_package_version,
    constants:
      "https://developer.riotgames.com/docs/lol#general_game-constants",
    repo: "https://github.com/jeongY-Cho/riotql",
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
      } as Summonerv4Summoner)
    : null;
};

const match: QueryResolvers<Context>["match"] = async (
  parent,
  args,
  context,
  info
) => {
  switch (args.game) {
    case Game.League:
      let res = await context.api(args.region, "match-v4.getMatch", {
        matchId: args.matchId,
      });
      // typecast because stupid enum incompatibility
      return res ? ((res.data as unknown) as Matchv4Match) : res;
    case Game.Tft:
      try {
        let res2 = await context.api(
          groupRegions(args.region),
          "tft-match-v1.getMatch",
          {
            matchId: args.matchId,
          }
        );
        if (!res2) return null;

        // typecast because stupid enum incompatibility
        return (res2.data as unknown) as Tftmatchv1Match;
      } catch (err) {
        console.log(err);
        return null;
      }

    case Game.Lor:
      // TODO lor match
      return null;
  }
};

const rankedList: QueryResolvers<Context>["rankedList"] = async (
  parent,
  { queue, region, tier, division, page },
  context,
  info
) => {
  switch (queue) {
    case AllRankedQueues.RankedFlexSr:
    case AllRankedQueues.RankedFlexTt:
    case AllRankedQueues.RankedSolo_5x5:
      // @ts-expect-error || enum stuff
      let res = await context.api(region, "league-v4.getLeagueEntries", {
        division,
        tier,
        queue,
        page,
      });
      if (!res) throw new Error("something not right w/ rankedList");
      return res.data;
    case AllRankedQueues.RankedTft:
      // @ts-expect-error || enum stuff
      let res2 = await context.api(region, "tft-league-v1.getLeagueEntries", {
        division,
        tier,
        page,
      });
      if (!res2) throw new Error("something not right w/ rankedList");
      return res2.data;
  }
};

// @ts-ignore
const rankedLeague: QueryResolvers<Context>["rankedLeague"] = async (
  parent,
  args,
  context,
  info
) => {
  let res: AxiosResponse | null;
  if (args.leagueId && args.game) {
    if (args.game === Game.League) {
      res = await context.api(args.region, "league-v4.getLeagueById", {
        leagueId: args.leagueId,
      });
    } else if (args.game === Game.Tft) {
      res = await context.api(args.region, "tft-league-v1.getLeagueById", {
        leagueId: args.leagueId,
      });
    } else {
      return null;
    }
    return res ? res.data : null;
  }

  switch (args.queue) {
    case AllRankedQueues.RankedFlexSr:
    case AllRankedQueues.RankedFlexTt:
    case AllRankedQueues.RankedSolo_5x5:
      switch (args.tier) {
        case Tier.Challenger:
          try {
            res = await context.api(
              args.region,
              "league-v4.getChallengerLeague",
              { queue: args.queue }
            );
          } catch (err) {
            console.error(err);
            return null;
          }
          break;
        case Tier.Grandmaster:
          res = await context.api(
            args.region,
            "league-v4.getGrandmasterLeague",
            { queue: args.queue }
          );
          break;
        case Tier.Master:
          res = await context.api(args.region, "league-v4.getMasterLeague", {
            queue: args.queue,
          });
          break;
        default:
          if (!args.leagueId) return null;
          res = await context.api(args.region, "league-v4.getLeagueById", {
            leagueId: args.leagueId,
          });
      }

      break;
    case AllRankedQueues.RankedTft:
      switch (args.tier) {
        case Tier.Challenger:
          res = await context.api(
            args.region,
            "tft-league-v1.getChallengerLeague"
          );
          break;
        case Tier.Grandmaster:
          res = await context.api(
            args.region,
            "tft-league-v1.getGrandmasterLeague"
          );
          break;
        case Tier.Master:
          res = await context.api(args.region, "tft-league-v1.getMasterLeague");
          break;
        default:
          if (!args.leagueId) return null;
          res = await context.api(args.region, "tft-league-v1.getLeagueById", {
            leagueId: args.leagueId,
          });
      }
      break;
    // TODO valorant ranked, lor ranked
    default:
      return null;
  }
  return res ? res.data : null;
};

const tournament: QueryResolvers<Context>["tournament"] = async (
  parent,
  args,
  context,
  info
) => {
  let res = await context.api(
    "americas",
    "tournament-v4.getTournamentCode",
    {
      tournamentCode: args.code,
    },
    undefined,
    {
      // @ts-ignore
      cache: {
        ignoreCache: true,
      },
    }
  );
  // typecast because stupid enum incompatabiilty
  return res ? (res.data as Tournamentv4TournamentCode) : null;
};

const tournamentStub: QueryResolvers<Context>["tournamentStub"] = async (
  parent,
  args,
  context,
  info
) => {
  const res = await context.api(
    "americas",
    "tournament-stub-v4.getLobbyEventsByCode",
    { tournamentCode: args.code }
  );
  const lobbyEvents = res ? res.data.eventList : [];

  return {
    lobbyEvents,
  };
};

const featuredGames: QueryResolvers<Context>["featuredGames"] = async (
  parent,
  args,
  context,
  info
) => {
  let res: AxiosResponse | null;
  switch (args.game) {
    case Game.League:
      res = await context.api(
        args.region,
        "spectator-v4.getFeaturedGames",
        undefined,
        undefined,
        {
          // @ts-ignore
          cache: {
            maxAge: 5 * 60 * 1000,
          },
        }
      );
      break;
    case Game.Tft:
      // TODO featured games for tft when implemented by riot
      res = null;
      break;
    case Game.Lor:
      // TODO featured games for lor when implemented by riot
      res = null;
  }
  // TODO featured games for valorant when implemented by riot

  return res ? res.data : null;
};

const championRotation: QueryResolvers<Context>["championRotation"] = async (
  parent,
  args,
  context,
  info
) => {
  let res = await context.api(
    "na1",
    "champion-v3.getChampionInfo",
    undefined,
    undefined,
    {
      // @ts-expect-error
      config: {
        maxAge: 6 * 60 * 1000,
      },
    }
  );
  if (!res) throw new Error("champion info fetch error");
  return res.data;
};

// @ts-expect-error
const clash: QueryResolvers<Context>["clash"] = async (
  parent,
  args,
  context,
  info
) => {
  return {
    region: args.region,
  };
};

const QueryResolvers: QueryResolvers = {
  info,
  summoner,
  match,
  championRotation,
  featuredGames,
  rankedLeague,
  rankedList,
  clash,
};
export default QueryResolvers;
