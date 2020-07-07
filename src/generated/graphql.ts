import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T extends PromiseLike<infer U> ? Promise<U | null> : T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Long: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export enum AllRankedQueues {
  RankedSolo_5X5 = 'RANKED_SOLO_5X5',
  RankedTft = 'RANKED_TFT',
  RankedFlexSr = 'RANKED_FLEX_SR',
  RankedFlexTt = 'RANKED_FLEX_TT'
}

/** Champion Mastery for league accounts */
export type ChampionMastery = {
  __typename?: 'ChampionMastery';
  /** Get a player's total champion mastery score, which is the sum of individual champion mastery levels. */
  score: Scalars['Int'];
  /** Get all champion mastery entries sorted by number of champion points descending filtered by champion Ids if specified. */
  byChampion?: Maybe<Array<ChampionMasteryV4ChampionMastery>>;
};


/** Champion Mastery for league accounts */
export type ChampionMasteryByChampionArgs = {
  champIds?: Maybe<Array<Scalars['Int']>>;
};

/** This object contains single Champion Mastery information for player and champion combination. */
export type ChampionMasteryV4ChampionMastery = {
  __typename?: 'ChampionMasteryV4ChampionMastery';
  /** Champion ID for this entry. */
  championId: Scalars['Float'];
  /** Champion level for specified player and champion combination. */
  championLevel: Scalars['Int'];
  /** Total number of champion points for this player and champion combination - they are used to determine championLevel. */
  championPoints: Scalars['Int'];
  /** Number of points earned since current level has been achieved. */
  championPointsSinceLastLevel: Scalars['Float'];
  /** Number of points needed to achieve next level. Zero if player reached maximum champion level for this champion. */
  championPointsUntilNextLevel: Scalars['Float'];
  /** Is chest granted for this champion or not in current season. */
  chestGranted: Scalars['Boolean'];
  /** Last time this champion was played by this player - in Unix milliseconds time format. */
  lastPlayTime: Scalars['Float'];
  /** Summoner ID for this entry. (Encrypted) */
  summonerId: Scalars['String'];
  /** The token earned for this champion to levelup. */
  tokensEarned: Scalars['Int'];
};

export type ChampionV3ChampionInfo = {
  __typename?: 'ChampionV3ChampionInfo';
  freeChampionIds: Array<Maybe<Scalars['Int']>>;
  freeChampionIdsForNewPlayers: Array<Maybe<Scalars['Int']>>;
  maxNewPlayerLevel: Scalars['Int'];
};

export type ClashV1Player = {
  __typename?: 'ClashV1Player';
  /** (Legal values:  UNSELECTED,  FILL,  TOP,  JUNGLE,  MIDDLE,  BOTTOM,  UTILITY) */
  position: Position;
  /** (Legal values:  CAPTAIN,  MEMBER) */
  role: Role;
  summonerId: Scalars['String'];
};

export type ClashV1PlayerRegistration = {
  __typename?: 'ClashV1PlayerRegistration';
  /** Clash lane assignment */
  position: Position;
  /** Clash team role assignment */
  role: Role;
  summonerId: Scalars['String'];
  teamId: Scalars['String'];
  /** Clash team details */
  team: ClashV1Team;
};

export type ClashV1Team = {
  __typename?: 'ClashV1Team';
  abbreviation: Scalars['String'];
  /** Summoner ID of the team captain. */
  captain: Scalars['String'];
  iconId: Scalars['Int'];
  id: Scalars['String'];
  name: Scalars['String'];
  /** Team members. */
  players: Array<Maybe<ClashV1Player>>;
  tier: Scalars['Int'];
  tournamentId: Scalars['Int'];
};

export type ClashV1Tournament = {
  __typename?: 'ClashV1Tournament';
  id: Scalars['Int'];
  nameKey: Scalars['String'];
  nameKeySecondary: Scalars['String'];
  /** Tournament phase. */
  schedule: Array<Maybe<ClashV1TournamentPhase>>;
  themeId: Scalars['Int'];
};

export type ClashV1TournamentPhase = {
  __typename?: 'ClashV1TournamentPhase';
  cancelled: Scalars['Boolean'];
  id: Scalars['Int'];
  registrationTime: Scalars['Float'];
  startTime: Scalars['Float'];
};

export enum Division {
  I = 'I',
  Ii = 'II',
  Iii = 'III',
  Iv = 'IV'
}

export enum Division2 {
  I = 'I',
  Ii = 'II',
  Iii = 'III',
  Iv = 'IV'
}

export enum Game {
  League = 'League',
  Tft = 'TFT',
  Lor = 'LOR'
}

export enum GameMode {
  Classic = 'CLASSIC',
  Odin = 'ODIN',
  Aram = 'ARAM',
  Tutorial = 'TUTORIAL',
  Oneforall = 'ONEFORALL',
  Ascension = 'ASCENSION',
  Firstblood = 'FIRSTBLOOD',
  Kingporo = 'KINGPORO'
}

export enum GameType {
  CustomGame = 'CUSTOM_GAME',
  MatchedGame = 'MATCHED_GAME',
  TutorialGame = 'TUTORIAL_GAME'
}

export enum HighestAchievedSeasonTier {
  Challenger = 'CHALLENGER',
  Master = 'MASTER',
  Diamond = 'DIAMOND',
  Platinum = 'PLATINUM',
  Gold = 'GOLD',
  Silver = 'SILVER',
  Bronze = 'BRONZE',
  Unranked = 'UNRANKED'
}

export type Info = {
  __typename?: 'Info';
  description: Scalars['String'];
  version?: Maybe<Scalars['String']>;
  constants?: Maybe<Scalars['String']>;
  repo?: Maybe<Scalars['String']>;
};


export enum Lane {
  Mid = 'MID',
  Middle = 'MIDDLE',
  Top = 'TOP',
  Jungle = 'JUNGLE',
  Bot = 'BOT',
  Bottom = 'BOTTOM'
}

export type LeagueExpV4LeagueEntry = {
  __typename?: 'LeagueExpV4LeagueEntry';
  freshBlood: Scalars['Boolean'];
  hotStreak: Scalars['Boolean'];
  inactive: Scalars['Boolean'];
  leagueId: Scalars['String'];
  leaguePoints: Scalars['Int'];
  /** Losing team on Summoners Rift. Second through eighth placement in Teamfight Tactics. */
  losses: Scalars['Int'];
  miniSeries?: Maybe<LeagueExpV4MiniSeries>;
  queueType: Scalars['String'];
  rank: Scalars['String'];
  /** Player's summonerId (Encrypted) */
  summonerId: Scalars['String'];
  summonerName: Scalars['String'];
  tier: Scalars['String'];
  veteran: Scalars['Boolean'];
  /** Winning team on Summoners Rift. First placement in Teamfight Tactics. */
  wins: Scalars['Int'];
};

export type LeagueExpV4MiniSeries = {
  __typename?: 'LeagueExpV4MiniSeries';
  losses: Scalars['Int'];
  progress: Scalars['String'];
  target: Scalars['Int'];
  wins: Scalars['Int'];
};

export type LeagueV4LeagueEntry = {
  __typename?: 'LeagueV4LeagueEntry';
  freshBlood: Scalars['Boolean'];
  hotStreak: Scalars['Boolean'];
  inactive: Scalars['Boolean'];
  leagueId: Scalars['String'];
  leaguePoints: Scalars['Int'];
  /** Losing team on Summoners Rift. */
  losses: Scalars['Int'];
  miniSeries?: Maybe<LeagueV4MiniSeries>;
  queueType: Scalars['String'];
  rank: Scalars['String'];
  /** Player's encrypted summonerId. */
  summonerId: Scalars['String'];
  summonerName: Scalars['String'];
  tier: Scalars['String'];
  veteran: Scalars['Boolean'];
  /** Winning team on Summoners Rift. */
  wins: Scalars['Int'];
};

export type LeagueV4LeagueItem = {
  __typename?: 'LeagueV4LeagueItem';
  freshBlood: Scalars['Boolean'];
  hotStreak: Scalars['Boolean'];
  inactive: Scalars['Boolean'];
  leaguePoints: Scalars['Int'];
  /** Losing team on Summoners Rift. */
  losses: Scalars['Int'];
  miniSeries?: Maybe<LeagueV4MiniSeries>;
  rank: Scalars['String'];
  /** Player's encrypted summonerId. */
  summonerId: Scalars['String'];
  summonerName: Scalars['String'];
  veteran: Scalars['Boolean'];
  /** Winning team on Summoners Rift. */
  wins: Scalars['Int'];
};

export type LeagueV4LeagueList = {
  __typename?: 'LeagueV4LeagueList';
  entries: Array<Maybe<LeagueV4LeagueItem>>;
  leagueId: Scalars['String'];
  name: Scalars['String'];
  queue: Scalars['String'];
  tier: Scalars['String'];
};

export type LeagueV4MiniSeries = {
  __typename?: 'LeagueV4MiniSeries';
  losses: Scalars['Int'];
  progress: Scalars['String'];
  target: Scalars['Int'];
  wins: Scalars['Int'];
};

export type LolStatusV3Incident = {
  __typename?: 'LolStatusV3Incident';
  active: Scalars['Boolean'];
  createdAt: Scalars['String'];
  id: Scalars['Float'];
  updates: Array<Maybe<LolStatusV3Message>>;
};

export type LolStatusV3Message = {
  __typename?: 'LolStatusV3Message';
  author: Scalars['String'];
  content: Scalars['String'];
  createdAt: Scalars['String'];
  id: Scalars['String'];
  severity: Scalars['String'];
  translations: Array<Maybe<LolStatusV3Translation>>;
  updatedAt: Scalars['String'];
};

export type LolStatusV3Service = {
  __typename?: 'LolStatusV3Service';
  incidents: Array<Maybe<LolStatusV3Incident>>;
  name: Scalars['String'];
  slug: Scalars['String'];
  status: Scalars['String'];
};

export type LolStatusV3ShardStatus = {
  __typename?: 'LolStatusV3ShardStatus';
  hostname: Scalars['String'];
  locales: Array<Maybe<Scalars['String']>>;
  name: Scalars['String'];
  regionTag: Scalars['String'];
  services: Array<Maybe<LolStatusV3Service>>;
  slug: Scalars['String'];
};

export type LolStatusV3Translation = {
  __typename?: 'LolStatusV3Translation';
  content: Scalars['String'];
  heading: Scalars['String'];
  locale: Scalars['String'];
};


export type LorRankedV1Leaderboard = {
  __typename?: 'LorRankedV1Leaderboard';
  /** A list of players in Master tier. */
  players: Array<Maybe<LorRankedV1Player>>;
};

export type LorRankedV1Player = {
  __typename?: 'LorRankedV1Player';
  /** League points. */
  lp: Scalars['Int'];
  name: Scalars['String'];
  rank: Scalars['Int'];
};

export enum LowerTier {
  Diamond = 'DIAMOND',
  Platinum = 'PLATINUM',
  Gold = 'GOLD',
  Silver = 'SILVER',
  Bronze = 'BRONZE',
  Iron = 'IRON',
  Unranked = 'UNRANKED'
}

export enum MapType {
  SummonersRift = 'SUMMONERS_RIFT',
  TwistedTreeline = 'TWISTED_TREELINE',
  HowlingAbyss = 'HOWLING_ABYSS'
}

export type Match = MatchV4Match | TftMatchV1Match;

/** Matchlist return types. TFT matchlist returns only a list of ids */
export type MatchList = MatchV4Matchlist | TftMatchIdList;

export type MatchListFilterInput = {
  /** Champion Ids */
  champion?: Maybe<Array<Scalars['Int']>>;
  /** Queue type by id */
  queue?: Maybe<Array<QueueId>>;
  /** Season */
  season?: Maybe<Array<Scalars['Int']>>;
  /** Timestamp in UNIX milliseconds */
  endTime?: Maybe<Scalars['Long']>;
  /** Timestamp in UNIX milliseconds */
  beginTime?: Maybe<Scalars['Long']>;
  /**
   * Last index of game to be returned.
   * 
   * See notes
   */
  endIndex?: Maybe<Scalars['Int']>;
  /**
   * First index of game to be returned.
   * 
   * See notes.
   */
  beginIndex?: Maybe<Scalars['Int']>;
  /**
   * Number of matches to return
   * 
   * #### Note:
   * 
   * Only for TFT
   */
  count?: Maybe<Scalars['Int']>;
};

export type MatchV4Mastery = {
  __typename?: 'MatchV4Mastery';
  masteryId: Scalars['Int'];
  rank: Scalars['Int'];
};

