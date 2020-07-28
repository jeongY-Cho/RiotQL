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
const regionToPlatformMap = {
    BR: 'br1',
    EUNE: 'eun1',
    EUW: 'euw1',
    JP: 'jp1',
    KR: 'kr',
    LAN: 'la1',
    LAS: 'la2',
    NA: 'na1',
    OCE: 'oc1',
    TR: 'tr1',
    RU: 'ru',
    PBE: 'americas',
};
nexus_1.schema.extendType({
    type: 'Query',
    definition(t) {
        t.field('tournament', {
            nullable: true,
            args: {
                code: nexus_1.schema.stringArg({ required: true }),
            },
            type: 'Tournamentv4TournamentCode',
            resolve(root, args, context) {
                return __awaiter(this, void 0, void 0, function* () {
                    let res = yield context.api(app_1.APIKeyType.TOURNAMENT, 'americas', 'tournament-v4.getTournamentCode', {
                        tournamentCode: args.code,
                    });
                    return res ? res.data : null;
                });
            },
        });
    },
});
nexus_1.schema.extendType({
    type: 'Tournamentv4TournamentCode',
    definition(t) {
        t.list.field('lobbyEvents', {
            type: 'Tournamentv4LobbyEvent',
            resolve(root, args, context) {
                return __awaiter(this, void 0, void 0, function* () {
                    let res = yield context.api(app_1.APIKeyType.TOURNAMENT, 'americas', 'tournament-v4.getLobbyEventsByCode', {
                        tournamentCode: root.code,
                    });
                    return res ? res.data.eventList : [];
                });
            },
        });
        t.list.field('tournamentMatches', {
            type: 'TournamentMatch',
            resolve(root, _, context) {
                return __awaiter(this, void 0, void 0, function* () {
                    let matchIdRes = yield context.api(app_1.APIKeyType.TOURNAMENT, 
                    // @ts-expect-error stupid string thing
                    regionToPlatformMap[root.region], 'match-v4.getMatchIdsByTournamentCode', {
                        tournamentCode: root.tournamentId,
                    });
                    if (!matchIdRes)
                        return [];
                    let matchIds = matchIdRes.data.map((id) => ({
                        id: id,
                        region: regionToPlatformMap[root.region],
                        tournamentId: root.tournamentId,
                    }));
                    return matchIds;
                });
            },
        });
    },
});
nexus_1.schema.objectType({
    name: 'TournamentMatch',
    definition(t) {
        t.int('id');
        t.field('match', {
            type: 'Matchv4Match',
            resolve(root, args, context) {
                return __awaiter(this, void 0, void 0, function* () {
                    let match = yield context.api(app_1.APIKeyType.TOURNAMENT, 
                    // @ts-expect-error || passed in from parent
                    root.region, 'match-v4.getMatchByTournamentCode', {
                        matchId: root.id,
                        // @ts-expect-error || passed in from parent
                        tournamentCode: root.tournamentId,
                    });
                    if (!match)
                        throw new Error('no match but there should be');
                    // HACK somethings don't match but they should
                    return match.data;
                });
            },
        });
    },
});
// TODO tournament.ts mutuations
