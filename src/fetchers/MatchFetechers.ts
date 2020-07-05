import { fetchWrapper } from "../utils";
import Axios, { AxiosResponse } from "axios";
import {
  Region,
  Match,
  MatchList,
  TournamentMatches,
  MatchListInput,
} from "../generated/graphql";
import { Regions } from "../types/Regions";
import url from "url";

export function _matchByMatchId(
  region: keyof Regions,
  args: { matchId: number; RIOT_KEY: string }
): Promise<AxiosResponse<Match>> {
  let regionUrl = url.resolve(Regions[region], "/lol/match/v4/matches/");
  let endpoint = url.resolve(regionUrl, args.matchId.toString());
  return Axios.get(endpoint, {
    headers: {
      "X-Riot-Token": args.RIOT_KEY,
    },
  });
}
export const matchByMatchId = fetchWrapper(_matchByMatchId);

export function _matchListByAccountId(
  region: keyof Regions,
  args: { accountId: string; filter?: MatchListInput; RIOT_KEY: string }
): Promise<AxiosResponse<MatchList>> {
  let regionUrl = url.resolve(
    Regions[region],
    "/lol/match/v4/matchlists/by-account/"
  );
  let endpoint = url.resolve(regionUrl, args.accountId.toString());
  return Axios.get(endpoint, {
    headers: {
      "X-Riot-Token": args.RIOT_KEY,
    },
    params: args.filter,
  });
}
export const matchListByAccountId = fetchWrapper(_matchListByAccountId);

export function _tournamentMatches(
  region: keyof Regions,
  args: { tournamentCode: string; RIOT_KEY: string }
): Promise<AxiosResponse<TournamentMatches>> {
  let endpoint = url.resolve(
    Regions[region],
    `/lol/match/v4/matches/by-tournament-code/${args.tournamentCode}/ids`
  );
  return Axios.get(endpoint, {
    headers: {
      "X-Riot-Token": args.RIOT_KEY,
    },
  });
}
export const tournamentMatches = fetchWrapper(_tournamentMatches);

// TODO? match by matchid and tournament code; but isn't it redundant?...