export type MatchV4Match = {
  __typename?: 'MatchV4Match';
  /** Designates the timestamp when champion select ended and the loading screen appeared, NOT when the game timer was at 0:00. */
  gameCreation: Scalars['Float'];
  /** Match duration in seconds. */
  gameDuration: Scalars['Float'];
  gameId: Scalars['Float'];
  /** Please refer to the Game Constants documentation. */
  gameMode: Scalars['String'];
  /** Please refer to the Game Constants documentation. */
  gameType: Scalars['String'];
  /** The major.minor version typically indicates the patch the match was played on. */
  gameVersion: Scalars['String'];
  /** Please refer to the Game Constants documentation. */
  mapId: Scalars['Int'];
  /** Participant identity information. Participant identity information is purposefully excluded for custom games. */
  participantIdentities: Array<Maybe<MatchV4ParticipantIdentity>>;
  /** Participant information. */
  participants: Array<Maybe<MatchV4Participant>>;
  /** Platform where the match was played. */
  platformId: Scalars['String'];
  /** Please refer to the Game Constants documentation. */
  queueId: Scalars['Int'];
  /** Please refer to the Game Constants documentation. */
  seasonId: Scalars['Int'];
  /** Team information. */
  teams: Array<Maybe<MatchV4TeamStats>>;
};

export type MatchV4MatchEvent = {
  __typename?: 'MatchV4MatchEvent';
  afterId?: Maybe<Scalars['Int']>;
  ascendedType?: Maybe<Scalars['String']>;
  assistingParticipantIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  beforeId?: Maybe<Scalars['Int']>;
  buildingType?: Maybe<Scalars['String']>;
  creatorId?: Maybe<Scalars['Int']>;
  eventType?: Maybe<Scalars['String']>;
  itemId?: Maybe<Scalars['Int']>;
  killerId?: Maybe<Scalars['Int']>;
  laneType?: Maybe<Scalars['String']>;
  levelUpType?: Maybe<Scalars['String']>;
  monsterSubType?: Maybe<Scalars['String']>;
  monsterType?: Maybe<Scalars['String']>;
  participantId?: Maybe<Scalars['Int']>;
  pointCaptured?: Maybe<Scalars['String']>;
  position?: Maybe<MatchV4MatchPosition>;
  skillSlot?: Maybe<Scalars['Int']>;
  teamId?: Maybe<Scalars['Int']>;
  timestamp: Scalars['Float'];
  towerType?: Maybe<Scalars['String']>;
  /**
   * (Legal values:  CHAMPION_KILL,  WARD_PLACED,  WARD_KILL,  BUILDING_KILL,
   * ELITE_MONSTER_KILL,  ITEM_PURCHASED,  ITEM_SOLD,  ITEM_DESTROYED,  ITEM_UNDO,
   * SKILL_LEVEL_UP,  ASCENDED_EVENT,  CAPTURE_POINT,  PORO_KING_SUMMON)
   */
  type: Type;
  victimId?: Maybe<Scalars['Int']>;
  wardType?: Maybe<Scalars['String']>;
};

export type MatchV4MatchFrame = {
  __typename?: 'MatchV4MatchFrame';
  events: Array<Maybe<MatchV4MatchEvent>>;
  participantFrames: Scalars['JSON'];
  timestamp: Scalars['Float'];
};

export type MatchV4Matchlist = {
  __typename?: 'MatchV4Matchlist';
  endIndex: Scalars['Int'];
  matches: Array<Maybe<MatchV4MatchReference>>;
  startIndex: Scalars['Int'];
  /**
   * There is a known issue that this field doesn't correctly return the total
   * number of games that match the parameters of the request. Please paginate
   * using beginIndex until you reach the end of a player's matchlist.
   */
  totalGames: Scalars['Int'];
};

export type MatchV4MatchPosition = {
  __typename?: 'MatchV4MatchPosition';
  x: Scalars['Int'];
  y: Scalars['Int'];
};

export type MatchV4MatchReference = {
  __typename?: 'MatchV4MatchReference';
  champion: Scalars['Int'];
  gameId: Scalars['Float'];
  lane: Scalars['String'];
  platformId: Scalars['String'];
  queue: Scalars['Int'];
  role: Scalars['String'];
  season: Scalars['Int'];
  timestamp: Scalars['Float'];
};

export type MatchV4MatchTimeline = {
  __typename?: 'MatchV4MatchTimeline';
  frameInterval: Scalars['Float'];
  frames: Array<Maybe<MatchV4MatchFrame>>;
};

export type MatchV4Participant = {
  __typename?: 'MatchV4Participant';
  championId: Scalars['Int'];
  /**
   * Highest ranked tier achieved for the previous season in a specific subset of
   * queueIds, if any, otherwise null. Used to display border in game loading
   * screen. Please refer to the Ranked Info documentation.
   *              (Legal values:  CHALLENGER,  MASTER,  DIAMOND,  PLATINUM,  GOLD,  SILVER,  BRONZE,  UNRANKED)
   */
  highestAchievedSeasonTier?: Maybe<HighestAchievedSeasonTier>;
  /** List of legacy Mastery information. Not included for matches played with Runes Reforged. */
  masteries?: Maybe<Array<Maybe<MatchV4Mastery>>>;
  participantId: Scalars['Int'];
  /** List of legacy Rune information. Not included for matches played with Runes Reforged. */
  runes?: Maybe<Array<Maybe<MatchV4Rune>>>;
  /** First Summoner Spell id. */
  spell1Id: Scalars['Int'];
  /** Second Summoner Spell id. */
  spell2Id: Scalars['Int'];
  stats: MatchV4ParticipantStats;
  /** 100 for blue side. 200 for red side. */
  teamId: Scalars['Int'];
  timeline: MatchV4ParticipantTimeline;
};

export type MatchV4ParticipantIdentity = {
  __typename?: 'MatchV4ParticipantIdentity';
  participantId: Scalars['Int'];
  player: MatchV4Player;
};

export type MatchV4ParticipantStats = {
  __typename?: 'MatchV4ParticipantStats';
  altarsCaptured?: Maybe<Scalars['Int']>;
  altarsNeutralized?: Maybe<Scalars['Int']>;
  assists: Scalars['Int'];
  champLevel: Scalars['Int'];
  combatPlayerScore?: Maybe<Scalars['Int']>;
  damageDealtToObjectives: Scalars['Float'];
  damageDealtToTurrets: Scalars['Float'];
  damageSelfMitigated: Scalars['Float'];
  deaths: Scalars['Int'];
  doubleKills: Scalars['Int'];
  firstBloodAssist?: Maybe<Scalars['Boolean']>;
  firstBloodKill?: Maybe<Scalars['Boolean']>;
  firstInhibitorAssist?: Maybe<Scalars['Boolean']>;
  firstInhibitorKill?: Maybe<Scalars['Boolean']>;
  firstTowerAssist?: Maybe<Scalars['Boolean']>;
  firstTowerKill?: Maybe<Scalars['Boolean']>;
  goldEarned: Scalars['Int'];
  goldSpent: Scalars['Int'];
  inhibitorKills?: Maybe<Scalars['Int']>;
  item0: Scalars['Int'];
  item1: Scalars['Int'];
  item2: Scalars['Int'];
  item3: Scalars['Int'];
  item4: Scalars['Int'];
  item5: Scalars['Int'];
  item6: Scalars['Int'];
  killingSprees: Scalars['Int'];
  kills: Scalars['Int'];
  largestCriticalStrike: Scalars['Int'];
  largestKillingSpree: Scalars['Int'];
  largestMultiKill: Scalars['Int'];
  longestTimeSpentLiving: Scalars['Int'];
  magicDamageDealt: Scalars['Float'];
  magicDamageDealtToChampions: Scalars['Float'];
  magicalDamageTaken: Scalars['Float'];
  neutralMinionsKilled: Scalars['Int'];
  neutralMinionsKilledEnemyJungle: Scalars['Int'];
  neutralMinionsKilledTeamJungle: Scalars['Int'];
  nodeCapture?: Maybe<Scalars['Int']>;
  nodeCaptureAssist?: Maybe<Scalars['Int']>;
  nodeNeutralize?: Maybe<Scalars['Int']>;
  nodeNeutralizeAssist?: Maybe<Scalars['Int']>;
  objectivePlayerScore?: Maybe<Scalars['Int']>;
  participantId: Scalars['Int'];
  pentaKills: Scalars['Int'];
  /** Primary path keystone rune. */
  perk0?: Maybe<Scalars['Int']>;
  /** Post game rune stats. */
  perk0Var1?: Maybe<Scalars['Int']>;
  /** Post game rune stats. */
  perk0Var2?: Maybe<Scalars['Int']>;
  /** Post game rune stats. */
  perk0Var3?: Maybe<Scalars['Int']>;
  /** Primary path rune. */
  perk1?: Maybe<Scalars['Int']>;
  /** Post game rune stats. */
  perk1Var1?: Maybe<Scalars['Int']>;
  /** Post game rune stats. */
  perk1Var2?: Maybe<Scalars['Int']>;
  /** Post game rune stats. */
  perk1Var3?: Maybe<Scalars['Int']>;
  /** Primary path rune. */
  perk2?: Maybe<Scalars['Int']>;
  /** Post game rune stats. */
  perk2Var1?: Maybe<Scalars['Int']>;
  /** Post game rune stats. */
  perk2Var2?: Maybe<Scalars['Int']>;
  /** Post game rune stats. */
  perk2Var3?: Maybe<Scalars['Int']>;
  /** Primary path rune. */
  perk3?: Maybe<Scalars['Int']>;
  /** Post game rune stats. */
  perk3Var1?: Maybe<Scalars['Int']>;
  /** Post game rune stats. */
  perk3Var2?: Maybe<Scalars['Int']>;
  /** Post game rune stats. */
  perk3Var3?: Maybe<Scalars['Int']>;
  /** Secondary path rune. */
  perk4?: Maybe<Scalars['Int']>;
  /** Post game rune stats. */
  perk4Var1?: Maybe<Scalars['Int']>;
  /** Post game rune stats. */
  perk4Var2?: Maybe<Scalars['Int']>;
  /** Post game rune stats. */
  perk4Var3?: Maybe<Scalars['Int']>;
  /** Secondary path rune. */
  perk5?: Maybe<Scalars['Int']>;
  /** Post game rune stats. */
  perk5Var1?: Maybe<Scalars['Int']>;
  /** Post game rune stats. */
  perk5Var2?: Maybe<Scalars['Int']>;
  /** Post game rune stats. */
  perk5Var3?: Maybe<Scalars['Int']>;
  /** Primary rune path */
  perkPrimaryStyle?: Maybe<Scalars['Int']>;
  /** Secondary rune path */
  perkSubStyle?: Maybe<Scalars['Int']>;
  physicalDamageDealt: Scalars['Float'];
  physicalDamageDealtToChampions: Scalars['Float'];
  physicalDamageTaken: Scalars['Float'];
  playerScore0?: Maybe<Scalars['Int']>;
  playerScore1?: Maybe<Scalars['Int']>;
  playerScore2?: Maybe<Scalars['Int']>;
  playerScore3?: Maybe<Scalars['Int']>;
  playerScore4?: Maybe<Scalars['Int']>;
  playerScore5?: Maybe<Scalars['Int']>;
  playerScore6?: Maybe<Scalars['Int']>;
  playerScore7?: Maybe<Scalars['Int']>;
  playerScore8?: Maybe<Scalars['Int']>;
  playerScore9?: Maybe<Scalars['Int']>;
  quadraKills: Scalars['Int'];
  sightWardsBoughtInGame?: Maybe<Scalars['Int']>;
  teamObjective?: Maybe<Scalars['Int']>;
  timeCCingOthers: Scalars['Float'];
  totalDamageDealt: Scalars['Float'];
  totalDamageDealtToChampions: Scalars['Float'];
  totalDamageTaken: Scalars['Float'];
  totalHeal: Scalars['Float'];
  totalMinionsKilled: Scalars['Int'];
  totalPlayerScore?: Maybe<Scalars['Int']>;
  totalScoreRank?: Maybe<Scalars['Int']>;
  totalTimeCrowdControlDealt: Scalars['Int'];
  totalUnitsHealed: Scalars['Int'];
  tripleKills: Scalars['Int'];
  trueDamageDealt: Scalars['Float'];
  trueDamageDealtToChampions: Scalars['Float'];
  trueDamageTaken: Scalars['Float'];
  turretKills?: Maybe<Scalars['Int']>;
  unrealKills: Scalars['Int'];
  visionScore?: Maybe<Scalars['Float']>;
  visionWardsBoughtInGame: Scalars['Int'];
  wardsKilled: Scalars['Int'];
  wardsPlaced?: Maybe<Scalars['Int']>;
  win: Scalars['Boolean'];
};

