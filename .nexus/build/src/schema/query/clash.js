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
        t.field('clash', {
            type: 'Clash',
            args: {
                region: nexus_1.schema.arg({
                    type: 'RegionInput',
                    required: true,
                }),
            },
            resolve(_, args) {
                return {
                    region: args.region,
                };
            },
        });
    },
});
nexus_1.schema.objectType({
    name: 'Clash',
    definition(t) {
        t.field('upcoming', {
            type: 'Clashv1Tournament',
            list: true,
            resolve(root, args, context) {
                return __awaiter(this, void 0, void 0, function* () {
                    let res = yield context.api(app_1.APIKeyType.League, 
                    // @ts-expect-error
                    root.region, 'clash-v1.getTournaments');
                    return res ? res.data : [];
                });
            },
        });
        t.field('team', {
            type: 'Clashv1Team',
            nullable: true,
            args: {
                teamId: nexus_1.schema.stringArg({ required: true }),
            },
            resolve(root, args, context) {
                return __awaiter(this, void 0, void 0, function* () {
                    // @ts-expect-error
                    let res = yield context.api(root.region, 'clash-v1.getTeamById', {
                        teamId: args.teamId,
                    });
                    return res ? res.data : null;
                });
            },
        });
        t.field('tournament', {
            type: 'Clashv1Tournament',
            nullable: true,
            args: {
                tournamentId: nexus_1.schema.intArg({ required: true }),
            },
            resolve(root, arg, context) {
                return __awaiter(this, void 0, void 0, function* () {
                    // @ts-expect-error
                    let res = yield context.api(root.region, 'clash-v1.getTournamentById', {
                        tournamentId: arg.tournamentId,
                    });
                    return res ? res.data : null;
                });
            },
        });
    },
});
nexus_1.schema.extendType({
    type: 'Clashv1Team',
    definition(t) {
        t.field('region', {
            type: 'RegionInput',
        });
        t.field('tournament', {
            type: 'Clashv1Tournament',
            resolve(root, _, context) {
                return __awaiter(this, void 0, void 0, function* () {
                    let res = yield context.api(app_1.APIKeyType.League, root.region, 'clash-v1.getTournamentByTeam', {
                        teamId: root.id,
                    });
                    if (!res)
                        throw new Error('no tournament found which is weird because it should exist');
                    return res.data;
                });
            },
        });
    },
});
