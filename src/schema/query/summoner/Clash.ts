import { schema } from "nexus";

schema.extendType({
  type: "Summonerv4Summoner",
  definition(t) {
    t.field("clash", {
      type: "Clashv1PlayerRegistration",
      async resolve(root, args, context) {
        let res = await context.api(
          root.region,
          "clash-v1.getPlayersBySummoner"
        );
        return res ? { ...res.data, region: root.region } : ([] as any);
      },
    });
  },
});

schema.objectType({
  name: "Clashv1PlayerRegistration",
  definition(t) {
    t.field("position", {
      type: "Position",
      description: "Clash lane assignment",
    });
    t.field("role", {
      type: "Role",
      description: "Clash team role assignment",
    });
    t.string("summonerId");
    t.string("teamId");
    t.field("team", {
      type: "Clashv1Team",
      description: "Clash team details",
      async resolve(root, args, context) {
        // @ts-expect-error || region passed in from root
        let res = await context.api(root.region, "clash-v1.getTeamById", {
          teamId: root.teamId,
        });
        if (!res)
          throw new Error(
            "no clash team found which is weird because this player is registered to this team"
          );
        return res.data;
      },
    });
  },
});
