import { schema } from 'nexus'
import { APIKeyType } from '../../app'

schema.extendType({
  type: 'Mutation',
  definition(t) {
    t.field('TournamentUpdate', {
      type: 'Tournamentv4TournamentCode',
      args: {
        updateParameters: schema.arg({
          type: 'Tournamentv4TournamentCodeUpdateParametersInput',
          required: true,
        }),
        tournamentCode: schema.stringArg({ required: true }),
      },
      async resolve(root, args, ctx) {
        try {
          await ctx.api(
            APIKeyType.TOURNAMENT,
            'americas',
            'tournament-v4.updateCode',
            { tournamentCode: args.tournamentCode },
            {
              mapType: args.updateParameters.mapType,
              pickType: args.updateParameters.pickType,
              spectatorType: args.updateParameters.spectatorType,
              allowedSummonerIds: removeNulls(
                args.updateParameters.allowedSummonerIds ?? [],
              ),
            },
          )
        } catch (err) {
          throw err
        }
        let res = await ctx.api(
          APIKeyType.TOURNAMENT,
          'americas',
          'tournament-v4.getTournamentCode',
          {
            tournamentCode: args.tournamentCode,
          },
        )
        if (!res) throw new Error("tournament not found but it should've been")
        return res.data
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
