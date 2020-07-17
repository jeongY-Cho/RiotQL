import { schema } from 'nexus'
import { APIKeyType } from '../../../app'

schema.extendType({
  type: 'Summonerv4Summoner',
  definition(t) {
    t.field('rank', {
      type: 'Leaguev4LeagueEntry',
      nullable: true,
      args: {
        queue: schema.arg({
          type: 'AllRankedQueues',
          required: true,
        }),
      },
      async resolve(root, args, context) {
        switch (args.queue) {
          case 'RANKED_FLEX_SR':
          case 'RANKED_SOLO_5x5':
          case 'RANKED_FLEX_TT':
            let leagueRes = await context.api(
              APIKeyType.League,
              root.region,
              'league-v4.getLeagueEntriesForSummoner',
              { encryptedSummonerId: root.id },
            )
            if (!leagueRes) return null
            let findQueue = leagueRes.data.find(
              (entry) => entry.queueType === args.queue,
            )
            return findQueue || null
          case 'RANKED_TFT':
            let tftRes = await context.api(
              APIKeyType.TFT,
              root.region,
              'tft-league-v1.getLeagueEntriesForSummoner',
              {
                encryptedSummonerId: root.id,
              },
            )
            return tftRes ? tftRes.data[0] : null
          default:
            return null
        }
      },
    })
  },
})
