import { schema } from "nexus";

schema.extendType({
  type: "Summonerv4Summoner",
  definition(t) {
    t.field("region", {
      type: "RegionInput",
    });
  },
});
