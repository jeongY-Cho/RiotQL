import { Resolvers } from "../../../generated/graphql";
import { Context } from "../../..";
import { parseResolveInfo } from "graphql-parse-resolve-info";

const resolvers: Resolvers<Context>["ChampionMastery"] = {
  byChampion: async (parent, args, context, info) => {
    // if no champ ids return all
    if (!args.champIds) {
      let res = await context.api(
        // @ts-ignore || region passed down from parent
        parent.region,
        "champion-mastery-v4.getAllChampionMasteries",
        // @ts-ignore || summonerId passed down from parent
        { encryptedSummonerId: parent.summonerId }
      );
      return res ? res.data : null;
    } else if (args.champIds.length === 1) {
      let res = await context.api(
        // @ts-ignore || region passed down from parent
        parent.region,
        "champion-mastery-v4.getChampionMastery",
        // @ts-ignore || summonerId passed down from parent
        { championId: args.champIds[0], encryptedSummonerId: parent.summonerId }
      );
      return res ? [res.data] : null;
    } else if (args.champIds.length > 1) {
      let idSet = new Set(args.champIds);
      let res = await context.api(
        // @ts-ignore || region passed down from parent
        parent.region,
        "champion-mastery-v4.getAllChampionMasteries",
        // @ts-ignore || summonerId passed down from parent
        { encryptedSummonerId: parent.summonerId }
      );
      return res ? res.data.filter((item) => idSet.has(item.championId)) : null;
    }

    return null;
  },
};

export default resolvers;
