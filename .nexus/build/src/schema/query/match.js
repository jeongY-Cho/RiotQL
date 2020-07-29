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
const utils_1 = require("../../utils");
const app_1 = require("../../app");
nexus_1.schema.extendType({
    type: 'Query',
    definition(t) {
        t.field('match', {
            args: {
                region: nexus_1.schema.arg({
                    type: 'RegionInput',
                    required: true,
                }),
                matchId: nexus_1.schema.arg({
                    type: 'MatchId',
                    required: true,
                }),
                game: nexus_1.schema.arg({
                    type: '_Game',
                    required: true,
                }),
            },
            nullable: true,
            type: 'Match',
            resolve(root, args, context, info) {
                return __awaiter(this, void 0, void 0, function* () {
                    switch (args.game) {
                        case 'League':
                            let res = yield context.api(app_1.APIKeyType.League, args.region, 'match-v4.getMatch', {
                                matchId: args.matchId,
                            });
                            // HACK some kind of typing error
                            return res ? res.data : null;
                        case 'TFT':
                            try {
                                let res2 = yield context.api(app_1.APIKeyType.TFT, utils_1.groupRegions(args.region), 'tft-match-v1.getMatch', {
                                    matchId: args.matchId,
                                });
                                return res2 ? res2.data : null;
                            }
                            catch (err) {
                                console.log(err);
                                return null;
                            }
                        case 'LOR':
                            // TODO lor match
                            return null;
                        case 'VAL':
                            let valMatch = yield context.api(app_1.APIKeyType.VAL, args.region, 'val-match-v1.getMatch', {
                                matchId: args.matchId,
                            });
                            return valMatch ? valMatch.data : null;
                    }
                    return null;
                });
            },
        });
    },
});
nexus_1.schema.unionType({
    name: 'Match',
    definition(t) {
        t.members('Matchv4Match', 'Tftmatchv1Match', 'Valmatchv1Match');
        t.resolveType((source, context, info) => {
            // @ts-expect-error || some stupid type thing cant check for props
            if (source.roundResults)
                return 'Valmatchv1Match';
            // @ts-expect-error || some stupid type thing cant check for props
            if (source.info) {
                return 'Tftmatchv1Match';
            }
            else
                return 'Matchv4Match';
        });
    },
});
