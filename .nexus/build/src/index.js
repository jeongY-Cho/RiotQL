"use strict";
// GENERATED NEXUS START MODULE
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Run framework initialization side-effects
// Also, import the app for later use
const nexus_1 = __importDefault(require("nexus"));
// Last resort error handling
process.once('uncaughtException', error => {
    nexus_1.default.log.fatal('uncaughtException', { error: error });
    process.exit(1);
});
process.once('unhandledRejection', error => {
    nexus_1.default.log.fatal('unhandledRejection', { error: error });
    process.exit(1);
});
// Import the user's schema modules
require("./schema/globals");
require("./schema/Match");
require("./schema/riot-api-schema");
require("./schema/query/account");
require("./schema/query/championRotation");
require("./schema/query/clash");
require("./schema/query/featuredGames");
require("./schema/query/info");
require("./schema/query/match");
require("./schema/query/rankedLeague");
require("./schema/query/rankedList");
require("./schema/query/status");
require("./schema/query/summoner");
require("./schema/query/thirdPartyCode");
require("./schema/query/tournament");
require("./schema/query/tournamentStub");
require("./schema/query/valContent");
require("./schema/query/account/activeShard");
require("./schema/query/summoner/ActiveMatch");
require("./schema/query/summoner/ChampionMastery");
require("./schema/query/summoner/Clash");
require("./schema/query/summoner/matchList");
require("./schema/query/summoner/Rank");
require("./schema/query/summoner/region");
// Import the user's app module
require("./app");
nexus_1.default.assemble();
nexus_1.default.start();
