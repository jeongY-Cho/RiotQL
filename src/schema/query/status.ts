import { schema } from 'nexus'
import { APIKeyType } from '../../app'

schema.extendType({
  type: 'Query',
  definition(t) {
    t.field('status', {
      type: 'Lolstatusv3ShardStatus',
      args: {
        region: schema.arg({
          type: 'RegionInput',
          required: true,
        }),
      },
      async resolve(root, args, context) {
        let res = await context.api(
          APIKeyType.ANY,
          args.region,
          'lol-status-v3.getShardData',
        )
        if (!res)
          throw new Error(
            'no status data, which is weird because it should exist',
          )
        return res.data
      },
    })
  },
})
