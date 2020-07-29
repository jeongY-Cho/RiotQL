"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const nexus_1 = require("nexus");
const app_1 = require("../../app");
nexus_1.schema.extendType({
    type: 'Query',
    definition(t) {
        t.field('rankedLeague', {
            type: 'Leaguev4LeagueEntry',
            list: true,
            args: {
                region: nexus_1.schema.arg({
                    type: 'RegionInput',
                    required: true,
                }),
                queue: nexus_1.schema.arg({
                    type: 'AllRankedQueues',
                    required: true,
                }),
                tier: nexus_1.schema.arg({
                    type: 'LowerTier',
                    required: true,
                }),
                division: nexus_1.schema.arg({
                    type: 'Division',
                    required: true,
                }),
                page: nexus_1.schema.intArg(),
            },
            resolve(root, args, context) {
                return __awaiter(this, void 0, void 0, function* () {
                    switch (args.queue) {
                        case 'RANKED_FLEX_SR':
                        case 'RANKED_FLEX_TT':
                        case 'RANKED_SOLO_5x5':
                            let leagueRes = yield context.api(app_1.APIKeyType.League, args.region, 'league-v4.getLeagueEntries', {
                                division: args.division,
                                queue: args.queue,
                                tier: args.tier,
                                page: args.page ? args.page : undefined,
                            });
                            return leagueRes ? leagueRes.data : [];
                        case 'RANKED_TFT':
                            let tftRes = yield context.api(app_1.APIKeyType.TFT, args.region, 'tft-league-v1.getLeagueEntries', {
                                division: args.division,
                                tier: args.tier,
                                page: args.page ? args.page : undefined,
                            });
                            return tftRes ? tftRes.data : [];
                        default:
                            // TODO valorant ranked queues
                            return [];
                    }
                });
            },
        });
    },
});
nexus_1.schema.enumType({
    name: 'LowerTier',
    members: ['IRON', 'BRONZE', 'SILVER', 'GOLD', 'PLATINUM', 'DIAMOND'],
});
