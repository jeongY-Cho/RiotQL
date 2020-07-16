import { schema } from 'nexus'
schema.scalarType({
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
})

schema.scalarType({
  name: 'MatchId',
  serialize(v) {
    return v
    /* TODO */
  },
  parseValue(v) {
    return v + ''
    /* TODO */
  },
  parseLiteral(ast) {
    // HACK don't know but it works
    // @ts-expect-error
    return ast.value
    /* TODO */
  },
})
schema.scalarType({
  name: 'JSONObject',
  description:
    'The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).',
  serialize() {
    /* TODO */
  },
  parseValue() {
    /* TODO */
  },
  parseLiteral() {
    /* TODO */
  },
})

schema.enumType({
  name: '_Game',
  members: [
    'League',
    'TFT',
    { description: 'LOR is not implemented', name: 'LOR', value: 'LOR' },
    { description: 'VAL is not implemented', name: 'VAL', value: 'VAL' },
  ],
})

schema.enumType({
  name: 'QueueId',
  description: 'League Game Queue Ids',
  members: ['_420', '_440'],
})

schema.enumType({
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
})

schema.enumType({
  name: 'AllRankedQueues',
  members: [
    'RANKED_SOLO_5x5',
    'RANKED_TFT',
    'RANKED_FLEX_SR',
    'RANKED_FLEX_TT',
  ],
})

schema.enumType({
  name: 'RealmInput',
  members: ['americas', 'asia', 'europe'],
})
