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
        t.field('summoner', {
            args: {
                region: nexus_1.schema.arg({ type: 'RegionInput', required: true }),
                encryptedAccountId: nexus_1.schema.stringArg(),
                summonerName: nexus_1.schema.stringArg(),
                encryptedPUUID: nexus_1.schema.stringArg(),
                encryptedSummonerId: nexus_1.schema.stringArg(),
            },
            type: 'Summonerv4Summoner',
            resolve(root, { region, encryptedAccountId, encryptedPUUID, encryptedSummonerId, summonerName, }, context) {
                return __awaiter(this, void 0, void 0, function* () {
                    // counts number fo ids given. throws error if too many
                    const count = [
                        encryptedAccountId,
                        encryptedPUUID,
                        encryptedSummonerId,
                        summonerName,
                    ].filter(Boolean).length;
                    if (count > 1) {
                        throw new Error(`only one id type should be supplied got ${count} instead `);
                    }
                    let res;
                    if (encryptedAccountId) {
                        res = yield context.api(app_1.APIKeyType.League, region, 'summoner-v4.getByAccountId', {
                            encryptedAccountId,
                        });
                    }
                    else if (encryptedPUUID) {
                        res = yield context.api(app_1.APIKeyType.League, region, 'summoner-v4.getByPUUID', {
                            encryptedPUUID,
                        });
                    }
                    else if (encryptedSummonerId) {
                        res = yield context.api(app_1.APIKeyType.League, region, 'summoner-v4.getBySummonerId', {
                            encryptedSummonerId,
                        });
                    }
                    else if (summonerName) {
                        res = yield context.api(app_1.APIKeyType.League, region, 'summoner-v4.getBySummonerName', {
                            summonerName,
                        });
                    }
                    else {
                        throw new Error('no id of any kind given');
                    }
                    return res ? Object.assign(Object.assign({}, res.data), { region }) : null;
                });
            },
        });
    },
});