export type MatchV4ParticipantTimeline = {
  __typename?: 'MatchV4ParticipantTimeline';
  /** Creeps for a specified period. */
  creepsPerMinDeltas?: Maybe<Scalars['JSON']>;
  /** Creep score difference versus the calculated lane opponent(s) for a specified period. */
  csDiffPerMinDeltas?: Maybe<Scalars['JSON']>;
  /** Damage taken difference versus the calculated lane opponent(s) for a specified period. */
  damageTakenDiffPerMinDeltas?: Maybe<Scalars['JSON']>;
  /** Damage taken for a specified period. */
  damageTakenPerMinDeltas?: Maybe<Scalars['JSON']>;
  /** Gold for a specified period. */
  goldPerMinDeltas?: Maybe<Scalars['JSON']>;
  /**
   * Participant's calculated lane. MID and BOT are legacy values.
   *              (Legal values:  MID,  MIDDLE,  TOP,  JUNGLE,  BOT,  BOTTOM)
   */
  lane?: Maybe<Lane>;
  participantId?: Maybe<Scalars['Int']>;
  /**
   * Participant's calculated role.
   *              (Legal values:  DUO,  NONE,  SOLO,  DUO_CARRY,  DUO_SUPPORT)
   */
  role?: Maybe<Role2>;
  /** Experience difference versus the calculated lane opponent(s) for a specified period. */
  xpDiffPerMinDeltas?: Maybe<Scalars['JSON']>;
  /** Experience change for a specified period. */
  xpPerMinDeltas?: Maybe<Scalars['JSON']>;
};

export type MatchV4Player = {
  __typename?: 'MatchV4Player';
  /** Player's original accountId. */
  accountId: Scalars['String'];
  /** Player's current accountId when the match was played. */
  currentAccountId: Scalars['String'];
  /** Player's current platformId when the match was played. */
  currentPlatformId: Scalars['String'];
  matchHistoryUri: Scalars['String'];
  /** Player's original platformId. */
  platformId: Scalars['String'];
  profileIcon: Scalars['Int'];
  /** Player's summonerId (Encrypted) */
  summonerId: Scalars['String'];
  summonerName: Scalars['String'];
};

export type MatchV4Rune = {
  __typename?: 'MatchV4Rune';
  rank: Scalars['Int'];
  runeId: Scalars['Int'];
};

export type MatchV4TeamBans = {
  __typename?: 'MatchV4TeamBans';
  /** Banned championId. */
  championId: Scalars['Int'];
  /** Turn during which the champion was banned. */
  pickTurn: Scalars['Int'];
};

export type MatchV4TeamStats = {
  __typename?: 'MatchV4TeamStats';
  /** If match queueId has a draft, contains banned champion data, otherwise empty. */
  bans: Array<Maybe<MatchV4TeamBans>>;
  /** Number of times the team killed Baron. */
  baronKills: Scalars['Int'];
  /** For Dominion matches, specifies the points the team had at game end. */
  dominionVictoryScore: Scalars['Int'];
  /** Number of times the team killed Dragon. */
  dragonKills: Scalars['Int'];
  /** Flag indicating whether or not the team scored the first Baron kill. */
  firstBaron: Scalars['Boolean'];
  /** Flag indicating whether or not the team scored the first blood. */
  firstBlood: Scalars['Boolean'];
  /** Flag indicating whether or not the team scored the first Dragon kill. */
  firstDragon: Scalars['Boolean'];
  /** Flag indicating whether or not the team destroyed the first inhibitor. */
  firstInhibitor: Scalars['Boolean'];
  /** Flag indicating whether or not the team scored the first Rift Herald kill. */
  firstRiftHerald: Scalars['Boolean'];
  /** Flag indicating whether or not the team destroyed the first tower. */
  firstTower: Scalars['Boolean'];
  /** Number of inhibitors the team destroyed. */
  inhibitorKills: Scalars['Int'];
  /** Number of times the team killed Rift Herald. */
  riftHeraldKills: Scalars['Int'];
  /** 100 for blue side. 200 for red side. */
  teamId: Scalars['Int'];
  /** Number of towers the team destroyed. */
  towerKills: Scalars['Int'];
  /** Number of times the team killed Vilemaw. */
  vilemawKills: Scalars['Int'];
  /**
   * String indicating whether or not the team won. There are only two values visibile in public match history.
   *              (Legal values:  Fail,  Win)
   */
  win: Win;
};

export enum PickType {
  BlindPick = 'BLIND_PICK',
  DraftMode = 'DRAFT_MODE',
  AllRandom = 'ALL_RANDOM',
  TournamentDraft = 'TOURNAMENT_DRAFT'
}

export enum Position {
  Unselected = 'UNSELECTED',
  Fill = 'FILL',
  Top = 'TOP',
  Jungle = 'JUNGLE',
  Middle = 'MIDDLE',
  Bottom = 'BOTTOM',
  Utility = 'UTILITY'
}

export type Query = {
  __typename?: 'Query';
  info: Info;
  summoner?: Maybe<SummonerV4Summoner>;
  match?: Maybe<Match>;
  rankedList: Array<LeagueV4LeagueList>;
  rankedLeague: LeagueV4LeagueEntry;
  tournament?: Maybe<TournamentV4TournamentCode>;
  featured_games?: Maybe<SpectatorV4FeaturedGames>;
  clash?: Maybe<Scalars['String']>;
};


export type QuerySummonerArgs = {
  region: RegionInput;
  encryptedAccountId?: Maybe<Scalars['String']>;
  summonerName?: Maybe<Scalars['String']>;
  encryptedPUUID?: Maybe<Scalars['String']>;
  encryptedSummonerId?: Maybe<Scalars['String']>;
};


export type QueryMatchArgs = {
  region: RegionInput;
  matchId: Scalars['Long'];
  game: Game;
};


export type QueryRankedListArgs = {
  region: RegionInput;
  queue: Queue;
  tier: LowerTier;
  division?: Maybe<Division>;
  page?: Maybe<Scalars['Int']>;
  game: Game;
};


export type QueryRankedLeagueArgs = {
  tier?: Maybe<Tier>;
  leagueId?: Maybe<Scalars['String']>;
  game: Game;
};


export type QueryTournamentArgs = {
  code: Scalars['String'];
};


export type QueryFeatured_GamesArgs = {
  game?: Maybe<Game>;
};

export enum Queue {
  RankedSolo_5X5 = 'RANKED_SOLO_5X5',
  RankedTft = 'RANKED_TFT',
  RankedFlexSr = 'RANKED_FLEX_SR',
  RankedFlexTt = 'RANKED_FLEX_TT'
}

export enum Queue2 {
  RankedSolo_5X5 = 'RANKED_SOLO_5X5',
  RankedFlexSr = 'RANKED_FLEX_SR',
  RankedFlexTt = 'RANKED_FLEX_TT'
}

/** League Game Queue Ids */
export enum QueueId {
  Q420 = 'q420',
  Q440 = 'q440'
}

export enum Region {
  Br = 'BR',
  Eune = 'EUNE',
  Euw = 'EUW',
  Jp = 'JP',
  Lan = 'LAN',
  Las = 'LAS',
  Na = 'NA',
  Oce = 'OCE',
  Pbe = 'PBE',
  Ru = 'RU',
  Tr = 'TR'
}

export enum Region2 {
  Br = 'BR',
  Eune = 'EUNE',
  Euw = 'EUW',
  Jp = 'JP',
  Lan = 'LAN',
  Las = 'LAS',
  Na = 'NA',
  Oce = 'OCE',
  Pbe = 'PBE',
  Ru = 'RU',
  Tr = 'TR'
}

export enum RegionInput {
  Br1 = 'br1',
  Eun1 = 'eun1',
  Euw1 = 'euw1',
  Jp1 = 'jp1',
  Kr = 'kr',
  La1 = 'la1',
  La2 = 'la2',
  Na1 = 'na1',
  Oc1 = 'oc1',
  Tr1 = 'tr1',
  Ru = 'ru',
  Americas = 'americas',
  Asia = 'asia',
  Europe = 'europe'
}

export enum Role {
  Captain = 'CAPTAIN',
  Member = 'MEMBER'
}

export enum Role2 {
  Duo = 'DUO',
  None = 'NONE',
  Solo = 'SOLO',
  DuoCarry = 'DUO_CARRY',
  DuoSupport = 'DUO_SUPPORT'
}

export enum SpectatorType {
  None = 'NONE',
  Lobbyonly = 'LOBBYONLY',
  All = 'ALL'
}

export type SpectatorV4BannedChampion = {
  __typename?: 'SpectatorV4BannedChampion';
  /** The ID of the banned champion */
  championId: Scalars['Float'];
  /** The turn during which the champion was banned */
  pickTurn: Scalars['Int'];
  /** The ID of the team that banned the champion */
  teamId: Scalars['Float'];
};

export type SpectatorV4CurrentGameInfo = {
  __typename?: 'SpectatorV4CurrentGameInfo';
  /** Banned champion information */
  bannedChampions: Array<Maybe<SpectatorV4BannedChampion>>;
  /** The ID of the game */
  gameId: Scalars['Float'];
  /** The amount of time in seconds that has passed since the game started */
  gameLength: Scalars['Float'];
  /** The game mode */
  gameMode: Scalars['String'];
  /** The queue type (queue types are documented on the Game Constants page) */
  gameQueueConfigId?: Maybe<Scalars['Float']>;
  /** The game start time represented in epoch milliseconds */
  gameStartTime: Scalars['Float'];
  /** The game type */
  gameType: Scalars['String'];
  /** The ID of the map */
  mapId: Scalars['Float'];
  observers: SpectatorV4Observer;
  /** The participant information */
  participants: Array<Maybe<SpectatorV4CurrentGameParticipant>>;
  /** The ID of the platform on which the game is being played */
  platformId: Scalars['String'];
};

export type SpectatorV4CurrentGameParticipant = {
  __typename?: 'SpectatorV4CurrentGameParticipant';
  /** Flag indicating whether or not this participant is a bot */
  bot: Scalars['Boolean'];
  /** The ID of the champion played by this participant */
  championId: Scalars['Float'];
  /** List of Game Customizations */
  gameCustomizationObjects: Array<Maybe<SpectatorV4GameCustomizationObject>>;
  perks: SpectatorV4Perks;
  /** The ID of the profile icon used by this participant */
  profileIconId: Scalars['Float'];
  /** The ID of the first summoner spell used by this participant */
  spell1Id: Scalars['Float'];
  /** The ID of the second summoner spell used by this participant */
  spell2Id: Scalars['Float'];
  /** The encrypted summoner ID of this participant */
  summonerId: Scalars['String'];
  /** The summoner name of this participant */
  summonerName: Scalars['String'];
  /** The team ID of this participant, indicating the participant's team */
  teamId: Scalars['Float'];
};

export type SpectatorV4FeaturedGameInfo = {
  __typename?: 'SpectatorV4FeaturedGameInfo';
  /** Banned champion information */
  bannedChampions: Array<Maybe<SpectatorV4BannedChampion>>;
  /** The ID of the game */
  gameId: Scalars['Float'];
  /** The amount of time in seconds that has passed since the game started */
  gameLength: Scalars['Float'];
  /**
   * The game mode
   *              (Legal values:  CLASSIC,  ODIN,  ARAM,  TUTORIAL,  ONEFORALL,  ASCENSION,  FIRSTBLOOD,  KINGPORO)
   */
  gameMode: GameMode;
  /** The queue type (queue types are documented on the Game Constants page) */
  gameQueueConfigId: Scalars['Float'];
  /** The game start time represented in epoch milliseconds */
  gameStartTime: Scalars['Float'];
  /**
   * The game type
   *              (Legal values:  CUSTOM_GAME,  MATCHED_GAME,  TUTORIAL_GAME)
   */
  gameType: GameType;
  /** The ID of the map */
  mapId: Scalars['Float'];
  observers: SpectatorV4Observer;
  /** The participant information */
  participants: Array<Maybe<SpectatorV4Participant>>;
  /** The ID of the platform on which the game is being played */
  platformId: Scalars['String'];
};

export type SpectatorV4FeaturedGames = {
  __typename?: 'SpectatorV4FeaturedGames';
  /** The suggested interval to wait before requesting FeaturedGames again */
  clientRefreshInterval: Scalars['Float'];
  /** The list of featured games */
  gameList: Array<Maybe<SpectatorV4FeaturedGameInfo>>;
};

export type SpectatorV4GameCustomizationObject = {
  __typename?: 'SpectatorV4GameCustomizationObject';
  /** Category identifier for Game Customization */
  category: Scalars['String'];
  /** Game Customization content */
  content: Scalars['String'];
};

export type SpectatorV4Observer = {
  __typename?: 'SpectatorV4Observer';
  /** Key used to decrypt the spectator grid game data for playback */
  encryptionKey: Scalars['String'];
};

export type SpectatorV4Participant = {
  __typename?: 'SpectatorV4Participant';
  /** Flag indicating whether or not this participant is a bot */
  bot: Scalars['Boolean'];
  /** The ID of the champion played by this participant */
  championId: Scalars['Float'];
  /** The ID of the profile icon used by this participant */
  profileIconId: Scalars['Float'];
  /** The ID of the first summoner spell used by this participant */
  spell1Id: Scalars['Float'];
  /** The ID of the second summoner spell used by this participant */
  spell2Id: Scalars['Float'];
  /** The summoner name of this participant */
  summonerName: Scalars['String'];
  /** The team ID of this participant, indicating the participant's team */
  teamId: Scalars['Float'];
};

export type SpectatorV4Perks = {
  __typename?: 'SpectatorV4Perks';
  /** IDs of the perks/runes assigned. */
  perkIds: Array<Maybe<Scalars['Float']>>;
  /** Primary runes path */
  perkStyle: Scalars['Float'];
  /** Secondary runes path */
  perkSubStyle: Scalars['Float'];
};

