import { schema } from 'nexus'
import { APIKeyType } from '../app'
import { Region } from '../types/Regions'

schema.extendType({
  type: 'Matchv4Match',
  definition(t) {
    t.field('timeline', {
      nullable: true,
      type: 'Matchv4MatchTimeline',
      async resolve(root, args, context) {
        let res = await context.api(
          APIKeyType.League,
          root.platformId.toLowerCase() as Region,
          'match-v4.getMatchTimeline',
        )
        return res ? res.data : null
      },
    })
  },
})
