import {
  OpenAPIClient,
  Parameters,
  UnknownParamsObject,
  OperationResponse,
  AxiosRequestConfig,
} from '../../openapi-client-axios';

declare namespace Components {
  namespace Schemas {
    /**
     * AccountDto
     */
    export interface AccountV1AccountDto {
      puuid: string;
      gameName: string;
      tagLine: string;
    }
    /**
     * ActiveShardDto
     */
    export interface AccountV1ActiveShardDto {
      puuid: string;
      game: string;
      activeShard: string;
    }
    /**
     * ChampionMasteryDTO
     * This object contains single Champion Mastery information for player and champion combination.
     */
    export interface ChampionMasteryV4ChampionMasteryDTO {
      /**
       * Number of points needed to achieve next level. Zero if player reached maximum champion level for this champion.
       */
      championPointsUntilNextLevel: number; // int64
      /**
       * Is chest granted for this champion or not in current season.
       */
      chestGranted: boolean;
      /**
       * Champion ID for this entry.
       */
      championId: number; // int64
      /**
       * Last time this champion was played by this player - in Unix milliseconds time format.
       */
      lastPlayTime: number; // int64
      /**
       * Champion level for specified player and champion combination.
       */
      championLevel: number; // int32
      /**
       * Summoner ID for this entry. (Encrypted)
       */
      summonerId: string;
      /**
       * Total number of champion points for this player and champion combination - they are used to determine championLevel.
       */
      championPoints: number; // int32
      /**
       * Number of points earned since current level has been achieved.
       */
      championPointsSinceLastLevel: number; // int64
      /**
       * The token earned for this champion to levelup.
       */
      tokensEarned: number; // int32
    }
    /**
     * ChampionInfo
     */
    export interface ChampionV3ChampionInfo {
      maxNewPlayerLevel: number; // int32
      freeChampionIdsForNewPlayers: number /* int32 */ [];
      freeChampionIds: number /* int32 */ [];
    }
    /**
     * PlayerDto
     */
    export interface ClashV1PlayerDto {
      summonerId: string;
      teamId: string;
      /**
       * (Legal values:  UNSELECTED,  FILL,  TOP,  JUNGLE,  MIDDLE,  BOTTOM,  UTILITY)
       */
      position: "UNSELECTED" | "FILL" | "TOP" | "JUNGLE" | "MIDDLE" | "BOTTOM" | "UTILITY";
      /**
       * (Legal values:  CAPTAIN,  MEMBER)
       */
      role: "CAPTAIN" | "MEMBER";
    }
    /**
     * TeamDto
     */
    export interface ClashV1TeamDto {
      id: string;
      tournamentId: number; // int32
      name: string;
      iconId: number; // int32
      tier: number; // int32
      /**
       * Summoner ID of the team captain.
       */
      captain: string;
      abbreviation: string;
      /**
       * Team members.
       */
      players: ClashV1PlayerDto[];
    }
    /**
     * TournamentDto
     */
    export interface ClashV1TournamentDto {
      id: number; // int32
      themeId: number; // int32
      nameKey: string;
      nameKeySecondary: string;
      /**
       * Tournament phase.
       */
      schedule: ClashV1TournamentPhaseDto[];
    }
    /**
     * TournamentPhaseDto
     */
    export interface ClashV1TournamentPhaseDto {
      id: number; // int32
      registrationTime: number; // int64
      startTime: number; // int64
      cancelled: boolean;
    }
    export interface Error {
      status?: {
        status_code?: number;
        message?: string;
      };
    }
    /**
     * LeagueEntryDTO
     */
    export interface LeagueExpV4LeagueEntryDTO {
      leagueId: string;
      /**
       * Player's summonerId (Encrypted)
       */
      summonerId: string;
      summonerName: string;
      queueType: string;
      tier: string;
      rank: string;
      leaguePoints: number; // int32
      /**
       * Winning team on Summoners Rift. First placement in Teamfight Tactics.
       */
      wins: number; // int32
      /**
       * Losing team on Summoners Rift. Second through eighth placement in Teamfight Tactics.
       */
      losses: number; // int32
      hotStreak: boolean;
      veteran: boolean;
      freshBlood: boolean;
      inactive: boolean;
      miniSeries?: LeagueExpV4MiniSeriesDTO;
    }
    /**
     * MiniSeriesDTO
     */
    export interface LeagueExpV4MiniSeriesDTO {
      losses: number; // int32
      progress: string;
      target: number; // int32
      wins: number; // int32
    }
    /**
     * LeagueEntryDTO
     */
    export interface LeagueV4LeagueEntryDTO {
      leagueId: string;
      /**
       * Player's encrypted summonerId.
       */
      summonerId: string;
      summonerName: string;
      queueType: string;
      tier: string;
      rank: string;
      leaguePoints: number; // int32
      /**
       * Winning team on Summoners Rift.
       */
      wins: number; // int32
      /**
       * Losing team on Summoners Rift.
       */
      losses: number; // int32
      hotStreak: boolean;
      veteran: boolean;
      freshBlood: boolean;
      inactive: boolean;
      miniSeries?: LeagueV4MiniSeriesDTO;
    }
    /**
     * LeagueItemDTO
     */
    export interface LeagueV4LeagueItemDTO {
      freshBlood: boolean;
      /**
       * Winning team on Summoners Rift.
       */
      wins: number; // int32
      summonerName: string;
      miniSeries?: LeagueV4MiniSeriesDTO;
      inactive: boolean;
      veteran: boolean;
      hotStreak: boolean;
      rank: string;
      leaguePoints: number; // int32
      /**
       * Losing team on Summoners Rift.
       */
      losses: number; // int32
      /**
       * Player's encrypted summonerId.
       */
      summonerId: string;
    }
    /**
     * LeagueListDTO
     */
    export interface LeagueV4LeagueListDTO {
      leagueId: string;
      entries: LeagueV4LeagueItemDTO[];
      tier: string;
      name: string;
      queue: string;
    }
    /**
     * MiniSeriesDTO
     */
    export interface LeagueV4MiniSeriesDTO {
      losses: number; // int32
      progress: string;
      target: number; // int32
      wins: number; // int32
    }
    /**
     * Incident
     */
    export interface LolStatusV3Incident {
      active: boolean;
      created_at: string;
      id: number; // int64
      updates: LolStatusV3Message[];
    }
    /**
     * Message
     */
    export interface LolStatusV3Message {
      severity: string;
      updated_at: string;
      author: string;
      translations: LolStatusV3Translation[];
      created_at: string;
      id: string;
      content: string;
    }
    /**
     * Service
     */
    export interface LolStatusV3Service {
      incidents: LolStatusV3Incident[];
      name: string;
      slug: string;
      status: string;
    }
    /**
     * ShardStatus
     */
    export interface LolStatusV3ShardStatus {
      locales: string[];
      hostname: string;
      name: string;
      services: LolStatusV3Service[];
      slug: string;
      region_tag: string;
    }
    /**
     * Translation
     */
    export interface LolStatusV3Translation {
      locale: string;
      content: string;
      heading: string;
    }
    /**
     * LeaderboardDto
     */
    export interface LorRankedV1LeaderboardDto {
      /**
       * A list of players in Master tier.
       */
      players: LorRankedV1PlayerDto[];
    }
    /**
     * PlayerDto
     */
    export interface LorRankedV1PlayerDto {
      name: string;
      rank: number; // int32
      /**
       * League points.
       */
      lp: number; // int32
    }
    /**
     * MasteryDto
     */
    export interface MatchV4MasteryDto {
      rank: number; // int32
      masteryId: number; // int32
    }
    /**
     * MatchDto
     */
    export interface MatchV4MatchDto {
      gameId: number; // int64
      /**
       * Participant identity information. Participant identity information is purposefully excluded for custom games.
       */
      participantIdentities: MatchV4ParticipantIdentityDto[];
      /**
       * Please refer to the Game Constants documentation.
       */
      queueId: number; // int32
      /**
       * Please refer to the Game Constants documentation.
       */
      gameType: string;
      /**
       * Match duration in seconds.
       */
      gameDuration: number; // int64
      /**
       * Team information.
       */
      teams: MatchV4TeamStatsDto[];
      /**
       * Platform where the match was played.
       */
      platformId: string;
      /**
       * Designates the timestamp when champion select ended and the loading screen appeared, NOT when the game timer was at 0:00.
       */
      gameCreation: number; // int64
      /**
       * Please refer to the Game Constants documentation.
       */
      seasonId: number; // int32
      /**
       * The major.minor version typically indicates the patch the match was played on.
       */
      gameVersion: string;
      /**
       * Please refer to the Game Constants documentation.
       */
      mapId: number; // int32
      /**
       * Please refer to the Game Constants documentation.
       */
      gameMode: string;
      /**
       * Participant information.
       */
      participants: MatchV4ParticipantDto[];
    }
    /**
     * MatchEventDto
     */
    export interface MatchV4MatchEventDto {
      laneType?: string;
      skillSlot?: number; // int32
      ascendedType?: string;
      creatorId?: number; // int32
      afterId?: number; // int32
      eventType?: string;
      /**
       * (Legal values:  CHAMPION_KILL,  WARD_PLACED,  WARD_KILL,  BUILDING_KILL,  ELITE_MONSTER_KILL,  ITEM_PURCHASED,  ITEM_SOLD,  ITEM_DESTROYED,  ITEM_UNDO,  SKILL_LEVEL_UP,  ASCENDED_EVENT,  CAPTURE_POINT,  PORO_KING_SUMMON)
       */
      type: "CHAMPION_KILL" | "WARD_PLACED" | "WARD_KILL" | "BUILDING_KILL" | "ELITE_MONSTER_KILL" | "ITEM_PURCHASED" | "ITEM_SOLD" | "ITEM_DESTROYED" | "ITEM_UNDO" | "SKILL_LEVEL_UP" | "ASCENDED_EVENT" | "CAPTURE_POINT" | "PORO_KING_SUMMON";
      levelUpType?: string;
      wardType?: string;
      participantId?: number; // int32
      towerType?: string;
      itemId?: number; // int32
      beforeId?: number; // int32
      pointCaptured?: string;
      monsterType?: string;
      monsterSubType?: string;
      teamId?: number; // int32
      position?: MatchV4MatchPositionDto;
      killerId?: number; // int32
      timestamp: number; // int64
      assistingParticipantIds?: number /* int32 */ [];
      buildingType?: string;
      victimId?: number; // int32
    }
    /**
     * MatchFrameDto
     */
    export interface MatchV4MatchFrameDto {
      participantFrames: {
        [name: string]: MatchV4MatchParticipantFrameDto;
      };
      events: MatchV4MatchEventDto[];
      timestamp: number; // int64
    }
    /**
     * MatchParticipantFrameDto
     */
    export interface MatchV4MatchParticipantFrameDto {
      participantId: number; // int32
      minionsKilled: number; // int32
      teamScore?: number; // int32
      dominionScore?: number; // int32
      totalGold: number; // int32
      level: number; // int32
      xp: number; // int32
      currentGold: number; // int32
      position?: MatchV4MatchPositionDto;
      jungleMinionsKilled: number; // int32
    }
    /**
     * MatchPositionDto
     */
    export interface MatchV4MatchPositionDto {
      x: number; // int32
      y: number; // int32
    }
    /**
     * MatchReferenceDto
     */
    export interface MatchV4MatchReferenceDto {
      gameId: number; // int64
      role: string;
      season: number; // int32
      platformId: string;
      champion: number; // int32
      queue: number; // int32
      lane: string;
      timestamp: number; // int64
    }
    /**
     * MatchTimelineDto
     */
    export interface MatchV4MatchTimelineDto {
      frames: MatchV4MatchFrameDto[];
      frameInterval: number; // int64
    }
    /**
     * MatchlistDto
     */
    export interface MatchV4MatchlistDto {
      startIndex: number; // int32
      /**
       * There is a known issue that this field doesn't correctly return the total number of games that match the parameters of the request. Please paginate using beginIndex until you reach the end of a player's matchlist.
       */
      totalGames: number; // int32
      endIndex: number; // int32
      matches: MatchV4MatchReferenceDto[];
    }
    /**
     * ParticipantDto
     */
    export interface MatchV4ParticipantDto {
      participantId: number; // int32
      championId: number; // int32
      /**
       * List of legacy Rune information. Not included for matches played with Runes Reforged.
       */
      runes?: MatchV4RuneDto[];
      /**
       * Participant statistics.
       */
      stats: MatchV4ParticipantStatsDto;
      /**
       * 100 for blue side. 200 for red side.
       */
      teamId: number; // int32
      /**
       * Participant timeline data.
       */
      timeline: MatchV4ParticipantTimelineDto;
      /**
       * First Summoner Spell id.
       */
      spell1Id: number; // int32
      /**
       * Second Summoner Spell id.
       */
      spell2Id: number; // int32
      /**
       * Highest ranked tier achieved for the previous season in a specific subset of queueIds, if any, otherwise null. Used to display border in game loading screen. Please refer to the Ranked Info documentation.
       *              (Legal values:  CHALLENGER,  MASTER,  DIAMOND,  PLATINUM,  GOLD,  SILVER,  BRONZE,  UNRANKED)
       */
      highestAchievedSeasonTier?: "CHALLENGER" | "MASTER" | "DIAMOND" | "PLATINUM" | "GOLD" | "SILVER" | "BRONZE" | "UNRANKED";
      /**
       * List of legacy Mastery information. Not included for matches played with Runes Reforged.
       */
      masteries?: MatchV4MasteryDto[];
    }
    /**
     * ParticipantIdentityDto
     */
    export interface MatchV4ParticipantIdentityDto {
      participantId: number; // int32
      /**
       * Player information not included in the response for custom matches. Custom matches are considered private unless a tournament code was used to create the match.
       */
      player: MatchV4PlayerDto;
    }
    /**
     * ParticipantStatsDto
     */
    export interface MatchV4ParticipantStatsDto {
      item0: number; // int32
      item2: number; // int32
      totalUnitsHealed: number; // int32
      item1: number; // int32
      largestMultiKill: number; // int32
      goldEarned: number; // int32
      firstInhibitorKill?: boolean;
      physicalDamageTaken: number; // int64
      nodeNeutralizeAssist?: number; // int32
      totalPlayerScore?: number; // int32
      champLevel: number; // int32
      damageDealtToObjectives: number; // int64
      totalDamageTaken: number; // int64
      neutralMinionsKilled: number; // int32
      deaths: number; // int32
      tripleKills: number; // int32
      magicDamageDealtToChampions: number; // int64
      wardsKilled: number; // int32
      pentaKills: number; // int32
      damageSelfMitigated: number; // int64
      largestCriticalStrike: number; // int32
      nodeNeutralize?: number; // int32
      totalTimeCrowdControlDealt: number; // int32
      firstTowerKill?: boolean;
      magicDamageDealt: number; // int64
      totalScoreRank?: number; // int32
      nodeCapture?: number; // int32
      wardsPlaced?: number; // int32
      totalDamageDealt: number; // int64
      timeCCingOthers: number; // int64
      magicalDamageTaken: number; // int64
      largestKillingSpree: number; // int32
      totalDamageDealtToChampions: number; // int64
      physicalDamageDealtToChampions: number; // int64
      neutralMinionsKilledTeamJungle: number; // int32
      totalMinionsKilled: number; // int32
      firstInhibitorAssist?: boolean;
      visionWardsBoughtInGame: number; // int32
      objectivePlayerScore?: number; // int32
      kills: number; // int32
      firstTowerAssist?: boolean;
      combatPlayerScore?: number; // int32
      inhibitorKills?: number; // int32
      turretKills?: number; // int32
      participantId: number; // int32
      trueDamageTaken: number; // int64
      firstBloodAssist?: boolean;
      nodeCaptureAssist?: number; // int32
      assists: number; // int32
      teamObjective?: number; // int32
      altarsNeutralized?: number; // int32
      goldSpent: number; // int32
      damageDealtToTurrets: number; // int64
      altarsCaptured?: number; // int32
      win: boolean;
      totalHeal: number; // int64
      unrealKills: number; // int32
      visionScore?: number; // int64
      physicalDamageDealt: number; // int64
      firstBloodKill?: boolean;
      longestTimeSpentLiving: number; // int32
      killingSprees: number; // int32
      sightWardsBoughtInGame?: number; // int32
      trueDamageDealtToChampions: number; // int64
      neutralMinionsKilledEnemyJungle: number; // int32
      doubleKills: number; // int32
      trueDamageDealt: number; // int64
      quadraKills: number; // int32
      item4: number; // int32
      item3: number; // int32
      item6: number; // int32
      item5: number; // int32
      playerScore0?: number; // int32
      playerScore1?: number; // int32
      playerScore2?: number; // int32
      playerScore3?: number; // int32
      playerScore4?: number; // int32
      playerScore5?: number; // int32
      playerScore6?: number; // int32
      playerScore7?: number; // int32
      playerScore8?: number; // int32
      playerScore9?: number; // int32
      /**
       * Primary path keystone rune.
       */
      perk0?: number; // int32
      /**
       * Post game rune stats.
       */
      perk0Var1?: number; // int32
      /**
       * Post game rune stats.
       */
      perk0Var2?: number; // int32
      /**
       * Post game rune stats.
       */
      perk0Var3?: number; // int32
      /**
       * Primary path rune.
       */
      perk1?: number; // int32
      /**
       * Post game rune stats.
       */
      perk1Var1?: number; // int32
      /**
       * Post game rune stats.
       */
      perk1Var2?: number; // int32
      /**
       * Post game rune stats.
       */
      perk1Var3?: number; // int32
      /**
       * Primary path rune.
       */
      perk2?: number; // int32
      /**
       * Post game rune stats.
       */
      perk2Var1?: number; // int32
      /**
       * Post game rune stats.
       */
      perk2Var2?: number; // int32
      /**
       * Post game rune stats.
       */
      perk2Var3?: number; // int32
      /**
       * Primary path rune.
       */
      perk3?: number; // int32
      /**
       * Post game rune stats.
       */
      perk3Var1?: number; // int32
      /**
       * Post game rune stats.
       */
      perk3Var2?: number; // int32
      /**
       * Post game rune stats.
       */
      perk3Var3?: number; // int32
      /**
       * Secondary path rune.
       */
      perk4?: number; // int32
      /**
       * Post game rune stats.
       */
      perk4Var1?: number; // int32
      /**
       * Post game rune stats.
       */
      perk4Var2?: number; // int32
      /**
       * Post game rune stats.
       */
      perk4Var3?: number; // int32
      /**
       * Secondary path rune.
       */
      perk5?: number; // int32
      /**
       * Post game rune stats.
       */
      perk5Var1?: number; // int32
      /**
       * Post game rune stats.
       */
      perk5Var2?: number; // int32
      /**
       * Post game rune stats.
       */
      perk5Var3?: number; // int32
      /**
       * Primary rune path
       */
      perkPrimaryStyle?: number; // int32
      /**
       * Secondary rune path
       */
      perkSubStyle?: number; // int32
    }
    /**
     * ParticipantTimelineDto
     */
    export interface MatchV4ParticipantTimelineDto {
      participantId?: number; // int32
      /**
       * Creep score difference versus the calculated lane opponent(s) for a specified period.
       */
      csDiffPerMinDeltas?: {
        [name: string]: number; // double
      };
      /**
       * Damage taken for a specified period.
       */
      damageTakenPerMinDeltas?: {
        [name: string]: number; // double
      };
      /**
       * Participant's calculated role.
       *              (Legal values:  DUO,  NONE,  SOLO,  DUO_CARRY,  DUO_SUPPORT)
       */
      role?: "DUO" | "NONE" | "SOLO" | "DUO_CARRY" | "DUO_SUPPORT";
      /**
       * Damage taken difference versus the calculated lane opponent(s) for a specified period.
       */
      damageTakenDiffPerMinDeltas?: {
        [name: string]: number; // double
      };
      /**
       * Experience change for a specified period.
       */
      xpPerMinDeltas?: {
        [name: string]: number; // double
      };
      /**
       * Experience difference versus the calculated lane opponent(s) for a specified period.
       */
      xpDiffPerMinDeltas?: {
        [name: string]: number; // double
      };
      /**
       * Participant's calculated lane. MID and BOT are legacy values.
       *              (Legal values:  MID,  MIDDLE,  TOP,  JUNGLE,  BOT,  BOTTOM)
       */
      lane?: "MID" | "MIDDLE" | "TOP" | "JUNGLE" | "BOT" | "BOTTOM";
      /**
       * Creeps for a specified period.
       */
      creepsPerMinDeltas?: {
        [name: string]: number; // double
      };
      /**
       * Gold for a specified period.
       */
      goldPerMinDeltas?: {
        [name: string]: number; // double
      };
    }
    /**
     * PlayerDto
     */
    export interface MatchV4PlayerDto {
      profileIcon: number; // int32
      /**
       * Player's original accountId.
       */
      accountId: string;
      matchHistoryUri: string;
      /**
       * Player's current accountId when the match was played.
       */
      currentAccountId: string;
      /**
       * Player's current platformId when the match was played.
       */
      currentPlatformId: string;
      summonerName: string;
      /**
       * Player's summonerId (Encrypted)
       */
      summonerId: string;
      /**
       * Player's original platformId.
       */
      platformId: string;
    }
    /**
     * RuneDto
     */
    export interface MatchV4RuneDto {
      runeId: number; // int32
      rank: number; // int32
    }
    /**
     * TeamBansDto
     */
    export interface MatchV4TeamBansDto {
      /**
       * Banned championId.
       */
      championId: number; // int32
      /**
       * Turn during which the champion was banned.
       */
      pickTurn: number; // int32
    }
    /**
     * TeamStatsDto
     */
    export interface MatchV4TeamStatsDto {
      /**
       * Number of towers the team destroyed.
       */
      towerKills: number; // int32
      /**
       * Number of times the team killed Rift Herald.
       */
      riftHeraldKills: number; // int32
      /**
       * Flag indicating whether or not the team scored the first blood.
       */
      firstBlood: boolean;
      /**
       * Number of inhibitors the team destroyed.
       */
      inhibitorKills: number; // int32
      /**
       * If match queueId has a draft, contains banned champion data, otherwise empty.
       */
      bans: MatchV4TeamBansDto[];
      /**
       * Flag indicating whether or not the team scored the first Baron kill.
       */
      firstBaron: boolean;
      /**
       * Flag indicating whether or not the team scored the first Dragon kill.
       */
      firstDragon: boolean;
      /**
       * For Dominion matches, specifies the points the team had at game end.
       */
      dominionVictoryScore: number; // int32
      /**
       * Number of times the team killed Dragon.
       */
      dragonKills: number; // int32
      /**
       * Number of times the team killed Baron.
       */
      baronKills: number; // int32
      /**
       * Flag indicating whether or not the team destroyed the first inhibitor.
       */
      firstInhibitor: boolean;
      /**
       * Flag indicating whether or not the team destroyed the first tower.
       */
      firstTower: boolean;
      /**
       * Number of times the team killed Vilemaw.
       */
      vilemawKills: number; // int32
      /**
       * Flag indicating whether or not the team scored the first Rift Herald kill.
       */
      firstRiftHerald: boolean;
      /**
       * 100 for blue side. 200 for red side.
       */
      teamId: number; // int32
      /**
       * String indicating whether or not the team won. There are only two values visibile in public match history.
       *              (Legal values:  Fail,  Win)
       */
      win: "Fail" | "Win";
    }
    /**
     * BannedChampion
     */
    export interface SpectatorV4BannedChampion {
      /**
       * The turn during which the champion was banned
       */
      pickTurn: number; // int32
      /**
       * The ID of the banned champion
       */
      championId: number; // int64
      /**
       * The ID of the team that banned the champion
       */
      teamId: number; // int64
    }
    /**
     * CurrentGameInfo
     */
    export interface SpectatorV4CurrentGameInfo {
      /**
       * The ID of the game
       */
      gameId: number; // int64
      /**
       * The game type
       */
      gameType: string;
      /**
       * The game start time represented in epoch milliseconds
       */
      gameStartTime: number; // int64
      /**
       * The ID of the map
       */
      mapId: number; // int64
      /**
       * The amount of time in seconds that has passed since the game started
       */
      gameLength: number; // int64
      /**
       * The ID of the platform on which the game is being played
       */
      platformId: string;
      /**
       * The game mode
       */
      gameMode: string;
      /**
       * Banned champion information
       */
      bannedChampions: SpectatorV4BannedChampion[];
      /**
       * The queue type (queue types are documented on the Game Constants page)
       */
      gameQueueConfigId?: number; // int64
      /**
       * The observer information
       */
      observers: SpectatorV4Observer;
      /**
       * The participant information
       */
      participants: SpectatorV4CurrentGameParticipant[];
    }
    /**
     * CurrentGameParticipant
     */
    export interface SpectatorV4CurrentGameParticipant {
      /**
       * The ID of the champion played by this participant
       */
      championId: number; // int64
      /**
       * Perks/Runes Reforged Information
       */
      perks: SpectatorV4Perks;
      /**
       * The ID of the profile icon used by this participant
       */
      profileIconId: number; // int64
      /**
       * Flag indicating whether or not this participant is a bot
       */
      bot: boolean;
      /**
       * The team ID of this participant, indicating the participant's team
       */
      teamId: number; // int64
      /**
       * The summoner name of this participant
       */
      summonerName: string;
      /**
       * The encrypted summoner ID of this participant
       */
      summonerId: string;
      /**
       * The ID of the first summoner spell used by this participant
       */
      spell1Id: number; // int64
      /**
       * The ID of the second summoner spell used by this participant
       */
      spell2Id: number; // int64
      /**
       * List of Game Customizations
       */
      gameCustomizationObjects: SpectatorV4GameCustomizationObject[];
    }
    /**
     * FeaturedGameInfo
     */
    export interface SpectatorV4FeaturedGameInfo {
      /**
       * The game mode
       *              (Legal values:  CLASSIC,  ODIN,  ARAM,  TUTORIAL,  ONEFORALL,  ASCENSION,  FIRSTBLOOD,  KINGPORO)
       */
      gameMode: "CLASSIC" | "ODIN" | "ARAM" | "TUTORIAL" | "ONEFORALL" | "ASCENSION" | "FIRSTBLOOD" | "KINGPORO";
      /**
       * The amount of time in seconds that has passed since the game started
       */
      gameLength: number; // int64
      /**
       * The ID of the map
       */
      mapId: number; // int64
      /**
       * The game type
       *              (Legal values:  CUSTOM_GAME,  MATCHED_GAME,  TUTORIAL_GAME)
       */
      gameType: "CUSTOM_GAME" | "MATCHED_GAME" | "TUTORIAL_GAME";
      /**
       * Banned champion information
       */
      bannedChampions: SpectatorV4BannedChampion[];
      /**
       * The ID of the game
       */
      gameId: number; // int64
      /**
       * The observer information
       */
      observers: SpectatorV4Observer;
      /**
       * The queue type (queue types are documented on the Game Constants page)
       */
      gameQueueConfigId: number; // int64
      /**
       * The game start time represented in epoch milliseconds
       */
      gameStartTime: number; // int64
      /**
       * The participant information
       */
      participants: SpectatorV4Participant[];
      /**
       * The ID of the platform on which the game is being played
       */
      platformId: string;
    }
    /**
     * FeaturedGames
     */
    export interface SpectatorV4FeaturedGames {
      /**
       * The list of featured games
       */
      gameList: SpectatorV4FeaturedGameInfo[];
      /**
       * The suggested interval to wait before requesting FeaturedGames again
       */
      clientRefreshInterval: number; // int64
    }
    /**
     * GameCustomizationObject
     */
    export interface SpectatorV4GameCustomizationObject {
      /**
       * Category identifier for Game Customization
       */
      category: string;
      /**
       * Game Customization content
       */
      content: string;
    }
    /**
     * Observer
     */
    export interface SpectatorV4Observer {
      /**
       * Key used to decrypt the spectator grid game data for playback
       */
      encryptionKey: string;
    }
    /**
     * Participant
     */
    export interface SpectatorV4Participant {
      /**
       * Flag indicating whether or not this participant is a bot
       */
      bot: boolean;
      /**
       * The ID of the second summoner spell used by this participant
       */
      spell2Id: number; // int64
      /**
       * The ID of the profile icon used by this participant
       */
      profileIconId: number; // int64
      /**
       * The summoner name of this participant
       */
      summonerName: string;
      /**
       * The ID of the champion played by this participant
       */
      championId: number; // int64
      /**
       * The team ID of this participant, indicating the participant's team
       */
      teamId: number; // int64
      /**
       * The ID of the first summoner spell used by this participant
       */
      spell1Id: number; // int64
    }
    /**
     * Perks
     */
    export interface SpectatorV4Perks {
      /**
       * IDs of the perks/runes assigned.
       */
      perkIds: number /* int64 */ [];
      /**
       * Primary runes path
       */
      perkStyle: number; // int64
      /**
       * Secondary runes path
       */
      perkSubStyle: number; // int64
    }
    /**
     * SummonerDTO
     * represents a summoner
     */
    export interface SummonerV4SummonerDTO {
      /**
       * Encrypted account ID. Max length 56 characters.
       */
      accountId: string;
      /**
       * ID of the summoner icon associated with the summoner.
       */
      profileIconId: number; // int32
      /**
       * Date summoner was last modified specified as epoch milliseconds. The following events will update this timestamp: summoner name change, summoner level change, or profile icon change.
       */
      revisionDate: number; // int64
      /**
       * Summoner name.
       */
      name: string;
      /**
       * Encrypted summoner ID. Max length 63 characters.
       */
      id: string;
      /**
       * Encrypted PUUID. Exact length of 78 characters.
       */
      puuid: string;
      /**
       * Summoner level associated with the summoner.
       */
      summonerLevel: number; // int64
    }
    /**
     * LeagueEntryDTO
     */
    export interface TftLeagueV1LeagueEntryDTO {
      leagueId: string;
      /**
       * Player's encrypted summonerId.
       */
      summonerId: string;
      summonerName: string;
      queueType: string;
      tier: string;
      rank: string;
      leaguePoints: number; // int32
      /**
       * First placement.
       */
      wins: number; // int32
      /**
       * Second through eighth placement.
       */
      losses: number; // int32
      hotStreak: boolean;
      veteran: boolean;
      freshBlood: boolean;
      inactive: boolean;
      miniSeries?: TftLeagueV1MiniSeriesDTO;
    }
    /**
     * LeagueItemDTO
     */
    export interface TftLeagueV1LeagueItemDTO {
      freshBlood: boolean;
      /**
       * First placement.
       */
      wins: number; // int32
      summonerName: string;
      miniSeries?: TftLeagueV1MiniSeriesDTO;
      inactive: boolean;
      veteran: boolean;
      hotStreak: boolean;
      rank: string;
      leaguePoints: number; // int32
      /**
       * Second through eighth placement.
       */
      losses: number; // int32
      /**
       * Player's encrypted summonerId.
       */
      summonerId: string;
    }
    /**
     * LeagueListDTO
     */
    export interface TftLeagueV1LeagueListDTO {
      leagueId: string;
      entries: TftLeagueV1LeagueItemDTO[];
      tier: string;
      name: string;
      queue: string;
    }
    /**
     * MiniSeriesDTO
     */
    export interface TftLeagueV1MiniSeriesDTO {
      losses: number; // int32
      progress: string;
      target: number; // int32
      wins: number; // int32
    }
    /**
     * CompanionDto
     */
    export interface TftMatchV1CompanionDto {
      skin_ID: number; // int32
      content_ID: string;
      species: string;
    }
    /**
     * InfoDto
     */
    export interface TftMatchV1InfoDto {
      /**
       * Unix timestamp.
       */
      game_datetime: number; // int64
      /**
       * Game length in seconds.
       */
      game_length: number; // float
      /**
       * Game variation key. Game variations documented in TFT static data.
       */
      game_variation?: string;
      /**
       * Game client version.
       */
      game_version: string;
      /**
       * Participants.
       */
      participants: TftMatchV1ParticipantDto[];
      /**
       * Please refer to the League of Legends documentation.
       */
      queue_id: number; // int32
      /**
       * Teamfight Tactics set number.
       */
      tft_set_number: number; // int32
    }
    /**
     * MatchDto
     */
    export interface TftMatchV1MatchDto {
      /**
       * Match metadata.
       */
      metadata: TftMatchV1MetadataDto;
      /**
       * Match info.
       */
      info: TftMatchV1InfoDto;
    }
    /**
     * MetadataDto
     */
    export interface TftMatchV1MetadataDto {
      /**
       * Match data version.
       */
      data_version: string;
      /**
       * Match id.
       */
      match_id: string;
      /**
       * A list of encrypted participant PUUIDs.
       */
      participants: string[];
    }
    /**
     * ParticipantDto
     */
    export interface TftMatchV1ParticipantDto {
      /**
       * Participant's companion.
       */
      companion: TftMatchV1CompanionDto;
      /**
       * Gold left after participant was eliminated.
       */
      gold_left: number; // int32
      /**
       * The round the participant was eliminated in. Note: If the player was eliminated in stage 2-1 their last_round would be 5.
       */
      last_round: number; // int32
      /**
       * Participant Little Legend level. Note: This is not the number of active units.
       */
      level: number; // int32
      /**
       * Participant placement upon elimination.
       */
      placement: number; // int32
      /**
       * Number of players the participant eliminated.
       */
      players_eliminated: number; // int32
      /**
       * Encrypted PUUID.
       */
      puuid: string;
      /**
       * The number of seconds before the participant was eliminated.
       */
      time_eliminated: number; // float
      /**
       * Damage the participant dealt to other players.
       */
      total_damage_to_players: number; // int32
      /**
       * A complete list of traits for the participant's active units.
       */
      traits: TftMatchV1TraitDto[];
      /**
       * A list of active units for the participant.
       */
      units: TftMatchV1UnitDto[];
    }
    /**
     * TraitDto
     */
    export interface TftMatchV1TraitDto {
      /**
       * Trait name.
       */
      name: string;
      /**
       * Number of units with this trait.
       */
      num_units: number; // int32
      /**
       * Current active tier for the trait.
       */
      tier_current: number; // int32
      /**
       * Total tiers for the trait.
       */
      tier_total?: number; // int32
    }
    /**
     * UnitDto
     */
    export interface TftMatchV1UnitDto {
      /**
       * A list of the unit's items. Please refer to the Teamfight Tactics documentation for item ids.
       */
      items: number /* int32 */ [];
      /**
       * This field was introduced in patch 9.22 with data_version 2.
       */
      character_id: string;
      /**
       * Unit name.
       */
      name: string;
      /**
       * Unit rarity. This doesn't equate to the unit cost.
       */
      rarity: number; // int32
      /**
       * Unit tier.
       */
      tier: number; // int32
    }
    /**
     * SummonerDTO
     * represents a summoner
     */
    export interface TftSummonerV1SummonerDTO {
      /**
       * Encrypted account ID. Max length 56 characters.
       */
      accountId: string;
      /**
       * ID of the summoner icon associated with the summoner.
       */
      profileIconId: number; // int32
      /**
       * Date summoner was last modified specified as epoch milliseconds. The following events will update this timestamp: summoner name change, summoner level change, or profile icon change.
       */
      revisionDate: number; // int64
      /**
       * Summoner name.
       */
      name: string;
      /**
       * Encrypted summoner ID. Max length 63 characters.
       */
      id: string;
      /**
       * Encrypted PUUID. Exact length of 78 characters.
       */
      puuid: string;
      /**
       * Summoner level associated with the summoner.
       */
      summonerLevel: number; // int64
    }
    /**
     * LobbyEventDTO
     */
    export interface TournamentStubV4LobbyEventDTO {
      /**
       * The summonerId that triggered the event (Encrypted)
       */
      summonerId: string;
      /**
       * The type of event that was triggered
       */
      eventType: string;
      /**
       * Timestamp from the event
       */
      timestamp: string;
    }
    /**
     * LobbyEventDTOWrapper
     */
    export interface TournamentStubV4LobbyEventDTOWrapper {
      eventList: TournamentStubV4LobbyEventDTO[];
    }
    /**
     * ProviderRegistrationParameters
     */
    export interface TournamentStubV4ProviderRegistrationParameters {
      /**
       * The region in which the provider will be running tournaments.
       *              (Legal values:  BR,  EUNE,  EUW,  JP,  LAN,  LAS,  NA,  OCE,  PBE,  RU,  TR)
       */
      region: "BR" | "EUNE" | "EUW" | "JP" | "LAN" | "LAS" | "NA" | "OCE" | "PBE" | "RU" | "TR";
      /**
       * The provider's callback URL to which tournament game results in this region should be posted. The URL must be well-formed, use the http or https protocol, and use the default port for the protocol (http URLs must use port 80, https URLs must use port 443).
       */
      url: string;
    }
    /**
     * TournamentCodeParameters
     */
    export interface TournamentStubV4TournamentCodeParameters {
      /**
       * Optional list of encrypted summonerIds in order to validate the players eligible to join the lobby. NOTE: We currently do not enforce participants at the team level, but rather the aggregate of teamOne and teamTwo. We may add the ability to enforce at the team level in the future.
       */
      allowedSummonerIds?: string[];
      /**
       * Optional string that may contain any data in any format, if specified at all. Used to denote any custom information about the game.
       */
      metadata?: string;
      /**
       * The team size of the game. Valid values are 1-5.
       */
      teamSize: number; // int32
      /**
       * The pick type of the game.
       *              (Legal values:  BLIND_PICK,  DRAFT_MODE,  ALL_RANDOM,  TOURNAMENT_DRAFT)
       */
      pickType: "BLIND_PICK" | "DRAFT_MODE" | "ALL_RANDOM" | "TOURNAMENT_DRAFT";
      /**
       * The map type of the game.
       *              (Legal values:  SUMMONERS_RIFT,  TWISTED_TREELINE,  HOWLING_ABYSS)
       */
      mapType: "SUMMONERS_RIFT" | "TWISTED_TREELINE" | "HOWLING_ABYSS";
      /**
       * The spectator type of the game.
       *              (Legal values:  NONE,  LOBBYONLY,  ALL)
       */
      spectatorType: "NONE" | "LOBBYONLY" | "ALL";
    }
    /**
     * TournamentRegistrationParameters
     */
    export interface TournamentStubV4TournamentRegistrationParameters {
      /**
       * The provider ID to specify the regional registered provider data to associate this tournament.
       */
      providerId: number; // int32
      /**
       * The optional name of the tournament.
       */
      name?: string;
    }
    /**
     * LobbyEventDTO
     */
    export interface TournamentV4LobbyEventDTO {
      /**
       * Timestamp from the event
       */
      timestamp: string;
      /**
       * The type of event that was triggered
       */
      eventType: string;
      /**
       * The summonerId that triggered the event (Encrypted)
       */
      summonerId: string;
    }
    /**
     * LobbyEventDTOWrapper
     */
    export interface TournamentV4LobbyEventDTOWrapper {
      eventList: TournamentV4LobbyEventDTO[];
    }
    /**
     * ProviderRegistrationParameters
     */
    export interface TournamentV4ProviderRegistrationParameters {
      /**
       * The region in which the provider will be running tournaments.
       *              (Legal values:  BR,  EUNE,  EUW,  JP,  LAN,  LAS,  NA,  OCE,  PBE,  RU,  TR)
       */
      region: "BR" | "EUNE" | "EUW" | "JP" | "LAN" | "LAS" | "NA" | "OCE" | "PBE" | "RU" | "TR";
      /**
       * The provider's callback URL to which tournament game results in this region should be posted. The URL must be well-formed, use the http or https protocol, and use the default port for the protocol (http URLs must use port 80, https URLs must use port 443).
       */
      url: string;
    }
    /**
     * TournamentCodeDTO
     */
    export interface TournamentV4TournamentCodeDTO {
      /**
       * The tournament code.
       */
      code: string;
      /**
       * The spectator mode for the tournament code game.
       */
      spectators: string;
      /**
       * The lobby name for the tournament code game.
       */
      lobbyName: string;
      /**
       * The metadata for tournament code.
       */
      metaData: string;
      /**
       * The password for the tournament code game.
       */
      password: string;
      /**
       * The team size for the tournament code game.
       */
      teamSize: number; // int32
      /**
       * The provider's ID.
       */
      providerId: number; // int32
      /**
       * The pick mode for tournament code game.
       */
      pickType: string;
      /**
       * The tournament's ID.
       */
      tournamentId: number; // int32
      /**
       * The tournament code's ID.
       */
      id: number; // int32
      /**
       * The tournament code's region.
       *              (Legal values:  BR,  EUNE,  EUW,  JP,  LAN,  LAS,  NA,  OCE,  PBE,  RU,  TR)
       */
      region: "BR" | "EUNE" | "EUW" | "JP" | "LAN" | "LAS" | "NA" | "OCE" | "PBE" | "RU" | "TR";
      /**
       * The game map for the tournament code game
       */
      map: string;
      /**
       * The summonerIds of the participants (Encrypted)
       */
      participants: string[];
    }
    /**
     * TournamentCodeParameters
     */
    export interface TournamentV4TournamentCodeParameters {
      /**
       * Optional list of encrypted summonerIds in order to validate the players eligible to join the lobby. NOTE: We currently do not enforce participants at the team level, but rather the aggregate of teamOne and teamTwo. We may add the ability to enforce at the team level in the future.
       */
      allowedSummonerIds?: string[];
      /**
       * Optional string that may contain any data in any format, if specified at all. Used to denote any custom information about the game.
       */
      metadata?: string;
      /**
       * The team size of the game. Valid values are 1-5.
       */
      teamSize: number; // int32
      /**
       * The pick type of the game.
       *              (Legal values:  BLIND_PICK,  DRAFT_MODE,  ALL_RANDOM,  TOURNAMENT_DRAFT)
       */
      pickType: "BLIND_PICK" | "DRAFT_MODE" | "ALL_RANDOM" | "TOURNAMENT_DRAFT";
      /**
       * The map type of the game.
       *              (Legal values:  SUMMONERS_RIFT,  TWISTED_TREELINE,  HOWLING_ABYSS)
       */
      mapType: "SUMMONERS_RIFT" | "TWISTED_TREELINE" | "HOWLING_ABYSS";
      /**
       * The spectator type of the game.
       *              (Legal values:  NONE,  LOBBYONLY,  ALL)
       */
      spectatorType: "NONE" | "LOBBYONLY" | "ALL";
    }
    /**
     * TournamentCodeUpdateParameters
     */
    export interface TournamentV4TournamentCodeUpdateParameters {
      /**
       * Optional list of encrypted summonerIds in order to validate the players eligible to join the lobby. NOTE: We currently do not enforce participants at the team level, but rather the aggregate of teamOne and teamTwo. We may add the ability to enforce at the team level in the future.
       */
      allowedSummonerIds?: string[];
      /**
       * The pick type
       *              (Legal values:  BLIND_PICK,  DRAFT_MODE,  ALL_RANDOM,  TOURNAMENT_DRAFT)
       */
      pickType: "BLIND_PICK" | "DRAFT_MODE" | "ALL_RANDOM" | "TOURNAMENT_DRAFT";
      /**
       * The map type
       *              (Legal values:  SUMMONERS_RIFT,  TWISTED_TREELINE,  HOWLING_ABYSS)
       */
      mapType: "SUMMONERS_RIFT" | "TWISTED_TREELINE" | "HOWLING_ABYSS";
      /**
       * The spectator type
       *              (Legal values:  NONE,  LOBBYONLY,  ALL)
       */
      spectatorType: "NONE" | "LOBBYONLY" | "ALL";
    }
    /**
     * TournamentRegistrationParameters
     */
    export interface TournamentV4TournamentRegistrationParameters {
      /**
       * The provider ID to specify the regional registered provider data to associate this tournament.
       */
      providerId: number; // int32
      /**
       * The optional name of the tournament.
       */
      name?: string;
    }
    /**
     * ContentDto
     */
    export interface ValContentV1ContentDto {
      version: string;
      characters: ValContentV1ContentItemDto[];
      maps: ValContentV1ContentItemDto[];
      chromas: ValContentV1ContentItemDto[];
      skins: ValContentV1ContentItemDto[];
      skinLevels: ValContentV1ContentItemDto[];
      equips: ValContentV1ContentItemDto[];
      gameModes: ValContentV1ContentItemDto[];
      sprays: ValContentV1ContentItemDto[];
      sprayLevels: ValContentV1ContentItemDto[];
      charms: ValContentV1ContentItemDto[];
      charmLevels: ValContentV1ContentItemDto[];
      playerCards: ValContentV1ContentItemDto[];
      playerTitles: ValContentV1ContentItemDto[];
    }
    /**
     * ContentItemDto
     */
    export interface ValContentV1ContentItemDto {
      name: string;
      /**
       * This field is excluded from the response when a locale is set
       */
      localizedNames?: ValContentV1LocalizedNamesDto;
      assetName: string;
    }
    /**
     * LocalizedNamesDto
     */
    export interface ValContentV1LocalizedNamesDto {
      "ar-AE": string;
      "de-DE": string;
      "en-GB": string;
      "en-US": string;
      "es-ES": string;
      "es-MX": string;
      "fr-FR": string;
      "id-ID": string;
      "it-IT": string;
      "ja-JP": string;
      "ko-KR": string;
      "pl-PL": string;
      "pt-BR": string;
      "ru-RU": string;
      "th-TH": string;
      "tr-TR": string;
      "vi-VN": string;
      "zh-CN": string;
      "zh-TW": string;
    }
    /**
     * AbilityDto
     */
    export interface ValMatchV1AbilityDto {
      grenadeEffects: string;
      ability1Effects: string;
      ability2Effects: string;
      ultimateEffects: string;
    }
    /**
     * DamageDto
     */
    export interface ValMatchV1DamageDto {
      /**
       * PUUID
       */
      receiver: string;
      damage: number; // int32
      legshots: number; // int32
      bodyshots: number; // int32
      headshots: number; // int32
    }
    /**
     * EconomyDto
     */
    export interface ValMatchV1EconomyDto {
      loadoutValue: number; // int32
      weapon: string;
      armor: string;
      remaining: number; // int32
      spent: number; // int32
    }
    /**
     * FinishingDamageDto
     */
    export interface ValMatchV1FinishingDamageDto {
      damageType: string;
      damageItem: string;
      isSecondaryFireMode: boolean;
    }
    /**
     * KillDto
     */
    export interface ValMatchV1KillDto {
      gameTime: number; // int32
      roundTime: number; // int32
      /**
       * PUUID
       */
      killer: string;
      /**
       * PUUID
       */
      victim: string;
      victimLocation: ValMatchV1LocationDto;
      /**
       * List of PUUIDs
       */
      assistants: string[];
      playerLocations: ValMatchV1PlayerLocationsDto[];
      finishingDamage: ValMatchV1FinishingDamageDto;
    }
    /**
     * LocationDto
     */
    export interface ValMatchV1LocationDto {
      x: number; // int32
      y: number; // int32
    }
    /**
     * MatchDto
     */
    export interface ValMatchV1MatchDto {
      matchInfo: ValMatchV1MatchInfoDto[];
      players: ValMatchV1PlayerDto[];
      teams: ValMatchV1TeamDto[];
      roundResults: ValMatchV1RoundResultDto[];
    }
    /**
     * MatchInfoDto
     */
    export interface ValMatchV1MatchInfoDto {
      matchId: string;
      mapId: string;
      gameLengthMillis: number; // int32
      gameStartMillis: number; // int64
      provisioningFlowId: string;
      isCompleted: boolean;
      customGameName: string;
      queueId: string;
      gameMode: string;
      isRanked: boolean;
      seasonId: string;
    }
    /**
     * MatchReferenceDto
     */
    export interface ValMatchV1MatchReferenceDto {
      matchId: string;
      gameStartTime: number; // int64
      teamId: string;
    }
    /**
     * MatchlistDto
     */
    export interface ValMatchV1MatchlistDto {
      puuid: string;
      history: ValMatchV1MatchReferenceDto[];
    }
    /**
     * PlayerDto
     */
    export interface ValMatchV1PlayerDto {
      puuid: string;
      teamId: string;
      partyId: string;
      characterId: string;
      stats: ValMatchV1PlayerStatsDto;
      competitiveTier: number; // int32
      playerCard: string;
      playerTitle: string;
    }
    /**
     * PlayerLocationsDto
     */
    export interface ValMatchV1PlayerLocationsDto {
      puuid: string;
      viewRadians: number; // float
      location: ValMatchV1LocationDto;
    }
    /**
     * PlayerStatsDto
     */
    export interface ValMatchV1PlayerStatsDto {
      puuid: string;
      kills: ValMatchV1KillDto[];
      damage: ValMatchV1DamageDto[];
      score: number; // int32
      economy: ValMatchV1EconomyDto;
      ability: ValMatchV1AbilityDto;
    }
    /**
     * RoundResultDto
     */
    export interface ValMatchV1RoundResultDto {
      roundNum: number; // int32
      roundResult: string;
      roundCeremony: string;
      winningTeam: string;
      /**
       * PUUID of player
       */
      bombPlanter: string;
      /**
       * PUUID of player
       */
      bombDefuser: string;
      plantRoundTime: number; // int32
      plantPlayerLocations: ValMatchV1PlayerLocationsDto[];
      plantLocation: ValMatchV1LocationDto;
      plantSite: string;
      defuseRoundTime: number; // int32
      defusePlayerLocations: ValMatchV1PlayerLocationsDto[];
      defuseLocation: ValMatchV1LocationDto;
      playerStats: ValMatchV1PlayerStatsDto[];
      roundResultCode: string;
    }
    /**
     * TeamDto
     */
    export interface ValMatchV1TeamDto {
      teamId: string;
      won: boolean;
      roundsPlayed: number; // int32
      roundsWon: number; // int32
    }
  }
}
declare namespace Paths {
  namespace AccountV1GetActiveShard {
    namespace Parameters {
      export type Game = "val" | "lor";
      export type Puuid = string;
    }
    export interface PathParameters {
      puuid: Parameters.Puuid;
      game: Parameters.Game;
    }
    namespace Responses {
      export type $200 = Components.Schemas.AccountV1ActiveShardDto;
    }
  }
  namespace AccountV1GetByPuuid {
    namespace Parameters {
      export type Puuid = string;
    }
    export interface PathParameters {
      puuid: Parameters.Puuid;
    }
    namespace Responses {
      export type $200 = Components.Schemas.AccountV1AccountDto;
    }
  }
  namespace AccountV1GetByRiotId {
    namespace Parameters {
      export type GameName = string;
      export type TagLine = string;
    }
    export interface PathParameters {
      tagLine: Parameters.TagLine;
      gameName: Parameters.GameName;
    }
    namespace Responses {
      export type $200 = Components.Schemas.AccountV1AccountDto;
    }
  }
  namespace ChampionMasteryV4GetAllChampionMasteries {
    namespace Parameters {
      export type EncryptedSummonerId = string;
    }
    export interface PathParameters {
      encryptedSummonerId: Parameters.EncryptedSummonerId;
    }
    namespace Responses {
      export type $200 = Components.Schemas.ChampionMasteryV4ChampionMasteryDTO[];
    }
  }
  namespace ChampionMasteryV4GetChampionMastery {
    namespace Parameters {
      export type ChampionId = number; // int64
      export type EncryptedSummonerId = string;
    }
    export interface PathParameters {
      championId: Parameters.ChampionId; // int64
      encryptedSummonerId: Parameters.EncryptedSummonerId;
    }
    namespace Responses {
      export type $200 = Components.Schemas.ChampionMasteryV4ChampionMasteryDTO;
    }
  }
  namespace ChampionMasteryV4GetChampionMasteryScore {
    namespace Parameters {
      export type EncryptedSummonerId = string;
    }
    export interface PathParameters {
      encryptedSummonerId: Parameters.EncryptedSummonerId;
    }
    namespace Responses {
      export type $200 = number; // int32
    }
  }
  namespace ChampionV3GetChampionInfo {
    namespace Responses {
      export type $200 = Components.Schemas.ChampionV3ChampionInfo;
    }
  }
  namespace ClashV1GetPlayersBySummoner {
    namespace Parameters {
      export type SummonerId = string;
    }
    export interface PathParameters {
      summonerId: Parameters.SummonerId;
    }
    namespace Responses {
      export type $200 = Components.Schemas.ClashV1PlayerDto[];
    }
  }
  namespace ClashV1GetTeamById {
    namespace Parameters {
      export type TeamId = string;
    }
    export interface PathParameters {
      teamId: Parameters.TeamId;
    }
    namespace Responses {
      export type $200 = Components.Schemas.ClashV1TeamDto;
    }
  }
  namespace ClashV1GetTournamentById {
    namespace Parameters {
      export type TournamentId = number; // int32
    }
    export interface PathParameters {
      tournamentId: Parameters.TournamentId; // int32
    }
    namespace Responses {
      export type $200 = Components.Schemas.ClashV1TournamentDto;
    }
  }
  namespace ClashV1GetTournamentByTeam {
    namespace Parameters {
      export type TeamId = string;
    }
    export interface PathParameters {
      teamId: Parameters.TeamId;
    }
    namespace Responses {
      export type $200 = Components.Schemas.ClashV1TournamentDto;
    }
  }
  namespace ClashV1GetTournaments {
    namespace Responses {
      export type $200 = Components.Schemas.ClashV1TournamentDto[];
    }
  }
  namespace LeagueExpV4GetLeagueEntries {
    namespace Parameters {
      export type Division = "I" | "II" | "III" | "IV";
      export type Page = number; // int32
      export type Queue = "RANKED_SOLO_5x5" | "RANKED_TFT" | "RANKED_FLEX_SR" | "RANKED_FLEX_TT";
      export type Tier = "CHALLENGER" | "GRANDMASTER" | "MASTER" | "DIAMOND" | "PLATINUM" | "GOLD" | "SILVER" | "BRONZE" | "IRON";
    }
    export interface PathParameters {
      queue: Parameters.Queue;
      tier: Parameters.Tier;
      division: Parameters.Division;
    }
    export interface QueryParameters {
      page?: Parameters.Page; // int32
    }
    namespace Responses {
      export type $200 = Components.Schemas.LeagueExpV4LeagueEntryDTO[];
    }
  }
  namespace LeagueV4GetChallengerLeague {
    namespace Parameters {
      export type Queue = "RANKED_SOLO_5x5" | "RANKED_FLEX_SR" | "RANKED_FLEX_TT";
    }
    export interface PathParameters {
      queue: Parameters.Queue;
    }
    namespace Responses {
      export type $200 = Components.Schemas.LeagueV4LeagueListDTO;
    }
  }
  namespace LeagueV4GetGrandmasterLeague {
    namespace Parameters {
      export type Queue = "RANKED_SOLO_5x5" | "RANKED_FLEX_SR" | "RANKED_FLEX_TT";
    }
    export interface PathParameters {
      queue: Parameters.Queue;
    }
    namespace Responses {
      export type $200 = Components.Schemas.LeagueV4LeagueListDTO;
    }
  }
  namespace LeagueV4GetLeagueById {
    namespace Parameters {
      export type LeagueId = string;
    }
    export interface PathParameters {
      leagueId: Parameters.LeagueId;
    }
    namespace Responses {
      export type $200 = Components.Schemas.LeagueV4LeagueListDTO;
    }
  }
  namespace LeagueV4GetLeagueEntries {
    namespace Parameters {
      export type Division = "I" | "II" | "III" | "IV";
      export type Page = number; // int32
      export type Queue = "RANKED_SOLO_5x5" | "RANKED_FLEX_SR" | "RANKED_FLEX_TT";
      export type Tier = "DIAMOND" | "PLATINUM" | "GOLD" | "SILVER" | "BRONZE" | "IRON";
    }
    export interface PathParameters {
      division: Parameters.Division;
      tier: Parameters.Tier;
      queue: Parameters.Queue;
    }
    export interface QueryParameters {
      page?: Parameters.Page; // int32
    }
    namespace Responses {
      export type $200 = Components.Schemas.LeagueV4LeagueEntryDTO[];
    }
  }
  namespace LeagueV4GetLeagueEntriesForSummoner {
    namespace Parameters {
      export type EncryptedSummonerId = string;
    }
    export interface PathParameters {
      encryptedSummonerId: Parameters.EncryptedSummonerId;
    }
    namespace Responses {
      export type $200 = Components.Schemas.LeagueV4LeagueEntryDTO[];
    }
  }
  namespace LeagueV4GetMasterLeague {
    namespace Parameters {
      export type Queue = "RANKED_SOLO_5x5" | "RANKED_FLEX_SR" | "RANKED_FLEX_TT";
    }
    export interface PathParameters {
      queue: Parameters.Queue;
    }
    namespace Responses {
      export type $200 = Components.Schemas.LeagueV4LeagueListDTO;
    }
  }
  namespace LolStatusV3GetShardData {
    namespace Responses {
      export type $200 = Components.Schemas.LolStatusV3ShardStatus;
    }
  }
  namespace LorRankedV1GetLeaderboards {
    namespace Responses {
      export type $200 = Components.Schemas.LorRankedV1LeaderboardDto;
    }
  }
  namespace MatchV4GetMatch {
    namespace Parameters {
      export type MatchId = number; // int64
    }
    export interface PathParameters {
      matchId: Parameters.MatchId; // int64
    }
    namespace Responses {
      export type $200 = Components.Schemas.MatchV4MatchDto;
    }
  }
  namespace MatchV4GetMatchByTournamentCode {
    namespace Parameters {
      export type MatchId = number; // int64
      export type TournamentCode = string;
    }
    export interface PathParameters {
      tournamentCode: Parameters.TournamentCode;
      matchId: Parameters.MatchId; // int64
    }
    namespace Responses {
      export type $200 = Components.Schemas.MatchV4MatchDto;
    }
  }
  namespace MatchV4GetMatchIdsByTournamentCode {
    namespace Parameters {
      export type TournamentCode = string;
    }
    export interface PathParameters {
      tournamentCode: Parameters.TournamentCode;
    }
    namespace Responses {
      export type $200 = number /* int64 */ [];
    }
  }
  namespace MatchV4GetMatchTimeline {
    namespace Parameters {
      export type MatchId = number; // int64
    }
    export interface PathParameters {
      matchId: Parameters.MatchId; // int64
    }
    namespace Responses {
      export type $200 = Components.Schemas.MatchV4MatchTimelineDto;
    }
  }
  namespace MatchV4GetMatchlist {
    namespace Parameters {
      export type BeginIndex = number; // int32
      export type BeginTime = number; // int64
      export type Champion = number /* int32 */ [];
      export type EncryptedAccountId = string;
      export type EndIndex = number; // int32
      export type EndTime = number; // int64
      export type Queue = number /* int32 */ [];
      export type Season = number /* int32 */ [];
    }
    export interface PathParameters {
      encryptedAccountId: Parameters.EncryptedAccountId;
    }
    export interface QueryParameters {
      champion?: Parameters.Champion;
      queue?: Parameters.Queue;
      season?: Parameters.Season;
      endTime?: Parameters.EndTime; // int64
      beginTime?: Parameters.BeginTime; // int64
      endIndex?: Parameters.EndIndex; // int32
      beginIndex?: Parameters.BeginIndex; // int32
    }
    namespace Responses {
      export type $200 = Components.Schemas.MatchV4MatchlistDto;
    }
  }
  namespace SpectatorV4GetCurrentGameInfoBySummoner {
    namespace Parameters {
      export type EncryptedSummonerId = string;
    }
    export interface PathParameters {
      encryptedSummonerId: Parameters.EncryptedSummonerId;
    }
    namespace Responses {
      export type $200 = Components.Schemas.SpectatorV4CurrentGameInfo;
    }
  }
  namespace SpectatorV4GetFeaturedGames {
    namespace Responses {
      export type $200 = Components.Schemas.SpectatorV4FeaturedGames;
    }
  }
  namespace SummonerV4GetByAccountId {
    namespace Parameters {
      export type EncryptedAccountId = string;
    }
    export interface PathParameters {
      encryptedAccountId: Parameters.EncryptedAccountId;
    }
    namespace Responses {
      export type $200 = Components.Schemas.SummonerV4SummonerDTO;
    }
  }
  namespace SummonerV4GetByPUUID {
    namespace Parameters {
      export type EncryptedPUUID = string;
    }
    export interface PathParameters {
      encryptedPUUID: Parameters.EncryptedPUUID;
    }
    namespace Responses {
      export type $200 = Components.Schemas.SummonerV4SummonerDTO;
    }
  }
  namespace SummonerV4GetBySummonerId {
    namespace Parameters {
      export type EncryptedSummonerId = string;
    }
    export interface PathParameters {
      encryptedSummonerId: Parameters.EncryptedSummonerId;
    }
    namespace Responses {
      export type $200 = Components.Schemas.SummonerV4SummonerDTO;
    }
  }
  namespace SummonerV4GetBySummonerName {
    namespace Parameters {
      export type SummonerName = string;
    }
    export interface PathParameters {
      summonerName: Parameters.SummonerName;
    }
    namespace Responses {
      export type $200 = Components.Schemas.SummonerV4SummonerDTO;
    }
  }
  namespace TftLeagueV1GetChallengerLeague {
    namespace Responses {
      export type $200 = Components.Schemas.TftLeagueV1LeagueListDTO;
    }
  }
  namespace TftLeagueV1GetGrandmasterLeague {
    namespace Responses {
      export type $200 = Components.Schemas.TftLeagueV1LeagueListDTO;
    }
  }
  namespace TftLeagueV1GetLeagueById {
    namespace Parameters {
      export type LeagueId = string;
    }
    export interface PathParameters {
      leagueId: Parameters.LeagueId;
    }
    namespace Responses {
      export type $200 = Components.Schemas.TftLeagueV1LeagueListDTO;
    }
  }
  namespace TftLeagueV1GetLeagueEntries {
    namespace Parameters {
      export type Division = "I" | "II" | "III" | "IV";
      export type Page = number; // int32
      export type Tier = "DIAMOND" | "PLATINUM" | "GOLD" | "SILVER" | "BRONZE" | "IRON";
    }
    export interface PathParameters {
      tier: Parameters.Tier;
      division: Parameters.Division;
    }
    export interface QueryParameters {
      page?: Parameters.Page; // int32
    }
    namespace Responses {
      export type $200 = Components.Schemas.TftLeagueV1LeagueEntryDTO[];
    }
  }
  namespace TftLeagueV1GetLeagueEntriesForSummoner {
    namespace Parameters {
      export type EncryptedSummonerId = string;
    }
    export interface PathParameters {
      encryptedSummonerId: Parameters.EncryptedSummonerId;
    }
    namespace Responses {
      export type $200 = Components.Schemas.TftLeagueV1LeagueEntryDTO[];
    }
  }
  namespace TftLeagueV1GetMasterLeague {
    namespace Responses {
      export type $200 = Components.Schemas.TftLeagueV1LeagueListDTO;
    }
  }
  namespace TftMatchV1GetMatch {
    namespace Parameters {
      export type MatchId = string;
    }
    export interface PathParameters {
      matchId: Parameters.MatchId;
    }
    namespace Responses {
      export type $200 = Components.Schemas.TftMatchV1MatchDto;
    }
  }
  namespace TftMatchV1GetMatchIdsByPUUID {
    namespace Parameters {
      export type Count = number; // int32
      export type Puuid = string;
    }
    export interface PathParameters {
      puuid: Parameters.Puuid;
    }
    export interface QueryParameters {
      count?: Parameters.Count; // int32
    }
    namespace Responses {
      export type $200 = string[];
    }
  }
  namespace TftSummonerV1GetByAccountId {
    namespace Parameters {
      export type EncryptedAccountId = string;
    }
    export interface PathParameters {
      encryptedAccountId: Parameters.EncryptedAccountId;
    }
    namespace Responses {
      export type $200 = Components.Schemas.TftSummonerV1SummonerDTO;
    }
  }
  namespace TftSummonerV1GetByPUUID {
    namespace Parameters {
      export type EncryptedPUUID = string;
    }
    export interface PathParameters {
      encryptedPUUID: Parameters.EncryptedPUUID;
    }
    namespace Responses {
      export type $200 = Components.Schemas.TftSummonerV1SummonerDTO;
    }
  }
  namespace TftSummonerV1GetBySummonerId {
    namespace Parameters {
      export type EncryptedSummonerId = string;
    }
    export interface PathParameters {
      encryptedSummonerId: Parameters.EncryptedSummonerId;
    }
    namespace Responses {
      export type $200 = Components.Schemas.TftSummonerV1SummonerDTO;
    }
  }
  namespace TftSummonerV1GetBySummonerName {
    namespace Parameters {
      export type SummonerName = string;
    }
    export interface PathParameters {
      summonerName: Parameters.SummonerName;
    }
    namespace Responses {
      export type $200 = Components.Schemas.TftSummonerV1SummonerDTO;
    }
  }
  namespace ThirdPartyCodeV4GetThirdPartyCodeBySummonerId {
    namespace Parameters {
      export type EncryptedSummonerId = string;
    }
    export interface PathParameters {
      encryptedSummonerId: Parameters.EncryptedSummonerId;
    }
    namespace Responses {
      export type $200 = string;
    }
  }
  namespace TournamentStubV4CreateTournamentCode {
    namespace Parameters {
      export type Count = number; // int32
      export type TournamentId = number; // int64
    }
    export interface QueryParameters {
      count?: Parameters.Count; // int32
      tournamentId: Parameters.TournamentId; // int64
    }
    export type RequestBody = Components.Schemas.TournamentStubV4TournamentCodeParameters;
    namespace Responses {
      export type $200 = string[];
    }
  }
  namespace TournamentStubV4GetLobbyEventsByCode {
    namespace Parameters {
      export type TournamentCode = string;
    }
    export interface PathParameters {
      tournamentCode: Parameters.TournamentCode;
    }
    namespace Responses {
      export type $200 = Components.Schemas.TournamentStubV4LobbyEventDTOWrapper;
    }
  }
  namespace TournamentStubV4RegisterProviderData {
    export type RequestBody = Components.Schemas.TournamentStubV4ProviderRegistrationParameters;
    namespace Responses {
      export type $200 = number; // int32
    }
  }
  namespace TournamentStubV4RegisterTournament {
    export type RequestBody = Components.Schemas.TournamentStubV4TournamentRegistrationParameters;
    namespace Responses {
      export type $200 = number; // int32
    }
  }
  namespace TournamentV4CreateTournamentCode {
    namespace Parameters {
      export type Count = number; // int32
      export type TournamentId = number; // int64
    }
    export interface QueryParameters {
      count?: Parameters.Count; // int32
      tournamentId: Parameters.TournamentId; // int64
    }
    export type RequestBody = Components.Schemas.TournamentV4TournamentCodeParameters;
    namespace Responses {
      export type $200 = string[];
    }
  }
  namespace TournamentV4GetLobbyEventsByCode {
    namespace Parameters {
      export type TournamentCode = string;
    }
    export interface PathParameters {
      tournamentCode: Parameters.TournamentCode;
    }
    namespace Responses {
      export type $200 = Components.Schemas.TournamentV4LobbyEventDTOWrapper;
    }
  }
  namespace TournamentV4GetTournamentCode {
    namespace Parameters {
      export type TournamentCode = string;
    }
    export interface PathParameters {
      tournamentCode: Parameters.TournamentCode;
    }
    namespace Responses {
      export type $200 = Components.Schemas.TournamentV4TournamentCodeDTO;
    }
  }
  namespace TournamentV4RegisterProviderData {
    export type RequestBody = Components.Schemas.TournamentV4ProviderRegistrationParameters;
    namespace Responses {
      export type $200 = number; // int32
    }
  }
  namespace TournamentV4RegisterTournament {
    export type RequestBody = Components.Schemas.TournamentV4TournamentRegistrationParameters;
    namespace Responses {
      export type $200 = number; // int32
    }
  }
  namespace TournamentV4UpdateCode {
    namespace Parameters {
      export type TournamentCode = string;
    }
    export interface PathParameters {
      tournamentCode: Parameters.TournamentCode;
    }
    export type RequestBody = Components.Schemas.TournamentV4TournamentCodeUpdateParameters;
  }
  namespace ValContentV1GetContent {
    namespace Parameters {
      export type Locale = string;
    }
    export interface QueryParameters {
      locale?: Parameters.Locale;
    }
    namespace Responses {
      export type $200 = Components.Schemas.ValContentV1ContentDto;
    }
  }
  namespace ValMatchV1GetMatch {
    namespace Parameters {
      export type MatchId = string;
    }
    export interface PathParameters {
      matchId: Parameters.MatchId;
    }
    namespace Responses {
      export type $200 = Components.Schemas.ValMatchV1MatchDto;
    }
  }
  namespace ValMatchV1GetMatchlist {
    namespace Parameters {
      export type Puuid = string;
    }
    export interface PathParameters {
      puuid: Parameters.Puuid;
    }
    namespace Responses {
      export type $200 = Components.Schemas.ValMatchV1MatchlistDto;
    }
  }
}
export interface OperationMethods {
  /**
   * account-v1.getByPuuid - Get account by puuid
   * 
   * Get account by puuid
   */
  'account-v1.getByPuuid'(
    parameters?: Parameters<Paths.AccountV1GetByPuuid.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AccountV1GetByPuuid.Responses.$200>
  /**
   * account-v1.getByRiotId - Get account by riot id
   * 
   * Get account by riot id
   */
  'account-v1.getByRiotId'(
    parameters?: Parameters<Paths.AccountV1GetByRiotId.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AccountV1GetByRiotId.Responses.$200>
  /**
   * account-v1.getActiveShard - Get active shard for a player
   * 
   * Get active shard for a player
   */
  'account-v1.getActiveShard'(
    parameters?: Parameters<Paths.AccountV1GetActiveShard.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AccountV1GetActiveShard.Responses.$200>
  /**
   * champion-mastery-v4.getAllChampionMasteries - Get all champion mastery entries sorted by number of champion points descending,
   * 
   * Get all champion mastery entries sorted by number of champion points descending,
   */
  'champion-mastery-v4.getAllChampionMasteries'(
    parameters?: Parameters<Paths.ChampionMasteryV4GetAllChampionMasteries.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ChampionMasteryV4GetAllChampionMasteries.Responses.$200>
  /**
   * champion-mastery-v4.getChampionMastery - Get a champion mastery by player ID and champion ID.
   * 
   * Get a champion mastery by player ID and champion ID.
   */
  'champion-mastery-v4.getChampionMastery'(
    parameters?: Parameters<Paths.ChampionMasteryV4GetChampionMastery.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ChampionMasteryV4GetChampionMastery.Responses.$200>
  /**
   * champion-mastery-v4.getChampionMasteryScore - Get a player's total champion mastery score, which is the sum of individual champion mastery levels.
   * 
   * Get a player's total champion mastery score, which is the sum of individual champion mastery levels.
   */
  'champion-mastery-v4.getChampionMasteryScore'(
    parameters?: Parameters<Paths.ChampionMasteryV4GetChampionMasteryScore.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ChampionMasteryV4GetChampionMasteryScore.Responses.$200>
  /**
   * champion-v3.getChampionInfo - Returns champion rotations, including free-to-play and low-level free-to-play rotations (REST)
   * 
   * Returns champion rotations, including free-to-play and low-level free-to-play rotations (REST)
   */
  'champion-v3.getChampionInfo'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ChampionV3GetChampionInfo.Responses.$200>
  /**
   * clash-v1.getPlayersBySummoner - Get players by summoner ID.
   * 
   * Get players by summoner ID.
   * ## Implementation Notes
   * This endpoint returns a list of active Clash players for a given summoner ID. If a summoner registers for multiple tournaments at the same time (e.g., Saturday and Sunday) then both registrations would appear in this list.
   */
  'clash-v1.getPlayersBySummoner'(
    parameters?: Parameters<Paths.ClashV1GetPlayersBySummoner.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ClashV1GetPlayersBySummoner.Responses.$200>
  /**
   * clash-v1.getTeamById - Get team by ID.
   * 
   * Get team by ID.
   */
  'clash-v1.getTeamById'(
    parameters?: Parameters<Paths.ClashV1GetTeamById.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ClashV1GetTeamById.Responses.$200>
  /**
   * clash-v1.getTournaments - Get all active or upcoming tournaments.
   * 
   * Get all active or upcoming tournaments.
   */
  'clash-v1.getTournaments'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ClashV1GetTournaments.Responses.$200>
  /**
   * clash-v1.getTournamentByTeam - Get tournament by team ID.
   * 
   * Get tournament by team ID.
   */
  'clash-v1.getTournamentByTeam'(
    parameters?: Parameters<Paths.ClashV1GetTournamentByTeam.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ClashV1GetTournamentByTeam.Responses.$200>
  /**
   * clash-v1.getTournamentById - Get tournament by ID.
   * 
   * Get tournament by ID.
   */
  'clash-v1.getTournamentById'(
    parameters?: Parameters<Paths.ClashV1GetTournamentById.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ClashV1GetTournamentById.Responses.$200>
  /**
   * league-exp-v4.getLeagueEntries - Get all the league entries.
   * 
   * Get all the league entries.
   */
  'league-exp-v4.getLeagueEntries'(
    parameters?: Parameters<Paths.LeagueExpV4GetLeagueEntries.PathParameters & Paths.LeagueExpV4GetLeagueEntries.QueryParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.LeagueExpV4GetLeagueEntries.Responses.$200>
  /**
   * league-v4.getChallengerLeague - Get the challenger league for given queue.
   * 
   * Get the challenger league for given queue.
   */
  'league-v4.getChallengerLeague'(
    parameters?: Parameters<Paths.LeagueV4GetChallengerLeague.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.LeagueV4GetChallengerLeague.Responses.$200>
  /**
   * league-v4.getLeagueEntriesForSummoner - Get league entries in all queues for a given summoner ID.
   * 
   * Get league entries in all queues for a given summoner ID.
   */
  'league-v4.getLeagueEntriesForSummoner'(
    parameters?: Parameters<Paths.LeagueV4GetLeagueEntriesForSummoner.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.LeagueV4GetLeagueEntriesForSummoner.Responses.$200>
  /**
   * league-v4.getLeagueEntries - Get all the league entries.
   * 
   * Get all the league entries.
   */
  'league-v4.getLeagueEntries'(
    parameters?: Parameters<Paths.LeagueV4GetLeagueEntries.PathParameters & Paths.LeagueV4GetLeagueEntries.QueryParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.LeagueV4GetLeagueEntries.Responses.$200>
  /**
   * league-v4.getGrandmasterLeague - Get the grandmaster league of a specific queue.
   * 
   * Get the grandmaster league of a specific queue.
   */
  'league-v4.getGrandmasterLeague'(
    parameters?: Parameters<Paths.LeagueV4GetGrandmasterLeague.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.LeagueV4GetGrandmasterLeague.Responses.$200>
  /**
   * league-v4.getLeagueById - Get league with given ID, including inactive entries.
   * 
   * Get league with given ID, including inactive entries.
   */
  'league-v4.getLeagueById'(
    parameters?: Parameters<Paths.LeagueV4GetLeagueById.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.LeagueV4GetLeagueById.Responses.$200>
  /**
   * league-v4.getMasterLeague - Get the master league for given queue.
   * 
   * Get the master league for given queue.
   */
  'league-v4.getMasterLeague'(
    parameters?: Parameters<Paths.LeagueV4GetMasterLeague.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.LeagueV4GetMasterLeague.Responses.$200>
  /**
   * lol-status-v3.getShardData - Get League of Legends status for the given shard.
   * 
   * Get League of Legends status for the given shard.
   * ## Rate Limit Notes
   * Requests to this API are not counted against the application Rate Limits.
   */
  'lol-status-v3.getShardData'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.LolStatusV3GetShardData.Responses.$200>
  /**
   * lor-ranked-v1.getLeaderboards - Get the players in Master tier.
   * 
   * Get the players in Master tier.
   */
  'lor-ranked-v1.getLeaderboards'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.LorRankedV1GetLeaderboards.Responses.$200>
  /**
   * match-v4.getMatchIdsByTournamentCode - Get match IDs by tournament code.
   * 
   * Get match IDs by tournament code.
   */
  'match-v4.getMatchIdsByTournamentCode'(
    parameters?: Parameters<Paths.MatchV4GetMatchIdsByTournamentCode.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.MatchV4GetMatchIdsByTournamentCode.Responses.$200>
  /**
   * match-v4.getMatch - Get match by match ID.
   * 
   * Get match by match ID.
   */
  'match-v4.getMatch'(
    parameters?: Parameters<Paths.MatchV4GetMatch.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.MatchV4GetMatch.Responses.$200>
  /**
   * match-v4.getMatchByTournamentCode - Get match by match ID and tournament code.
   * 
   * Get match by match ID and tournament code.
   */
  'match-v4.getMatchByTournamentCode'(
    parameters?: Parameters<Paths.MatchV4GetMatchByTournamentCode.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.MatchV4GetMatchByTournamentCode.Responses.$200>
  /**
   * match-v4.getMatchlist - Get matchlist for games played on given account ID and platform ID and filtered using given filter parameters, if any.
   * 
   * Get matchlist for games played on given account ID and platform ID and filtered using given filter parameters, if any.
   * ## Implementation Notes
   * A number of optional parameters are provided for filtering. It is up to the caller to ensure that the combination of filter parameters provided is valid for the requested account, otherwise, no matches may be returned.
   * 
   * If beginIndex is specified, but not endIndex, then endIndex defaults to beginIndex+100. If endIndex is specified, but not beginIndex, then beginIndex defaults to 0. If both are specified, then endIndex must be greater than beginIndex. The maximum range allowed is 100, otherwise a 400 error code is returned.
   * 
   * If beginTime is specified, but not endTime, then endTime defaults to the the current unix timestamp in milliseconds (the maximum time range limitation is not observed in this specific case). If endTime is specified, but not beginTime, then beginTime defaults to the start of the account's match history returning a 400 due to the maximum time range limitation. If both are specified, then endTime should be greater than beginTime. The maximum time range allowed is one week, otherwise a 400 error code is returned.
   */
  'match-v4.getMatchlist'(
    parameters?: Parameters<Paths.MatchV4GetMatchlist.PathParameters & Paths.MatchV4GetMatchlist.QueryParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.MatchV4GetMatchlist.Responses.$200>
  /**
   * match-v4.getMatchTimeline - Get match timeline by match ID.
   * 
   * Get match timeline by match ID.
   * ## Implementation Notes
   * Not all matches have timeline data.
   */
  'match-v4.getMatchTimeline'(
    parameters?: Parameters<Paths.MatchV4GetMatchTimeline.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.MatchV4GetMatchTimeline.Responses.$200>
  /**
   * spectator-v4.getCurrentGameInfoBySummoner - Get current game information for the given summoner ID.
   * 
   * Get current game information for the given summoner ID.
   */
  'spectator-v4.getCurrentGameInfoBySummoner'(
    parameters?: Parameters<Paths.SpectatorV4GetCurrentGameInfoBySummoner.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SpectatorV4GetCurrentGameInfoBySummoner.Responses.$200>
  /**
   * spectator-v4.getFeaturedGames - Get list of featured games.
   * 
   * Get list of featured games.
   */
  'spectator-v4.getFeaturedGames'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SpectatorV4GetFeaturedGames.Responses.$200>
  /**
   * summoner-v4.getByAccountId - Get a summoner by account ID.
   * 
   * Get a summoner by account ID.
   */
  'summoner-v4.getByAccountId'(
    parameters?: Parameters<Paths.SummonerV4GetByAccountId.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SummonerV4GetByAccountId.Responses.$200>
  /**
   * summoner-v4.getBySummonerName - Get a summoner by summoner name.
   * 
   * Get a summoner by summoner name.
   */
  'summoner-v4.getBySummonerName'(
    parameters?: Parameters<Paths.SummonerV4GetBySummonerName.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SummonerV4GetBySummonerName.Responses.$200>
  /**
   * summoner-v4.getByPUUID - Get a summoner by PUUID.
   * 
   * Get a summoner by PUUID.
   */
  'summoner-v4.getByPUUID'(
    parameters?: Parameters<Paths.SummonerV4GetByPUUID.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SummonerV4GetByPUUID.Responses.$200>
  /**
   * summoner-v4.getBySummonerId - Get a summoner by summoner ID.
   * 
   * Get a summoner by summoner ID.
   */
  'summoner-v4.getBySummonerId'(
    parameters?: Parameters<Paths.SummonerV4GetBySummonerId.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SummonerV4GetBySummonerId.Responses.$200>
  /**
   * tft-league-v1.getChallengerLeague - Get the challenger league.
   * 
   * Get the challenger league.
   */
  'tft-league-v1.getChallengerLeague'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TftLeagueV1GetChallengerLeague.Responses.$200>
  /**
   * tft-league-v1.getLeagueEntriesForSummoner - Get league entries for a given summoner ID.
   * 
   * Get league entries for a given summoner ID.
   */
  'tft-league-v1.getLeagueEntriesForSummoner'(
    parameters?: Parameters<Paths.TftLeagueV1GetLeagueEntriesForSummoner.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TftLeagueV1GetLeagueEntriesForSummoner.Responses.$200>
  /**
   * tft-league-v1.getLeagueEntries - Get all the league entries.
   * 
   * Get all the league entries.
   */
  'tft-league-v1.getLeagueEntries'(
    parameters?: Parameters<Paths.TftLeagueV1GetLeagueEntries.PathParameters & Paths.TftLeagueV1GetLeagueEntries.QueryParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TftLeagueV1GetLeagueEntries.Responses.$200>
  /**
   * tft-league-v1.getGrandmasterLeague - Get the grandmaster league.
   * 
   * Get the grandmaster league.
   */
  'tft-league-v1.getGrandmasterLeague'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TftLeagueV1GetGrandmasterLeague.Responses.$200>
  /**
   * tft-league-v1.getLeagueById - Get league with given ID, including inactive entries.
   * 
   * Get league with given ID, including inactive entries.
   */
  'tft-league-v1.getLeagueById'(
    parameters?: Parameters<Paths.TftLeagueV1GetLeagueById.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TftLeagueV1GetLeagueById.Responses.$200>
  /**
   * tft-league-v1.getMasterLeague - Get the master league.
   * 
   * Get the master league.
   */
  'tft-league-v1.getMasterLeague'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TftLeagueV1GetMasterLeague.Responses.$200>
  /**
   * tft-match-v1.getMatchIdsByPUUID - Get a list of match ids by PUUID.
   * 
   * Get a list of match ids by PUUID.
   */
  'tft-match-v1.getMatchIdsByPUUID'(
    parameters?: Parameters<Paths.TftMatchV1GetMatchIdsByPUUID.PathParameters & Paths.TftMatchV1GetMatchIdsByPUUID.QueryParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TftMatchV1GetMatchIdsByPUUID.Responses.$200>
  /**
   * tft-match-v1.getMatch - Get a match by match id.
   * 
   * Get a match by match id.
   */
  'tft-match-v1.getMatch'(
    parameters?: Parameters<Paths.TftMatchV1GetMatch.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TftMatchV1GetMatch.Responses.$200>
  /**
   * tft-summoner-v1.getByAccountId - Get a summoner by account ID.
   * 
   * Get a summoner by account ID.
   */
  'tft-summoner-v1.getByAccountId'(
    parameters?: Parameters<Paths.TftSummonerV1GetByAccountId.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TftSummonerV1GetByAccountId.Responses.$200>
  /**
   * tft-summoner-v1.getBySummonerName - Get a summoner by summoner name.
   * 
   * Get a summoner by summoner name.
   */
  'tft-summoner-v1.getBySummonerName'(
    parameters?: Parameters<Paths.TftSummonerV1GetBySummonerName.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TftSummonerV1GetBySummonerName.Responses.$200>
  /**
   * tft-summoner-v1.getByPUUID - Get a summoner by PUUID.
   * 
   * Get a summoner by PUUID.
   */
  'tft-summoner-v1.getByPUUID'(
    parameters?: Parameters<Paths.TftSummonerV1GetByPUUID.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TftSummonerV1GetByPUUID.Responses.$200>
  /**
   * tft-summoner-v1.getBySummonerId - Get a summoner by summoner ID.
   * 
   * Get a summoner by summoner ID.
   */
  'tft-summoner-v1.getBySummonerId'(
    parameters?: Parameters<Paths.TftSummonerV1GetBySummonerId.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TftSummonerV1GetBySummonerId.Responses.$200>
  /**
   * third-party-code-v4.getThirdPartyCodeBySummonerId - Get third party code for a given summoner ID.
   * 
   * Get third party code for a given summoner ID.
   */
  'third-party-code-v4.getThirdPartyCodeBySummonerId'(
    parameters?: Parameters<Paths.ThirdPartyCodeV4GetThirdPartyCodeBySummonerId.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ThirdPartyCodeV4GetThirdPartyCodeBySummonerId.Responses.$200>
  /**
   * tournament-stub-v4.createTournamentCode - Create a mock tournament code for the given tournament.
   * 
   * Create a mock tournament code for the given tournament.
   */
  'tournament-stub-v4.createTournamentCode'(
    parameters?: Parameters<Paths.TournamentStubV4CreateTournamentCode.QueryParameters>,
    data?: Paths.TournamentStubV4CreateTournamentCode.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TournamentStubV4CreateTournamentCode.Responses.$200>
  /**
   * tournament-stub-v4.getLobbyEventsByCode - Gets a mock list of lobby events by tournament code.
   * 
   * Gets a mock list of lobby events by tournament code.
   */
  'tournament-stub-v4.getLobbyEventsByCode'(
    parameters?: Parameters<Paths.TournamentStubV4GetLobbyEventsByCode.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TournamentStubV4GetLobbyEventsByCode.Responses.$200>
  /**
   * tournament-stub-v4.registerProviderData - Creates a mock tournament provider and returns its ID.
   * 
   * Creates a mock tournament provider and returns its ID.
   * ## Implementation Notes
   * Providers will need to call this endpoint first to register their callback URL and their API key with the tournament system before any other tournament provider endpoints will work.
   */
  'tournament-stub-v4.registerProviderData'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.TournamentStubV4RegisterProviderData.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TournamentStubV4RegisterProviderData.Responses.$200>
  /**
   * tournament-stub-v4.registerTournament - Creates a mock tournament and returns its ID.
   * 
   * Creates a mock tournament and returns its ID.
   */
  'tournament-stub-v4.registerTournament'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.TournamentStubV4RegisterTournament.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TournamentStubV4RegisterTournament.Responses.$200>
  /**
   * tournament-v4.createTournamentCode - Create a tournament code for the given tournament.
   * 
   * Create a tournament code for the given tournament.
   */
  'tournament-v4.createTournamentCode'(
    parameters?: Parameters<Paths.TournamentV4CreateTournamentCode.QueryParameters>,
    data?: Paths.TournamentV4CreateTournamentCode.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TournamentV4CreateTournamentCode.Responses.$200>
  /**
   * tournament-v4.getTournamentCode - Returns the tournament code DTO associated with a tournament code string.
   * 
   * Returns the tournament code DTO associated with a tournament code string.
   */
  'tournament-v4.getTournamentCode'(
    parameters?: Parameters<Paths.TournamentV4GetTournamentCode.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TournamentV4GetTournamentCode.Responses.$200>
  /**
   * tournament-v4.updateCode - Update the pick type, map, spectator type, or allowed summoners for a code.
   * 
   * Update the pick type, map, spectator type, or allowed summoners for a code.
   */
  'tournament-v4.updateCode'(
    parameters?: Parameters<Paths.TournamentV4UpdateCode.PathParameters>,
    data?: Paths.TournamentV4UpdateCode.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * tournament-v4.getLobbyEventsByCode - Gets a list of lobby events by tournament code.
   * 
   * Gets a list of lobby events by tournament code.
   */
  'tournament-v4.getLobbyEventsByCode'(
    parameters?: Parameters<Paths.TournamentV4GetLobbyEventsByCode.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TournamentV4GetLobbyEventsByCode.Responses.$200>
  /**
   * tournament-v4.registerProviderData - Creates a tournament provider and returns its ID.
   * 
   * Creates a tournament provider and returns its ID.
   * ## Implementation Notes
   * Providers will need to call this endpoint first to register their callback URL and their API key with the tournament system before any other tournament provider endpoints will work.
   */
  'tournament-v4.registerProviderData'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.TournamentV4RegisterProviderData.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TournamentV4RegisterProviderData.Responses.$200>
  /**
   * tournament-v4.registerTournament - Creates a tournament and returns its ID.
   * 
   * Creates a tournament and returns its ID.
   */
  'tournament-v4.registerTournament'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.TournamentV4RegisterTournament.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TournamentV4RegisterTournament.Responses.$200>
  /**
   * val-content-v1.getContent - Get content optionally filtered by locale
   * 
   * Get content optionally filtered by locale
   */
  'val-content-v1.getContent'(
    parameters?: Parameters<Paths.ValContentV1GetContent.QueryParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ValContentV1GetContent.Responses.$200>
  /**
   * val-match-v1.getMatch - Get match by id
   * 
   * Get match by id
   */
  'val-match-v1.getMatch'(
    parameters?: Parameters<Paths.ValMatchV1GetMatch.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ValMatchV1GetMatch.Responses.$200>
  /**
   * val-match-v1.getMatchlist - Get matchlist for games played by puuid
   * 
   * Get matchlist for games played by puuid
   */
  'val-match-v1.getMatchlist'(
    parameters?: Parameters<Paths.ValMatchV1GetMatchlist.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ValMatchV1GetMatchlist.Responses.$200>
}

export interface PathsDictionary {
  ['/riot/account/v1/accounts/by-puuid/{puuid}']: {
    /**
     * account-v1.getByPuuid - Get account by puuid
     * 
     * Get account by puuid
     */
    'get'(
      parameters?: Parameters<Paths.AccountV1GetByPuuid.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AccountV1GetByPuuid.Responses.$200>
  }
  ['/riot/account/v1/accounts/by-riot-id/{gameName}/{tagLine}']: {
    /**
     * account-v1.getByRiotId - Get account by riot id
     * 
     * Get account by riot id
     */
    'get'(
      parameters?: Parameters<Paths.AccountV1GetByRiotId.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AccountV1GetByRiotId.Responses.$200>
  }
  ['/riot/account/v1/active-shards/by-game/{game}/by-puuid/{puuid}']: {
    /**
     * account-v1.getActiveShard - Get active shard for a player
     * 
     * Get active shard for a player
     */
    'get'(
      parameters?: Parameters<Paths.AccountV1GetActiveShard.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AccountV1GetActiveShard.Responses.$200>
  }
  ['/lol/champion-mastery/v4/champion-masteries/by-summoner/{encryptedSummonerId}']: {
    /**
     * champion-mastery-v4.getAllChampionMasteries - Get all champion mastery entries sorted by number of champion points descending,
     * 
     * Get all champion mastery entries sorted by number of champion points descending,
     */
    'get'(
      parameters?: Parameters<Paths.ChampionMasteryV4GetAllChampionMasteries.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ChampionMasteryV4GetAllChampionMasteries.Responses.$200>
  }
  ['/lol/champion-mastery/v4/champion-masteries/by-summoner/{encryptedSummonerId}/by-champion/{championId}']: {
    /**
     * champion-mastery-v4.getChampionMastery - Get a champion mastery by player ID and champion ID.
     * 
     * Get a champion mastery by player ID and champion ID.
     */
    'get'(
      parameters?: Parameters<Paths.ChampionMasteryV4GetChampionMastery.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ChampionMasteryV4GetChampionMastery.Responses.$200>
  }
  ['/lol/champion-mastery/v4/scores/by-summoner/{encryptedSummonerId}']: {
    /**
     * champion-mastery-v4.getChampionMasteryScore - Get a player's total champion mastery score, which is the sum of individual champion mastery levels.
     * 
     * Get a player's total champion mastery score, which is the sum of individual champion mastery levels.
     */
    'get'(
      parameters?: Parameters<Paths.ChampionMasteryV4GetChampionMasteryScore.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ChampionMasteryV4GetChampionMasteryScore.Responses.$200>
  }
  ['/lol/platform/v3/champion-rotations']: {
    /**
     * champion-v3.getChampionInfo - Returns champion rotations, including free-to-play and low-level free-to-play rotations (REST)
     * 
     * Returns champion rotations, including free-to-play and low-level free-to-play rotations (REST)
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ChampionV3GetChampionInfo.Responses.$200>
  }
  ['/lol/clash/v1/players/by-summoner/{summonerId}']: {
    /**
     * clash-v1.getPlayersBySummoner - Get players by summoner ID.
     * 
     * Get players by summoner ID.
     * ## Implementation Notes
     * This endpoint returns a list of active Clash players for a given summoner ID. If a summoner registers for multiple tournaments at the same time (e.g., Saturday and Sunday) then both registrations would appear in this list.
     */
    'get'(
      parameters?: Parameters<Paths.ClashV1GetPlayersBySummoner.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ClashV1GetPlayersBySummoner.Responses.$200>
  }
  ['/lol/clash/v1/teams/{teamId}']: {
    /**
     * clash-v1.getTeamById - Get team by ID.
     * 
     * Get team by ID.
     */
    'get'(
      parameters?: Parameters<Paths.ClashV1GetTeamById.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ClashV1GetTeamById.Responses.$200>
  }
  ['/lol/clash/v1/tournaments']: {
    /**
     * clash-v1.getTournaments - Get all active or upcoming tournaments.
     * 
     * Get all active or upcoming tournaments.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ClashV1GetTournaments.Responses.$200>
  }
  ['/lol/clash/v1/tournaments/by-team/{teamId}']: {
    /**
     * clash-v1.getTournamentByTeam - Get tournament by team ID.
     * 
     * Get tournament by team ID.
     */
    'get'(
      parameters?: Parameters<Paths.ClashV1GetTournamentByTeam.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ClashV1GetTournamentByTeam.Responses.$200>
  }
  ['/lol/clash/v1/tournaments/{tournamentId}']: {
    /**
     * clash-v1.getTournamentById - Get tournament by ID.
     * 
     * Get tournament by ID.
     */
    'get'(
      parameters?: Parameters<Paths.ClashV1GetTournamentById.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ClashV1GetTournamentById.Responses.$200>
  }
  ['/lol/league-exp/v4/entries/{queue}/{tier}/{division}']: {
    /**
     * league-exp-v4.getLeagueEntries - Get all the league entries.
     * 
     * Get all the league entries.
     */
    'get'(
      parameters?: Parameters<Paths.LeagueExpV4GetLeagueEntries.PathParameters & Paths.LeagueExpV4GetLeagueEntries.QueryParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.LeagueExpV4GetLeagueEntries.Responses.$200>
  }
  ['/lol/league/v4/challengerleagues/by-queue/{queue}']: {
    /**
     * league-v4.getChallengerLeague - Get the challenger league for given queue.
     * 
     * Get the challenger league for given queue.
     */
    'get'(
      parameters?: Parameters<Paths.LeagueV4GetChallengerLeague.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.LeagueV4GetChallengerLeague.Responses.$200>
  }
  ['/lol/league/v4/entries/by-summoner/{encryptedSummonerId}']: {
    /**
     * league-v4.getLeagueEntriesForSummoner - Get league entries in all queues for a given summoner ID.
     * 
     * Get league entries in all queues for a given summoner ID.
     */
    'get'(
      parameters?: Parameters<Paths.LeagueV4GetLeagueEntriesForSummoner.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.LeagueV4GetLeagueEntriesForSummoner.Responses.$200>
  }
  ['/lol/league/v4/entries/{queue}/{tier}/{division}']: {
    /**
     * league-v4.getLeagueEntries - Get all the league entries.
     * 
     * Get all the league entries.
     */
    'get'(
      parameters?: Parameters<Paths.LeagueV4GetLeagueEntries.PathParameters & Paths.LeagueV4GetLeagueEntries.QueryParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.LeagueV4GetLeagueEntries.Responses.$200>
  }
  ['/lol/league/v4/grandmasterleagues/by-queue/{queue}']: {
    /**
     * league-v4.getGrandmasterLeague - Get the grandmaster league of a specific queue.
     * 
     * Get the grandmaster league of a specific queue.
     */
    'get'(
      parameters?: Parameters<Paths.LeagueV4GetGrandmasterLeague.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.LeagueV4GetGrandmasterLeague.Responses.$200>
  }
  ['/lol/league/v4/leagues/{leagueId}']: {
    /**
     * league-v4.getLeagueById - Get league with given ID, including inactive entries.
     * 
     * Get league with given ID, including inactive entries.
     */
    'get'(
      parameters?: Parameters<Paths.LeagueV4GetLeagueById.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.LeagueV4GetLeagueById.Responses.$200>
  }
  ['/lol/league/v4/masterleagues/by-queue/{queue}']: {
    /**
     * league-v4.getMasterLeague - Get the master league for given queue.
     * 
     * Get the master league for given queue.
     */
    'get'(
      parameters?: Parameters<Paths.LeagueV4GetMasterLeague.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.LeagueV4GetMasterLeague.Responses.$200>
  }
  ['/lol/status/v3/shard-data']: {
    /**
     * lol-status-v3.getShardData - Get League of Legends status for the given shard.
     * 
     * Get League of Legends status for the given shard.
     * ## Rate Limit Notes
     * Requests to this API are not counted against the application Rate Limits.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.LolStatusV3GetShardData.Responses.$200>
  }
  ['/lor/ranked/v1/leaderboards']: {
    /**
     * lor-ranked-v1.getLeaderboards - Get the players in Master tier.
     * 
     * Get the players in Master tier.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.LorRankedV1GetLeaderboards.Responses.$200>
  }
  ['/lol/match/v4/matches/by-tournament-code/{tournamentCode}/ids']: {
    /**
     * match-v4.getMatchIdsByTournamentCode - Get match IDs by tournament code.
     * 
     * Get match IDs by tournament code.
     */
    'get'(
      parameters?: Parameters<Paths.MatchV4GetMatchIdsByTournamentCode.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.MatchV4GetMatchIdsByTournamentCode.Responses.$200>
  }
  ['/lol/match/v4/matches/{matchId}']: {
    /**
     * match-v4.getMatch - Get match by match ID.
     * 
     * Get match by match ID.
     */
    'get'(
      parameters?: Parameters<Paths.MatchV4GetMatch.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.MatchV4GetMatch.Responses.$200>
  }
  ['/lol/match/v4/matches/{matchId}/by-tournament-code/{tournamentCode}']: {
    /**
     * match-v4.getMatchByTournamentCode - Get match by match ID and tournament code.
     * 
     * Get match by match ID and tournament code.
     */
    'get'(
      parameters?: Parameters<Paths.MatchV4GetMatchByTournamentCode.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.MatchV4GetMatchByTournamentCode.Responses.$200>
  }
  ['/lol/match/v4/matchlists/by-account/{encryptedAccountId}']: {
    /**
     * match-v4.getMatchlist - Get matchlist for games played on given account ID and platform ID and filtered using given filter parameters, if any.
     * 
     * Get matchlist for games played on given account ID and platform ID and filtered using given filter parameters, if any.
     * ## Implementation Notes
     * A number of optional parameters are provided for filtering. It is up to the caller to ensure that the combination of filter parameters provided is valid for the requested account, otherwise, no matches may be returned.
     * 
     * If beginIndex is specified, but not endIndex, then endIndex defaults to beginIndex+100. If endIndex is specified, but not beginIndex, then beginIndex defaults to 0. If both are specified, then endIndex must be greater than beginIndex. The maximum range allowed is 100, otherwise a 400 error code is returned.
     * 
     * If beginTime is specified, but not endTime, then endTime defaults to the the current unix timestamp in milliseconds (the maximum time range limitation is not observed in this specific case). If endTime is specified, but not beginTime, then beginTime defaults to the start of the account's match history returning a 400 due to the maximum time range limitation. If both are specified, then endTime should be greater than beginTime. The maximum time range allowed is one week, otherwise a 400 error code is returned.
     */
    'get'(
      parameters?: Parameters<Paths.MatchV4GetMatchlist.PathParameters & Paths.MatchV4GetMatchlist.QueryParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.MatchV4GetMatchlist.Responses.$200>
  }
  ['/lol/match/v4/timelines/by-match/{matchId}']: {
    /**
     * match-v4.getMatchTimeline - Get match timeline by match ID.
     * 
     * Get match timeline by match ID.
     * ## Implementation Notes
     * Not all matches have timeline data.
     */
    'get'(
      parameters?: Parameters<Paths.MatchV4GetMatchTimeline.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.MatchV4GetMatchTimeline.Responses.$200>
  }
  ['/lol/spectator/v4/active-games/by-summoner/{encryptedSummonerId}']: {
    /**
     * spectator-v4.getCurrentGameInfoBySummoner - Get current game information for the given summoner ID.
     * 
     * Get current game information for the given summoner ID.
     */
    'get'(
      parameters?: Parameters<Paths.SpectatorV4GetCurrentGameInfoBySummoner.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SpectatorV4GetCurrentGameInfoBySummoner.Responses.$200>
  }
  ['/lol/spectator/v4/featured-games']: {
    /**
     * spectator-v4.getFeaturedGames - Get list of featured games.
     * 
     * Get list of featured games.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SpectatorV4GetFeaturedGames.Responses.$200>
  }
  ['/lol/summoner/v4/summoners/by-account/{encryptedAccountId}']: {
    /**
     * summoner-v4.getByAccountId - Get a summoner by account ID.
     * 
     * Get a summoner by account ID.
     */
    'get'(
      parameters?: Parameters<Paths.SummonerV4GetByAccountId.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SummonerV4GetByAccountId.Responses.$200>
  }
  ['/lol/summoner/v4/summoners/by-name/{summonerName}']: {
    /**
     * summoner-v4.getBySummonerName - Get a summoner by summoner name.
     * 
     * Get a summoner by summoner name.
     */
    'get'(
      parameters?: Parameters<Paths.SummonerV4GetBySummonerName.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SummonerV4GetBySummonerName.Responses.$200>
  }
  ['/lol/summoner/v4/summoners/by-puuid/{encryptedPUUID}']: {
    /**
     * summoner-v4.getByPUUID - Get a summoner by PUUID.
     * 
     * Get a summoner by PUUID.
     */
    'get'(
      parameters?: Parameters<Paths.SummonerV4GetByPUUID.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SummonerV4GetByPUUID.Responses.$200>
  }
  ['/lol/summoner/v4/summoners/{encryptedSummonerId}']: {
    /**
     * summoner-v4.getBySummonerId - Get a summoner by summoner ID.
     * 
     * Get a summoner by summoner ID.
     */
    'get'(
      parameters?: Parameters<Paths.SummonerV4GetBySummonerId.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SummonerV4GetBySummonerId.Responses.$200>
  }
  ['/tft/league/v1/challenger']: {
    /**
     * tft-league-v1.getChallengerLeague - Get the challenger league.
     * 
     * Get the challenger league.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TftLeagueV1GetChallengerLeague.Responses.$200>
  }
  ['/tft/league/v1/entries/by-summoner/{encryptedSummonerId}']: {
    /**
     * tft-league-v1.getLeagueEntriesForSummoner - Get league entries for a given summoner ID.
     * 
     * Get league entries for a given summoner ID.
     */
    'get'(
      parameters?: Parameters<Paths.TftLeagueV1GetLeagueEntriesForSummoner.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TftLeagueV1GetLeagueEntriesForSummoner.Responses.$200>
  }
  ['/tft/league/v1/entries/{tier}/{division}']: {
    /**
     * tft-league-v1.getLeagueEntries - Get all the league entries.
     * 
     * Get all the league entries.
     */
    'get'(
      parameters?: Parameters<Paths.TftLeagueV1GetLeagueEntries.PathParameters & Paths.TftLeagueV1GetLeagueEntries.QueryParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TftLeagueV1GetLeagueEntries.Responses.$200>
  }
  ['/tft/league/v1/grandmaster']: {
    /**
     * tft-league-v1.getGrandmasterLeague - Get the grandmaster league.
     * 
     * Get the grandmaster league.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TftLeagueV1GetGrandmasterLeague.Responses.$200>
  }
  ['/tft/league/v1/leagues/{leagueId}']: {
    /**
     * tft-league-v1.getLeagueById - Get league with given ID, including inactive entries.
     * 
     * Get league with given ID, including inactive entries.
     */
    'get'(
      parameters?: Parameters<Paths.TftLeagueV1GetLeagueById.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TftLeagueV1GetLeagueById.Responses.$200>
  }
  ['/tft/league/v1/master']: {
    /**
     * tft-league-v1.getMasterLeague - Get the master league.
     * 
     * Get the master league.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TftLeagueV1GetMasterLeague.Responses.$200>
  }
  ['/tft/match/v1/matches/by-puuid/{puuid}/ids']: {
    /**
     * tft-match-v1.getMatchIdsByPUUID - Get a list of match ids by PUUID.
     * 
     * Get a list of match ids by PUUID.
     */
    'get'(
      parameters?: Parameters<Paths.TftMatchV1GetMatchIdsByPUUID.PathParameters & Paths.TftMatchV1GetMatchIdsByPUUID.QueryParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TftMatchV1GetMatchIdsByPUUID.Responses.$200>
  }
  ['/tft/match/v1/matches/{matchId}']: {
    /**
     * tft-match-v1.getMatch - Get a match by match id.
     * 
     * Get a match by match id.
     */
    'get'(
      parameters?: Parameters<Paths.TftMatchV1GetMatch.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TftMatchV1GetMatch.Responses.$200>
  }
  ['/tft/summoner/v1/summoners/by-account/{encryptedAccountId}']: {
    /**
     * tft-summoner-v1.getByAccountId - Get a summoner by account ID.
     * 
     * Get a summoner by account ID.
     */
    'get'(
      parameters?: Parameters<Paths.TftSummonerV1GetByAccountId.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TftSummonerV1GetByAccountId.Responses.$200>
  }
  ['/tft/summoner/v1/summoners/by-name/{summonerName}']: {
    /**
     * tft-summoner-v1.getBySummonerName - Get a summoner by summoner name.
     * 
     * Get a summoner by summoner name.
     */
    'get'(
      parameters?: Parameters<Paths.TftSummonerV1GetBySummonerName.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TftSummonerV1GetBySummonerName.Responses.$200>
  }
  ['/tft/summoner/v1/summoners/by-puuid/{encryptedPUUID}']: {
    /**
     * tft-summoner-v1.getByPUUID - Get a summoner by PUUID.
     * 
     * Get a summoner by PUUID.
     */
    'get'(
      parameters?: Parameters<Paths.TftSummonerV1GetByPUUID.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TftSummonerV1GetByPUUID.Responses.$200>
  }
  ['/tft/summoner/v1/summoners/{encryptedSummonerId}']: {
    /**
     * tft-summoner-v1.getBySummonerId - Get a summoner by summoner ID.
     * 
     * Get a summoner by summoner ID.
     */
    'get'(
      parameters?: Parameters<Paths.TftSummonerV1GetBySummonerId.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TftSummonerV1GetBySummonerId.Responses.$200>
  }
  ['/lol/platform/v4/third-party-code/by-summoner/{encryptedSummonerId}']: {
    /**
     * third-party-code-v4.getThirdPartyCodeBySummonerId - Get third party code for a given summoner ID.
     * 
     * Get third party code for a given summoner ID.
     */
    'get'(
      parameters?: Parameters<Paths.ThirdPartyCodeV4GetThirdPartyCodeBySummonerId.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ThirdPartyCodeV4GetThirdPartyCodeBySummonerId.Responses.$200>
  }
  ['/lol/tournament-stub/v4/codes']: {
    /**
     * tournament-stub-v4.createTournamentCode - Create a mock tournament code for the given tournament.
     * 
     * Create a mock tournament code for the given tournament.
     */
    'post'(
      parameters?: Parameters<Paths.TournamentStubV4CreateTournamentCode.QueryParameters>,
      data?: Paths.TournamentStubV4CreateTournamentCode.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TournamentStubV4CreateTournamentCode.Responses.$200>
  }
  ['/lol/tournament-stub/v4/lobby-events/by-code/{tournamentCode}']: {
    /**
     * tournament-stub-v4.getLobbyEventsByCode - Gets a mock list of lobby events by tournament code.
     * 
     * Gets a mock list of lobby events by tournament code.
     */
    'get'(
      parameters?: Parameters<Paths.TournamentStubV4GetLobbyEventsByCode.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TournamentStubV4GetLobbyEventsByCode.Responses.$200>
  }
  ['/lol/tournament-stub/v4/providers']: {
    /**
     * tournament-stub-v4.registerProviderData - Creates a mock tournament provider and returns its ID.
     * 
     * Creates a mock tournament provider and returns its ID.
     * ## Implementation Notes
     * Providers will need to call this endpoint first to register their callback URL and their API key with the tournament system before any other tournament provider endpoints will work.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.TournamentStubV4RegisterProviderData.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TournamentStubV4RegisterProviderData.Responses.$200>
  }
  ['/lol/tournament-stub/v4/tournaments']: {
    /**
     * tournament-stub-v4.registerTournament - Creates a mock tournament and returns its ID.
     * 
     * Creates a mock tournament and returns its ID.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.TournamentStubV4RegisterTournament.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TournamentStubV4RegisterTournament.Responses.$200>
  }
  ['/lol/tournament/v4/codes']: {
    /**
     * tournament-v4.createTournamentCode - Create a tournament code for the given tournament.
     * 
     * Create a tournament code for the given tournament.
     */
    'post'(
      parameters?: Parameters<Paths.TournamentV4CreateTournamentCode.QueryParameters>,
      data?: Paths.TournamentV4CreateTournamentCode.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TournamentV4CreateTournamentCode.Responses.$200>
  }
  ['/lol/tournament/v4/codes/{tournamentCode}']: {
    /**
     * tournament-v4.getTournamentCode - Returns the tournament code DTO associated with a tournament code string.
     * 
     * Returns the tournament code DTO associated with a tournament code string.
     */
    'get'(
      parameters?: Parameters<Paths.TournamentV4GetTournamentCode.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TournamentV4GetTournamentCode.Responses.$200>
    /**
     * tournament-v4.updateCode - Update the pick type, map, spectator type, or allowed summoners for a code.
     * 
     * Update the pick type, map, spectator type, or allowed summoners for a code.
     */
    'put'(
      parameters?: Parameters<Paths.TournamentV4UpdateCode.PathParameters>,
      data?: Paths.TournamentV4UpdateCode.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/lol/tournament/v4/lobby-events/by-code/{tournamentCode}']: {
    /**
     * tournament-v4.getLobbyEventsByCode - Gets a list of lobby events by tournament code.
     * 
     * Gets a list of lobby events by tournament code.
     */
    'get'(
      parameters?: Parameters<Paths.TournamentV4GetLobbyEventsByCode.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TournamentV4GetLobbyEventsByCode.Responses.$200>
  }
  ['/lol/tournament/v4/providers']: {
    /**
     * tournament-v4.registerProviderData - Creates a tournament provider and returns its ID.
     * 
     * Creates a tournament provider and returns its ID.
     * ## Implementation Notes
     * Providers will need to call this endpoint first to register their callback URL and their API key with the tournament system before any other tournament provider endpoints will work.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.TournamentV4RegisterProviderData.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TournamentV4RegisterProviderData.Responses.$200>
  }
  ['/lol/tournament/v4/tournaments']: {
    /**
     * tournament-v4.registerTournament - Creates a tournament and returns its ID.
     * 
     * Creates a tournament and returns its ID.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.TournamentV4RegisterTournament.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TournamentV4RegisterTournament.Responses.$200>
  }
  ['/val/content/v1/contents']: {
    /**
     * val-content-v1.getContent - Get content optionally filtered by locale
     * 
     * Get content optionally filtered by locale
     */
    'get'(
      parameters?: Parameters<Paths.ValContentV1GetContent.QueryParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ValContentV1GetContent.Responses.$200>
  }
  ['/val/match/v1/matches/{matchId}']: {
    /**
     * val-match-v1.getMatch - Get match by id
     * 
     * Get match by id
     */
    'get'(
      parameters?: Parameters<Paths.ValMatchV1GetMatch.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ValMatchV1GetMatch.Responses.$200>
  }
  ['/val/match/v1/matchlists/by-puuid/{puuid}']: {
    /**
     * val-match-v1.getMatchlist - Get matchlist for games played by puuid
     * 
     * Get matchlist for games played by puuid
     */
    'get'(
      parameters?: Parameters<Paths.ValMatchV1GetMatchlist.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ValMatchV1GetMatchlist.Responses.$200>
  }
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>