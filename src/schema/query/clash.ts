// TODO clash.ts
import { schema } from 'nexus'

schema.extendType({
  type: 'Query',
  definition(t) {
    t.field('clash', {
      type: 'Clash',
      args: {
        region: schema.arg({
          type: 'RegionInput',
          required: true,
        }),
      },
      resolve(_, args) {
        return {
          region: args.region,
        }
      },
    })
  },
})

schema.objectType({
  name: 'Clash',
  definition(t) {
    t.field('upcoming', {
      type: 'Clashv1Tournament',
      list: true,
      async resolve(root, args, context) {
        // @ts-expect-error
        let res = await context.api(root.region, 'clash-v1.getTournaments')
        return res ? res.data : []
      },
    })
    t.field('team', {
      type: 'Clashv1Team',
      nullable: true,
      args: {
        teamId: schema.stringArg({ required: true }),
      },
      async resolve(root, args, context) {
        // @ts-expect-error
        let res = await context.api(root.region, 'clash-v1.getTeamById', {
          teamId: args.teamId,
        })
        return res ? res.data : null
      },
    })
    t.field('tournament', {
      type: 'Clashv1Tournament',
      nullable: true,
      args: {
        tournamentId: schema.intArg({ required: true }),
      },
      async resolve(root, arg, context) {
        // @ts-expect-error
        let res = await context.api(root.region, 'clash-v1.getTournamentById', {
          tournamentId: arg.tournamentId,
        })
        return res ? res.data : null
      },
    })
  },
})
