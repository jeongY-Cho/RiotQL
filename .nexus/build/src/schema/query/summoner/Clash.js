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
        t.field('clash', {
            type: 'Clashv1PlayerRegistration',
            resolve(root, args, context) {
                return __awaiter(this, void 0, void 0, function* () {
                    let res = yield context.api(app_1.APIKeyType.League, root.region, 'clash-v1.getPlayersBySummoner');
                    return res ? Object.assign(Object.assign({}, res.data), { region: root.region }) : [];
                });
            },
        });
    },
});
nexus_1.schema.objectType({
    name: 'Clashv1PlayerRegistration',
    definition(t) {
        t.field('position', {
            type: 'Position',
            description: 'Clash lane assignment',
        });
        t.field('role', {
            type: 'Role',
            description: 'Clash team role assignment',
        });
        t.string('summonerId');
        t.string('teamId');
        t.field('team', {
            type: 'Clashv1Team',
            description: 'Clash team details',
            resolve(root, args, context) {
                return __awaiter(this, void 0, void 0, function* () {
                    // @ts-expect-error || region passed in from root
                    let res = yield context.api(root.region, 'clash-v1.getTeamById', {
                        teamId: root.teamId,
                    });
                    if (!res)
                        throw new Error('no clash team found which is weird because this player is registered to this team');
                    return res.data;
                });
            },
        });
    },
});
