import { SummonerResolvers } from "../generated/graphql";
import { matchListByAccountId } from "../fetchers/MatchFetechers";

const resolvers: SummonerResolvers = {
  matchlist: async (parent, { filter }, context, info) => {
    if (filter === null) {
      filter = undefined;
    }

    return (
      await matchListByAccountId(parent.region, {
        accountId: parent.accountId,
        filter,
        RIOT_KEY: context.RIOT_KEY,
      })
    ).data;
  },
};
export default resolvers;
