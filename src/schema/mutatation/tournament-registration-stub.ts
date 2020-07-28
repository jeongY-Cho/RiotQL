import { schema } from 'nexus'
import { APIKeyType } from '../../app'

schema.extendType({
  type: 'Mutation',
  definition(t) {
    t.int('TournamentRegistration', {
      args: {
        TournamentRegistrationParameters: schema.arg({
          type: 'Tournamentstubv4TournamentRegistrationParametersInput',
          required: true,
        }),
      },
      async resolve(root, args, ctx) {
        let res = await ctx.api(
          APIKeyType.DEV,
          'americas',
          'tournament-stub-v4.registerTournament',
          undefined,
          {
            providerId: args.TournamentRegistrationParameters.providerId,
            name: args.TournamentRegistrationParameters.name ?? undefined,
          },
        )
        if (!res) throw new Error("some error from this, but shouldn't")
        return res.data
      },
    })
  },
})
