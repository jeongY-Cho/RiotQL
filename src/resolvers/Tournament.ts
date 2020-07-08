import {
  Tournamentv4TournamentCodeResolvers,
  Matchv4Match,
} from "../generated/graphql";
import { Context } from "..";

const matchList: Tournamentv4TournamentCodeResolvers<
  Context
>["matchList"] = async (parent, args, context, info) => {
  let matchList = await context.api(
    "na1",
    "match-v4.getMatchIdsByTournamentCode",
    {
      tournamentCode: parent.code,
    }
  );
  return matchList ? matchList.data : [];
};

const matchDetails: Tournamentv4TournamentCodeResolvers<
  Context
>["matchDetails"] = async (parent, args, context, info) => {
  let res = await context.api("na1", "match-v4.getMatchByTournamentCode", {
    matchId: args.matchId,
    tournamentCode: parent.code,
  });

  // typecast because stupid enum incompatibility
  return res ? ((res.data as unknown) as Matchv4Match) : null;
};

const lobbyEvents: Tournamentv4TournamentCodeResolvers<
  Context
>["lobbyEvents"] = async (parent, args, context, info) => {
  let res = await context.api("na1", "tournament-v4.getLobbyEventsByCode", {
    tournamentCode: parent.code,
  });
  return res ? res.data.eventList : [];
};

const resolvers: Tournamentv4TournamentCodeResolvers<Context> = {
  matchList,
  matchDetails,
  lobbyEvents,
};

export default resolvers;
