import { schema } from 'nexus'
import { APIKeyType } from '../../app'

schema.extendType({
  type: 'Query',
  definition(t) {
    t.field('rankedLeague', {
      type: 'Leaguev4LeagueEntry',
      list: true,
      args: {
        region: schema.arg({
          type: 'RegionInput',
          required: true,
        }),
        queue: schema.arg({
          type: 'AllRankedQueues',
          required: true,
        }),
        tier: schema.arg({
          type: 'LowerTier',
          required: true,
        }),
        division: schema.arg({
          type: 'Division',
          required: true,
        }),
        page: schema.intArg(),
      },
      async resolve(root, args, context) {
        switch (args.queue) {
          case 'RANKED_FLEX_SR':
          case 'RANKED_FLEX_TT':
          case 'RANKED_SOLO_5x5':
            let leagueRes = await context.api(
              APIKeyType.League,
              args.region,
              'league-v4.getLeagueEntries',
              {
                division: args.division,
                queue: args.queue,
                tier: args.tier,
                page: args.page ? args.page : undefined,
              },
            )
            return leagueRes ? leagueRes.data : []
          case 'RANKED_TFT':
            let tftRes = await context.api(
              APIKeyType.TFT,
              args.region,
              'tft-league-v1.getLeagueEntries',
              {
                division: args.division,
                tier: args.tier,
                page: args.page ? args.page : undefined,
              },
            )
            return tftRes ? tftRes.data : []
          default:
            // TODO valorant ranked queues
            return []
        }
      },
    })
  },
})

schema.enumType({
  name: 'LowerTier',
  members: ['IRON', 'BRONZE', 'SILVER', 'GOLD', 'PLATINUM', 'DIAMOND'],
})
