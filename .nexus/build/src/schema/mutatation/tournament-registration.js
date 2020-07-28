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
        t.int('code', {
            args: {
                TournamentRegistrationParameters: nexus_1.schema.arg({
                    type: 'Tournamentv4TournamentRegistrationParametersInput',
                    required: true,
                }),
            },
            resolve(root, args, ctx) {
                var _a;
                return __awaiter(this, void 0, void 0, function* () {
                    let res = yield ctx.api(app_1.APIKeyType.TOURNAMENT, 'americas', 'tournament-v4.registerTournament', undefined, {
                        providerId: args.TournamentRegistrationParameters.providerId,
                        name: (_a = args.TournamentRegistrationParameters.name) !== null && _a !== void 0 ? _a : undefined,
                    });
                    if (!res)
                        throw new Error("some error from this, but shouldn't");
                    return res.data;
                });
            },
        });
    },
});
