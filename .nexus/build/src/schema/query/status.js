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
        t.field('status', {
            type: 'Lolstatusv3ShardStatus',
            args: {
                region: nexus_1.schema.arg({
                    type: 'RegionInput',
                    required: true,
                }),
            },
            resolve(root, args, context) {
                return __awaiter(this, void 0, void 0, function* () {
                    let res = yield context.api(app_1.APIKeyType.ANY, args.region, 'lol-status-v3.getShardData');
                    if (!res)
                        throw new Error('no status data, which is weird because it should exist');
                    return res.data;
                });
            },
        });
    },
});