/** represents a summoner */
export type SummonerV4Summoner = {
  __typename?: 'SummonerV4Summoner';
  /** Encrypted account ID. Max length 56 characters. */
  accountId: Scalars['String'];
  /** Get current game information for the given summoner. */
  activeMatch?: Maybe<SpectatorV4CurrentGameInfo>;
  /** Get champion mastery information of this summoner */
  championMastery: ChampionMastery;
  /** Get an array of clash registrations for this summoner. */
  clash: Array<ClashV1PlayerRegistration>;
  /** Encrypted summoner ID. Max length 63 characters. */
  id: Scalars['String'];
  /**
   * Get matchlist for games played by this summoner and game title and filtered using given filter parameters, if any.
   * 
   * ##### Implementation Notes
   * A number of optional parameters are provided for filtering. It is up to the
   * caller to ensure that the combination of filter parameters provided is valid
   * for the requested account, otherwise, no matches may be returned.
   * 
   * If beginIndex is specified, but not endIndex, then endIndex defaults to
   * beginIndex+100. If endIndex is specified, but not beginIndex, then beginIndex
   * defaults to 0. If both are specified, then endIndex must be greater than
   * beginIndex. The maximum range allowed is 100, otherwise a 400 error code is returned.
   * 
   * If beginTime is specified, but not endTime, then endTime defaults to the the
   * current unix timestamp in milliseconds (the maximum time range limitation is
   * not observed in this specific case). If endTime is specified, but not
   * beginTime, then beginTime defaults to the start of the account's match history
   * returning a 400 due to the maximum time range limitation. If both are
   * specified, then endTime should be greater than beginTime. The maximum time
   * range allowed is one week, otherwise a 400 error code is returned.
   * 
   * If game specified is League, filter ignores count
   * 
   * If game specified is TFT, filter only uses count
   */
  matchList?: Maybe<MatchList>;
  /** Summoner name. */
  name: Scalars['String'];
  /** ID of the summoner icon associated with the summoner. */
  profileIconId: Scalars['Int'];
  /** Encrypted PUUID. Exact length of 78 characters. */
  puuid: Scalars['String'];
  /** Get ranked details of this summoner by queue. */
  rank?: Maybe<LeagueV4LeagueEntry>;
  region: RegionInput;
  /**
   * Date summoner was last modified specified as epoch milliseconds. The following
   * events will update this timestamp: summoner name change, summoner level
   * change, or profile icon change.
   */
  revisionDate: Scalars['Float'];
  /** Summoner level associated with the summoner. */
  summonerLevel: Scalars['Float'];
};


/** represents a summoner */
export type SummonerV4SummonerActiveMatchArgs = {
  game: Game;
};


/** represents a summoner */
export type SummonerV4SummonerMatchListArgs = {
  game: Game;
  filter?: Maybe<MatchListFilterInput>;
};


/** represents a summoner */
export type SummonerV4SummonerRankArgs = {
  queue: AllRankedQueues;
};

export type TftLeagueV1LeagueEntry = {
  __typename?: 'TftLeagueV1LeagueEntry';
  freshBlood: Scalars['Boolean'];
  hotStreak: Scalars['Boolean'];
  inactive: Scalars['Boolean'];
  leagueId: Scalars['String'];
  leaguePoints: Scalars['Int'];
  /** Second through eighth placement. */
  losses: Scalars['Int'];
  miniSeries?: Maybe<TftLeagueV1MiniSeries>;
  queueType: Scalars['String'];
  rank: Scalars['String'];
  /** Player's encrypted summonerId. */
  summonerId: Scalars['String'];
  summonerName: Scalars['String'];
  tier: Scalars['String'];
  veteran: Scalars['Boolean'];
  /** First placement. */
  wins: Scalars['Int'];
};

export type TftLeagueV1LeagueItem = {
  __typename?: 'TftLeagueV1LeagueItem';
  freshBlood: Scalars['Boolean'];
  hotStreak: Scalars['Boolean'];
  inactive: Scalars['Boolean'];
  leaguePoints: Scalars['Int'];
  /** Second through eighth placement. */
  losses: Scalars['Int'];
  miniSeries?: Maybe<TftLeagueV1MiniSeries>;
  rank: Scalars['String'];
  /** Player's encrypted summonerId. */
  summonerId: Scalars['String'];
  summonerName: Scalars['String'];
  veteran: Scalars['Boolean'];
  /** First placement. */
  wins: Scalars['Int'];
};

export type TftLeagueV1LeagueList = {
  __typename?: 'TftLeagueV1LeagueList';
  entries: Array<Maybe<TftLeagueV1LeagueItem>>;
  leagueId: Scalars['String'];
  name: Scalars['String'];
  queue: Scalars['String'];
  tier: Scalars['String'];
};

export type TftLeagueV1MiniSeries = {
  __typename?: 'TftLeagueV1MiniSeries';
  losses: Scalars['Int'];
  progress: Scalars['String'];
  target: Scalars['Int'];
  wins: Scalars['Int'];
};

/** TFT matchlist return type. Returns a list of match ids */
export type TftMatchIdList = {
  __typename?: 'TFTMatchIdList';
  matchIds: Array<Scalars['String']>;
};

export type TftMatchV1Companion = {
  __typename?: 'TftMatchV1Companion';
  contentID: Scalars['String'];
  skinID: Scalars['Int'];
  species: Scalars['String'];
};

export type TftMatchV1Info = {
  __typename?: 'TftMatchV1Info';
  /** Unix timestamp. */
  gameDatetime: Scalars['Float'];
  /** Game length in seconds. */
  gameLength: Scalars['Float'];
  /** Game variation key. Game variations documented in TFT static data. */
  gameVariation?: Maybe<Scalars['String']>;
  /** Game client version. */
  gameVersion: Scalars['String'];
  /** Participants. */
  participants: Array<Maybe<TftMatchV1Participant>>;
  /** Please refer to the League of Legends documentation. */
  queueId: Scalars['Int'];
  /** Teamfight Tactics set number. */
  tftSetNumber: Scalars['Int'];
};

export type TftMatchV1Match = {
  __typename?: 'TftMatchV1Match';
  info: TftMatchV1Info;
  metadata: TftMatchV1Metadata;
};

export type TftMatchV1Metadata = {
  __typename?: 'TftMatchV1Metadata';
  /** Match data version. */
  dataVersion: Scalars['String'];
  /** Match id. */
  matchId: Scalars['String'];
  /** A list of encrypted participant PUUIDs. */
  participants: Array<Maybe<Scalars['String']>>;
};

export type TftMatchV1Participant = {
  __typename?: 'TftMatchV1Participant';
  companion: TftMatchV1Companion;
  /** Gold left after participant was eliminated. */
  goldLeft: Scalars['Int'];
  /** The round the participant was eliminated in. Note: If the player was eliminated in stage 2-1 their last_round would be 5. */
  lastRound: Scalars['Int'];
  /** Participant Little Legend level. Note: This is not the number of active units. */
  level: Scalars['Int'];
  /** Participant placement upon elimination. */
  placement: Scalars['Int'];
  /** Number of players the participant eliminated. */
  playersEliminated: Scalars['Int'];
  /** Encrypted PUUID. */
  puuid: Scalars['String'];
  /** The number of seconds before the participant was eliminated. */
  timeEliminated: Scalars['Float'];
  /** Damage the participant dealt to other players. */
  totalDamageToPlayers: Scalars['Int'];
  /** A complete list of traits for the participant's active units. */
  traits: Array<Maybe<TftMatchV1Trait>>;
  /** A list of active units for the participant. */
  units: Array<Maybe<TftMatchV1Unit>>;
};

export type TftMatchV1Trait = {
  __typename?: 'TftMatchV1Trait';
  /** Trait name. */
  name: Scalars['String'];
  /** Number of units with this trait. */
  numUnits: Scalars['Int'];
  /** Current active tier for the trait. */
  tierCurrent: Scalars['Int'];
  /** Total tiers for the trait. */
  tierTotal?: Maybe<Scalars['Int']>;
};

export type TftMatchV1Unit = {
  __typename?: 'TftMatchV1Unit';
  /** This field was introduced in patch 9.22 with data_version 2. */
  characterId: Scalars['String'];
  /** A list of the unit's items. Please refer to the Teamfight Tactics documentation for item ids. */
  items: Array<Maybe<Scalars['Int']>>;
  /** Unit name. */
  name: Scalars['String'];
  /** Unit rarity. This doesn't equate to the unit cost. */
  rarity: Scalars['Int'];
  /** Unit tier. */
  tier: Scalars['Int'];
};

/** represents a summoner */
export type TftSummonerV1Summoner = {
  __typename?: 'TftSummonerV1Summoner';
  /** Encrypted account ID. Max length 56 characters. */
  accountId: Scalars['String'];
  /** Encrypted summoner ID. Max length 63 characters. */
  id: Scalars['String'];
  /** Summoner name. */
  name: Scalars['String'];
  /** ID of the summoner icon associated with the summoner. */
  profileIconId: Scalars['Int'];
  /** Encrypted PUUID. Exact length of 78 characters. */
  puuid: Scalars['String'];
  /**
   * Date summoner was last modified specified as epoch milliseconds. The following
   * events will update this timestamp: summoner name change, summoner level
   * change, or profile icon change.
   */
  revisionDate: Scalars['Float'];
  /** Summoner level associated with the summoner. */
  summonerLevel: Scalars['Float'];
};

export enum Tier {
  Challenger = 'CHALLENGER',
  Grandmaster = 'GRANDMASTER',
  Master = 'MASTER',
  Diamond = 'DIAMOND',
  Platinum = 'PLATINUM',
  Gold = 'GOLD',
  Silver = 'SILVER',
  Bronze = 'BRONZE',
  Iron = 'IRON'
}

export enum Tier2 {
  Diamond = 'DIAMOND',
  Platinum = 'PLATINUM',
  Gold = 'GOLD',
  Silver = 'SILVER',
  Bronze = 'BRONZE',
  Iron = 'IRON'
}

export enum Tier3 {
  Diamond = 'DIAMOND',
  Platinum = 'PLATINUM',
  Gold = 'GOLD',
  Silver = 'SILVER',
  Bronze = 'BRONZE',
  Iron = 'IRON'
}

export type TournamentStubV4LobbyEvent = {
  __typename?: 'TournamentStubV4LobbyEvent';
  /** The type of event that was triggered */
  eventType: Scalars['String'];
  /** The summonerId that triggered the event (Encrypted) */
  summonerId: Scalars['String'];
  /** Timestamp from the event */
  timestamp: Scalars['String'];
};

export type TournamentStubV4LobbyEventDtoWrapper = {
  __typename?: 'TournamentStubV4LobbyEventDTOWrapper';
  eventList: Array<Maybe<TournamentStubV4LobbyEvent>>;
};

export type TournamentStubV4ProviderRegistrationParametersInput = {
  /**
   * The region in which the provider will be running tournaments.
   *              (Legal values:  BR,  EUNE,  EUW,  JP,  LAN,  LAS,  NA,  OCE,  PBE,  RU,  TR)
   */
  region: Region;
  /**
   * The provider's callback URL to which tournament game results in this region
   * should be posted. The URL must be well-formed, use the http or https protocol,
   * and use the default port for the protocol (http URLs must use port 80, https
   * URLs must use port 443).
   */
  url: Scalars['String'];
};

export type TournamentStubV4TournamentCodeParametersInput = {
  /**
   * Optional list of encrypted summonerIds in order to validate the players
   * eligible to join the lobby. NOTE: We currently do not enforce participants at
   * the team level, but rather the aggregate of teamOne and teamTwo. We may add
   * the ability to enforce at the team level in the future.
   */
  allowedSummonerIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * The map type of the game.
   *              (Legal values:  SUMMONERS_RIFT,  TWISTED_TREELINE,  HOWLING_ABYSS)
   */
  mapType: MapType;
  /**
   * Optional string that may contain any data in any format, if specified at all.
   * Used to denote any custom information about the game.
   */
  metadata?: Maybe<Scalars['String']>;
  /**
   * The pick type of the game.
   *              (Legal values:  BLIND_PICK,  DRAFT_MODE,  ALL_RANDOM,  TOURNAMENT_DRAFT)
   */
  pickType: PickType;
  /**
   * The spectator type of the game.
   *              (Legal values:  NONE,  LOBBYONLY,  ALL)
   */
  spectatorType: SpectatorType;
  /** The team size of the game. Valid values are 1-5. */
  teamSize: Scalars['Int'];
};

export type TournamentStubV4TournamentRegistrationParametersInput = {
  /** The optional name of the tournament. */
  name?: Maybe<Scalars['String']>;
  /** The provider ID to specify the regional registered provider data to associate this tournament. */
  providerId: Scalars['Int'];
};

