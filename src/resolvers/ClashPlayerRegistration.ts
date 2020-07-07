import {
  ClashV1PlayerRegistrationResolvers,
  ClashV1Team,
  ClashV1Player,
} from "../generated/graphql";
import { Context } from "..";
import { AxiosResponse } from "openapi-client-axios";

const resolvers: ClashV1PlayerRegistrationResolvers<Context> = {
  team: async (parent, args, context, info) => {
    // @ts-ignore || region passed in from parent
    let res = await context.api(parent.region, "clash-v1.getTeamById", {
      teamId: parent.teamId,
    });

    if (!res) throw new Error("Team not found");
    return res.data as ClashV1Team;
  },
};

export default resolvers;
