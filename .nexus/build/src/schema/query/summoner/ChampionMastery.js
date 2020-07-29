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
        t.field('championMastery', {
            type: 'ChampionMastery',
            resolve(root) {
                return {
                    id: root.id,
                    region: root.region,
                };
            },
        });
    },
});
nexus_1.schema.objectType({
    name: 'ChampionMastery',
    definition(t) {
        t.int('score', {
            description: "Get a player's total champion mastery score, which is the sum of individual champion mastery levels.",
            resolve(root, args, context) {
                return __awaiter(this, void 0, void 0, function* () {
                    let res = yield context.api(app_1.APIKeyType.League, 
                    // @ts-expect-error || passed from parent
                    root.region, 'champion-mastery-v4.getChampionMasteryScore', 
                    // @ts-expect-error || passed from parent
                    { encryptedSummonerId: root.id });
                    return res ? res.data : 0;
                });
            },
        });
        t.list.field('byChampion', {
            type: 'Championmasteryv4ChampionMastery',
            nullable: true,
            args: {
                champIds: nexus_1.schema.intArg({
                    list: true,
                    required: false,
                    description: 'Get all champion mastery entries sorted by number of champion points descending filtered by champion Ids if specified.',
                }),
            },
            resolve(root, args, context) {
                return __awaiter(this, void 0, void 0, function* () {
                    let res = yield context.api(app_1.APIKeyType.League, 
                    // @ts-expect-error
                    root.region, 'champion-mastery-v4.getAllChampionMasteries', {
                        // @ts-expect-error
                        encryptedSummonerId: root.id,
                    });
                    if (!res)
                        return null;
                    if (args.champIds) {
                        return res.data.filter((item) => { var _a; return (_a = args.champIds) === null || _a === void 0 ? void 0 : _a.includes(item.championId); });
                    }
                    else {
                        return res.data;
                    }
                });
            },
        });
    },
});
