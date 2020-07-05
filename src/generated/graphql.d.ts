import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Long: any;
  JSON: any;
};


export enum Lane {
  Mid = 'MID',
  Middle = 'MIDDLE',
  Top = 'TOP',
  Jungle = 'JUNGLE',
  Bot = 'BOT',
  Bottom = 'BOTTOM'
}


export type Mastery = {
  __typename?: 'Mastery';
  rank: Scalars['Int'];
  masteryId: Scalars['Int'];
};

export type Match = {
  __typename?: 'Match';
  gameId: Scalars['Long'];
  participantIdentities: Array<ParticipantIdentities>;
  queueId: Scalars['Int'];
  gameType: Scalars['String'];
  gameDuration: Scalars['Int'];
  teams: Array<TeamStats>;
  platformId: Scalars['String'];
  gameCreation: Scalars['Long'];
  seasonId: Scalars['Int'];
  gameVersion: Scalars['String'];
  mapId: Scalars['Int'];
  gameMode: Scalars['String'];
  participants: Array<Participant>;
};

export type MatchEvent = {
  __typename?: 'MatchEvent';
  laneType?: Maybe<Scalars['String']>;
  skillShot?: Maybe<Scalars['Int']>;
  ascendedType?: Maybe<Scalars['String']>;
  creatorId?: Maybe<Scalars['Int']>;
  afterId?: Maybe<Scalars['Int']>;
  eventType?: Maybe<Scalars['String']>;
  type?: Maybe<MatchEventTypeEnum>;
  levelUpType?: Maybe<Scalars['String']>;
  wardType?: Maybe<Scalars['String']>;
  participantId?: Maybe<Scalars['Int']>;
  towerType?: Maybe<Scalars['String']>;
  itemId?: Maybe<Scalars['Int']>;
  beforeId?: Maybe<Scalars['Int']>;
  pointCaptured?: Maybe<Scalars['String']>;
  monsterType?: Maybe<Scalars['String']>;
};

