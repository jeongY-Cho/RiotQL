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
    type: 'Mutation',
    definition(t) {
        t.field('tournamentProviderStub', {
            type: 'Int',
            nullable: true,
            args: {
                ProviderRegistrationParameters: nexus_1.schema.arg({
                    type: 'Tournamentstubv4ProviderRegistrationParametersInput',
                    required: true,
                }),
            },
            resolve(root, args, ctx) {
                return __awaiter(this, void 0, void 0, function* () {
                    let res = yield ctx.api(app_1.APIKeyType.DEV, 'americas', 'tournament-stub-v4.registerProviderData', undefined, args.ProviderRegistrationParameters);
                    return res ? res.data : null;
                });
            },
        });
    },
});
