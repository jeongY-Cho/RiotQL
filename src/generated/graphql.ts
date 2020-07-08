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
  MatchId: any;
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
  byChampion?: Maybe<Array<Championmasteryv4ChampionMastery>>;
};


/** Champion Mastery for league accounts */
export type ChampionMasteryByChampionArgs = {
  champIds?: Maybe<Array<Scalars['Int']>>;
};

/** This object contains single Champion Mastery information for player and champion combination. */
export type Championmasteryv4ChampionMastery = {
  __typename?: 'Championmasteryv4ChampionMastery';
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

export type Championv3ChampionInfo = {
  __typename?: 'Championv3ChampionInfo';
  freeChampionIds: Array<Maybe<Scalars['Int']>>;
  freeChampionIdsForNewPlayers: Array<Maybe<Scalars['Int']>>;
  maxNewPlayerLevel: Scalars['Int'];
};

export type Clashv1Player = {
  __typename?: 'Clashv1Player';
  /** (Legal values:  UNSELECTED,  FILL,  TOP,  JUNGLE,  MIDDLE,  BOTTOM,  UTILITY) */
  position: Position;
  /** (Legal values:  CAPTAIN,  MEMBER) */
  role: Role;
  summonerId: Scalars['String'];
  teamId: Scalars['String'];
};

export type Clashv1PlayerRegistration = {
  __typename?: 'Clashv1PlayerRegistration';
  /** Clash lane assignment */
  position: Position;
  /** Clash team role assignment */
  role: Role;
  summonerId: Scalars['String'];
  teamId: Scalars['String'];
  /** Clash team details */
  team: Clashv1Team;
};

export type Clashv1Team = {
  __typename?: 'Clashv1Team';
  abbreviation: Scalars['String'];
  /** Summoner ID of the team captain. */
  captain: Scalars['String'];
  iconId: Scalars['Int'];
  id: Scalars['String'];
  name: Scalars['String'];
  /** Team members. */
  players: Array<Maybe<Clashv1Player>>;
  tier: Scalars['Int'];
  tournamentId: Scalars['Int'];
};

export type Clashv1Tournament = {
  __typename?: 'Clashv1Tournament';
  id: Scalars['Int'];
  nameKey: Scalars['String'];
  nameKeySecondary: Scalars['String'];
  /** Tournament phase. */
  schedule: Array<Maybe<Clashv1TournamentPhase>>;
  themeId: Scalars['Int'];
};

export type Clashv1TournamentPhase = {
  __typename?: 'Clashv1TournamentPhase';
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
  /** LOR is not fully implemented */
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

export type Leagueexpv4LeagueEntry = {
  __typename?: 'Leagueexpv4LeagueEntry';
  freshBlood: Scalars['Boolean'];
  hotStreak: Scalars['Boolean'];
  inactive: Scalars['Boolean'];
  leagueId: Scalars['String'];
  leaguePoints: Scalars['Int'];
  /** Losing team on Summoners Rift. Second through eighth placement in Teamfight Tactics. */
  losses: Scalars['Int'];
  miniSeries?: Maybe<Leagueexpv4MiniSeries>;
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

export type Leagueexpv4MiniSeries = {
  __typename?: 'Leagueexpv4MiniSeries';
  losses: Scalars['Int'];
  progress: Scalars['String'];
  target: Scalars['Int'];
  wins: Scalars['Int'];
};

export type Leaguev4LeagueEntry = {
  __typename?: 'Leaguev4LeagueEntry';
  freshBlood: Scalars['Boolean'];
  hotStreak: Scalars['Boolean'];
  inactive: Scalars['Boolean'];
  leagueId: Scalars['String'];
  leaguePoints: Scalars['Int'];
  /** Losing team on Summoners Rift. */
  losses: Scalars['Int'];
  miniSeries?: Maybe<Leaguev4MiniSeries>;
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

export type Leaguev4LeagueItem = {
  __typename?: 'Leaguev4LeagueItem';
  freshBlood: Scalars['Boolean'];
  hotStreak: Scalars['Boolean'];
  inactive: Scalars['Boolean'];
  leaguePoints: Scalars['Int'];
  /** Losing team on Summoners Rift. */
  losses: Scalars['Int'];
  miniSeries?: Maybe<Leaguev4MiniSeries>;
  rank: Scalars['String'];
  /** Player's encrypted summonerId. */
  summonerId: Scalars['String'];
  summonerName: Scalars['String'];
  veteran: Scalars['Boolean'];
  /** Winning team on Summoners Rift. */
  wins: Scalars['Int'];
};

export type Leaguev4LeagueList = {
  __typename?: 'Leaguev4LeagueList';
  entries: Array<Maybe<Leaguev4LeagueItem>>;
  leagueId: Scalars['String'];
  name: Scalars['String'];
  queue: Scalars['String'];
  tier: Scalars['String'];
};

export type Leaguev4MiniSeries = {
  __typename?: 'Leaguev4MiniSeries';
  losses: Scalars['Int'];
  progress: Scalars['String'];
  target: Scalars['Int'];
  wins: Scalars['Int'];
};

export type Lolstatusv3Incident = {
  __typename?: 'Lolstatusv3Incident';
  active: Scalars['Boolean'];
  created_at: Scalars['String'];
  id: Scalars['Float'];
  updates: Array<Maybe<Lolstatusv3Message>>;
};

export type Lolstatusv3Message = {
  __typename?: 'Lolstatusv3Message';
  author: Scalars['String'];
  content: Scalars['String'];
  created_at: Scalars['String'];
  id: Scalars['String'];
  severity: Scalars['String'];
  translations: Array<Maybe<Lolstatusv3Translation>>;
  updated_at: Scalars['String'];
};

export type Lolstatusv3Service = {
  __typename?: 'Lolstatusv3Service';
  incidents: Array<Maybe<Lolstatusv3Incident>>;
  name: Scalars['String'];
  slug: Scalars['String'];
  status: Scalars['String'];
};

export type Lolstatusv3ShardStatus = {
  __typename?: 'Lolstatusv3ShardStatus';
  hostname: Scalars['String'];
  locales: Array<Maybe<Scalars['String']>>;
  name: Scalars['String'];
  region_tag: Scalars['String'];
  services: Array<Maybe<Lolstatusv3Service>>;
  slug: Scalars['String'];
};

export type Lolstatusv3Translation = {
  __typename?: 'Lolstatusv3Translation';
  content: Scalars['String'];
  heading: Scalars['String'];
  locale: Scalars['String'];
};


export type Lorrankedv1Leaderboard = {
  __typename?: 'Lorrankedv1Leaderboard';
  /** A list of players in Master tier. */
  players: Array<Maybe<Lorrankedv1Player>>;
};

export type Lorrankedv1Player = {
  __typename?: 'Lorrankedv1Player';
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

export type Match = Matchv4Match | Tftmatchv1Match;


/** Matchlist return types. TFT matchlist returns only a list of ids */
export type MatchList = Matchv4Matchlist | TftMatchIdList;

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

export type Matchv4Mastery = {
  __typename?: 'Matchv4Mastery';
  masteryId: Scalars['Int'];
  rank: Scalars['Int'];
};

export type Matchv4Match = {
  __typename?: 'Matchv4Match';
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
  participantIdentities: Array<Maybe<Matchv4ParticipantIdentity>>;
  /** Participant information. */
  participants: Array<Maybe<Matchv4Participant>>;
  /** Platform where the match was played. */
  platformId: Scalars['String'];
  /** Please refer to the Game Constants documentation. */
  queueId: Scalars['Int'];
  /** Please refer to the Game Constants documentation. */
  seasonId: Scalars['Int'];
  /** Team information. */
  teams: Array<Maybe<Matchv4TeamStats>>;
};

export type Matchv4MatchEvent = {
  __typename?: 'Matchv4MatchEvent';
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
  position?: Maybe<Matchv4MatchPosition>;
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

export type Matchv4MatchFrame = {
  __typename?: 'Matchv4MatchFrame';
  events: Array<Maybe<Matchv4MatchEvent>>;
  participantFrames: Scalars['JSON'];
  timestamp: Scalars['Float'];
};

export type Matchv4Matchlist = {
  __typename?: 'Matchv4Matchlist';
  endIndex: Scalars['Int'];
  matches: Array<Maybe<Matchv4MatchReference>>;
  startIndex: Scalars['Int'];
  /**
   * There is a known issue that this field doesn't correctly return the total
   * number of games that match the parameters of the request. Please paginate
   * using beginIndex until you reach the end of a player's matchlist.
   */
  totalGames: Scalars['Int'];
};

export type Matchv4MatchPosition = {
  __typename?: 'Matchv4MatchPosition';
  x: Scalars['Int'];
  y: Scalars['Int'];
};

export type Matchv4MatchReference = {
  __typename?: 'Matchv4MatchReference';
  champion: Scalars['Int'];
  gameId: Scalars['Float'];
  lane: Scalars['String'];
  platformId: Scalars['String'];
  queue: Scalars['Int'];
  role: Scalars['String'];
  season: Scalars['Int'];
  timestamp: Scalars['Float'];
};

export type Matchv4MatchTimeline = {
  __typename?: 'Matchv4MatchTimeline';
  frameInterval: Scalars['Float'];
  frames: Array<Maybe<Matchv4MatchFrame>>;
};

export type Matchv4Participant = {
  __typename?: 'Matchv4Participant';
  championId: Scalars['Int'];
  /**
   * Highest ranked tier achieved for the previous season in a specific subset of
   * queueIds, if any, otherwise null. Used to display border in game loading
   * screen. Please refer to the Ranked Info documentation.
   *              (Legal values:  CHALLENGER,  MASTER,  DIAMOND,  PLATINUM,  GOLD,  SILVER,  BRONZE,  UNRANKED)
   */
  highestAchievedSeasonTier?: Maybe<HighestAchievedSeasonTier>;
  /** List of legacy Mastery information. Not included for matches played with Runes Reforged. */
  masteries?: Maybe<Array<Maybe<Matchv4Mastery>>>;
  participantId: Scalars['Int'];
  /** List of legacy Rune information. Not included for matches played with Runes Reforged. */
  runes?: Maybe<Array<Maybe<Matchv4Rune>>>;
  /** First Summoner Spell id. */
  spell1Id: Scalars['Int'];
  /** Second Summoner Spell id. */
  spell2Id: Scalars['Int'];
  stats: Matchv4ParticipantStats;
  /** 100 for blue side. 200 for red side. */
  teamId: Scalars['Int'];
  timeline: Matchv4ParticipantTimeline;
};

export type Matchv4ParticipantIdentity = {
  __typename?: 'Matchv4ParticipantIdentity';
  participantId: Scalars['Int'];
  player: Matchv4Player;
};

export type Matchv4ParticipantStats = {
  __typename?: 'Matchv4ParticipantStats';
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

export type Matchv4ParticipantTimeline = {
  __typename?: 'Matchv4ParticipantTimeline';
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

export type Matchv4Player = {
  __typename?: 'Matchv4Player';
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

export type Matchv4Rune = {
  __typename?: 'Matchv4Rune';
  rank: Scalars['Int'];
  runeId: Scalars['Int'];
};

export type Matchv4TeamBans = {
  __typename?: 'Matchv4TeamBans';
  /** Banned championId. */
  championId: Scalars['Int'];
  /** Turn during which the champion was banned. */
  pickTurn: Scalars['Int'];
};

export type Matchv4TeamStats = {
  __typename?: 'Matchv4TeamStats';
  /** If match queueId has a draft, contains banned champion data, otherwise empty. */
  bans: Array<Maybe<Matchv4TeamBans>>;
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
  summoner?: Maybe<Summonerv4Summoner>;
  match?: Maybe<Match>;
  rankedList: Array<Leaguev4LeagueList>;
  rankedLeague: Leaguev4LeagueEntry;
  tournament?: Maybe<Tournamentv4TournamentCode>;
  /**
   * Get featured league games.
   * note! game parameter is ignored atm
   */
  featuredGames?: Maybe<Spectatorv4FeaturedGames>;
  championRotation: Championv3ChampionInfo;
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
  matchId: Scalars['MatchId'];
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


export type QueryFeaturedGamesArgs = {
  region: RegionInput;
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

export type Spectatorv4BannedChampion = {
  __typename?: 'Spectatorv4BannedChampion';
  /** The ID of the banned champion */
  championId: Scalars['Float'];
  /** The turn during which the champion was banned */
  pickTurn: Scalars['Int'];
  /** The ID of the team that banned the champion */
  teamId: Scalars['Float'];
};

export type Spectatorv4CurrentGameInfo = {
  __typename?: 'Spectatorv4CurrentGameInfo';
  /** Banned champion information */
  bannedChampions: Array<Maybe<Spectatorv4BannedChampion>>;
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
  observers: Spectatorv4Observer;
  /** The participant information */
  participants: Array<Maybe<Spectatorv4CurrentGameParticipant>>;
  /** The ID of the platform on which the game is being played */
  platformId: Scalars['String'];
};

export type Spectatorv4CurrentGameParticipant = {
  __typename?: 'Spectatorv4CurrentGameParticipant';
  /** Flag indicating whether or not this participant is a bot */
  bot: Scalars['Boolean'];
  /** The ID of the champion played by this participant */
  championId: Scalars['Float'];
  /** List of Game Customizations */
  gameCustomizationObjects: Array<Maybe<Spectatorv4GameCustomizationObject>>;
  perks: Spectatorv4Perks;
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

export type Spectatorv4FeaturedGameInfo = {
  __typename?: 'Spectatorv4FeaturedGameInfo';
  /** Banned champion information */
  bannedChampions: Array<Maybe<Spectatorv4BannedChampion>>;
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
  observers: Spectatorv4Observer;
  /** The participant information */
  participants: Array<Maybe<Spectatorv4Participant>>;
  /** The ID of the platform on which the game is being played */
  platformId: Scalars['String'];
};

export type Spectatorv4FeaturedGames = {
  __typename?: 'Spectatorv4FeaturedGames';
  /** The suggested interval to wait before requesting FeaturedGames again */
  clientRefreshInterval: Scalars['Float'];
  /** The list of featured games */
  gameList: Array<Maybe<Spectatorv4FeaturedGameInfo>>;
};

export type Spectatorv4GameCustomizationObject = {
  __typename?: 'Spectatorv4GameCustomizationObject';
  /** Category identifier for Game Customization */
  category: Scalars['String'];
  /** Game Customization content */
  content: Scalars['String'];
};

export type Spectatorv4Observer = {
  __typename?: 'Spectatorv4Observer';
  /** Key used to decrypt the spectator grid game data for playback */
  encryptionKey: Scalars['String'];
};

export type Spectatorv4Participant = {
  __typename?: 'Spectatorv4Participant';
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

export type Spectatorv4Perks = {
  __typename?: 'Spectatorv4Perks';
  /** IDs of the perks/runes assigned. */
  perkIds: Array<Maybe<Scalars['Float']>>;
  /** Primary runes path */
  perkStyle: Scalars['Float'];
  /** Secondary runes path */
  perkSubStyle: Scalars['Float'];
};

/** represents a summoner */
export type Summonerv4Summoner = {
  __typename?: 'Summonerv4Summoner';
  /** Encrypted account ID. Max length 56 characters. */
  accountId: Scalars['String'];
  /** Get current game information for the given summoner. */
  activeMatch?: Maybe<Spectatorv4CurrentGameInfo>;
  /** Get champion mastery information of this summoner */
  championMastery: ChampionMastery;
  /** Get an array of clash registrations for this summoner. */
  clash: Array<Clashv1PlayerRegistration>;
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
  rank?: Maybe<Leaguev4LeagueEntry>;
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
export type Summonerv4SummonerActiveMatchArgs = {
  game: Game;
};


/** represents a summoner */
export type Summonerv4SummonerMatchListArgs = {
  game: Game;
  filter?: Maybe<MatchListFilterInput>;
};


/** represents a summoner */
export type Summonerv4SummonerRankArgs = {
  queue: AllRankedQueues;
};

export type Tftleaguev1LeagueEntry = {
  __typename?: 'Tftleaguev1LeagueEntry';
  freshBlood: Scalars['Boolean'];
  hotStreak: Scalars['Boolean'];
  inactive: Scalars['Boolean'];
  leagueId: Scalars['String'];
  leaguePoints: Scalars['Int'];
  /** Second through eighth placement. */
  losses: Scalars['Int'];
  miniSeries?: Maybe<Tftleaguev1MiniSeries>;
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

export type Tftleaguev1LeagueItem = {
  __typename?: 'Tftleaguev1LeagueItem';
  freshBlood: Scalars['Boolean'];
  hotStreak: Scalars['Boolean'];
  inactive: Scalars['Boolean'];
  leaguePoints: Scalars['Int'];
  /** Second through eighth placement. */
  losses: Scalars['Int'];
  miniSeries?: Maybe<Tftleaguev1MiniSeries>;
  rank: Scalars['String'];
  /** Player's encrypted summonerId. */
  summonerId: Scalars['String'];
  summonerName: Scalars['String'];
  veteran: Scalars['Boolean'];
  /** First placement. */
  wins: Scalars['Int'];
};

export type Tftleaguev1LeagueList = {
  __typename?: 'Tftleaguev1LeagueList';
  entries: Array<Maybe<Tftleaguev1LeagueItem>>;
  leagueId: Scalars['String'];
  name: Scalars['String'];
  queue: Scalars['String'];
  tier: Scalars['String'];
};

export type Tftleaguev1MiniSeries = {
  __typename?: 'Tftleaguev1MiniSeries';
  losses: Scalars['Int'];
  progress: Scalars['String'];
  target: Scalars['Int'];
  wins: Scalars['Int'];
};

/** TFT matchlist return type. Returns a list of match ids */
export type TftMatchIdList = {
  __typename?: 'TFTMatchIdList';
  matches: Array<Scalars['String']>;
};

export type Tftmatchv1Companion = {
  __typename?: 'Tftmatchv1Companion';
  content_ID: Scalars['String'];
  skin_ID: Scalars['Int'];
  species: Scalars['String'];
};

export type Tftmatchv1Info = {
  __typename?: 'Tftmatchv1Info';
  /** Unix timestamp. */
  game_datetime: Scalars['Float'];
  /** Game length in seconds. */
  game_length: Scalars['Float'];
  /** Game variation key. Game variations documented in TFT static data. */
  game_variation?: Maybe<Scalars['String']>;
  /** Game client version. */
  game_version: Scalars['String'];
  /** Participants. */
  participants: Array<Maybe<Tftmatchv1Participant>>;
  /** Please refer to the League of Legends documentation. */
  queue_id: Scalars['Int'];
  /** Teamfight Tactics set number. */
  tft_set_number: Scalars['Int'];
};

export type Tftmatchv1Match = {
  __typename?: 'Tftmatchv1Match';
  info: Tftmatchv1Info;
  metadata: Tftmatchv1Metadata;
};

export type Tftmatchv1Metadata = {
  __typename?: 'Tftmatchv1Metadata';
  /** Match data version. */
  data_version: Scalars['String'];
  /** Match id. */
  match_id: Scalars['String'];
  /** A list of encrypted participant PUUIDs. */
  participants: Array<Maybe<Scalars['String']>>;
};

export type Tftmatchv1Participant = {
  __typename?: 'Tftmatchv1Participant';
  companion: Tftmatchv1Companion;
  /** Gold left after participant was eliminated. */
  gold_left: Scalars['Int'];
  /** The round the participant was eliminated in. Note: If the player was eliminated in stage 2-1 their last_round would be 5. */
  last_round: Scalars['Int'];
  /** Participant Little Legend level. Note: This is not the number of active units. */
  level: Scalars['Int'];
  /** Participant placement upon elimination. */
  placement: Scalars['Int'];
  /** Number of players the participant eliminated. */
  players_eliminated: Scalars['Int'];
  /** Encrypted PUUID. */
  puuid: Scalars['String'];
  /** The number of seconds before the participant was eliminated. */
  time_eliminated: Scalars['Float'];
  /** Damage the participant dealt to other players. */
  total_damage_to_players: Scalars['Int'];
  /** A complete list of traits for the participant's active units. */
  traits: Array<Maybe<Tftmatchv1Trait>>;
  /** A list of active units for the participant. */
  units: Array<Maybe<Tftmatchv1Unit>>;
};

export type Tftmatchv1Trait = {
  __typename?: 'Tftmatchv1Trait';
  /** Trait name. */
  name: Scalars['String'];
  /** Number of units with this trait. */
  num_units: Scalars['Int'];
  /** Current active tier for the trait. */
  tier_current: Scalars['Int'];
  /** Total tiers for the trait. */
  tier_total?: Maybe<Scalars['Int']>;
};

export type Tftmatchv1Unit = {
  __typename?: 'Tftmatchv1Unit';
  /** This field was introduced in patch 9.22 with data_version 2. */
  character_id: Scalars['String'];
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
export type Tftsummonerv1Summoner = {
  __typename?: 'Tftsummonerv1Summoner';
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

export type Tournamentstubv4LobbyEvent = {
  __typename?: 'Tournamentstubv4LobbyEvent';
  /** The type of event that was triggered */
  eventType: Scalars['String'];
  /** The summonerId that triggered the event (Encrypted) */
  summonerId: Scalars['String'];
  /** Timestamp from the event */
  timestamp: Scalars['String'];
};

export type Tournamentstubv4LobbyEventDtoWrapper = {
  __typename?: 'Tournamentstubv4LobbyEventDTOWrapper';
  eventList: Array<Maybe<Tournamentstubv4LobbyEvent>>;
};

export type Tournamentstubv4ProviderRegistrationParametersInput = {
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

export type Tournamentstubv4TournamentCodeParametersInput = {
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

export type Tournamentstubv4TournamentRegistrationParametersInput = {
  /** The optional name of the tournament. */
  name?: Maybe<Scalars['String']>;
  /** The provider ID to specify the regional registered provider data to associate this tournament. */
  providerId: Scalars['Int'];
};

export type Tournamentv4LobbyEvent = {
  __typename?: 'Tournamentv4LobbyEvent';
  /** The type of event that was triggered */
  eventType: Scalars['String'];
  /** The summonerId that triggered the event (Encrypted) */
  summonerId: Scalars['String'];
  /** Timestamp from the event */
  timestamp: Scalars['String'];
};

export type Tournamentv4LobbyEventDtoWrapper = {
  __typename?: 'Tournamentv4LobbyEventDTOWrapper';
  eventList: Array<Maybe<Tournamentv4LobbyEvent>>;
};

export type Tournamentv4ProviderRegistrationParametersInput = {
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

export type Tournamentv4TournamentCode = {
  __typename?: 'Tournamentv4TournamentCode';
  /** The tournament code. */
  code: Scalars['String'];
  /** The tournament code's ID. */
  id: Scalars['Int'];
  lobbyEvents?: Maybe<Tournamentv4LobbyEvent>;
  /** The lobby name for the tournament code game. */
  lobbyName: Scalars['String'];
  /** The game map for the tournament code game */
  map: Scalars['String'];
  matchDetails?: Maybe<Matchv4Match>;
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


export type Tournamentv4TournamentCodeMatchDetailsArgs = {
  matchId: Scalars['Float'];
};

export type Tournamentv4TournamentCodeParametersInput = {
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

export type Tournamentv4TournamentRegistrationParametersInput = {
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
  Summonerv4Summoner: ResolverTypeWrapper<Omit<Summonerv4Summoner, 'matchList'> & { matchList?: Maybe<ResolversTypes['MatchList']> }>;
  Game: Game;
  Spectatorv4CurrentGameInfo: ResolverTypeWrapper<Spectatorv4CurrentGameInfo>;
  Spectatorv4BannedChampion: ResolverTypeWrapper<Spectatorv4BannedChampion>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Spectatorv4Observer: ResolverTypeWrapper<Spectatorv4Observer>;
  Spectatorv4CurrentGameParticipant: ResolverTypeWrapper<Spectatorv4CurrentGameParticipant>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Spectatorv4GameCustomizationObject: ResolverTypeWrapper<Spectatorv4GameCustomizationObject>;
  Spectatorv4Perks: ResolverTypeWrapper<Spectatorv4Perks>;
  ChampionMastery: ResolverTypeWrapper<ChampionMastery>;
  Championmasteryv4ChampionMastery: ResolverTypeWrapper<Championmasteryv4ChampionMastery>;
  Clashv1PlayerRegistration: ResolverTypeWrapper<Clashv1PlayerRegistration>;
  Position: Position;
  Role: Role;
  Clashv1Team: ResolverTypeWrapper<Clashv1Team>;
  Clashv1Player: ResolverTypeWrapper<Clashv1Player>;
  MatchListFilterInput: MatchListFilterInput;
  QueueId: QueueId;
  Long: ResolverTypeWrapper<Scalars['Long']>;
  MatchList: ResolversTypes['Matchv4Matchlist'] | ResolversTypes['TFTMatchIdList'];
  Matchv4Matchlist: ResolverTypeWrapper<Matchv4Matchlist>;
  Matchv4MatchReference: ResolverTypeWrapper<Matchv4MatchReference>;
  TFTMatchIdList: ResolverTypeWrapper<TftMatchIdList>;
  AllRankedQueues: AllRankedQueues;
  Leaguev4LeagueEntry: ResolverTypeWrapper<Leaguev4LeagueEntry>;
  Leaguev4MiniSeries: ResolverTypeWrapper<Leaguev4MiniSeries>;
  MatchId: ResolverTypeWrapper<Scalars['MatchId']>;
  Match: ResolversTypes['Matchv4Match'] | ResolversTypes['Tftmatchv1Match'];
  Matchv4Match: ResolverTypeWrapper<Matchv4Match>;
  Matchv4ParticipantIdentity: ResolverTypeWrapper<Matchv4ParticipantIdentity>;
  Matchv4Player: ResolverTypeWrapper<Matchv4Player>;
  Matchv4Participant: ResolverTypeWrapper<Matchv4Participant>;
  HighestAchievedSeasonTier: HighestAchievedSeasonTier;
  Matchv4Mastery: ResolverTypeWrapper<Matchv4Mastery>;
  Matchv4Rune: ResolverTypeWrapper<Matchv4Rune>;
  Matchv4ParticipantStats: ResolverTypeWrapper<Matchv4ParticipantStats>;
  Matchv4ParticipantTimeline: ResolverTypeWrapper<Matchv4ParticipantTimeline>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  Lane: Lane;
  Role2: Role2;
  Matchv4TeamStats: ResolverTypeWrapper<Matchv4TeamStats>;
  Matchv4TeamBans: ResolverTypeWrapper<Matchv4TeamBans>;
  Win: Win;
  Tftmatchv1Match: ResolverTypeWrapper<Tftmatchv1Match>;
  Tftmatchv1Info: ResolverTypeWrapper<Tftmatchv1Info>;
  Tftmatchv1Participant: ResolverTypeWrapper<Tftmatchv1Participant>;
  Tftmatchv1Companion: ResolverTypeWrapper<Tftmatchv1Companion>;
  Tftmatchv1Trait: ResolverTypeWrapper<Tftmatchv1Trait>;
  Tftmatchv1Unit: ResolverTypeWrapper<Tftmatchv1Unit>;
  Tftmatchv1Metadata: ResolverTypeWrapper<Tftmatchv1Metadata>;
  Queue: Queue;
  LowerTier: LowerTier;
  Division: Division;
  Leaguev4LeagueList: ResolverTypeWrapper<Leaguev4LeagueList>;
  Leaguev4LeagueItem: ResolverTypeWrapper<Leaguev4LeagueItem>;
  Tier: Tier;
  Tournamentv4TournamentCode: ResolverTypeWrapper<Tournamentv4TournamentCode>;
  Tournamentv4LobbyEvent: ResolverTypeWrapper<Tournamentv4LobbyEvent>;
  Region2: Region2;
  Spectatorv4FeaturedGames: ResolverTypeWrapper<Spectatorv4FeaturedGames>;
  Spectatorv4FeaturedGameInfo: ResolverTypeWrapper<Spectatorv4FeaturedGameInfo>;
  GameMode: GameMode;
  GameType: GameType;
  Spectatorv4Participant: ResolverTypeWrapper<Spectatorv4Participant>;
  Championv3ChampionInfo: ResolverTypeWrapper<Championv3ChampionInfo>;
  UpperTier: UpperTier;
  Clashv1Tournament: ResolverTypeWrapper<Clashv1Tournament>;
  Clashv1TournamentPhase: ResolverTypeWrapper<Clashv1TournamentPhase>;
  Division2: Division2;
  Leagueexpv4LeagueEntry: ResolverTypeWrapper<Leagueexpv4LeagueEntry>;
  Leagueexpv4MiniSeries: ResolverTypeWrapper<Leagueexpv4MiniSeries>;
  Lolstatusv3Incident: ResolverTypeWrapper<Lolstatusv3Incident>;
  Lolstatusv3Message: ResolverTypeWrapper<Lolstatusv3Message>;
  Lolstatusv3Translation: ResolverTypeWrapper<Lolstatusv3Translation>;
  Lolstatusv3Service: ResolverTypeWrapper<Lolstatusv3Service>;
  Lolstatusv3ShardStatus: ResolverTypeWrapper<Lolstatusv3ShardStatus>;
  Lorrankedv1Leaderboard: ResolverTypeWrapper<Lorrankedv1Leaderboard>;
  Lorrankedv1Player: ResolverTypeWrapper<Lorrankedv1Player>;
  MapType: MapType;
  Matchv4MatchEvent: ResolverTypeWrapper<Matchv4MatchEvent>;
  Matchv4MatchPosition: ResolverTypeWrapper<Matchv4MatchPosition>;
  Type: Type;
  Matchv4MatchFrame: ResolverTypeWrapper<Matchv4MatchFrame>;
  Matchv4MatchTimeline: ResolverTypeWrapper<Matchv4MatchTimeline>;
  PickType: PickType;
  Queue2: Queue2;
  Region: Region;
  SpectatorType: SpectatorType;
  Tftleaguev1LeagueEntry: ResolverTypeWrapper<Tftleaguev1LeagueEntry>;
  Tftleaguev1MiniSeries: ResolverTypeWrapper<Tftleaguev1MiniSeries>;
  Tftleaguev1LeagueItem: ResolverTypeWrapper<Tftleaguev1LeagueItem>;
  Tftleaguev1LeagueList: ResolverTypeWrapper<Tftleaguev1LeagueList>;
  Tftsummonerv1Summoner: ResolverTypeWrapper<Tftsummonerv1Summoner>;
  Tier2: Tier2;
  Tier3: Tier3;
  Tournamentstubv4LobbyEvent: ResolverTypeWrapper<Tournamentstubv4LobbyEvent>;
  Tournamentstubv4LobbyEventDTOWrapper: ResolverTypeWrapper<Tournamentstubv4LobbyEventDtoWrapper>;
  Tournamentstubv4ProviderRegistrationParametersInput: Tournamentstubv4ProviderRegistrationParametersInput;
  Tournamentstubv4TournamentCodeParametersInput: Tournamentstubv4TournamentCodeParametersInput;
  Tournamentstubv4TournamentRegistrationParametersInput: Tournamentstubv4TournamentRegistrationParametersInput;
  Tournamentv4LobbyEventDTOWrapper: ResolverTypeWrapper<Tournamentv4LobbyEventDtoWrapper>;
  Tournamentv4ProviderRegistrationParametersInput: Tournamentv4ProviderRegistrationParametersInput;
  Tournamentv4TournamentCodeParametersInput: Tournamentv4TournamentCodeParametersInput;
  Tournamentv4TournamentRegistrationParametersInput: Tournamentv4TournamentRegistrationParametersInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  Info: Info;
  String: Scalars['String'];
  Summonerv4Summoner: Omit<Summonerv4Summoner, 'matchList'> & { matchList?: Maybe<ResolversParentTypes['MatchList']> };
  Spectatorv4CurrentGameInfo: Spectatorv4CurrentGameInfo;
  Spectatorv4BannedChampion: Spectatorv4BannedChampion;
  Float: Scalars['Float'];
  Int: Scalars['Int'];
  Spectatorv4Observer: Spectatorv4Observer;
  Spectatorv4CurrentGameParticipant: Spectatorv4CurrentGameParticipant;
  Boolean: Scalars['Boolean'];
  Spectatorv4GameCustomizationObject: Spectatorv4GameCustomizationObject;
  Spectatorv4Perks: Spectatorv4Perks;
  ChampionMastery: ChampionMastery;
  Championmasteryv4ChampionMastery: Championmasteryv4ChampionMastery;
  Clashv1PlayerRegistration: Clashv1PlayerRegistration;
  Clashv1Team: Clashv1Team;
  Clashv1Player: Clashv1Player;
  MatchListFilterInput: MatchListFilterInput;
  Long: Scalars['Long'];
  MatchList: ResolversParentTypes['Matchv4Matchlist'] | ResolversParentTypes['TFTMatchIdList'];
  Matchv4Matchlist: Matchv4Matchlist;
  Matchv4MatchReference: Matchv4MatchReference;
  TFTMatchIdList: TftMatchIdList;
  Leaguev4LeagueEntry: Leaguev4LeagueEntry;
  Leaguev4MiniSeries: Leaguev4MiniSeries;
  MatchId: Scalars['MatchId'];
  Match: ResolversParentTypes['Matchv4Match'] | ResolversParentTypes['Tftmatchv1Match'];
  Matchv4Match: Matchv4Match;
  Matchv4ParticipantIdentity: Matchv4ParticipantIdentity;
  Matchv4Player: Matchv4Player;
  Matchv4Participant: Matchv4Participant;
  Matchv4Mastery: Matchv4Mastery;
  Matchv4Rune: Matchv4Rune;
  Matchv4ParticipantStats: Matchv4ParticipantStats;
  Matchv4ParticipantTimeline: Matchv4ParticipantTimeline;
  JSON: Scalars['JSON'];
  Matchv4TeamStats: Matchv4TeamStats;
  Matchv4TeamBans: Matchv4TeamBans;
  Tftmatchv1Match: Tftmatchv1Match;
  Tftmatchv1Info: Tftmatchv1Info;
  Tftmatchv1Participant: Tftmatchv1Participant;
  Tftmatchv1Companion: Tftmatchv1Companion;
  Tftmatchv1Trait: Tftmatchv1Trait;
  Tftmatchv1Unit: Tftmatchv1Unit;
  Tftmatchv1Metadata: Tftmatchv1Metadata;
  Leaguev4LeagueList: Leaguev4LeagueList;
  Leaguev4LeagueItem: Leaguev4LeagueItem;
  Tournamentv4TournamentCode: Tournamentv4TournamentCode;
  Tournamentv4LobbyEvent: Tournamentv4LobbyEvent;
  Spectatorv4FeaturedGames: Spectatorv4FeaturedGames;
  Spectatorv4FeaturedGameInfo: Spectatorv4FeaturedGameInfo;
  Spectatorv4Participant: Spectatorv4Participant;
  Championv3ChampionInfo: Championv3ChampionInfo;
  Clashv1Tournament: Clashv1Tournament;
  Clashv1TournamentPhase: Clashv1TournamentPhase;
  Leagueexpv4LeagueEntry: Leagueexpv4LeagueEntry;
  Leagueexpv4MiniSeries: Leagueexpv4MiniSeries;
  Lolstatusv3Incident: Lolstatusv3Incident;
  Lolstatusv3Message: Lolstatusv3Message;
  Lolstatusv3Translation: Lolstatusv3Translation;
  Lolstatusv3Service: Lolstatusv3Service;
  Lolstatusv3ShardStatus: Lolstatusv3ShardStatus;
  Lorrankedv1Leaderboard: Lorrankedv1Leaderboard;
  Lorrankedv1Player: Lorrankedv1Player;
  Matchv4MatchEvent: Matchv4MatchEvent;
  Matchv4MatchPosition: Matchv4MatchPosition;
  Matchv4MatchFrame: Matchv4MatchFrame;
  Matchv4MatchTimeline: Matchv4MatchTimeline;
  Tftleaguev1LeagueEntry: Tftleaguev1LeagueEntry;
  Tftleaguev1MiniSeries: Tftleaguev1MiniSeries;
  Tftleaguev1LeagueItem: Tftleaguev1LeagueItem;
  Tftleaguev1LeagueList: Tftleaguev1LeagueList;
  Tftsummonerv1Summoner: Tftsummonerv1Summoner;
  Tournamentstubv4LobbyEvent: Tournamentstubv4LobbyEvent;
  Tournamentstubv4LobbyEventDTOWrapper: Tournamentstubv4LobbyEventDtoWrapper;
  Tournamentstubv4ProviderRegistrationParametersInput: Tournamentstubv4ProviderRegistrationParametersInput;
  Tournamentstubv4TournamentCodeParametersInput: Tournamentstubv4TournamentCodeParametersInput;
  Tournamentstubv4TournamentRegistrationParametersInput: Tournamentstubv4TournamentRegistrationParametersInput;
  Tournamentv4LobbyEventDTOWrapper: Tournamentv4LobbyEventDtoWrapper;
  Tournamentv4ProviderRegistrationParametersInput: Tournamentv4ProviderRegistrationParametersInput;
  Tournamentv4TournamentCodeParametersInput: Tournamentv4TournamentCodeParametersInput;
  Tournamentv4TournamentRegistrationParametersInput: Tournamentv4TournamentRegistrationParametersInput;
};

export type ChampionMasteryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChampionMastery'] = ResolversParentTypes['ChampionMastery']> = {
  score?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  byChampion?: Resolver<Maybe<Array<ResolversTypes['Championmasteryv4ChampionMastery']>>, ParentType, ContextType, RequireFields<ChampionMasteryByChampionArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Championmasteryv4ChampionMasteryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Championmasteryv4ChampionMastery'] = ResolversParentTypes['Championmasteryv4ChampionMastery']> = {
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

export type Championv3ChampionInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Championv3ChampionInfo'] = ResolversParentTypes['Championv3ChampionInfo']> = {
  freeChampionIds?: Resolver<Array<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
  freeChampionIdsForNewPlayers?: Resolver<Array<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
  maxNewPlayerLevel?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Clashv1PlayerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Clashv1Player'] = ResolversParentTypes['Clashv1Player']> = {
  position?: Resolver<ResolversTypes['Position'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Role'], ParentType, ContextType>;
  summonerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  teamId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Clashv1PlayerRegistrationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Clashv1PlayerRegistration'] = ResolversParentTypes['Clashv1PlayerRegistration']> = {
  position?: Resolver<ResolversTypes['Position'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Role'], ParentType, ContextType>;
  summonerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  teamId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  team?: Resolver<ResolversTypes['Clashv1Team'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Clashv1TeamResolvers<ContextType = any, ParentType extends ResolversParentTypes['Clashv1Team'] = ResolversParentTypes['Clashv1Team']> = {
  abbreviation?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  captain?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  iconId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  players?: Resolver<Array<Maybe<ResolversTypes['Clashv1Player']>>, ParentType, ContextType>;
  tier?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tournamentId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Clashv1TournamentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Clashv1Tournament'] = ResolversParentTypes['Clashv1Tournament']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nameKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nameKeySecondary?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  schedule?: Resolver<Array<Maybe<ResolversTypes['Clashv1TournamentPhase']>>, ParentType, ContextType>;
  themeId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Clashv1TournamentPhaseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Clashv1TournamentPhase'] = ResolversParentTypes['Clashv1TournamentPhase']> = {
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

export type Leagueexpv4LeagueEntryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Leagueexpv4LeagueEntry'] = ResolversParentTypes['Leagueexpv4LeagueEntry']> = {
  freshBlood?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hotStreak?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  inactive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  leagueId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  leaguePoints?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  losses?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  miniSeries?: Resolver<Maybe<ResolversTypes['Leagueexpv4MiniSeries']>, ParentType, ContextType>;
  queueType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rank?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  summonerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  summonerName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  veteran?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  wins?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Leagueexpv4MiniSeriesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Leagueexpv4MiniSeries'] = ResolversParentTypes['Leagueexpv4MiniSeries']> = {
  losses?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  progress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  target?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  wins?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Leaguev4LeagueEntryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Leaguev4LeagueEntry'] = ResolversParentTypes['Leaguev4LeagueEntry']> = {
  freshBlood?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hotStreak?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  inactive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  leagueId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  leaguePoints?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  losses?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  miniSeries?: Resolver<Maybe<ResolversTypes['Leaguev4MiniSeries']>, ParentType, ContextType>;
  queueType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rank?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  summonerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  summonerName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  veteran?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  wins?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Leaguev4LeagueItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['Leaguev4LeagueItem'] = ResolversParentTypes['Leaguev4LeagueItem']> = {
  freshBlood?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hotStreak?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  inactive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  leaguePoints?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  losses?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  miniSeries?: Resolver<Maybe<ResolversTypes['Leaguev4MiniSeries']>, ParentType, ContextType>;
  rank?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  summonerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  summonerName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  veteran?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  wins?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Leaguev4LeagueListResolvers<ContextType = any, ParentType extends ResolversParentTypes['Leaguev4LeagueList'] = ResolversParentTypes['Leaguev4LeagueList']> = {
  entries?: Resolver<Array<Maybe<ResolversTypes['Leaguev4LeagueItem']>>, ParentType, ContextType>;
  leagueId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  queue?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Leaguev4MiniSeriesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Leaguev4MiniSeries'] = ResolversParentTypes['Leaguev4MiniSeries']> = {
  losses?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  progress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  target?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  wins?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Lolstatusv3IncidentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Lolstatusv3Incident'] = ResolversParentTypes['Lolstatusv3Incident']> = {
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  updates?: Resolver<Array<Maybe<ResolversTypes['Lolstatusv3Message']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Lolstatusv3MessageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Lolstatusv3Message'] = ResolversParentTypes['Lolstatusv3Message']> = {
  author?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  severity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  translations?: Resolver<Array<Maybe<ResolversTypes['Lolstatusv3Translation']>>, ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Lolstatusv3ServiceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Lolstatusv3Service'] = ResolversParentTypes['Lolstatusv3Service']> = {
  incidents?: Resolver<Array<Maybe<ResolversTypes['Lolstatusv3Incident']>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Lolstatusv3ShardStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['Lolstatusv3ShardStatus'] = ResolversParentTypes['Lolstatusv3ShardStatus']> = {
  hostname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  locales?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  region_tag?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  services?: Resolver<Array<Maybe<ResolversTypes['Lolstatusv3Service']>>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Lolstatusv3TranslationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Lolstatusv3Translation'] = ResolversParentTypes['Lolstatusv3Translation']> = {
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  heading?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  locale?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export interface LongScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Long'], any> {
  name: 'Long';
}

export type Lorrankedv1LeaderboardResolvers<ContextType = any, ParentType extends ResolversParentTypes['Lorrankedv1Leaderboard'] = ResolversParentTypes['Lorrankedv1Leaderboard']> = {
  players?: Resolver<Array<Maybe<ResolversTypes['Lorrankedv1Player']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Lorrankedv1PlayerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Lorrankedv1Player'] = ResolversParentTypes['Lorrankedv1Player']> = {
  lp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rank?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MatchResolvers<ContextType = any, ParentType extends ResolversParentTypes['Match'] = ResolversParentTypes['Match']> = {
  __resolveType: TypeResolveFn<'Matchv4Match' | 'Tftmatchv1Match', ParentType, ContextType>;
};

export interface MatchIdScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['MatchId'], any> {
  name: 'MatchId';
}

export type MatchListResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchList'] = ResolversParentTypes['MatchList']> = {
  __resolveType: TypeResolveFn<'Matchv4Matchlist' | 'TFTMatchIdList', ParentType, ContextType>;
};

export type Matchv4MasteryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Matchv4Mastery'] = ResolversParentTypes['Matchv4Mastery']> = {
  masteryId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rank?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Matchv4MatchResolvers<ContextType = any, ParentType extends ResolversParentTypes['Matchv4Match'] = ResolversParentTypes['Matchv4Match']> = {
  gameCreation?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  gameDuration?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  gameId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  gameMode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gameType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gameVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mapId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  participantIdentities?: Resolver<Array<Maybe<ResolversTypes['Matchv4ParticipantIdentity']>>, ParentType, ContextType>;
  participants?: Resolver<Array<Maybe<ResolversTypes['Matchv4Participant']>>, ParentType, ContextType>;
  platformId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  queueId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  seasonId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  teams?: Resolver<Array<Maybe<ResolversTypes['Matchv4TeamStats']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Matchv4MatchEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['Matchv4MatchEvent'] = ResolversParentTypes['Matchv4MatchEvent']> = {
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
  position?: Resolver<Maybe<ResolversTypes['Matchv4MatchPosition']>, ParentType, ContextType>;
  skillSlot?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  teamId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  towerType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['Type'], ParentType, ContextType>;
  victimId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  wardType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Matchv4MatchFrameResolvers<ContextType = any, ParentType extends ResolversParentTypes['Matchv4MatchFrame'] = ResolversParentTypes['Matchv4MatchFrame']> = {
  events?: Resolver<Array<Maybe<ResolversTypes['Matchv4MatchEvent']>>, ParentType, ContextType>;
  participantFrames?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Matchv4MatchlistResolvers<ContextType = any, ParentType extends ResolversParentTypes['Matchv4Matchlist'] = ResolversParentTypes['Matchv4Matchlist']> = {
  endIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  matches?: Resolver<Array<Maybe<ResolversTypes['Matchv4MatchReference']>>, ParentType, ContextType>;
  startIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalGames?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Matchv4MatchPositionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Matchv4MatchPosition'] = ResolversParentTypes['Matchv4MatchPosition']> = {
  x?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  y?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Matchv4MatchReferenceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Matchv4MatchReference'] = ResolversParentTypes['Matchv4MatchReference']> = {
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

export type Matchv4MatchTimelineResolvers<ContextType = any, ParentType extends ResolversParentTypes['Matchv4MatchTimeline'] = ResolversParentTypes['Matchv4MatchTimeline']> = {
  frameInterval?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  frames?: Resolver<Array<Maybe<ResolversTypes['Matchv4MatchFrame']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Matchv4ParticipantResolvers<ContextType = any, ParentType extends ResolversParentTypes['Matchv4Participant'] = ResolversParentTypes['Matchv4Participant']> = {
  championId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  highestAchievedSeasonTier?: Resolver<Maybe<ResolversTypes['HighestAchievedSeasonTier']>, ParentType, ContextType>;
  masteries?: Resolver<Maybe<Array<Maybe<ResolversTypes['Matchv4Mastery']>>>, ParentType, ContextType>;
  participantId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  runes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Matchv4Rune']>>>, ParentType, ContextType>;
  spell1Id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  spell2Id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  stats?: Resolver<ResolversTypes['Matchv4ParticipantStats'], ParentType, ContextType>;
  teamId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timeline?: Resolver<ResolversTypes['Matchv4ParticipantTimeline'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Matchv4ParticipantIdentityResolvers<ContextType = any, ParentType extends ResolversParentTypes['Matchv4ParticipantIdentity'] = ResolversParentTypes['Matchv4ParticipantIdentity']> = {
  participantId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  player?: Resolver<ResolversTypes['Matchv4Player'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Matchv4ParticipantStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Matchv4ParticipantStats'] = ResolversParentTypes['Matchv4ParticipantStats']> = {
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

export type Matchv4ParticipantTimelineResolvers<ContextType = any, ParentType extends ResolversParentTypes['Matchv4ParticipantTimeline'] = ResolversParentTypes['Matchv4ParticipantTimeline']> = {
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

export type Matchv4PlayerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Matchv4Player'] = ResolversParentTypes['Matchv4Player']> = {
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

export type Matchv4RuneResolvers<ContextType = any, ParentType extends ResolversParentTypes['Matchv4Rune'] = ResolversParentTypes['Matchv4Rune']> = {
  rank?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  runeId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Matchv4TeamBansResolvers<ContextType = any, ParentType extends ResolversParentTypes['Matchv4TeamBans'] = ResolversParentTypes['Matchv4TeamBans']> = {
  championId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pickTurn?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Matchv4TeamStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Matchv4TeamStats'] = ResolversParentTypes['Matchv4TeamStats']> = {
  bans?: Resolver<Array<Maybe<ResolversTypes['Matchv4TeamBans']>>, ParentType, ContextType>;
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
  summoner?: Resolver<Maybe<ResolversTypes['Summonerv4Summoner']>, ParentType, ContextType, RequireFields<QuerySummonerArgs, 'region'>>;
  match?: Resolver<Maybe<ResolversTypes['Match']>, ParentType, ContextType, RequireFields<QueryMatchArgs, 'region' | 'matchId' | 'game'>>;
  rankedList?: Resolver<Array<ResolversTypes['Leaguev4LeagueList']>, ParentType, ContextType, RequireFields<QueryRankedListArgs, 'region' | 'queue' | 'tier' | 'game'>>;
  rankedLeague?: Resolver<ResolversTypes['Leaguev4LeagueEntry'], ParentType, ContextType, RequireFields<QueryRankedLeagueArgs, 'game'>>;
  tournament?: Resolver<Maybe<ResolversTypes['Tournamentv4TournamentCode']>, ParentType, ContextType, RequireFields<QueryTournamentArgs, 'code'>>;
  featuredGames?: Resolver<Maybe<ResolversTypes['Spectatorv4FeaturedGames']>, ParentType, ContextType, RequireFields<QueryFeaturedGamesArgs, 'region' | 'game'>>;
  championRotation?: Resolver<ResolversTypes['Championv3ChampionInfo'], ParentType, ContextType>;
  clash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type Spectatorv4BannedChampionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Spectatorv4BannedChampion'] = ResolversParentTypes['Spectatorv4BannedChampion']> = {
  championId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  pickTurn?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  teamId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Spectatorv4CurrentGameInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Spectatorv4CurrentGameInfo'] = ResolversParentTypes['Spectatorv4CurrentGameInfo']> = {
  bannedChampions?: Resolver<Array<Maybe<ResolversTypes['Spectatorv4BannedChampion']>>, ParentType, ContextType>;
  gameId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  gameLength?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  gameMode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gameQueueConfigId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  gameStartTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  gameType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mapId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  observers?: Resolver<ResolversTypes['Spectatorv4Observer'], ParentType, ContextType>;
  participants?: Resolver<Array<Maybe<ResolversTypes['Spectatorv4CurrentGameParticipant']>>, ParentType, ContextType>;
  platformId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Spectatorv4CurrentGameParticipantResolvers<ContextType = any, ParentType extends ResolversParentTypes['Spectatorv4CurrentGameParticipant'] = ResolversParentTypes['Spectatorv4CurrentGameParticipant']> = {
  bot?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  championId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  gameCustomizationObjects?: Resolver<Array<Maybe<ResolversTypes['Spectatorv4GameCustomizationObject']>>, ParentType, ContextType>;
  perks?: Resolver<ResolversTypes['Spectatorv4Perks'], ParentType, ContextType>;
  profileIconId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  spell1Id?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  spell2Id?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  summonerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  summonerName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  teamId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Spectatorv4FeaturedGameInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Spectatorv4FeaturedGameInfo'] = ResolversParentTypes['Spectatorv4FeaturedGameInfo']> = {
  bannedChampions?: Resolver<Array<Maybe<ResolversTypes['Spectatorv4BannedChampion']>>, ParentType, ContextType>;
  gameId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  gameLength?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  gameMode?: Resolver<ResolversTypes['GameMode'], ParentType, ContextType>;
  gameQueueConfigId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  gameStartTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  gameType?: Resolver<ResolversTypes['GameType'], ParentType, ContextType>;
  mapId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  observers?: Resolver<ResolversTypes['Spectatorv4Observer'], ParentType, ContextType>;
  participants?: Resolver<Array<Maybe<ResolversTypes['Spectatorv4Participant']>>, ParentType, ContextType>;
  platformId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Spectatorv4FeaturedGamesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Spectatorv4FeaturedGames'] = ResolversParentTypes['Spectatorv4FeaturedGames']> = {
  clientRefreshInterval?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  gameList?: Resolver<Array<Maybe<ResolversTypes['Spectatorv4FeaturedGameInfo']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Spectatorv4GameCustomizationObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['Spectatorv4GameCustomizationObject'] = ResolversParentTypes['Spectatorv4GameCustomizationObject']> = {
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Spectatorv4ObserverResolvers<ContextType = any, ParentType extends ResolversParentTypes['Spectatorv4Observer'] = ResolversParentTypes['Spectatorv4Observer']> = {
  encryptionKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Spectatorv4ParticipantResolvers<ContextType = any, ParentType extends ResolversParentTypes['Spectatorv4Participant'] = ResolversParentTypes['Spectatorv4Participant']> = {
  bot?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  championId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  profileIconId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  spell1Id?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  spell2Id?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  summonerName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  teamId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Spectatorv4PerksResolvers<ContextType = any, ParentType extends ResolversParentTypes['Spectatorv4Perks'] = ResolversParentTypes['Spectatorv4Perks']> = {
  perkIds?: Resolver<Array<Maybe<ResolversTypes['Float']>>, ParentType, ContextType>;
  perkStyle?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  perkSubStyle?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Summonerv4SummonerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Summonerv4Summoner'] = ResolversParentTypes['Summonerv4Summoner']> = {
  accountId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  activeMatch?: Resolver<Maybe<ResolversTypes['Spectatorv4CurrentGameInfo']>, ParentType, ContextType, RequireFields<Summonerv4SummonerActiveMatchArgs, 'game'>>;
  championMastery?: Resolver<ResolversTypes['ChampionMastery'], ParentType, ContextType>;
  clash?: Resolver<Array<ResolversTypes['Clashv1PlayerRegistration']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  matchList?: Resolver<Maybe<ResolversTypes['MatchList']>, ParentType, ContextType, RequireFields<Summonerv4SummonerMatchListArgs, 'game'>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profileIconId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  puuid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Leaguev4LeagueEntry']>, ParentType, ContextType, RequireFields<Summonerv4SummonerRankArgs, 'queue'>>;
  region?: Resolver<ResolversTypes['RegionInput'], ParentType, ContextType>;
  revisionDate?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  summonerLevel?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Tftleaguev1LeagueEntryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tftleaguev1LeagueEntry'] = ResolversParentTypes['Tftleaguev1LeagueEntry']> = {
  freshBlood?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hotStreak?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  inactive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  leagueId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  leaguePoints?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  losses?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  miniSeries?: Resolver<Maybe<ResolversTypes['Tftleaguev1MiniSeries']>, ParentType, ContextType>;
  queueType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rank?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  summonerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  summonerName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  veteran?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  wins?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Tftleaguev1LeagueItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tftleaguev1LeagueItem'] = ResolversParentTypes['Tftleaguev1LeagueItem']> = {
  freshBlood?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hotStreak?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  inactive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  leaguePoints?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  losses?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  miniSeries?: Resolver<Maybe<ResolversTypes['Tftleaguev1MiniSeries']>, ParentType, ContextType>;
  rank?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  summonerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  summonerName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  veteran?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  wins?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Tftleaguev1LeagueListResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tftleaguev1LeagueList'] = ResolversParentTypes['Tftleaguev1LeagueList']> = {
  entries?: Resolver<Array<Maybe<ResolversTypes['Tftleaguev1LeagueItem']>>, ParentType, ContextType>;
  leagueId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  queue?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Tftleaguev1MiniSeriesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tftleaguev1MiniSeries'] = ResolversParentTypes['Tftleaguev1MiniSeries']> = {
  losses?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  progress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  target?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  wins?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type TftMatchIdListResolvers<ContextType = any, ParentType extends ResolversParentTypes['TFTMatchIdList'] = ResolversParentTypes['TFTMatchIdList']> = {
  matches?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Tftmatchv1CompanionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tftmatchv1Companion'] = ResolversParentTypes['Tftmatchv1Companion']> = {
  content_ID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  skin_ID?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  species?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Tftmatchv1InfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tftmatchv1Info'] = ResolversParentTypes['Tftmatchv1Info']> = {
  game_datetime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  game_length?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  game_variation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  game_version?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  participants?: Resolver<Array<Maybe<ResolversTypes['Tftmatchv1Participant']>>, ParentType, ContextType>;
  queue_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tft_set_number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Tftmatchv1MatchResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tftmatchv1Match'] = ResolversParentTypes['Tftmatchv1Match']> = {
  info?: Resolver<ResolversTypes['Tftmatchv1Info'], ParentType, ContextType>;
  metadata?: Resolver<ResolversTypes['Tftmatchv1Metadata'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Tftmatchv1MetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tftmatchv1Metadata'] = ResolversParentTypes['Tftmatchv1Metadata']> = {
  data_version?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  match_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  participants?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Tftmatchv1ParticipantResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tftmatchv1Participant'] = ResolversParentTypes['Tftmatchv1Participant']> = {
  companion?: Resolver<ResolversTypes['Tftmatchv1Companion'], ParentType, ContextType>;
  gold_left?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  last_round?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  placement?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  players_eliminated?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  puuid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  time_eliminated?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  total_damage_to_players?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  traits?: Resolver<Array<Maybe<ResolversTypes['Tftmatchv1Trait']>>, ParentType, ContextType>;
  units?: Resolver<Array<Maybe<ResolversTypes['Tftmatchv1Unit']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Tftmatchv1TraitResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tftmatchv1Trait'] = ResolversParentTypes['Tftmatchv1Trait']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  num_units?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tier_current?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tier_total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Tftmatchv1UnitResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tftmatchv1Unit'] = ResolversParentTypes['Tftmatchv1Unit']> = {
  character_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  items?: Resolver<Array<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rarity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tier?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Tftsummonerv1SummonerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tftsummonerv1Summoner'] = ResolversParentTypes['Tftsummonerv1Summoner']> = {
  accountId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profileIconId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  puuid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  revisionDate?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  summonerLevel?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Tournamentstubv4LobbyEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tournamentstubv4LobbyEvent'] = ResolversParentTypes['Tournamentstubv4LobbyEvent']> = {
  eventType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  summonerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Tournamentstubv4LobbyEventDtoWrapperResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tournamentstubv4LobbyEventDTOWrapper'] = ResolversParentTypes['Tournamentstubv4LobbyEventDTOWrapper']> = {
  eventList?: Resolver<Array<Maybe<ResolversTypes['Tournamentstubv4LobbyEvent']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Tournamentv4LobbyEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tournamentv4LobbyEvent'] = ResolversParentTypes['Tournamentv4LobbyEvent']> = {
  eventType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  summonerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Tournamentv4LobbyEventDtoWrapperResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tournamentv4LobbyEventDTOWrapper'] = ResolversParentTypes['Tournamentv4LobbyEventDTOWrapper']> = {
  eventList?: Resolver<Array<Maybe<ResolversTypes['Tournamentv4LobbyEvent']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Tournamentv4TournamentCodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tournamentv4TournamentCode'] = ResolversParentTypes['Tournamentv4TournamentCode']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lobbyEvents?: Resolver<Maybe<ResolversTypes['Tournamentv4LobbyEvent']>, ParentType, ContextType>;
  lobbyName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  map?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  matchDetails?: Resolver<Maybe<ResolversTypes['Matchv4Match']>, ParentType, ContextType, RequireFields<Tournamentv4TournamentCodeMatchDetailsArgs, 'matchId'>>;
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
  Championmasteryv4ChampionMastery?: Championmasteryv4ChampionMasteryResolvers<ContextType>;
  Championv3ChampionInfo?: Championv3ChampionInfoResolvers<ContextType>;
  Clashv1Player?: Clashv1PlayerResolvers<ContextType>;
  Clashv1PlayerRegistration?: Clashv1PlayerRegistrationResolvers<ContextType>;
  Clashv1Team?: Clashv1TeamResolvers<ContextType>;
  Clashv1Tournament?: Clashv1TournamentResolvers<ContextType>;
  Clashv1TournamentPhase?: Clashv1TournamentPhaseResolvers<ContextType>;
  Info?: InfoResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  Leagueexpv4LeagueEntry?: Leagueexpv4LeagueEntryResolvers<ContextType>;
  Leagueexpv4MiniSeries?: Leagueexpv4MiniSeriesResolvers<ContextType>;
  Leaguev4LeagueEntry?: Leaguev4LeagueEntryResolvers<ContextType>;
  Leaguev4LeagueItem?: Leaguev4LeagueItemResolvers<ContextType>;
  Leaguev4LeagueList?: Leaguev4LeagueListResolvers<ContextType>;
  Leaguev4MiniSeries?: Leaguev4MiniSeriesResolvers<ContextType>;
  Lolstatusv3Incident?: Lolstatusv3IncidentResolvers<ContextType>;
  Lolstatusv3Message?: Lolstatusv3MessageResolvers<ContextType>;
  Lolstatusv3Service?: Lolstatusv3ServiceResolvers<ContextType>;
  Lolstatusv3ShardStatus?: Lolstatusv3ShardStatusResolvers<ContextType>;
  Lolstatusv3Translation?: Lolstatusv3TranslationResolvers<ContextType>;
  Long?: GraphQLScalarType;
  Lorrankedv1Leaderboard?: Lorrankedv1LeaderboardResolvers<ContextType>;
  Lorrankedv1Player?: Lorrankedv1PlayerResolvers<ContextType>;
  Match?: MatchResolvers;
  MatchId?: GraphQLScalarType;
  MatchList?: MatchListResolvers;
  Matchv4Mastery?: Matchv4MasteryResolvers<ContextType>;
  Matchv4Match?: Matchv4MatchResolvers<ContextType>;
  Matchv4MatchEvent?: Matchv4MatchEventResolvers<ContextType>;
  Matchv4MatchFrame?: Matchv4MatchFrameResolvers<ContextType>;
  Matchv4Matchlist?: Matchv4MatchlistResolvers<ContextType>;
  Matchv4MatchPosition?: Matchv4MatchPositionResolvers<ContextType>;
  Matchv4MatchReference?: Matchv4MatchReferenceResolvers<ContextType>;
  Matchv4MatchTimeline?: Matchv4MatchTimelineResolvers<ContextType>;
  Matchv4Participant?: Matchv4ParticipantResolvers<ContextType>;
  Matchv4ParticipantIdentity?: Matchv4ParticipantIdentityResolvers<ContextType>;
  Matchv4ParticipantStats?: Matchv4ParticipantStatsResolvers<ContextType>;
  Matchv4ParticipantTimeline?: Matchv4ParticipantTimelineResolvers<ContextType>;
  Matchv4Player?: Matchv4PlayerResolvers<ContextType>;
  Matchv4Rune?: Matchv4RuneResolvers<ContextType>;
  Matchv4TeamBans?: Matchv4TeamBansResolvers<ContextType>;
  Matchv4TeamStats?: Matchv4TeamStatsResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Spectatorv4BannedChampion?: Spectatorv4BannedChampionResolvers<ContextType>;
  Spectatorv4CurrentGameInfo?: Spectatorv4CurrentGameInfoResolvers<ContextType>;
  Spectatorv4CurrentGameParticipant?: Spectatorv4CurrentGameParticipantResolvers<ContextType>;
  Spectatorv4FeaturedGameInfo?: Spectatorv4FeaturedGameInfoResolvers<ContextType>;
  Spectatorv4FeaturedGames?: Spectatorv4FeaturedGamesResolvers<ContextType>;
  Spectatorv4GameCustomizationObject?: Spectatorv4GameCustomizationObjectResolvers<ContextType>;
  Spectatorv4Observer?: Spectatorv4ObserverResolvers<ContextType>;
  Spectatorv4Participant?: Spectatorv4ParticipantResolvers<ContextType>;
  Spectatorv4Perks?: Spectatorv4PerksResolvers<ContextType>;
  Summonerv4Summoner?: Summonerv4SummonerResolvers<ContextType>;
  Tftleaguev1LeagueEntry?: Tftleaguev1LeagueEntryResolvers<ContextType>;
  Tftleaguev1LeagueItem?: Tftleaguev1LeagueItemResolvers<ContextType>;
  Tftleaguev1LeagueList?: Tftleaguev1LeagueListResolvers<ContextType>;
  Tftleaguev1MiniSeries?: Tftleaguev1MiniSeriesResolvers<ContextType>;
  TFTMatchIdList?: TftMatchIdListResolvers<ContextType>;
  Tftmatchv1Companion?: Tftmatchv1CompanionResolvers<ContextType>;
  Tftmatchv1Info?: Tftmatchv1InfoResolvers<ContextType>;
  Tftmatchv1Match?: Tftmatchv1MatchResolvers<ContextType>;
  Tftmatchv1Metadata?: Tftmatchv1MetadataResolvers<ContextType>;
  Tftmatchv1Participant?: Tftmatchv1ParticipantResolvers<ContextType>;
  Tftmatchv1Trait?: Tftmatchv1TraitResolvers<ContextType>;
  Tftmatchv1Unit?: Tftmatchv1UnitResolvers<ContextType>;
  Tftsummonerv1Summoner?: Tftsummonerv1SummonerResolvers<ContextType>;
  Tournamentstubv4LobbyEvent?: Tournamentstubv4LobbyEventResolvers<ContextType>;
  Tournamentstubv4LobbyEventDTOWrapper?: Tournamentstubv4LobbyEventDtoWrapperResolvers<ContextType>;
  Tournamentv4LobbyEvent?: Tournamentv4LobbyEventResolvers<ContextType>;
  Tournamentv4LobbyEventDTOWrapper?: Tournamentv4LobbyEventDtoWrapperResolvers<ContextType>;
  Tournamentv4TournamentCode?: Tournamentv4TournamentCodeResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