export enum MatchEventTypeEnum {
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

export type MatchFrame = {
  __typename?: 'MatchFrame';
  participantFrames: Array<MatchParticipantFrame>;
  events: Array<MatchEvent>;
  timestamp: Scalars['Int'];
};

export type MatchList = {
  __typename?: 'MatchList';
  startIndex: Scalars['Int'];
  totalGames: Scalars['Int'];
  endIndex: Scalars['Int'];
  matches: Array<MatchReference>;
};

export type MatchListInput = {
  champion?: Maybe<Array<Scalars['Int']>>;
  queue?: Maybe<Array<Scalars['Int']>>;
  season?: Maybe<Array<Scalars['Int']>>;
  endTime?: Maybe<Scalars['Int']>;
  beginTime?: Maybe<Scalars['Int']>;
  endIndex?: Maybe<Scalars['Int']>;
  beginIndex?: Maybe<Scalars['Int']>;
};

export type MatchParticipantFrame = {
  __typename?: 'MatchParticipantFrame';
  participantId: Scalars['Int'];
  minionsKilled: Scalars['Int'];
  teamScore: Scalars['Int'];
  dominionScore: Scalars['Int'];
  totalGold: Scalars['Int'];
  level: Scalars['Int'];
  xp: Scalars['Int'];
  currentGold: Scalars['Int'];
  position: MatchPosition;
  jungleMinionsKilled: Scalars['Int'];
};

export type MatchPosition = {
  __typename?: 'MatchPosition';
  x: Scalars['Int'];
  y: Scalars['Int'];
};

export type MatchReference = {
  __typename?: 'MatchReference';
  gameId: Scalars['Long'];
  role: Scalars['String'];
  season: Scalars['Int'];
  platformId: Scalars['String'];
  champion: Scalars['Int'];
  queue: Scalars['Int'];
  lane: Scalars['String'];
  timestamp: Scalars['Long'];
};

export type MatchTimeline = {
  __typename?: 'MatchTimeline';
  frames: Array<MatchFrame>;
  frameInterval: Scalars['Int'];
};

export type Participant = {
  __typename?: 'Participant';
  participantId: Scalars['Int'];
  championId: Scalars['Int'];
  /** @deprecated Field no longer supported */
  runes?: Maybe<Array<Maybe<Rune>>>;
  stats?: Maybe<ParticipantStats>;
  timeline?: Maybe<ParticipantTimeline>;
  spell1Id: Scalars['Int'];
  spell2Id: Scalars['Int'];
  highestAchievedSeasonTier: Tier;
  /** @deprecated Field no longer supported */
  masteries?: Maybe<Array<Maybe<Mastery>>>;
};

export type ParticipantIdentities = {
  __typename?: 'ParticipantIdentities';
  participantId: Scalars['Int'];
  player: Array<Player>;
};

export type ParticipantStats = {
  __typename?: 'ParticipantStats';
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
  perk0?: Maybe<Scalars['Int']>;
  perk0Var1?: Maybe<Scalars['Int']>;
  perk0Var2?: Maybe<Scalars['Int']>;
  perk0Var3?: Maybe<Scalars['Int']>;
  perk1?: Maybe<Scalars['Int']>;
  perk1Var1?: Maybe<Scalars['Int']>;
  perk1Var2?: Maybe<Scalars['Int']>;
  perk1Var3?: Maybe<Scalars['Int']>;
  perk2?: Maybe<Scalars['Int']>;
  perk2Var1?: Maybe<Scalars['Int']>;
  perk2Var2?: Maybe<Scalars['Int']>;
  perk2Var3?: Maybe<Scalars['Int']>;
  perk3?: Maybe<Scalars['Int']>;
  perk3Var1?: Maybe<Scalars['Int']>;
  perk3Var2?: Maybe<Scalars['Int']>;
  perk3Var3?: Maybe<Scalars['Int']>;
  perk4?: Maybe<Scalars['Int']>;
  perk4Var1?: Maybe<Scalars['Int']>;
  perk4Var2?: Maybe<Scalars['Int']>;
  perk4Var3?: Maybe<Scalars['Int']>;
  perk5?: Maybe<Scalars['Int']>;
  perk5Var1?: Maybe<Scalars['Int']>;
  perk5Var2?: Maybe<Scalars['Int']>;
  perk5Var3?: Maybe<Scalars['Int']>;
  perkPrimaryStyle?: Maybe<Scalars['Int']>;
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

export type ParticipantTimeline = {
  __typename?: 'ParticipantTimeline';
  creepsPerMinDeltas?: Maybe<Scalars['JSON']>;
  csDiffPerMinDeltas?: Maybe<Scalars['JSON']>;
  damageTakenDiffPerMinDeltas?: Maybe<Scalars['JSON']>;
  damageTakenPerMinDeltas?: Maybe<Scalars['JSON']>;
  goldPerMinDeltas?: Maybe<Scalars['JSON']>;
  lane?: Maybe<Lane>;
  participantId?: Maybe<Scalars['Int']>;
  role?: Maybe<Role>;
  xpDiffPerMinDeltas?: Maybe<Scalars['JSON']>;
  xpPerMinDeltas?: Maybe<Scalars['JSON']>;
};

export type Player = {
  __typename?: 'Player';
  profileIcon: Scalars['Int'];
  accountId: Scalars['String'];
  matchHistoryUri: Scalars['String'];
  currentAccountId: Scalars['String'];
  currentPlatformId: Scalars['String'];
  summonerName: Scalars['String'];
  summonerId: Scalars['String'];
  platformId: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  info: Scalars['String'];
  summoner?: Maybe<Summoner>;
};


export type QuerySummonerArgs = {
  region: Region;
  encryptedAccountId?: Maybe<Scalars['String']>;
  summonerName?: Maybe<Scalars['String']>;
  encryptedPUUID?: Maybe<Scalars['String']>;
  encryptedSummonerId?: Maybe<Scalars['String']>;
};

export enum Region {
  Br1 = 'BR1',
  Eun1 = 'EUN1',
  Euw1 = 'EUW1',
  Jp1 = 'JP1',
  Kr = 'KR',
  La1 = 'LA1',
  La2 = 'LA2',
  Na1 = 'NA1',
  Oc1 = 'OC1',
  Tr1 = 'TR1',
  Ru = 'RU',
  Americas = 'AMERICAS',
  Asia = 'ASIA',
  Europe = 'EUROPE'
}

export enum Role {
  Duo = 'DUO',
  None = 'NONE',
  Solo = 'SOLO',
  DuoCarry = 'DUO_CARRY',
  DuoSupport = 'DUO_SUPPORT'
}

export type Rune = {
  __typename?: 'Rune';
  runeId: Scalars['Int'];
  rank: Scalars['Int'];
};

export type Summoner = {
  __typename?: 'Summoner';
  region: Region;
  accountId: Scalars['String'];
  profileIconId: Scalars['Int'];
  revisiondate: Scalars['Int'];
  name: Scalars['String'];
  id: Scalars['String'];
  puuid: Scalars['String'];
  summonerLevel: Scalars['Int'];
  matchlist: MatchList;
};


export type SummonerMatchlistArgs = {
  filter?: Maybe<MatchListInput>;
};

export type TeamBans = {
  __typename?: 'TeamBans';
  championId: Scalars['Int'];
  pickTurn: Scalars['Int'];
};

export type TeamStats = {
  __typename?: 'TeamStats';
  towerKills: Scalars['Int'];
  riftHeraldKills: Scalars['Int'];
  firstBlood: Scalars['Boolean'];
  inhibitorKills: Scalars['Int'];
  bans: Array<TeamBans>;
  firstBaron: Scalars['Boolean'];
  firstDragon: Scalars['Boolean'];
  dominionVictoryScore: Scalars['Int'];
  dragonKills: Scalars['Int'];
  baronKills: Scalars['Int'];
  firstInhibitor: Scalars['Boolean'];
  firstTower: Scalars['Boolean'];
  vilemawKills: Scalars['Int'];
  firstRiftHerald: Scalars['Boolean'];
  teamId: Scalars['Int'];
  win?: Maybe<Win>;
};

export enum Tier {
  Challenger = 'CHALLENGER',
  Master = 'MASTER',
  Diamond = 'DIAMOND',
  Platinum = 'PLATINUM',
  Gold = 'GOLD',
  Silver = 'SILVER',
  Bronze = 'BRONZE',
  Unranked = 'UNRANKED'
}

export type TournamentMatches = {
  __typename?: 'TournamentMatches';
  matchIds: Array<Scalars['Int']>;
};

export enum Win {
  Fail = 'Fail',
  Win = 'Win'
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
  String: ResolverTypeWrapper<Scalars['String']>;
  Region: Region;
  Summoner: ResolverTypeWrapper<Summoner>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  MatchListInput: MatchListInput;
  MatchList: ResolverTypeWrapper<MatchList>;
  MatchReference: ResolverTypeWrapper<MatchReference>;
  Long: ResolverTypeWrapper<Scalars['Long']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Match: ResolverTypeWrapper<Match>;
  ParticipantIdentities: ResolverTypeWrapper<ParticipantIdentities>;
  Player: ResolverTypeWrapper<Player>;
  TeamStats: ResolverTypeWrapper<TeamStats>;
  TeamBans: ResolverTypeWrapper<TeamBans>;
  Win: Win;
  Participant: ResolverTypeWrapper<Participant>;
  Rune: ResolverTypeWrapper<Rune>;
  ParticipantStats: ResolverTypeWrapper<ParticipantStats>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ParticipantTimeline: ResolverTypeWrapper<ParticipantTimeline>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  Lane: Lane;
  Role: Role;
  Tier: Tier;
  Mastery: ResolverTypeWrapper<Mastery>;
  MatchTimeline: ResolverTypeWrapper<MatchTimeline>;
  MatchFrame: ResolverTypeWrapper<MatchFrame>;
  MatchParticipantFrame: ResolverTypeWrapper<MatchParticipantFrame>;
  MatchPosition: ResolverTypeWrapper<MatchPosition>;
  MatchEvent: ResolverTypeWrapper<MatchEvent>;
  MatchEventTypeEnum: MatchEventTypeEnum;
  TournamentMatches: ResolverTypeWrapper<TournamentMatches>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  String: Scalars['String'];
  Summoner: Summoner;
  Int: Scalars['Int'];
  MatchListInput: MatchListInput;
  MatchList: MatchList;
  MatchReference: MatchReference;
  Long: Scalars['Long'];
  Boolean: Scalars['Boolean'];
  Match: Match;
  ParticipantIdentities: ParticipantIdentities;
  Player: Player;
  TeamStats: TeamStats;
  TeamBans: TeamBans;
  Participant: Participant;
  Rune: Rune;
  ParticipantStats: ParticipantStats;
  Float: Scalars['Float'];
  ParticipantTimeline: ParticipantTimeline;
  JSON: Scalars['JSON'];
  Mastery: Mastery;
  MatchTimeline: MatchTimeline;
  MatchFrame: MatchFrame;
  MatchParticipantFrame: MatchParticipantFrame;
  MatchPosition: MatchPosition;
  MatchEvent: MatchEvent;
  TournamentMatches: TournamentMatches;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export interface LongScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Long'], any> {
  name: 'Long';
}

export type MasteryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mastery'] = ResolversParentTypes['Mastery']> = {
  rank?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  masteryId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MatchResolvers<ContextType = any, ParentType extends ResolversParentTypes['Match'] = ResolversParentTypes['Match']> = {
  gameId?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  participantIdentities?: Resolver<Array<ResolversTypes['ParticipantIdentities']>, ParentType, ContextType>;
  queueId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  gameType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gameDuration?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  teams?: Resolver<Array<ResolversTypes['TeamStats']>, ParentType, ContextType>;
  platformId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gameCreation?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  seasonId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  gameVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mapId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  gameMode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  participants?: Resolver<Array<ResolversTypes['Participant']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MatchEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchEvent'] = ResolversParentTypes['MatchEvent']> = {
  laneType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  skillShot?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ascendedType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  creatorId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  afterId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  eventType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['MatchEventTypeEnum']>, ParentType, ContextType>;
  levelUpType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wardType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  participantId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  towerType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  itemId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  beforeId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pointCaptured?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  monsterType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MatchFrameResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchFrame'] = ResolversParentTypes['MatchFrame']> = {
  participantFrames?: Resolver<Array<ResolversTypes['MatchParticipantFrame']>, ParentType, ContextType>;
  events?: Resolver<Array<ResolversTypes['MatchEvent']>, ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MatchListResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchList'] = ResolversParentTypes['MatchList']> = {
  startIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalGames?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  endIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  matches?: Resolver<Array<ResolversTypes['MatchReference']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MatchParticipantFrameResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchParticipantFrame'] = ResolversParentTypes['MatchParticipantFrame']> = {
  participantId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  minionsKilled?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  teamScore?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dominionScore?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalGold?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  xp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  currentGold?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  position?: Resolver<ResolversTypes['MatchPosition'], ParentType, ContextType>;
  jungleMinionsKilled?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MatchPositionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchPosition'] = ResolversParentTypes['MatchPosition']> = {
  x?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  y?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MatchReferenceResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchReference'] = ResolversParentTypes['MatchReference']> = {
  gameId?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  season?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  platformId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  champion?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  queue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lane?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MatchTimelineResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchTimeline'] = ResolversParentTypes['MatchTimeline']> = {
  frames?: Resolver<Array<ResolversTypes['MatchFrame']>, ParentType, ContextType>;
  frameInterval?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ParticipantResolvers<ContextType = any, ParentType extends ResolversParentTypes['Participant'] = ResolversParentTypes['Participant']> = {
  participantId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  championId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  runes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Rune']>>>, ParentType, ContextType>;
  stats?: Resolver<Maybe<ResolversTypes['ParticipantStats']>, ParentType, ContextType>;
  timeline?: Resolver<Maybe<ResolversTypes['ParticipantTimeline']>, ParentType, ContextType>;
  spell1Id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  spell2Id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  highestAchievedSeasonTier?: Resolver<ResolversTypes['Tier'], ParentType, ContextType>;
  masteries?: Resolver<Maybe<Array<Maybe<ResolversTypes['Mastery']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ParticipantIdentitiesResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParticipantIdentities'] = ResolversParentTypes['ParticipantIdentities']> = {
  participantId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  player?: Resolver<Array<ResolversTypes['Player']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ParticipantStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParticipantStats'] = ResolversParentTypes['ParticipantStats']> = {
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

export type ParticipantTimelineResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParticipantTimeline'] = ResolversParentTypes['ParticipantTimeline']> = {
  creepsPerMinDeltas?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  csDiffPerMinDeltas?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  damageTakenDiffPerMinDeltas?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  damageTakenPerMinDeltas?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  goldPerMinDeltas?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  lane?: Resolver<Maybe<ResolversTypes['Lane']>, ParentType, ContextType>;
  participantId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType>;
  xpDiffPerMinDeltas?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  xpPerMinDeltas?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type PlayerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Player'] = ResolversParentTypes['Player']> = {
  profileIcon?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  accountId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  matchHistoryUri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  currentAccountId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  currentPlatformId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  summonerName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  summonerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  platformId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  info?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  summoner?: Resolver<Maybe<ResolversTypes['Summoner']>, ParentType, ContextType, RequireFields<QuerySummonerArgs, 'region'>>;
};

export type RuneResolvers<ContextType = any, ParentType extends ResolversParentTypes['Rune'] = ResolversParentTypes['Rune']> = {
  runeId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rank?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type SummonerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Summoner'] = ResolversParentTypes['Summoner']> = {
  region?: Resolver<ResolversTypes['Region'], ParentType, ContextType>;
  accountId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profileIconId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  revisiondate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  puuid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  summonerLevel?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  matchlist?: Resolver<ResolversTypes['MatchList'], ParentType, ContextType, RequireFields<SummonerMatchlistArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type TeamBansResolvers<ContextType = any, ParentType extends ResolversParentTypes['TeamBans'] = ResolversParentTypes['TeamBans']> = {
  championId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pickTurn?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type TeamStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['TeamStats'] = ResolversParentTypes['TeamStats']> = {
  towerKills?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  riftHeraldKills?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  firstBlood?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  inhibitorKills?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  bans?: Resolver<Array<ResolversTypes['TeamBans']>, ParentType, ContextType>;
  firstBaron?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  firstDragon?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  dominionVictoryScore?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dragonKills?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  baronKills?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  firstInhibitor?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  firstTower?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  vilemawKills?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  firstRiftHerald?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  teamId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  win?: Resolver<Maybe<ResolversTypes['Win']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type TournamentMatchesResolvers<ContextType = any, ParentType extends ResolversParentTypes['TournamentMatches'] = ResolversParentTypes['TournamentMatches']> = {
  matchIds?: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Resolvers<ContextType = any> = {
  JSON?: GraphQLScalarType;
  Long?: GraphQLScalarType;
  Mastery?: MasteryResolvers<ContextType>;
  Match?: MatchResolvers<ContextType>;
  MatchEvent?: MatchEventResolvers<ContextType>;
  MatchFrame?: MatchFrameResolvers<ContextType>;
  MatchList?: MatchListResolvers<ContextType>;
  MatchParticipantFrame?: MatchParticipantFrameResolvers<ContextType>;
  MatchPosition?: MatchPositionResolvers<ContextType>;
  MatchReference?: MatchReferenceResolvers<ContextType>;
  MatchTimeline?: MatchTimelineResolvers<ContextType>;
  Participant?: ParticipantResolvers<ContextType>;
  ParticipantIdentities?: ParticipantIdentitiesResolvers<ContextType>;
  ParticipantStats?: ParticipantStatsResolvers<ContextType>;
  ParticipantTimeline?: ParticipantTimelineResolvers<ContextType>;
  Player?: PlayerResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Rune?: RuneResolvers<ContextType>;
  Summoner?: SummonerResolvers<ContextType>;
  TeamBans?: TeamBansResolvers<ContextType>;
  TeamStats?: TeamStatsResolvers<ContextType>;
  TournamentMatches?: TournamentMatchesResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
