import { schema } from 'nexus'
import { APIKeyType } from '../../app'

schema.extendType({
  type: 'Query',
  definition(t) {
    t.field('thirdPartyCode', {
      type: 'String',
      nullable: true,
      args: {
        encryptedSummonerId: schema.stringArg({ required: true }),
        region: schema.arg({ type: 'RegionInput', required: true }),
      },
      async resolve(root, args, context) {
        let res = await context.api(
          APIKeyType.ANY,
          args.region,
          'third-party-code-v4.getThirdPartyCodeBySummonerId',
          {
            encryptedSummonerId: args.encryptedSummonerId,
          },
        )
        return res ? res.data : null
      },
    })
  },
})
