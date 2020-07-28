import { schema } from 'nexus'
import { APIKeyType } from '../../app'

schema.extendType({
  type: 'Mutation',
  definition(t) {
    t.list.string('TournamentCodeStub', {
      args: {
        count: schema.intArg(),
        tournamentId: schema.intArg({ required: true }),
        TournamentCodeParameters: schema.arg({
          type: 'Tournamentstubv4TournamentCodeParametersInput',
          required: true,
        }),
      },
      async resolve(root, args, ctx) {
        let res = await ctx.api(
          APIKeyType.DEV,
          'americas',
          'tournament-stub-v4.createTournamentCode',
          {
            tournamentId: args.tournamentId,
            count: args.count ?? undefined,
          },
          {
            mapType: args.TournamentCodeParameters.mapType,
            pickType: args.TournamentCodeParameters.pickType,
            spectatorType: args.TournamentCodeParameters.spectatorType,
            teamSize: args.TournamentCodeParameters.teamSize,
            allowedSummonerIds: removeNulls(
              args.TournamentCodeParameters.allowedSummonerIds ?? [],
            ),
            metadata: args.TournamentCodeParameters.metadata ?? undefined,
          },
        )
        return res ? res.data : []
      },
    })
  },
})

function removeNulls(args: (string | null)[]): string[] {
  return args.filter((item) => {
    if (item) {
      return true
    } else {
      return false
    }
  }) as string[]
}
