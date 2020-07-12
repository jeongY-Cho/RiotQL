import { schema } from "nexus";

schema.extendType({
  type: "Summonerv4Summoner",
  definition(t) {
    t.field("activeMatch", {
      type: "Spectatorv4CurrentGameInfo",
      nullable: true,
      args: {
        game: schema.arg({
          type: "Game",
          required: true,
        }),
      },
      async resolve(root, args, context) {
        switch (args.game) {
          case "LOR":
            throw new Error(
              "no LOR endpoint on riot api; included for posterity"
            );
          case "TFT":
            throw new Error(
              "no TFT endpoint on riot api; included for posterity"
            );
          default:
            let res = await context.api(
              root.region,
              "spectator-v4.getCurrentGameInfoBySummoner",
              { encryptedSummonerId: root.id }
            );
            return res ? res.data : null;
        }
      },
    });
  },
});
