import { ClashResolvers, Clashv1Team } from "../../generated/graphql";
import { Context } from "../..";

const upcoming: ClashResolvers<Context>["upcoming"] = async (
  parent,
  args,
  context,
  info
) => {
  // @ts-expect-error || fed in form parent
  let res = await context.api(parent.region, "clash-v1.getTournaments");
  return res ? res.data : [];
};

const team: ClashResolvers<Context>["team"] = async (
  parent,
  args,
  context,
  info
) => {
  // @ts-expect-error
  let res = await context.api(parent.region, "clash-v1.getTeamById", {
    teamId: args.id,
  });
  // typecast because enum stuff
  return res ? (res.data as Clashv1Team) : null;
};

const tournament: ClashResolvers<Context>["tournament"] = async (
  parent,
  args,
  context,
  info
) => {
  // @ts-expect-error
  let res = await context.api(parent.region, "clash-v1.getTournamentById", {
    tournamentId: args.id,
  });
  return res ? res.data : null;
};

const resolvers: ClashResolvers = {
  upcoming,
  team,
  tournament,
};

export default resolvers;
