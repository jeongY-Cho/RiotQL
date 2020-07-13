import { schema } from "nexus";

schema.extendType({
  type: "Query",
  definition(t) {
    t.field("rankedList", {
      type: "Leaguev4LeagueList",
      nullable: true,
      args: {
        region: schema.arg({
          type: "RegionInput",
          required: true,
        }),
        queue: "AllRankedQueues",
        tier: "Tier",
        leagueId: schema.stringArg(),
        game: "Game",
      },
      description:
        "#### Implementation Notes:\n\nuse the following arg combinations to get league lists\n\n##### param combinations:\n\n\tier & queue -> for ranks master and above\n\nleagueId & game -> for all ranks\n\nleagueId & queue -> for all ranks",
      async resolve(root, args, context) {
        if (args.leagueId && args.game) {
          if (args.game === "League") {
            let res1 = await context.api(
              args.region,
              "league-v4.getLeagueById",
              {
                leagueId: args.leagueId,
              }
            );
            return res1 ? res1.data : null;
          } else if (args.game === "TFT") {
            let res2 = await context.api(
              args.region,
              "tft-league-v1.getLeagueById",
              {
                leagueId: args.leagueId,
              }
            );
            return res2 ? res2.data : null;
          } else {
            return null;
          }
        }

        switch (args.queue) {
          case "RANKED_FLEX_SR":
          case "RANKED_FLEX_TT":
          case "RANKED_SOLO_5x5":
            switch (args.tier) {
              case "CHALLENGER":
                try {
                  let res3 = await context.api(
                    args.region,
                    "league-v4.getChallengerLeague",
                    { queue: args.queue }
                  );
                  return res3 ? res3.data : null;
                } catch (err) {
                  console.error(err);
                  return null;
                }
                break;
              case "GRANDMASTER":
                let res4 = await context.api(
                  args.region,
                  "league-v4.getGrandmasterLeague",
                  { queue: args.queue }
                );
                return res4 ? res4.data : null;
              case "MASTER":
                let res5 = await context.api(
                  args.region,
                  "league-v4.getMasterLeague",
                  {
                    queue: args.queue,
                  }
                );
                return res5 ? res5.data : null;
              default:
                if (!args.leagueId) return null;
                let res6 = await context.api(
                  args.region,
                  "league-v4.getLeagueById",
                  {
                    leagueId: args.leagueId,
                  }
                );
                return res6 ? res6.data : null;
            }

            break;
          case "RANKED_TFT":
            switch (args.tier) {
              case "CHALLENGER":
                let res7 = await context.api(
                  args.region,
                  "tft-league-v1.getChallengerLeague"
                );
                return res7 ? res7.data : null;
              case "GRANDMASTER":
                let res8 = await context.api(
                  args.region,
                  "tft-league-v1.getGrandmasterLeague"
                );
                return res8 ? res8.data : null;
              case "MASTER":
                let res9 = await context.api(
                  args.region,
                  "tft-league-v1.getMasterLeague"
                );
                return res9 ? res9.data : null;
              default:
                if (!args.leagueId) return null;
                let res10 = await context.api(
                  args.region,
                  "tft-league-v1.getLeagueById",
                  {
                    leagueId: args.leagueId,
                  }
                );
                return res10 ? res10.data : null;
            }
          // TODO valorant ranked, lor ranked
          default:
            return null;
        }
      },
    });
  },
});
