import { schema } from 'nexus'
import { groupRegions } from '../../utils'
import { APIKeyType } from '../../app'

schema.extendType({
  type: 'Query',
  definition(t) {
    t.field('match', {
      args: {
        region: schema.arg({
          type: 'RegionInput',
          required: true,
        }),
        matchId: schema.arg({
          type: 'MatchId',
          required: true,
        }),
        game: schema.arg({
          type: '_Game',
          required: true,
        }),
      },
      nullable: true,
      type: 'Match',
      async resolve(root, args, context, info) {
        switch (args.game) {
          case 'League':
            let res = await context.api(
              APIKeyType.League,
              args.region,
              'match-v4.getMatch',
              {
                matchId: args.matchId,
              },
            )
            // HACK some kind of typing error
            return res ? (res.data as any) : null
          case 'TFT':
            try {
              let res2 = await context.api(
                APIKeyType.TFT,
                groupRegions(args.region),
                'tft-match-v1.getMatch',
                {
                  matchId: args.matchId,
                },
              )

              return res2 ? res2.data : null
            } catch (err) {
              console.log(err)
              return null
            }

          case 'LOR':
            // TODO lor match
            return null
          case 'VAL':
            let valMatch = await context.api(
              APIKeyType.VAL,
              args.region,
              'val-match-v1.getMatch',
              {
                matchId: args.matchId,
              },
            )
            return valMatch ? valMatch.data : null
        }
        return null
      },
    })
  },
})

schema.unionType({
  name: 'Match',
  definition(t) {
    t.members('Matchv4Match', 'Tftmatchv1Match', 'Valmatchv1Match')
    t.resolveType((source, context, info) => {
      // @ts-expect-error || some stupid type thing cant check for props
      if (source.roundResults) return 'Valmatchv1Match'
      // @ts-expect-error || some stupid type thing cant check for props
      if (source.info) {
        return 'Tftmatchv1Match'
      } else return 'Matchv4Match'
    })
  },
})
