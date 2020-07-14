import { schema } from "nexus";

schema.extendType({
  type: "Query",
  definition(t) {
    t.field("tournament", {
      nullable: true,
      args: {
        code: schema.stringArg({ required: true }),
      },
      type: "Tournamentv4TournamentCode",
      async resolve(root, args, context) {
        let res = await context.api(
          "americas",
          "tournament-v4.getTournamentCode",
          {
            tournamentCode: args.code,
          }
        );
        return res ? res.data : null;
      },
    });
  },
});

schema.extendType({
  type: "Tournamentv4TournamentCode",
  definition(t) {
    t.list.field("lobbyEvents", {
      type: "Tournamentv4LobbyEvent",
      async resolve(root, args, context) {
        let res = await context.api(
          "americas",
          "tournament-v4.getLobbyEventsByCode",
          {
            tournamentCode: root.code,
          }
        );
        return res ? res.data.eventList : [];
      },
    });
  },
});

// TODO tournament.ts mutuations
