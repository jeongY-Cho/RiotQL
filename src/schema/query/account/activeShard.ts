import { schema } from 'nexus'
import { APIKeyType } from '../../../app'

schema.extendType({
  type: 'Accountv1Account',
  definition(t) {
    t.field('activeShard', {
      type: 'Accountv1ActiveShard',
      args: {
        game: schema.arg({
          type: 'Game',
          required: true,
        }),
      },
      async resolve(root, args, context) {
        let res = await context.api(
          APIKeyType.ANY,
          root.realm,
          'account-v1.getActiveShard',
          {
            // HACK: cast bc is true
            game: args.game.toLowerCase() as 'val' | 'lor',
            puuid: root.puuid,
          },
        )
        if (!res) throw new Error('no active shard found')

        return res.data
      },
    })
  },
})
