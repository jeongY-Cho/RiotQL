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
const app_1 = require("../../../app");
nexus_1.schema.extendType({
    type: 'Summonerv4Summoner',
    definition(t) {
        t.field('rank', {
            type: 'Leaguev4LeagueEntry',
            nullable: true,
            args: {
                queue: nexus_1.schema.arg({
                    type: 'AllRankedQueues',
                    required: true,
                }),
            },
            resolve(root, args, context) {
                return __awaiter(this, void 0, void 0, function* () {
                    switch (args.queue) {
                        case 'RANKED_FLEX_SR':
                        case 'RANKED_SOLO_5x5':
                        case 'RANKED_FLEX_TT':
                            let leagueRes = yield context.api(app_1.APIKeyType.League, root.region, 'league-v4.getLeagueEntriesForSummoner', { encryptedSummonerId: root.id });
                            if (!leagueRes)
                                return null;
                            let findQueue = leagueRes.data.find((entry) => entry.queueType === args.queue);
                            return findQueue || null;
                        case 'RANKED_TFT':
                            let tftRes = yield context.api(app_1.APIKeyType.TFT, root.region, 'tft-league-v1.getLeagueEntriesForSummoner', {
                                encryptedSummonerId: root.id,
                            });
                            return tftRes ? tftRes.data[0] : null;
                        default:
                            return null;
                    }
                });
            },
        });
    },
});
