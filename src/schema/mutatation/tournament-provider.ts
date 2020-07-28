import { schema } from 'nexus'
import { APIKeyType } from '../../app'

schema.extendType({
  type: 'Mutation',
  definition(t) {
    t.field('tournamentProvider', {
      type: 'Int',
      nullable: true,
      args: {
        ProviderRegistrationParameters: schema.arg({
          type: 'Tournamentv4ProviderRegistrationParametersInput',
          required: true,
        }),
      },
      async resolve(root, args, ctx) {
        let res = await ctx.api(
          APIKeyType.TOURNAMENT,
          'americas',
          'tournament-v4.registerProviderData',
          undefined,
          args.ProviderRegistrationParameters,
        )
        return res ? res.data : null
      },
    })
  },
})
