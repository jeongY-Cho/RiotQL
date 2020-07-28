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
        t.field('account', {
            type: 'Accountv1Account',
            nullable: true,
            args: {
                region: nexus_1.schema.arg({
                    type: 'RealmInput',
                    required: true,
                }),
                puuid: nexus_1.schema.stringArg(),
                riotId: 'RiotIdInput',
            },
            resolve(root, args, context) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (args.puuid) {
                        let res = yield context.api(app_1.APIKeyType.ANY, args.region, 'account-v1.getByPuuid', {
                            puuid: args.puuid,
                        });
                        return res ? Object.assign(Object.assign({}, res.data), { realm: args.region }) : null;
                    }
                    else if (args.riotId) {
                        let res = yield context.api(app_1.APIKeyType.ANY, args.region, 'account-v1.getByRiotId', {
                            gameName: args.riotId.gameName,
                            tagLine: args.riotId.tagLine,
                        });
                        // FIXME: incorrect endpoint spec in openapi schema
                        return res ? Object.assign(Object.assign({}, res.data), { realm: args.region }) : null;
                    }
                    else {
                        throw new Error('no puuid or riotId supplied');
                    }
                });
            },
        });
    },
});
nexus_1.schema.inputObjectType({
    name: 'RiotIdInput',
    definition(t) {
        t.string('gameName', { nullable: false, description: 'ingame name' });
        t.string('tagLine', { nullable: false });
    },
});
nexus_1.schema.extendType({
    type: 'Accountv1Account',
    definition(t) {
        t.field('realm', {
            type: 'RealmInput',
        });
    },
});