export type TournamentV4LobbyEvent = {
  __typename?: 'TournamentV4LobbyEvent';
  /** The type of event that was triggered */
  eventType: Scalars['String'];
  /** The summonerId that triggered the event (Encrypted) */
  summonerId: Scalars['String'];
  /** Timestamp from the event */
  timestamp: Scalars['String'];
};

export type TournamentV4LobbyEventDtoWrapper = {
  __typename?: 'TournamentV4LobbyEventDTOWrapper';
  eventList: Array<Maybe<TournamentV4LobbyEvent>>;
};

export type TournamentV4ProviderRegistrationParametersInput = {
  /**
   * The region in which the provider will be running tournaments.
   *              (Legal values:  BR,  EUNE,  EUW,  JP,  LAN,  LAS,  NA,  OCE,  PBE,  RU,  TR)
   */
  region: Region;
  /**
   * The provider's callback URL to which tournament game results in this region
   * should be posted. The URL must be well-formed, use the http or https protocol,
   * and use the default port for the protocol (http URLs must use port 80, https
   * URLs must use port 443).
   */
  url: Scalars['String'];
};

export type TournamentV4TournamentCode = {
  __typename?: 'TournamentV4TournamentCode';
  /** The tournament code. */
  code: Scalars['String'];
  /** The tournament code's ID. */
  id: Scalars['Int'];
  lobbyEvents?: Maybe<TournamentV4LobbyEvent>;
  /** The lobby name for the tournament code game. */
  lobbyName: Scalars['String'];
  /** The game map for the tournament code game */
  map: Scalars['String'];
  matchDetails?: Maybe<MatchV4Match>;
  /** The metadata for tournament code. */
  metaData: Scalars['String'];
  /** The summonerIds of the participants (Encrypted) */
  participants: Array<Maybe<Scalars['String']>>;
  /** The password for the tournament code game. */
  password: Scalars['String'];
  /** The pick mode for tournament code game. */
  pickType: Scalars['String'];
  /** The provider's ID. */
  providerId: Scalars['Int'];
  /**
   * The tournament code's region.
   *              (Legal values:  BR,  EUNE,  EUW,  JP,  LAN,  LAS,  NA,  OCE,  PBE,  RU,  TR)
   */
  region: Region2;
  /** The spectator mode for the tournament code game. */
  spectators: Scalars['String'];
  /** The team size for the tournament code game. */
  teamSize: Scalars['Int'];
  /** The tournament's ID. */
  tournamentId: Scalars['Int'];
};


export type TournamentV4TournamentCodeMatchDetailsArgs = {
  matchId: Scalars['Float'];
};

export type TournamentV4TournamentCodeParametersInput = {
  /**
   * Optional list of encrypted summonerIds in order to validate the players
   * eligible to join the lobby. NOTE: We currently do not enforce participants at
   * the team level, but rather the aggregate of teamOne and teamTwo. We may add
   * the ability to enforce at the team level in the future.
   */
  allowedSummonerIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * The map type of the game.
   *              (Legal values:  SUMMONERS_RIFT,  TWISTED_TREELINE,  HOWLING_ABYSS)
   */
  mapType: MapType;
  /**
   * Optional string that may contain any data in any format, if specified at all.
   * Used to denote any custom information about the game.
   */
  metadata?: Maybe<Scalars['String']>;
  /**
   * The pick type of the game.
   *              (Legal values:  BLIND_PICK,  DRAFT_MODE,  ALL_RANDOM,  TOURNAMENT_DRAFT)
   */
  pickType: PickType;
  /**
   * The spectator type of the game.
   *              (Legal values:  NONE,  LOBBYONLY,  ALL)
   */
  spectatorType: SpectatorType;
  /** The team size of the game. Valid values are 1-5. */
  teamSize: Scalars['Int'];
};

export type TournamentV4TournamentRegistrationParametersInput = {
  /** The optional name of the tournament. */
  name?: Maybe<Scalars['String']>;
  /** The provider ID to specify the regional registered provider data to associate this tournament. */
  providerId: Scalars['Int'];
};

export enum Type {
  ChampionKill = 'CHAMPION_KILL',
  WardPlaced = 'WARD_PLACED',
  WardKill = 'WARD_KILL',
  BuildingKill = 'BUILDING_KILL',
  EliteMonsterKill = 'ELITE_MONSTER_KILL',
  ItemPurchased = 'ITEM_PURCHASED',
  ItemSold = 'ITEM_SOLD',
  ItemDestroyed = 'ITEM_DESTROYED',
  ItemUndo = 'ITEM_UNDO',
  SkillLevelUp = 'SKILL_LEVEL_UP',
  AscendedEvent = 'ASCENDED_EVENT',
  CapturePoint = 'CAPTURE_POINT',
  PoroKingSummon = 'PORO_KING_SUMMON'
}

export enum UpperTier {
  Challenger = 'CHALLENGER',
  Grandmaster = 'GRANDMASTER',
  Master = 'MASTER'
}

export enum Win {
  Fail = 'FAIL',
  Win = 'WIN'
}



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  Info: ResolverTypeWrapper<Info>;
  String: ResolverTypeWrapper<Scalars['String']>;
  RegionInput: RegionInput;
  SummonerV4Summoner: ResolverTypeWrapper<Omit<SummonerV4Summoner, 'matchList'> & { matchList?: Maybe<ResolversTypes['MatchList']> }>;
  Game: Game;
  SpectatorV4CurrentGameInfo: ResolverTypeWrapper<SpectatorV4CurrentGameInfo>;
  SpectatorV4BannedChampion: ResolverTypeWrapper<SpectatorV4BannedChampion>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  SpectatorV4Observer: ResolverTypeWrapper<SpectatorV4Observer>;
  SpectatorV4CurrentGameParticipant: ResolverTypeWrapper<SpectatorV4CurrentGameParticipant>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  SpectatorV4GameCustomizationObject: ResolverTypeWrapper<SpectatorV4GameCustomizationObject>;
  SpectatorV4Perks: ResolverTypeWrapper<SpectatorV4Perks>;
  ChampionMastery: ResolverTypeWrapper<ChampionMastery>;
  ChampionMasteryV4ChampionMastery: ResolverTypeWrapper<ChampionMasteryV4ChampionMastery>;
  ClashV1PlayerRegistration: ResolverTypeWrapper<ClashV1PlayerRegistration>;
  Position: Position;
  Role: Role;
  ClashV1Team: ResolverTypeWrapper<ClashV1Team>;
  ClashV1Player: ResolverTypeWrapper<ClashV1Player>;
  MatchListFilterInput: MatchListFilterInput;
  QueueId: QueueId;
  Long: ResolverTypeWrapper<Scalars['Long']>;
  MatchList: ResolversTypes['MatchV4Matchlist'] | ResolversTypes['TFTMatchIdList'];
  MatchV4Matchlist: ResolverTypeWrapper<MatchV4Matchlist>;
  MatchV4MatchReference: ResolverTypeWrapper<MatchV4MatchReference>;
  TFTMatchIdList: ResolverTypeWrapper<TftMatchIdList>;
  AllRankedQueues: AllRankedQueues;
  LeagueV4LeagueEntry: ResolverTypeWrapper<LeagueV4LeagueEntry>;
  LeagueV4MiniSeries: ResolverTypeWrapper<LeagueV4MiniSeries>;
  Match: ResolversTypes['MatchV4Match'] | ResolversTypes['TftMatchV1Match'];
  MatchV4Match: ResolverTypeWrapper<MatchV4Match>;
  MatchV4ParticipantIdentity: ResolverTypeWrapper<MatchV4ParticipantIdentity>;
  MatchV4Player: ResolverTypeWrapper<MatchV4Player>;
  MatchV4Participant: ResolverTypeWrapper<MatchV4Participant>;
  HighestAchievedSeasonTier: HighestAchievedSeasonTier;
  MatchV4Mastery: ResolverTypeWrapper<MatchV4Mastery>;
  MatchV4Rune: ResolverTypeWrapper<MatchV4Rune>;
  MatchV4ParticipantStats: ResolverTypeWrapper<MatchV4ParticipantStats>;
  MatchV4ParticipantTimeline: ResolverTypeWrapper<MatchV4ParticipantTimeline>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  Lane: Lane;
  Role2: Role2;
  MatchV4TeamStats: ResolverTypeWrapper<MatchV4TeamStats>;
  MatchV4TeamBans: ResolverTypeWrapper<MatchV4TeamBans>;
  Win: Win;
  TftMatchV1Match: ResolverTypeWrapper<TftMatchV1Match>;
  TftMatchV1Info: ResolverTypeWrapper<TftMatchV1Info>;
  TftMatchV1Participant: ResolverTypeWrapper<TftMatchV1Participant>;
  TftMatchV1Companion: ResolverTypeWrapper<TftMatchV1Companion>;
  TftMatchV1Trait: ResolverTypeWrapper<TftMatchV1Trait>;
  TftMatchV1Unit: ResolverTypeWrapper<TftMatchV1Unit>;
  TftMatchV1Metadata: ResolverTypeWrapper<TftMatchV1Metadata>;
  Queue: Queue;
  LowerTier: LowerTier;
  Division: Division;
  LeagueV4LeagueList: ResolverTypeWrapper<LeagueV4LeagueList>;
  LeagueV4LeagueItem: ResolverTypeWrapper<LeagueV4LeagueItem>;
  Tier: Tier;
  TournamentV4TournamentCode: ResolverTypeWrapper<TournamentV4TournamentCode>;
  TournamentV4LobbyEvent: ResolverTypeWrapper<TournamentV4LobbyEvent>;
  Region2: Region2;
  SpectatorV4FeaturedGames: ResolverTypeWrapper<SpectatorV4FeaturedGames>;
  SpectatorV4FeaturedGameInfo: ResolverTypeWrapper<SpectatorV4FeaturedGameInfo>;
  GameMode: GameMode;
  GameType: GameType;
  SpectatorV4Participant: ResolverTypeWrapper<SpectatorV4Participant>;
  UpperTier: UpperTier;
  ChampionV3ChampionInfo: ResolverTypeWrapper<ChampionV3ChampionInfo>;
  ClashV1Tournament: ResolverTypeWrapper<ClashV1Tournament>;
  ClashV1TournamentPhase: ResolverTypeWrapper<ClashV1TournamentPhase>;
  Division2: Division2;
  LeagueExpV4LeagueEntry: ResolverTypeWrapper<LeagueExpV4LeagueEntry>;
  LeagueExpV4MiniSeries: ResolverTypeWrapper<LeagueExpV4MiniSeries>;
  LolStatusV3Incident: ResolverTypeWrapper<LolStatusV3Incident>;
  LolStatusV3Message: ResolverTypeWrapper<LolStatusV3Message>;
  LolStatusV3Translation: ResolverTypeWrapper<LolStatusV3Translation>;
  LolStatusV3Service: ResolverTypeWrapper<LolStatusV3Service>;
  LolStatusV3ShardStatus: ResolverTypeWrapper<LolStatusV3ShardStatus>;
  LorRankedV1Leaderboard: ResolverTypeWrapper<LorRankedV1Leaderboard>;
  LorRankedV1Player: ResolverTypeWrapper<LorRankedV1Player>;
  MapType: MapType;
  MatchV4MatchEvent: ResolverTypeWrapper<MatchV4MatchEvent>;
  MatchV4MatchPosition: ResolverTypeWrapper<MatchV4MatchPosition>;
  Type: Type;
  MatchV4MatchFrame: ResolverTypeWrapper<MatchV4MatchFrame>;
  MatchV4MatchTimeline: ResolverTypeWrapper<MatchV4MatchTimeline>;
  PickType: PickType;
  Queue2: Queue2;
  Region: Region;
  SpectatorType: SpectatorType;
  TftLeagueV1LeagueEntry: ResolverTypeWrapper<TftLeagueV1LeagueEntry>;
  TftLeagueV1MiniSeries: ResolverTypeWrapper<TftLeagueV1MiniSeries>;
  TftLeagueV1LeagueItem: ResolverTypeWrapper<TftLeagueV1LeagueItem>;
  TftLeagueV1LeagueList: ResolverTypeWrapper<TftLeagueV1LeagueList>;
  TftSummonerV1Summoner: ResolverTypeWrapper<TftSummonerV1Summoner>;
  Tier2: Tier2;
  Tier3: Tier3;
  TournamentStubV4LobbyEvent: ResolverTypeWrapper<TournamentStubV4LobbyEvent>;
  TournamentStubV4LobbyEventDTOWrapper: ResolverTypeWrapper<TournamentStubV4LobbyEventDtoWrapper>;
  TournamentStubV4ProviderRegistrationParametersInput: TournamentStubV4ProviderRegistrationParametersInput;
  TournamentStubV4TournamentCodeParametersInput: TournamentStubV4TournamentCodeParametersInput;
  TournamentStubV4TournamentRegistrationParametersInput: TournamentStubV4TournamentRegistrationParametersInput;
  TournamentV4LobbyEventDTOWrapper: ResolverTypeWrapper<TournamentV4LobbyEventDtoWrapper>;
  TournamentV4ProviderRegistrationParametersInput: TournamentV4ProviderRegistrationParametersInput;
  TournamentV4TournamentCodeParametersInput: TournamentV4TournamentCodeParametersInput;
  TournamentV4TournamentRegistrationParametersInput: TournamentV4TournamentRegistrationParametersInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  Info: Info;
  String: Scalars['String'];
  SummonerV4Summoner: Omit<SummonerV4Summoner, 'matchList'> & { matchList?: Maybe<ResolversParentTypes['MatchList']> };
  SpectatorV4CurrentGameInfo: SpectatorV4CurrentGameInfo;
  SpectatorV4BannedChampion: SpectatorV4BannedChampion;
  Float: Scalars['Float'];
  Int: Scalars['Int'];
  SpectatorV4Observer: SpectatorV4Observer;
  SpectatorV4CurrentGameParticipant: SpectatorV4CurrentGameParticipant;
  Boolean: Scalars['Boolean'];
  SpectatorV4GameCustomizationObject: SpectatorV4GameCustomizationObject;
  SpectatorV4Perks: SpectatorV4Perks;
  ChampionMastery: ChampionMastery;
  ChampionMasteryV4ChampionMastery: ChampionMasteryV4ChampionMastery;
  ClashV1PlayerRegistration: ClashV1PlayerRegistration;
  ClashV1Team: ClashV1Team;
  ClashV1Player: ClashV1Player;
  MatchListFilterInput: MatchListFilterInput;
  Long: Scalars['Long'];
  MatchList: ResolversParentTypes['MatchV4Matchlist'] | ResolversParentTypes['TFTMatchIdList'];
  MatchV4Matchlist: MatchV4Matchlist;
  MatchV4MatchReference: MatchV4MatchReference;
  TFTMatchIdList: TftMatchIdList;
  LeagueV4LeagueEntry: LeagueV4LeagueEntry;
  LeagueV4MiniSeries: LeagueV4MiniSeries;
  Match: ResolversParentTypes['MatchV4Match'] | ResolversParentTypes['TftMatchV1Match'];
  MatchV4Match: MatchV4Match;
  MatchV4ParticipantIdentity: MatchV4ParticipantIdentity;
  MatchV4Player: MatchV4Player;
  MatchV4Participant: MatchV4Participant;
  MatchV4Mastery: MatchV4Mastery;
  MatchV4Rune: MatchV4Rune;
  MatchV4ParticipantStats: MatchV4ParticipantStats;
  MatchV4ParticipantTimeline: MatchV4ParticipantTimeline;
  JSON: Scalars['JSON'];
  MatchV4TeamStats: MatchV4TeamStats;
  MatchV4TeamBans: MatchV4TeamBans;
  TftMatchV1Match: TftMatchV1Match;
  TftMatchV1Info: TftMatchV1Info;
  TftMatchV1Participant: TftMatchV1Participant;
  TftMatchV1Companion: TftMatchV1Companion;
  TftMatchV1Trait: TftMatchV1Trait;
  TftMatchV1Unit: TftMatchV1Unit;
  TftMatchV1Metadata: TftMatchV1Metadata;
  LeagueV4LeagueList: LeagueV4LeagueList;
  LeagueV4LeagueItem: LeagueV4LeagueItem;
  TournamentV4TournamentCode: TournamentV4TournamentCode;
  TournamentV4LobbyEvent: TournamentV4LobbyEvent;
  SpectatorV4FeaturedGames: SpectatorV4FeaturedGames;
  SpectatorV4FeaturedGameInfo: SpectatorV4FeaturedGameInfo;
  SpectatorV4Participant: SpectatorV4Participant;
  ChampionV3ChampionInfo: ChampionV3ChampionInfo;
  ClashV1Tournament: ClashV1Tournament;
  ClashV1TournamentPhase: ClashV1TournamentPhase;
  LeagueExpV4LeagueEntry: LeagueExpV4LeagueEntry;
  LeagueExpV4MiniSeries: LeagueExpV4MiniSeries;
  LolStatusV3Incident: LolStatusV3Incident;
  LolStatusV3Message: LolStatusV3Message;
  LolStatusV3Translation: LolStatusV3Translation;
  LolStatusV3Service: LolStatusV3Service;
  LolStatusV3ShardStatus: LolStatusV3ShardStatus;
  LorRankedV1Leaderboard: LorRankedV1Leaderboard;
  LorRankedV1Player: LorRankedV1Player;
  MatchV4MatchEvent: MatchV4MatchEvent;
  MatchV4MatchPosition: MatchV4MatchPosition;
  MatchV4MatchFrame: MatchV4MatchFrame;
  MatchV4MatchTimeline: MatchV4MatchTimeline;
  TftLeagueV1LeagueEntry: TftLeagueV1LeagueEntry;
  TftLeagueV1MiniSeries: TftLeagueV1MiniSeries;
  TftLeagueV1LeagueItem: TftLeagueV1LeagueItem;
  TftLeagueV1LeagueList: TftLeagueV1LeagueList;
  TftSummonerV1Summoner: TftSummonerV1Summoner;
  TournamentStubV4LobbyEvent: TournamentStubV4LobbyEvent;
  TournamentStubV4LobbyEventDTOWrapper: TournamentStubV4LobbyEventDtoWrapper;
  TournamentStubV4ProviderRegistrationParametersInput: TournamentStubV4ProviderRegistrationParametersInput;
  TournamentStubV4TournamentCodeParametersInput: TournamentStubV4TournamentCodeParametersInput;
  TournamentStubV4TournamentRegistrationParametersInput: TournamentStubV4TournamentRegistrationParametersInput;
  TournamentV4LobbyEventDTOWrapper: TournamentV4LobbyEventDtoWrapper;
  TournamentV4ProviderRegistrationParametersInput: TournamentV4ProviderRegistrationParametersInput;
  TournamentV4TournamentCodeParametersInput: TournamentV4TournamentCodeParametersInput;
  TournamentV4TournamentRegistrationParametersInput: TournamentV4TournamentRegistrationParametersInput;
};

