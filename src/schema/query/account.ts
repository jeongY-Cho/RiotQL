import { schema } from 'nexus'
import { APIKeyType } from '../../app'

schema.extendType({
  type: 'Query',
  definition(t) {
    t.field('account', {
      type: 'Accountv1Account',
      nullable: true,
      args: {
        region: schema.arg({
          type: 'RealmInput',
          required: true,
        }),
        puuid: schema.stringArg(),
        riotId: 'RiotIdInput',
      },
      async resolve(root, args, context) {
        if (args.puuid) {
          let res = await context.api(
            APIKeyType.ANY,
            args.region,
            'account-v1.getByPuuid',
            {
              puuid: args.puuid,
            },
          )
          return res ? res.data : null
        } else if (args.riotId) {
          let res = await context.api(
            APIKeyType.ANY,
            args.region,
            'account-v1.getByRiotId',
            {
              gameName: args.riotId.gameName,
              tagLine: args.riotId.tagLine,
            },
          )
          return res ? res.data : null
        } else {
          throw new Error('no puuid or riotId supplied')
        }
      },
    })
  },
})

schema.inputObjectType({
  name: 'RiotIdInput',
  definition(t) {
    t.string('gameName', { nullable: false, description: 'ingame name' })
    t.string('tagLine', { nullable: false })
  },
})
