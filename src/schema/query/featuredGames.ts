import { schema } from 'nexus'
import { APIKeyType } from '../../app'

schema.extendType({
  type: 'Query',
  definition(t) {
    t.field('featuredGames', {
      type: 'Spectatorv4FeaturedGames',
      args: {
        region: schema.arg({
          type: 'RegionInput',
          required: true,
        }),
      },
      async resolve(root, args, context) {
        let res = await context.api(
          APIKeyType.League,
          args.region,
          'spectator-v4.getFeaturedGames',
        )
        if (!res) throw new Error('no featured games found ')
        return res.data
      },
    })
  },
})
