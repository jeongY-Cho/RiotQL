import { schema } from "nexus";

schema.extendType({
  type: "Query",
  definition(t) {
    t.field("tournamentStub", {
      type: "TournamentStub",
      args: {
        code: schema.stringArg({ required: true }),
      },
      async resolve(root, args, context) {
        const res = await context.api(
          "americas",
          "tournament-stub-v4.getLobbyEventsByCode",
          { tournamentCode: args.code }
        );
        const lobbyEvents = res ? res.data.eventList : [];

        return {
          lobbyEvents,
        };
      },
    });
  },
});

schema.objectType({
  name: "TournamentStub",
  definition(t) {
    t.list.field("lobbyEvents", {
      type: "Tournamentstubv4LobbyEvent",
    });
  },
});
