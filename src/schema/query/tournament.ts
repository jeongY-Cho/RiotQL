import { schema } from 'nexus'
import { APIKeyType } from '../../app'

const regionToPlatformMap = {
  BR: 'br1',
  EUNE: 'eun1',
  EUW: 'euw1',
  JP: 'jp1',
  KR: 'kr',
  LAN: 'la1',
  LAS: 'la2',
  NA: 'na1',
  OCE: 'oc1',
  TR: 'tr1',
  RU: 'ru',
  PBE: 'americas',
}

schema.extendType({
  type: 'Query',
  definition(t) {
    t.field('tournament', {
      nullable: true,
      args: {
        code: schema.stringArg({ required: true }),
      },
      type: 'Tournamentv4TournamentCode',
      async resolve(root, args, context) {
        let res = await context.api(
          APIKeyType.TOURNAMENT,
          'americas',
          'tournament-v4.getTournamentCode',
          {
            tournamentCode: args.code,
          },
        )
        return res ? res.data : null
      },
    })
  },
})

schema.extendType({
  type: 'Tournamentv4TournamentCode',
  definition(t) {
    t.list.field('lobbyEvents', {
      type: 'Tournamentv4LobbyEvent',
      async resolve(root, args, context) {
        let res = await context.api(
          APIKeyType.TOURNAMENT,

          'americas',
          'tournament-v4.getLobbyEventsByCode',
          {
            tournamentCode: root.code,
          },
        )
        return res ? res.data.eventList : []
      },
    })
    t.list.field('tournamentMatches', {
      type: 'TournamentMatch',
      async resolve(root, _, context) {
        let matchIdRes = await context.api(
          APIKeyType.TOURNAMENT,
          // @ts-expect-error stupid string thing
          regionToPlatformMap[root.region],
          'match-v4.getMatchIdsByTournamentCode',
          {
            tournamentCode: root.tournamentId,
          },
        )
        if (!matchIdRes) return []

        let matchIds = matchIdRes.data.map((id) => ({
          id: id,
          region: regionToPlatformMap[root.region],
          tournamentId: root.tournamentId,
        }))

        return matchIds
      },
    })
  },
})

schema.objectType({
  name: 'TournamentMatch',
  definition(t) {
    t.int('id')
    t.field('match', {
      type: 'Matchv4Match',
      async resolve(root, args, context) {
        let match = await context.api(
          APIKeyType.TOURNAMENT,
          // @ts-expect-error || passed in from parent
          root.region,
          'match-v4.getMatchByTournamentCode',
          {
            matchId: root.id,
            // @ts-expect-error || passed in from parent
            tournamentCode: root.tournamentId,
          },
        )

        if (!match) throw new Error('no match but there should be')

        // HACK somethings don't match but they should
        return match.data as any
      },
    })
  },
})

// TODO tournament.ts mutuations
