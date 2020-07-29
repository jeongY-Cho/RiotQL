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
        t.field('activeMatch', {
            type: 'Spectatorv4CurrentGameInfo',
            nullable: true,
            args: {
                game: nexus_1.schema.arg({
                    type: '_Game',
                    required: true,
                }),
            },
            resolve(root, args, context) {
                return __awaiter(this, void 0, void 0, function* () {
                    switch (args.game) {
                        case 'LOR':
                            throw new Error('no LOR endpoint on riot api; included for posterity');
                        case 'TFT':
                            throw new Error('no TFT endpoint on riot api; included for posterity');
                        default:
                            let res = yield context.api(app_1.APIKeyType.League, root.region, 'spectator-v4.getCurrentGameInfoBySummoner', { encryptedSummonerId: root.id });
                            return res ? res.data : null;
                    }
                });
            },
        });
    },
});