export type ChampionMasteryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChampionMastery'] = ResolversParentTypes['ChampionMastery']> = {
  score?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  byChampion?: Resolver<Maybe<Array<ResolversTypes['ChampionMasteryV4ChampionMastery']>>, ParentType, ContextType, RequireFields<ChampionMasteryByChampionArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ChampionMasteryV4ChampionMasteryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChampionMasteryV4ChampionMastery'] = ResolversParentTypes['ChampionMasteryV4ChampionMastery']> = {
  championId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  championLevel?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  championPoints?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  championPointsSinceLastLevel?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  championPointsUntilNextLevel?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  chestGranted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  lastPlayTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  summonerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tokensEarned?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ChampionV3ChampionInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChampionV3ChampionInfo'] = ResolversParentTypes['ChampionV3ChampionInfo']> = {
  freeChampionIds?: Resolver<Array<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
  freeChampionIdsForNewPlayers?: Resolver<Array<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
  maxNewPlayerLevel?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ClashV1PlayerResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClashV1Player'] = ResolversParentTypes['ClashV1Player']> = {
  position?: Resolver<ResolversTypes['Position'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Role'], ParentType, ContextType>;
  summonerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ClashV1PlayerRegistrationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClashV1PlayerRegistration'] = ResolversParentTypes['ClashV1PlayerRegistration']> = {
  position?: Resolver<ResolversTypes['Position'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Role'], ParentType, ContextType>;
  summonerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  teamId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  team?: Resolver<ResolversTypes['ClashV1Team'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ClashV1TeamResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClashV1Team'] = ResolversParentTypes['ClashV1Team']> = {
  abbreviation?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  captain?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  iconId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  players?: Resolver<Array<Maybe<ResolversTypes['ClashV1Player']>>, ParentType, ContextType>;
  tier?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tournamentId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ClashV1TournamentResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClashV1Tournament'] = ResolversParentTypes['ClashV1Tournament']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nameKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nameKeySecondary?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  schedule?: Resolver<Array<Maybe<ResolversTypes['ClashV1TournamentPhase']>>, ParentType, ContextType>;
  themeId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ClashV1TournamentPhaseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClashV1TournamentPhase'] = ResolversParentTypes['ClashV1TournamentPhase']> = {
  cancelled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  registrationTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  startTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type InfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Info'] = ResolversParentTypes['Info']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  constants?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  repo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type LeagueExpV4LeagueEntryResolvers<ContextType = any, ParentType extends ResolversParentTypes['LeagueExpV4LeagueEntry'] = ResolversParentTypes['LeagueExpV4LeagueEntry']> = {
  freshBlood?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hotStreak?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  inactive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  leagueId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  leaguePoints?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  losses?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  miniSeries?: Resolver<Maybe<ResolversTypes['LeagueExpV4MiniSeries']>, ParentType, ContextType>;
  queueType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rank?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  summonerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  summonerName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  veteran?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  wins?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type LeagueExpV4MiniSeriesResolvers<ContextType = any, ParentType extends ResolversParentTypes['LeagueExpV4MiniSeries'] = ResolversParentTypes['LeagueExpV4MiniSeries']> = {
  losses?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  progress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  target?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  wins?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type LeagueV4LeagueEntryResolvers<ContextType = any, ParentType extends ResolversParentTypes['LeagueV4LeagueEntry'] = ResolversParentTypes['LeagueV4LeagueEntry']> = {
  freshBlood?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hotStreak?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  inactive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  leagueId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  leaguePoints?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  losses?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  miniSeries?: Resolver<Maybe<ResolversTypes['LeagueV4MiniSeries']>, ParentType, ContextType>;
  queueType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rank?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  summonerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  summonerName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  veteran?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  wins?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type LeagueV4LeagueItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['LeagueV4LeagueItem'] = ResolversParentTypes['LeagueV4LeagueItem']> = {
  freshBlood?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hotStreak?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  inactive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  leaguePoints?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  losses?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  miniSeries?: Resolver<Maybe<ResolversTypes['LeagueV4MiniSeries']>, ParentType, ContextType>;
  rank?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  summonerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  summonerName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  veteran?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  wins?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type LeagueV4LeagueListResolvers<ContextType = any, ParentType extends ResolversParentTypes['LeagueV4LeagueList'] = ResolversParentTypes['LeagueV4LeagueList']> = {
  entries?: Resolver<Array<Maybe<ResolversTypes['LeagueV4LeagueItem']>>, ParentType, ContextType>;
  leagueId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  queue?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type LeagueV4MiniSeriesResolvers<ContextType = any, ParentType extends ResolversParentTypes['LeagueV4MiniSeries'] = ResolversParentTypes['LeagueV4MiniSeries']> = {
  losses?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  progress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  target?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  wins?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type LolStatusV3IncidentResolvers<ContextType = any, ParentType extends ResolversParentTypes['LolStatusV3Incident'] = ResolversParentTypes['LolStatusV3Incident']> = {
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  updates?: Resolver<Array<Maybe<ResolversTypes['LolStatusV3Message']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type LolStatusV3MessageResolvers<ContextType = any, ParentType extends ResolversParentTypes['LolStatusV3Message'] = ResolversParentTypes['LolStatusV3Message']> = {
  author?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  severity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  translations?: Resolver<Array<Maybe<ResolversTypes['LolStatusV3Translation']>>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type LolStatusV3ServiceResolvers<ContextType = any, ParentType extends ResolversParentTypes['LolStatusV3Service'] = ResolversParentTypes['LolStatusV3Service']> = {
  incidents?: Resolver<Array<Maybe<ResolversTypes['LolStatusV3Incident']>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type LolStatusV3ShardStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['LolStatusV3ShardStatus'] = ResolversParentTypes['LolStatusV3ShardStatus']> = {
  hostname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  locales?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  regionTag?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  services?: Resolver<Array<Maybe<ResolversTypes['LolStatusV3Service']>>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type LolStatusV3TranslationResolvers<ContextType = any, ParentType extends ResolversParentTypes['LolStatusV3Translation'] = ResolversParentTypes['LolStatusV3Translation']> = {
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  heading?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  locale?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export interface LongScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Long'], any> {
  name: 'Long';
}

export type LorRankedV1LeaderboardResolvers<ContextType = any, ParentType extends ResolversParentTypes['LorRankedV1Leaderboard'] = ResolversParentTypes['LorRankedV1Leaderboard']> = {
  players?: Resolver<Array<Maybe<ResolversTypes['LorRankedV1Player']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type LorRankedV1PlayerResolvers<ContextType = any, ParentType extends ResolversParentTypes['LorRankedV1Player'] = ResolversParentTypes['LorRankedV1Player']> = {
  lp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rank?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MatchResolvers<ContextType = any, ParentType extends ResolversParentTypes['Match'] = ResolversParentTypes['Match']> = {
  __resolveType: TypeResolveFn<'MatchV4Match' | 'TftMatchV1Match', ParentType, ContextType>;
};

export type MatchListResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchList'] = ResolversParentTypes['MatchList']> = {
  __resolveType: TypeResolveFn<'MatchV4Matchlist' | 'TFTMatchIdList', ParentType, ContextType>;
};

export type MatchV4MasteryResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchV4Mastery'] = ResolversParentTypes['MatchV4Mastery']> = {
  masteryId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rank?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MatchV4MatchResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchV4Match'] = ResolversParentTypes['MatchV4Match']> = {
  gameCreation?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  gameDuration?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  gameId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  gameMode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gameType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gameVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mapId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  participantIdentities?: Resolver<Array<Maybe<ResolversTypes['MatchV4ParticipantIdentity']>>, ParentType, ContextType>;
  participants?: Resolver<Array<Maybe<ResolversTypes['MatchV4Participant']>>, ParentType, ContextType>;
  platformId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  queueId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  seasonId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  teams?: Resolver<Array<Maybe<ResolversTypes['MatchV4TeamStats']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MatchV4MatchEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchV4MatchEvent'] = ResolversParentTypes['MatchV4MatchEvent']> = {
  afterId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ascendedType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  assistingParticipantIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  beforeId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  buildingType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  creatorId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  eventType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  itemId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  killerId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  laneType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  levelUpType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  monsterSubType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  monsterType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  participantId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pointCaptured?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['MatchV4MatchPosition']>, ParentType, ContextType>;
  skillSlot?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  teamId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  towerType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['Type'], ParentType, ContextType>;
  victimId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  wardType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MatchV4MatchFrameResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchV4MatchFrame'] = ResolversParentTypes['MatchV4MatchFrame']> = {
  events?: Resolver<Array<Maybe<ResolversTypes['MatchV4MatchEvent']>>, ParentType, ContextType>;
  participantFrames?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MatchV4MatchlistResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchV4Matchlist'] = ResolversParentTypes['MatchV4Matchlist']> = {
  endIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  matches?: Resolver<Array<Maybe<ResolversTypes['MatchV4MatchReference']>>, ParentType, ContextType>;
  startIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalGames?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MatchV4MatchPositionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchV4MatchPosition'] = ResolversParentTypes['MatchV4MatchPosition']> = {
  x?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  y?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MatchV4MatchReferenceResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchV4MatchReference'] = ResolversParentTypes['MatchV4MatchReference']> = {
  champion?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  gameId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  lane?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  platformId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  queue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  season?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MatchV4MatchTimelineResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchV4MatchTimeline'] = ResolversParentTypes['MatchV4MatchTimeline']> = {
  frameInterval?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  frames?: Resolver<Array<Maybe<ResolversTypes['MatchV4MatchFrame']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MatchV4ParticipantResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchV4Participant'] = ResolversParentTypes['MatchV4Participant']> = {
  championId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  highestAchievedSeasonTier?: Resolver<Maybe<ResolversTypes['HighestAchievedSeasonTier']>, ParentType, ContextType>;
  masteries?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchV4Mastery']>>>, ParentType, ContextType>;
  participantId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  runes?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchV4Rune']>>>, ParentType, ContextType>;
  spell1Id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  spell2Id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  stats?: Resolver<ResolversTypes['MatchV4ParticipantStats'], ParentType, ContextType>;
  teamId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timeline?: Resolver<ResolversTypes['MatchV4ParticipantTimeline'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MatchV4ParticipantIdentityResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchV4ParticipantIdentity'] = ResolversParentTypes['MatchV4ParticipantIdentity']> = {
  participantId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  player?: Resolver<ResolversTypes['MatchV4Player'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MatchV4ParticipantStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchV4ParticipantStats'] = ResolversParentTypes['MatchV4ParticipantStats']> = {
  altarsCaptured?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  altarsNeutralized?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  assists?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  champLevel?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  combatPlayerScore?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  damageDealtToObjectives?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  damageDealtToTurrets?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  damageSelfMitigated?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  deaths?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  doubleKills?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  firstBloodAssist?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  firstBloodKill?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  firstInhibitorAssist?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  firstInhibitorKill?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  firstTowerAssist?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  firstTowerKill?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  goldEarned?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  goldSpent?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  inhibitorKills?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  item0?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  item1?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  item2?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  item3?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  item4?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  item5?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  item6?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  killingSprees?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  kills?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  largestCriticalStrike?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  largestKillingSpree?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  largestMultiKill?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  longestTimeSpentLiving?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  magicDamageDealt?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  magicDamageDealtToChampions?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  magicalDamageTaken?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  neutralMinionsKilled?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  neutralMinionsKilledEnemyJungle?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  neutralMinionsKilledTeamJungle?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nodeCapture?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nodeCaptureAssist?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nodeNeutralize?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nodeNeutralizeAssist?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  objectivePlayerScore?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  participantId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pentaKills?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  perk0?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  perk0Var1?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  perk0Var2?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  perk0Var3?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  perk1?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  perk1Var1?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  perk1Var2?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  perk1Var3?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  perk2?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  perk2Var1?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  perk2Var2?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  perk2Var3?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  perk3?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  perk3Var1?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  perk3Var2?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  perk3Var3?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  perk4?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  perk4Var1?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  perk4Var2?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  perk4Var3?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  perk5?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  perk5Var1?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  perk5Var2?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  perk5Var3?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  perkPrimaryStyle?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  perkSubStyle?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  physicalDamageDealt?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  physicalDamageDealtToChampions?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  physicalDamageTaken?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  playerScore0?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  playerScore1?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  playerScore2?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  playerScore3?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  playerScore4?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  playerScore5?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  playerScore6?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  playerScore7?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  playerScore8?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  playerScore9?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  quadraKills?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  sightWardsBoughtInGame?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  teamObjective?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  timeCCingOthers?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  totalDamageDealt?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  totalDamageDealtToChampions?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  totalDamageTaken?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  totalHeal?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  totalMinionsKilled?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalPlayerScore?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalScoreRank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalTimeCrowdControlDealt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalUnitsHealed?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tripleKills?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  trueDamageDealt?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  trueDamageDealtToChampions?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  trueDamageTaken?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  turretKills?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  unrealKills?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  visionScore?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  visionWardsBoughtInGame?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  wardsKilled?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  wardsPlaced?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  win?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MatchV4ParticipantTimelineResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchV4ParticipantTimeline'] = ResolversParentTypes['MatchV4ParticipantTimeline']> = {
  creepsPerMinDeltas?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  csDiffPerMinDeltas?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  damageTakenDiffPerMinDeltas?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  damageTakenPerMinDeltas?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  goldPerMinDeltas?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  lane?: Resolver<Maybe<ResolversTypes['Lane']>, ParentType, ContextType>;
  participantId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['Role2']>, ParentType, ContextType>;
  xpDiffPerMinDeltas?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  xpPerMinDeltas?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MatchV4PlayerResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchV4Player'] = ResolversParentTypes['MatchV4Player']> = {
  accountId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  currentAccountId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  currentPlatformId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  matchHistoryUri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  platformId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profileIcon?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  summonerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  summonerName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MatchV4RuneResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchV4Rune'] = ResolversParentTypes['MatchV4Rune']> = {
  rank?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  runeId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MatchV4TeamBansResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchV4TeamBans'] = ResolversParentTypes['MatchV4TeamBans']> = {
  championId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pickTurn?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MatchV4TeamStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchV4TeamStats'] = ResolversParentTypes['MatchV4TeamStats']> = {
  bans?: Resolver<Array<Maybe<ResolversTypes['MatchV4TeamBans']>>, ParentType, ContextType>;
  baronKills?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dominionVictoryScore?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dragonKills?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  firstBaron?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  firstBlood?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  firstDragon?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  firstInhibitor?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  firstRiftHerald?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  firstTower?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  inhibitorKills?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  riftHeraldKills?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  teamId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  towerKills?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  vilemawKills?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  win?: Resolver<ResolversTypes['Win'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  info?: Resolver<ResolversTypes['Info'], ParentType, ContextType>;
  summoner?: Resolver<Maybe<ResolversTypes['SummonerV4Summoner']>, ParentType, ContextType, RequireFields<QuerySummonerArgs, 'region'>>;
  match?: Resolver<Maybe<ResolversTypes['Match']>, ParentType, ContextType, RequireFields<QueryMatchArgs, 'region' | 'matchId' | 'game'>>;
  rankedList?: Resolver<Array<ResolversTypes['LeagueV4LeagueList']>, ParentType, ContextType, RequireFields<QueryRankedListArgs, 'region' | 'queue' | 'tier' | 'game'>>;
  rankedLeague?: Resolver<ResolversTypes['LeagueV4LeagueEntry'], ParentType, ContextType, RequireFields<QueryRankedLeagueArgs, 'game'>>;
  tournament?: Resolver<Maybe<ResolversTypes['TournamentV4TournamentCode']>, ParentType, ContextType, RequireFields<QueryTournamentArgs, 'code'>>;
  featured_games?: Resolver<Maybe<ResolversTypes['SpectatorV4FeaturedGames']>, ParentType, ContextType, RequireFields<QueryFeatured_GamesArgs, never>>;
  clash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type SpectatorV4BannedChampionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SpectatorV4BannedChampion'] = ResolversParentTypes['SpectatorV4BannedChampion']> = {
  championId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  pickTurn?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  teamId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type SpectatorV4CurrentGameInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['SpectatorV4CurrentGameInfo'] = ResolversParentTypes['SpectatorV4CurrentGameInfo']> = {
  bannedChampions?: Resolver<Array<Maybe<ResolversTypes['SpectatorV4BannedChampion']>>, ParentType, ContextType>;
  gameId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  gameLength?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  gameMode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gameQueueConfigId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  gameStartTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  gameType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mapId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  observers?: Resolver<ResolversTypes['SpectatorV4Observer'], ParentType, ContextType>;
  participants?: Resolver<Array<Maybe<ResolversTypes['SpectatorV4CurrentGameParticipant']>>, ParentType, ContextType>;
  platformId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type SpectatorV4CurrentGameParticipantResolvers<ContextType = any, ParentType extends ResolversParentTypes['SpectatorV4CurrentGameParticipant'] = ResolversParentTypes['SpectatorV4CurrentGameParticipant']> = {
  bot?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  championId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  gameCustomizationObjects?: Resolver<Array<Maybe<ResolversTypes['SpectatorV4GameCustomizationObject']>>, ParentType, ContextType>;
  perks?: Resolver<ResolversTypes['SpectatorV4Perks'], ParentType, ContextType>;
  profileIconId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  spell1Id?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  spell2Id?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  summonerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  summonerName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  teamId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type SpectatorV4FeaturedGameInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['SpectatorV4FeaturedGameInfo'] = ResolversParentTypes['SpectatorV4FeaturedGameInfo']> = {
  bannedChampions?: Resolver<Array<Maybe<ResolversTypes['SpectatorV4BannedChampion']>>, ParentType, ContextType>;
  gameId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  gameLength?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  gameMode?: Resolver<ResolversTypes['GameMode'], ParentType, ContextType>;
  gameQueueConfigId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  gameStartTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  gameType?: Resolver<ResolversTypes['GameType'], ParentType, ContextType>;
  mapId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  observers?: Resolver<ResolversTypes['SpectatorV4Observer'], ParentType, ContextType>;
  participants?: Resolver<Array<Maybe<ResolversTypes['SpectatorV4Participant']>>, ParentType, ContextType>;
  platformId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type SpectatorV4FeaturedGamesResolvers<ContextType = any, ParentType extends ResolversParentTypes['SpectatorV4FeaturedGames'] = ResolversParentTypes['SpectatorV4FeaturedGames']> = {
  clientRefreshInterval?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  gameList?: Resolver<Array<Maybe<ResolversTypes['SpectatorV4FeaturedGameInfo']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type SpectatorV4GameCustomizationObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['SpectatorV4GameCustomizationObject'] = ResolversParentTypes['SpectatorV4GameCustomizationObject']> = {
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type SpectatorV4ObserverResolvers<ContextType = any, ParentType extends ResolversParentTypes['SpectatorV4Observer'] = ResolversParentTypes['SpectatorV4Observer']> = {
  encryptionKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type SpectatorV4ParticipantResolvers<ContextType = any, ParentType extends ResolversParentTypes['SpectatorV4Participant'] = ResolversParentTypes['SpectatorV4Participant']> = {
  bot?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  championId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  profileIconId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  spell1Id?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  spell2Id?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  summonerName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  teamId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type SpectatorV4PerksResolvers<ContextType = any, ParentType extends ResolversParentTypes['SpectatorV4Perks'] = ResolversParentTypes['SpectatorV4Perks']> = {
  perkIds?: Resolver<Array<Maybe<ResolversTypes['Float']>>, ParentType, ContextType>;
  perkStyle?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  perkSubStyle?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type SummonerV4SummonerResolvers<ContextType = any, ParentType extends ResolversParentTypes['SummonerV4Summoner'] = ResolversParentTypes['SummonerV4Summoner']> = {
  accountId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  activeMatch?: Resolver<Maybe<ResolversTypes['SpectatorV4CurrentGameInfo']>, ParentType, ContextType, RequireFields<SummonerV4SummonerActiveMatchArgs, 'game'>>;
  championMastery?: Resolver<ResolversTypes['ChampionMastery'], ParentType, ContextType>;
  clash?: Resolver<Array<ResolversTypes['ClashV1PlayerRegistration']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  matchList?: Resolver<Maybe<ResolversTypes['MatchList']>, ParentType, ContextType, RequireFields<SummonerV4SummonerMatchListArgs, 'game'>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profileIconId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  puuid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['LeagueV4LeagueEntry']>, ParentType, ContextType, RequireFields<SummonerV4SummonerRankArgs, 'queue'>>;
  region?: Resolver<ResolversTypes['RegionInput'], ParentType, ContextType>;
  revisionDate?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  summonerLevel?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type TftLeagueV1LeagueEntryResolvers<ContextType = any, ParentType extends ResolversParentTypes['TftLeagueV1LeagueEntry'] = ResolversParentTypes['TftLeagueV1LeagueEntry']> = {
  freshBlood?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hotStreak?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  inactive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  leagueId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  leaguePoints?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  losses?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  miniSeries?: Resolver<Maybe<ResolversTypes['TftLeagueV1MiniSeries']>, ParentType, ContextType>;
  queueType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rank?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  summonerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  summonerName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  veteran?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  wins?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type TftLeagueV1LeagueItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['TftLeagueV1LeagueItem'] = ResolversParentTypes['TftLeagueV1LeagueItem']> = {
  freshBlood?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hotStreak?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  inactive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  leaguePoints?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  losses?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  miniSeries?: Resolver<Maybe<ResolversTypes['TftLeagueV1MiniSeries']>, ParentType, ContextType>;
  rank?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  summonerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  summonerName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  veteran?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  wins?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type TftLeagueV1LeagueListResolvers<ContextType = any, ParentType extends ResolversParentTypes['TftLeagueV1LeagueList'] = ResolversParentTypes['TftLeagueV1LeagueList']> = {
  entries?: Resolver<Array<Maybe<ResolversTypes['TftLeagueV1LeagueItem']>>, ParentType, ContextType>;
  leagueId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  queue?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type TftLeagueV1MiniSeriesResolvers<ContextType = any, ParentType extends ResolversParentTypes['TftLeagueV1MiniSeries'] = ResolversParentTypes['TftLeagueV1MiniSeries']> = {
  losses?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  progress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  target?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  wins?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type TftMatchIdListResolvers<ContextType = any, ParentType extends ResolversParentTypes['TFTMatchIdList'] = ResolversParentTypes['TFTMatchIdList']> = {
  matchIds?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type TftMatchV1CompanionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TftMatchV1Companion'] = ResolversParentTypes['TftMatchV1Companion']> = {
  contentID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  skinID?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  species?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type TftMatchV1InfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['TftMatchV1Info'] = ResolversParentTypes['TftMatchV1Info']> = {
  gameDatetime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  gameLength?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  gameVariation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gameVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  participants?: Resolver<Array<Maybe<ResolversTypes['TftMatchV1Participant']>>, ParentType, ContextType>;
  queueId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tftSetNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type TftMatchV1MatchResolvers<ContextType = any, ParentType extends ResolversParentTypes['TftMatchV1Match'] = ResolversParentTypes['TftMatchV1Match']> = {
  info?: Resolver<ResolversTypes['TftMatchV1Info'], ParentType, ContextType>;
  metadata?: Resolver<ResolversTypes['TftMatchV1Metadata'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type TftMatchV1MetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['TftMatchV1Metadata'] = ResolversParentTypes['TftMatchV1Metadata']> = {
  dataVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  matchId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  participants?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type TftMatchV1ParticipantResolvers<ContextType = any, ParentType extends ResolversParentTypes['TftMatchV1Participant'] = ResolversParentTypes['TftMatchV1Participant']> = {
  companion?: Resolver<ResolversTypes['TftMatchV1Companion'], ParentType, ContextType>;
  goldLeft?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lastRound?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  placement?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  playersEliminated?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  puuid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timeEliminated?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  totalDamageToPlayers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  traits?: Resolver<Array<Maybe<ResolversTypes['TftMatchV1Trait']>>, ParentType, ContextType>;
  units?: Resolver<Array<Maybe<ResolversTypes['TftMatchV1Unit']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type TftMatchV1TraitResolvers<ContextType = any, ParentType extends ResolversParentTypes['TftMatchV1Trait'] = ResolversParentTypes['TftMatchV1Trait']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  numUnits?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tierCurrent?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tierTotal?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type TftMatchV1UnitResolvers<ContextType = any, ParentType extends ResolversParentTypes['TftMatchV1Unit'] = ResolversParentTypes['TftMatchV1Unit']> = {
  characterId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  items?: Resolver<Array<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rarity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tier?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type TftSummonerV1SummonerResolvers<ContextType = any, ParentType extends ResolversParentTypes['TftSummonerV1Summoner'] = ResolversParentTypes['TftSummonerV1Summoner']> = {
  accountId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profileIconId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  puuid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  revisionDate?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  summonerLevel?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type TournamentStubV4LobbyEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['TournamentStubV4LobbyEvent'] = ResolversParentTypes['TournamentStubV4LobbyEvent']> = {
  eventType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  summonerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type TournamentStubV4LobbyEventDtoWrapperResolvers<ContextType = any, ParentType extends ResolversParentTypes['TournamentStubV4LobbyEventDTOWrapper'] = ResolversParentTypes['TournamentStubV4LobbyEventDTOWrapper']> = {
  eventList?: Resolver<Array<Maybe<ResolversTypes['TournamentStubV4LobbyEvent']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type TournamentV4LobbyEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['TournamentV4LobbyEvent'] = ResolversParentTypes['TournamentV4LobbyEvent']> = {
  eventType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  summonerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type TournamentV4LobbyEventDtoWrapperResolvers<ContextType = any, ParentType extends ResolversParentTypes['TournamentV4LobbyEventDTOWrapper'] = ResolversParentTypes['TournamentV4LobbyEventDTOWrapper']> = {
  eventList?: Resolver<Array<Maybe<ResolversTypes['TournamentV4LobbyEvent']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type TournamentV4TournamentCodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TournamentV4TournamentCode'] = ResolversParentTypes['TournamentV4TournamentCode']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lobbyEvents?: Resolver<Maybe<ResolversTypes['TournamentV4LobbyEvent']>, ParentType, ContextType>;
  lobbyName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  map?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  matchDetails?: Resolver<Maybe<ResolversTypes['MatchV4Match']>, ParentType, ContextType, RequireFields<TournamentV4TournamentCodeMatchDetailsArgs, 'matchId'>>;
  metaData?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  participants?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pickType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  providerId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  region?: Resolver<ResolversTypes['Region2'], ParentType, ContextType>;
  spectators?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  teamSize?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tournamentId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Resolvers<ContextType = any> = {
  ChampionMastery?: ChampionMasteryResolvers<ContextType>;
  ChampionMasteryV4ChampionMastery?: ChampionMasteryV4ChampionMasteryResolvers<ContextType>;
  ChampionV3ChampionInfo?: ChampionV3ChampionInfoResolvers<ContextType>;
  ClashV1Player?: ClashV1PlayerResolvers<ContextType>;
  ClashV1PlayerRegistration?: ClashV1PlayerRegistrationResolvers<ContextType>;
  ClashV1Team?: ClashV1TeamResolvers<ContextType>;
  ClashV1Tournament?: ClashV1TournamentResolvers<ContextType>;
  ClashV1TournamentPhase?: ClashV1TournamentPhaseResolvers<ContextType>;
  Info?: InfoResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  LeagueExpV4LeagueEntry?: LeagueExpV4LeagueEntryResolvers<ContextType>;
  LeagueExpV4MiniSeries?: LeagueExpV4MiniSeriesResolvers<ContextType>;
  LeagueV4LeagueEntry?: LeagueV4LeagueEntryResolvers<ContextType>;
  LeagueV4LeagueItem?: LeagueV4LeagueItemResolvers<ContextType>;
  LeagueV4LeagueList?: LeagueV4LeagueListResolvers<ContextType>;
  LeagueV4MiniSeries?: LeagueV4MiniSeriesResolvers<ContextType>;
  LolStatusV3Incident?: LolStatusV3IncidentResolvers<ContextType>;
  LolStatusV3Message?: LolStatusV3MessageResolvers<ContextType>;
  LolStatusV3Service?: LolStatusV3ServiceResolvers<ContextType>;
  LolStatusV3ShardStatus?: LolStatusV3ShardStatusResolvers<ContextType>;
  LolStatusV3Translation?: LolStatusV3TranslationResolvers<ContextType>;
  Long?: GraphQLScalarType;
  LorRankedV1Leaderboard?: LorRankedV1LeaderboardResolvers<ContextType>;
  LorRankedV1Player?: LorRankedV1PlayerResolvers<ContextType>;
  Match?: MatchResolvers;
  MatchList?: MatchListResolvers;
  MatchV4Mastery?: MatchV4MasteryResolvers<ContextType>;
  MatchV4Match?: MatchV4MatchResolvers<ContextType>;
  MatchV4MatchEvent?: MatchV4MatchEventResolvers<ContextType>;
  MatchV4MatchFrame?: MatchV4MatchFrameResolvers<ContextType>;
  MatchV4Matchlist?: MatchV4MatchlistResolvers<ContextType>;
  MatchV4MatchPosition?: MatchV4MatchPositionResolvers<ContextType>;
  MatchV4MatchReference?: MatchV4MatchReferenceResolvers<ContextType>;
  MatchV4MatchTimeline?: MatchV4MatchTimelineResolvers<ContextType>;
  MatchV4Participant?: MatchV4ParticipantResolvers<ContextType>;
  MatchV4ParticipantIdentity?: MatchV4ParticipantIdentityResolvers<ContextType>;
  MatchV4ParticipantStats?: MatchV4ParticipantStatsResolvers<ContextType>;
  MatchV4ParticipantTimeline?: MatchV4ParticipantTimelineResolvers<ContextType>;
  MatchV4Player?: MatchV4PlayerResolvers<ContextType>;
  MatchV4Rune?: MatchV4RuneResolvers<ContextType>;
  MatchV4TeamBans?: MatchV4TeamBansResolvers<ContextType>;
  MatchV4TeamStats?: MatchV4TeamStatsResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SpectatorV4BannedChampion?: SpectatorV4BannedChampionResolvers<ContextType>;
  SpectatorV4CurrentGameInfo?: SpectatorV4CurrentGameInfoResolvers<ContextType>;
  SpectatorV4CurrentGameParticipant?: SpectatorV4CurrentGameParticipantResolvers<ContextType>;
  SpectatorV4FeaturedGameInfo?: SpectatorV4FeaturedGameInfoResolvers<ContextType>;
  SpectatorV4FeaturedGames?: SpectatorV4FeaturedGamesResolvers<ContextType>;
  SpectatorV4GameCustomizationObject?: SpectatorV4GameCustomizationObjectResolvers<ContextType>;
  SpectatorV4Observer?: SpectatorV4ObserverResolvers<ContextType>;
  SpectatorV4Participant?: SpectatorV4ParticipantResolvers<ContextType>;
  SpectatorV4Perks?: SpectatorV4PerksResolvers<ContextType>;
  SummonerV4Summoner?: SummonerV4SummonerResolvers<ContextType>;
  TftLeagueV1LeagueEntry?: TftLeagueV1LeagueEntryResolvers<ContextType>;
  TftLeagueV1LeagueItem?: TftLeagueV1LeagueItemResolvers<ContextType>;
  TftLeagueV1LeagueList?: TftLeagueV1LeagueListResolvers<ContextType>;
  TftLeagueV1MiniSeries?: TftLeagueV1MiniSeriesResolvers<ContextType>;
  TFTMatchIdList?: TftMatchIdListResolvers<ContextType>;
  TftMatchV1Companion?: TftMatchV1CompanionResolvers<ContextType>;
  TftMatchV1Info?: TftMatchV1InfoResolvers<ContextType>;
  TftMatchV1Match?: TftMatchV1MatchResolvers<ContextType>;
  TftMatchV1Metadata?: TftMatchV1MetadataResolvers<ContextType>;
  TftMatchV1Participant?: TftMatchV1ParticipantResolvers<ContextType>;
  TftMatchV1Trait?: TftMatchV1TraitResolvers<ContextType>;
  TftMatchV1Unit?: TftMatchV1UnitResolvers<ContextType>;
  TftSummonerV1Summoner?: TftSummonerV1SummonerResolvers<ContextType>;
  TournamentStubV4LobbyEvent?: TournamentStubV4LobbyEventResolvers<ContextType>;
  TournamentStubV4LobbyEventDTOWrapper?: TournamentStubV4LobbyEventDtoWrapperResolvers<ContextType>;
  TournamentV4LobbyEvent?: TournamentV4LobbyEventResolvers<ContextType>;
  TournamentV4LobbyEventDTOWrapper?: TournamentV4LobbyEventDtoWrapperResolvers<ContextType>;
  TournamentV4TournamentCode?: TournamentV4TournamentCodeResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
