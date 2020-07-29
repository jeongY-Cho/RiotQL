"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nexus_1 = require("nexus");
nexus_1.schema.extendType({
    type: "Summonerv4Summoner",
    definition(t) {
        t.field("region", {
            type: "RegionInput",
        });
    },
});
