"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nexus_1 = require("nexus");
nexus_1.schema.scalarType({
    name: 'Long',
    serialize() {
        /* Todo */
    },
    parseValue() {
        /* Todo */
    },
    parseLiteral() {
        /* Todo */
    },
});
nexus_1.schema.scalarType({
    name: 'MatchId',
    serialize(v) {
        return v;
        /* TODO */
    },
    parseValue(v) {
        return v + '';
        /* TODO */
    },
    parseLiteral(ast) {
        // HACK don't know but it works
        // @ts-expect-error
        return ast.value;
        /* TODO */
    },
});
nexus_1.schema.scalarType({
    name: 'JSONObject',
    description: 'The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).',
    serialize() {
        /* TODO */
    },
    parseValue() {
        /* TODO */
    },
    parseLiteral() {
        /* TODO */
    },
});
nexus_1.schema.enumType({
    name: '_Game',
    members: [
        'League',
        'TFT',
        {
            description: 'LOR is not implemented; calls will return null',
            name: 'LOR',
            value: 'LOR',
        },
        {
            description: 'VAL has limited implementation',
            name: 'VAL',
            value: 'VAL',
        },
    ],
});
nexus_1.schema.enumType({
    name: 'QueueId',
    description: 'League Game Queue Ids',
    members: ['_420', '_440'],
});
nexus_1.schema.enumType({
    name: 'RegionInput',
    members: [
        'br1',
        'eun1',
        'euw1',
        'jp1',
        'kr',
        'la1',
        'la2',
        'na1',
        'oc1',
        'tr1',
        'ru',
        'americas',
        'asia',
        'europe',
    ],
});
nexus_1.schema.enumType({
    name: 'AllRankedQueues',
    members: [
        'RANKED_SOLO_5x5',
        'RANKED_TFT',
        'RANKED_FLEX_SR',
        'RANKED_FLEX_TT',
    ],
});
nexus_1.schema.enumType({
    name: 'RealmInput',
    members: ['americas', 'asia', 'europe'],
});
