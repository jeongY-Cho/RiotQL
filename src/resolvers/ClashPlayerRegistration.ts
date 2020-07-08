import {
  Clashv1PlayerRegistrationResolvers,
  Clashv1Team,
  Clashv1Player,
} from "../generated/graphql";
import { Context } from "..";

const resolvers: Clashv1PlayerRegistrationResolvers<Context> = {
  team: async (parent, args, context, info) => {
    // @ts-ignore || region passed in from parent
    let res = await context.api(parent.region, "clash-v1.getTeamById", {
      teamId: parent.teamId,
    });

    if (!res) throw new Error("Team not found");

    res.data.players = res.data.players.map((player) => {
      // add teamId because its in spec but not in api return
      return {
        ...player,
        teamId: parent.teamId,
      };
    });

    return res.data as Clashv1Team;
  },
};

export default resolvers;
