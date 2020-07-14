import { schema } from 'nexus'

schema.extendType({
  type: 'Query',
  definition(t) {
    t.field('freeChampionRotation', {
      type: 'Championv3ChampionInfo',
      async resolve(root, args, context) {
        let res = await context.api('na1', 'champion-v3.getChampionInfo')
        if (!res) throw new Error('champion info not found idk why')
        return res.data
      },
    })
  },
})
