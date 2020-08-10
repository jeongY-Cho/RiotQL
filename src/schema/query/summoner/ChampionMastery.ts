import { schema } from 'nexus'
import { APIKeyType } from '../../../app'

schema.extendType({
  type: 'Summonerv4Summoner',
  definition(t) {
    t.field('championMastery', {
      type: 'ChampionMastery',
      resolve(root) {
        return {
          id: root.id,
          region: root.region,
        }
      },
    })
  },
})

schema.objectType({
  name: 'ChampionMastery',
  definition(t) {
    t.int('score', {
      description:
        "Get a player's total champion mastery score, which is the sum of individual champion mastery levels.",
      async resolve(root, args, context) {
        let res = await context.api(
          APIKeyType.League,
          // @ts-expect-error || passed from parent
          root.region,
          'champion-mastery-v4.getChampionMasteryScore',
          // @ts-expect-error || passed from parent
          { encryptedSummonerId: root.id },
        )

        return res ? res.data : 0
      },
    })
    t.list.field('byChampion', {
      type: 'Championmasteryv4ChampionMastery',
      nullable: true,

      args: {
        champIds: schema.intArg({
          list: true,
          required: false,
          description:
            'Get all champion mastery entries sorted by number of champion points descending filtered by champion Ids if specified.',
        }),
      },
      async resolve(root, args, context) {
        let res = await context.api(
          APIKeyType.League,
          // @ts-expect-error  || passed in from parent
          root.region,
          'champion-mastery-v4.getAllChampionMasteries',
          {
            // @ts-expect-error || passed in from parent
            encryptedSummonerId: root.id,
          },
        )

        if (!res) return null

        if (args.champIds) {
          return res.data.filter((item) =>
            args.champIds?.includes(item.championId),
          )
        } else {
          return res.data
        }
      },
    })
  },
})
