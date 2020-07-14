import { schema } from 'nexus'
import { APIKeyType } from '../../app'

schema.extendType({
  type: 'Query',
  definition(t) {
    t.field('freeChampionRotation', {
      type: 'Championv3ChampionInfo',
      async resolve(root, args, context) {
        let res = await context.api(
          APIKeyType.League,
          'na1',
          'champion-v3.getChampionInfo',
        )
        if (!res) throw new Error('champion info not found idk why')
        return res.data
      },
    })
  },
})
