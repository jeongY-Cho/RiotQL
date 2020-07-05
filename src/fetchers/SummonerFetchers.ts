import { Summoner } from "../generated/graphql";
import Axios, { AxiosResponse } from "axios";
import { Regions } from "../types/Regions";
import url from "url";
import { fetchWrapper } from "../utils";

export function _byAccountId(
  region: keyof Regions,
  args: { accountId: string; RIOT_KEY: string }
): Promise<AxiosResponse<Omit<Summoner, "region">>> {
  let regionUrl = url.resolve(
    Regions[region],
    "/lol/summoner/v4/summoners/by-account/"
  );
  let endpoint = url.resolve(regionUrl, args.accountId);
  return Axios.get(endpoint, {
    headers: {
      "X-Riot-Token": args.RIOT_KEY,
    },
  });
}
export const byAccountId = fetchWrapper(_byAccountId);

export function _bySummonerName(
  region: keyof Regions,
  args: { summonerName: string; RIOT_KEY: string }
): Promise<AxiosResponse<Omit<Summoner, "region">>> {
  let regionUrl = url.resolve(
    Regions[region],
    "/lol/summoner/v4/summoners/by-name/"
  );
  let endpoint = url.resolve(regionUrl, encodeURI(args.summonerName));
  return Axios.get(endpoint, {
    headers: {
      "X-Riot-Token": args.RIOT_KEY,
    },
  });
}
export const bySummonerName = fetchWrapper(_bySummonerName);

export function _byPUUID(
  region: keyof Regions,
  args: { puuid: string; RIOT_KEY: string }
): Promise<AxiosResponse<Omit<Summoner, "region">>> {
  let regionUrl = url.resolve(
    Regions[region],
    "/lol/summoner/v4/summoners/by-puuid/"
  );
  let endpoint = url.resolve(regionUrl, args.puuid);
  return Axios.get(endpoint, {
    headers: {
      "X-Riot-Token": args.RIOT_KEY,
    },
  });
}
export const byPUUID = fetchWrapper(_byPUUID);

export function _bySummonerId(
  region: keyof Regions,
  args: { summonerId: string; RIOT_KEY: string }
): Promise<AxiosResponse<Omit<Summoner, "region">>> {
  let regionUrl = url.resolve(Regions[region], "/lol/summoner/v4/summoners/");
  let endpoint = url.resolve(regionUrl, args.summonerId);
  return Axios.get(endpoint, {
    headers: {
      "X-Riot-Token": args.RIOT_KEY,
    },
  });
}
export const bySummonerId = fetchWrapper(_bySummonerId);
