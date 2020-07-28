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
        t.list.string('TournamentCodeStub', {
            args: {
                count: nexus_1.schema.intArg(),
                tournamentId: nexus_1.schema.intArg({ required: true }),
                TournamentCodeParameters: nexus_1.schema.arg({
                    type: 'Tournamentstubv4TournamentCodeParametersInput',
                    required: true,
                }),
            },
            resolve(root, args, ctx) {
                var _a, _b, _c;
                return __awaiter(this, void 0, void 0, function* () {
                    let res = yield ctx.api(app_1.APIKeyType.DEV, 'americas', 'tournament-stub-v4.createTournamentCode', {
                        tournamentId: args.tournamentId,
                        count: (_a = args.count) !== null && _a !== void 0 ? _a : undefined,
                    }, {
                        mapType: args.TournamentCodeParameters.mapType,
                        pickType: args.TournamentCodeParameters.pickType,
                        spectatorType: args.TournamentCodeParameters.spectatorType,
                        teamSize: args.TournamentCodeParameters.teamSize,
                        allowedSummonerIds: removeNulls((_b = args.TournamentCodeParameters.allowedSummonerIds) !== null && _b !== void 0 ? _b : []),
                        metadata: (_c = args.TournamentCodeParameters.metadata) !== null && _c !== void 0 ? _c : undefined,
                    });
                    return res ? res.data : [];
                });
            },
        });
    },
});
function removeNulls(args) {
    return args.filter((item) => {
        if (item) {
            return true;
        }
        else {
            return false;
        }
    });
}
