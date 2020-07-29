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
nexus_1.schema.extendType({
    type: 'Query',
    definition(t) {
        t.field('valorantContent', {
            type: 'Valcontentv1Content',
            args: {
                locale: 'Locale',
                region: nexus_1.schema.arg({ type: 'ValContentRegion', required: true }),
            },
            resolve(root, args, context) {
                return __awaiter(this, void 0, void 0, function* () {
                    let baseURL = context.OpenAPI.getBaseURL();
                    let client = context.client;
                    // HACK: not sustainable?
                    let parseURL = baseURL.replace('americas', args.region.toLowerCase());
                    let res = yield client['val-content-v1.getContent']({ locale: args.locale ? hyphenLocale(args.locale) : undefined }, {}, {
                        baseURL: parseURL,
                        headers: {
                            'X-Riot-Token': process.env.RIOT_API_VAL_KEY ||
                                process.env.RIOT_API_DEVELOPMENT_KEY ||
                                '',
                        },
                    });
                    if (!res)
                        throw new Error('no val content returned which is weird because it should');
                    return res.data;
                });
            },
        });
    },
});
nexus_1.schema.extendType({
    type: 'Valcontentv1ContentItem',
    definition(t) {
        t.field('localizedNames', {
            type: 'Valcontentv1LocalizedNames',
            nullable: true,
            description: 'This field is excluded from the response when a locale is set',
            resolve(root) {
                // HACK instead of stepping through embeddings just reassign as necessary
                // @ts-expect-error
                return root.localizedNames
                    ? // @ts-expect-error
                        unhyphenObject(root.localizedNames)
                    : null;
            },
        });
    },
});
// NOTE: valorant content regions are different
nexus_1.schema.enumType({
    name: 'ValContentRegion',
    description: 'Valorant content regions',
    members: ['NA', 'BR', 'EU', 'KR', 'LATAM', 'NA'],
});
// Locale extracted from keys of 'Valcontentv1LocalizedNames'
nexus_1.schema.enumType({
    name: 'Locale',
    description: 'Locale for localizedNames',
    members: [
        'arAE',
        'deDE',
        'enGB',
        'enUS',
        'esES',
        'esMX',
        'frFR',
        'idID',
        'itIT',
        'jaJP',
        'koKR',
        'plPL',
        'ptBR',
        'ruRU',
        'thTH',
        'trTR',
        'viVN',
        'zhCN',
        'zhTW',
    ],
});
// utility methods to hyphenate and un-hyphenate locale
function hyphenLocale(locale) {
    return locale.slice(0, 2) + '-' + locale.slice(2);
}
function unhyphenLocale(locale) {
    return locale.slice(0, 2) + locale.slice(3);
}
function unhyphenObject(localeObj) {
    return Object.keys(localeObj).reduce((acc, cur) => {
        acc[unhyphenLocale(cur)] = localeObj[cur];
        return acc;
    }, {});
}
