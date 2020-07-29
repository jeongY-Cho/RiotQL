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
        t.field('matchList', {
            type: 'MatchList',
            args: {
                game: nexus_1.schema.arg({ type: '_Game', required: true }),
                filter: 'MatchListFilterInput',
            },
            resolve(root, args, context) {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                return __awaiter(this, void 0, void 0, function* () {
                    let parseQueue = (queues) => {
                        return queues.map((queueStr) => parseInt(queueStr.slice(1)));
                    };
                    switch (args.game) {
                        case 'League':
                            let leagueRes = yield context.api(app_1.APIKeyType.League, root.region, 'match-v4.getMatchlist', {
                                encryptedAccountId: root.accountId,
                                beginIndex: ((_a = args.filter) === null || _a === void 0 ? void 0 : _a.beginIndex) ? args.filter.beginIndex
                                    : undefined,
                                beginTime: ((_b = args.filter) === null || _b === void 0 ? void 0 : _b.beginTime) ? args.filter.beginTime
                                    : undefined,
                                champion: ((_c = args.filter) === null || _c === void 0 ? void 0 : _c.champion) ? args.filter.champion
                                    : undefined,
                                endIndex: ((_d = args.filter) === null || _d === void 0 ? void 0 : _d.endIndex) ? args.filter.endIndex
                                    : undefined,
                                endTime: ((_e = args.filter) === null || _e === void 0 ? void 0 : _e.endTime) ? args.filter.endTime : undefined,
                                queue: ((_f = args.filter) === null || _f === void 0 ? void 0 : _f.queue) ? parseQueue(args.filter.queue)
                                    : undefined,
                                season: ((_g = args.filter) === null || _g === void 0 ? void 0 : _g.season) ? args.filter.season : undefined,
                            });
                            if (!leagueRes)
                                throw new Error('no matchList found');
                            return leagueRes.data;
                        case 'TFT':
                            let tftRes = yield context.api(app_1.APIKeyType.TFT, root.region, 'tft-match-v1.getMatchIdsByPUUID', {
                                puuid: root.puuid,
                                count: ((_h = args.filter) === null || _h === void 0 ? void 0 : _h.count) ? args.filter.count : undefined,
                            });
                            if (!tftRes)
                                throw new Error('no matchList found');
                            return { matches: tftRes.data };
                        case 'LOR':
                            // TODO LOR matchlist
                            throw new Error('no matchlist for lor implemented');
                        case 'VAL':
                            let valRes = yield context.api(app_1.APIKeyType.VAL, root.region, 'val-match-v1.getMatchlist', { puuid: root.puuid });
                            if (!valRes)
                                throw new Error('no matchlist found');
                            return valRes.data;
                        default:
                            throw new Error(`no matchlist for ${args.game} `);
                    }
                });
            },
        });
    },
});
nexus_1.schema.inputObjectType({
    name: 'MatchListFilterInput',
    definition(t) {
        t.list.int('champion', { description: 'Champion Ids' });
        t.list.field('queue', {
            type: 'QueueId',
            description: 'Queue type by id',
        });
        t.list.int('season', { description: 'Season' });
        t.field('endTime', {
            type: 'Long',
            description: 'Timestamp in UNIX milliseconds',
        });
        t.field('beginTime', {
            type: 'Long',
            description: 'Timestamp in UNIX milliseconds',
        });
        t.int('endIndex', {
            description: 'Last index of game to be returned.\n\nSee notes',
        });
        t.int('beginIndex', {
            description: 'First index of game to be returned.\n\nSee notes.',
        });
        t.int('count', {
            description: 'Number of matches to return\n\n#### Note:\n\nOnly for TFT',
        });
    },
});
nexus_1.schema.unionType({
    name: 'MatchList',
    description: 'Matchlist return types. TFT matchlist returns only a list of ids',
    definition(t) {
        t.members('Matchv4Matchlist', 'TFTMatchIdList', 'Valmatchv1Matchlist');
        t.resolveType(function (source, context, info) {
            // @ts-expect-error
            if (source.history)
                return 'Valmatchv1Matchlist';
            // @ts-expect-error
            if (source.matches) {
                // @ts-expect-error
                let first = source.matches[0];
                if (first !== null) {
                    return first.champion ? 'Matchv4Matchlist' : 'TFTMatchIdList';
                }
            }
            return null;
        });
    },
});
nexus_1.schema.objectType({
    name: 'TFTMatchIdList',
    description: 'TFT matchlist return type. Returns a list of match ids',
    definition(t) {
        t.list.string('matches');
    },
});
