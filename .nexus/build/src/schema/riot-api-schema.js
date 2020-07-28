"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSON = exports.Win = exports.Type = exports.Tier3 = exports.Tier2 = exports.Tier = exports.SpectatorType2 = exports.SpectatorType = exports.Role2 = exports.Role = exports.Region2 = exports.Region = exports.Queue2 = exports.Queue = exports.Position = exports.PickType2 = exports.PickType = exports.MapType2 = exports.MapType = exports.Lane = exports.HighestAchievedSeasonTier = exports.GameType = exports.GameMode = exports.Game = exports.Division2 = exports.Division = exports.Tournamentv4TournamentRegistrationParametersInput = exports.Tournamentv4TournamentCodeUpdateParametersInput = exports.Tournamentv4TournamentCodeParametersInput = exports.Tournamentv4ProviderRegistrationParametersInput = exports.Tournamentstubv4TournamentRegistrationParametersInput = exports.Tournamentstubv4TournamentCodeParametersInput = exports.Tournamentstubv4ProviderRegistrationParametersInput = exports.Valmatchv1Team = exports.Valmatchv1RoundResult = exports.Valmatchv1PlayerStats = exports.Valmatchv1PlayerLocations = exports.Valmatchv1Player = exports.Valmatchv1Matchlist = exports.Valmatchv1MatchReference = exports.Valmatchv1MatchInfo = exports.Valmatchv1Match = exports.Valmatchv1Location = exports.Valmatchv1Kill = exports.Valmatchv1FinishingDamage = exports.Valmatchv1Economy = exports.Valmatchv1Damage = exports.Valmatchv1Ability = exports.Valcontentv1LocalizedNames = exports.Valcontentv1ContentItem = exports.Valcontentv1Content = exports.Tournamentv4TournamentCode = exports.Tournamentv4LobbyEventDTOWrapper = exports.Tournamentv4LobbyEvent = exports.Tournamentstubv4LobbyEventDTOWrapper = exports.Tournamentstubv4LobbyEvent = exports.Tftsummonerv1Summoner = exports.Tftmatchv1Unit = exports.Tftmatchv1Trait = exports.Tftmatchv1Participant = exports.Tftmatchv1Metadata = exports.Tftmatchv1Match = exports.Tftmatchv1Info = exports.Tftmatchv1Companion = exports.Tftleaguev1MiniSeries = exports.Tftleaguev1LeagueList = exports.Tftleaguev1LeagueItem = exports.Tftleaguev1LeagueEntry = exports.Summonerv4Summoner = exports.Spectatorv4Perks = exports.Spectatorv4Participant = exports.Spectatorv4Observer = exports.Spectatorv4GameCustomizationObject = exports.Spectatorv4FeaturedGames = exports.Spectatorv4FeaturedGameInfo = exports.Spectatorv4CurrentGameParticipant = exports.Spectatorv4CurrentGameInfo = exports.Spectatorv4BannedChampion = exports.Matchv4TeamStats = exports.Matchv4TeamBans = exports.Matchv4Rune = exports.Matchv4Player = exports.Matchv4ParticipantTimeline = exports.Matchv4ParticipantStats = exports.Matchv4ParticipantIdentity = exports.Matchv4Participant = exports.Matchv4Matchlist = exports.Matchv4MatchTimeline = exports.Matchv4MatchReference = exports.Matchv4MatchPosition = exports.Matchv4MatchFrame = exports.Matchv4MatchEvent = exports.Matchv4Match = exports.Matchv4Mastery = exports.Lorrankedv1Player = exports.Lorrankedv1Leaderboard = exports.Lolstatusv3Translation = exports.Lolstatusv3ShardStatus = exports.Lolstatusv3Service = exports.Lolstatusv3Message = exports.Lolstatusv3Incident = exports.Leaguev4MiniSeries = exports.Leaguev4LeagueList = exports.Leaguev4LeagueItem = exports.Leaguev4LeagueEntry = exports.Leagueexpv4MiniSeries = exports.Leagueexpv4LeagueEntry = exports.Clashv1TournamentPhase = exports.Clashv1Tournament = exports.Clashv1Team = exports.Clashv1Player = exports.Championv3ChampionInfo = exports.Championmasteryv4ChampionMastery = exports.Accountv1ActiveShard = exports.Accountv1Account = void 0;
const nexus_1 = require("nexus");
exports.Accountv1Account = nexus_1.schema.objectType({
    name: "Accountv1Account",
    definition(t) {
        t.string("gameName");
        t.string("puuid");
        t.string("tagLine");
    }
});
exports.Accountv1ActiveShard = nexus_1.schema.objectType({
    name: "Accountv1ActiveShard",
    definition(t) {
        t.string("activeShard");
        t.string("game");
        t.string("puuid");
    }
});
exports.Championmasteryv4ChampionMastery = nexus_1.schema.objectType({
    name: "Championmasteryv4ChampionMastery",
    description: "This object contains single Champion Mastery information for player and champion combination.",
    definition(t) {
        t.float("championId", { description: "Champion ID for this entry." });
        t.int("championLevel", { description: "Champion level for specified player and champion combination." });
        t.int("championPoints", { description: "Total number of champion points for this player and champion combination - they are used to determine championLevel." });
        t.float("championPointsSinceLastLevel", { description: "Number of points earned since current level has been achieved." });
        t.float("championPointsUntilNextLevel", { description: "Number of points needed to achieve next level. Zero if player reached maximum champion level for this champion." });
        t.boolean("chestGranted", { description: "Is chest granted for this champion or not in current season." });
        t.float("lastPlayTime", { description: "Last time this champion was played by this player - in Unix milliseconds time format." });
        t.string("summonerId", { description: "Summoner ID for this entry. (Encrypted)" });
        t.int("tokensEarned", { description: "The token earned for this champion to levelup." });
    }
});
exports.Championv3ChampionInfo = nexus_1.schema.objectType({
    name: "Championv3ChampionInfo",
    definition(t) {
        t.int("freeChampionIds", { list: [false] });
        t.int("freeChampionIdsForNewPlayers", { list: [false] });
        t.int("maxNewPlayerLevel");
    }
});
exports.Clashv1Player = nexus_1.schema.objectType({
    name: "Clashv1Player",
    definition(t) {
        t.field("position", {
            type: exports.Position,
            description: "(Legal values:  UNSELECTED,  FILL,  TOP,  JUNGLE,  MIDDLE,  BOTTOM,  UTILITY)",
        });
        t.field("role", {
            type: exports.Role,
            description: "(Legal values:  CAPTAIN,  MEMBER)",
        });
        t.string("summonerId");
        t.string("teamId");
    }
});
exports.Clashv1Team = nexus_1.schema.objectType({
    name: "Clashv1Team",
    definition(t) {
        t.string("abbreviation");
        t.string("captain", { description: "Summoner ID of the team captain." });
        t.int("iconId");
        t.string("id");
        t.string("name");
        t.field("players", {
            type: exports.Clashv1Player,
            list: [false],
            description: "Team members.",
        });
        t.int("tier");
        t.int("tournamentId");
    }
});
exports.Clashv1Tournament = nexus_1.schema.objectType({
    name: "Clashv1Tournament",
    definition(t) {
        t.int("id");
        t.string("nameKey");
        t.string("nameKeySecondary");
        t.field("schedule", {
            type: exports.Clashv1TournamentPhase,
            list: [false],
            description: "Tournament phase.",
        });
        t.int("themeId");
    }
});
exports.Clashv1TournamentPhase = nexus_1.schema.objectType({
    name: "Clashv1TournamentPhase",
    definition(t) {
        t.boolean("cancelled");
        t.int("id");
        t.float("registrationTime");
        t.float("startTime");
    }
});
exports.Leagueexpv4LeagueEntry = nexus_1.schema.objectType({
    name: "Leagueexpv4LeagueEntry",
    definition(t) {
        t.boolean("freshBlood");
        t.boolean("hotStreak");
        t.boolean("inactive");
        t.string("leagueId");
        t.int("leaguePoints");
        t.int("losses", { description: "Losing team on Summoners Rift. Second through eighth placement in Teamfight Tactics." });
        t.field("miniSeries", {
            type: exports.Leagueexpv4MiniSeries,
            nullable: true,
        });
        t.string("queueType");
        t.string("rank");
        t.string("summonerId", { description: "Player's summonerId (Encrypted)" });
        t.string("summonerName");
        t.string("tier");
        t.boolean("veteran");
        t.int("wins", { description: "Winning team on Summoners Rift. First placement in Teamfight Tactics." });
    }
});
exports.Leagueexpv4MiniSeries = nexus_1.schema.objectType({
    name: "Leagueexpv4MiniSeries",
    definition(t) {
        t.int("losses");
        t.string("progress");
        t.int("target");
        t.int("wins");
    }
});
exports.Leaguev4LeagueEntry = nexus_1.schema.objectType({
    name: "Leaguev4LeagueEntry",
    definition(t) {
        t.boolean("freshBlood");
        t.boolean("hotStreak");
        t.boolean("inactive");
        t.string("leagueId");
        t.int("leaguePoints");
        t.int("losses", { description: "Losing team on Summoners Rift." });
        t.field("miniSeries", {
            type: exports.Leaguev4MiniSeries,
            nullable: true,
        });
        t.string("queueType");
        t.string("rank");
        t.string("summonerId", { description: "Player's encrypted summonerId." });
        t.string("summonerName");
        t.string("tier");
        t.boolean("veteran");
        t.int("wins", { description: "Winning team on Summoners Rift." });
    }
});
exports.Leaguev4LeagueItem = nexus_1.schema.objectType({
    name: "Leaguev4LeagueItem",
    definition(t) {
        t.boolean("freshBlood");
        t.boolean("hotStreak");
        t.boolean("inactive");
        t.int("leaguePoints");
        t.int("losses", { description: "Losing team on Summoners Rift." });
        t.field("miniSeries", {
            type: exports.Leaguev4MiniSeries,
            nullable: true,
        });
        t.string("rank");
        t.string("summonerId", { description: "Player's encrypted summonerId." });
        t.string("summonerName");
        t.boolean("veteran");
        t.int("wins", { description: "Winning team on Summoners Rift." });
    }
});
exports.Leaguev4LeagueList = nexus_1.schema.objectType({
    name: "Leaguev4LeagueList",
    definition(t) {
        t.field("entries", {
            type: exports.Leaguev4LeagueItem,
            list: [false],
        });
        t.string("leagueId");
        t.string("name");
        t.string("queue");
        t.string("tier");
    }
});
exports.Leaguev4MiniSeries = nexus_1.schema.objectType({
    name: "Leaguev4MiniSeries",
    definition(t) {
        t.int("losses");
        t.string("progress");
        t.int("target");
        t.int("wins");
    }
});
exports.Lolstatusv3Incident = nexus_1.schema.objectType({
    name: "Lolstatusv3Incident",
    definition(t) {
        t.boolean("active");
        t.string("created_at");
        t.float("id");
        t.field("updates", {
            type: exports.Lolstatusv3Message,
            list: [false],
        });
    }
});
exports.Lolstatusv3Message = nexus_1.schema.objectType({
    name: "Lolstatusv3Message",
    definition(t) {
        t.string("author");
        t.string("content");
        t.string("created_at");
        t.string("id");
        t.string("severity");
        t.field("translations", {
            type: exports.Lolstatusv3Translation,
            list: [false],
        });
        t.string("updated_at");
    }
});
exports.Lolstatusv3Service = nexus_1.schema.objectType({
    name: "Lolstatusv3Service",
    definition(t) {
        t.field("incidents", {
            type: exports.Lolstatusv3Incident,
            list: [false],
        });
        t.string("name");
        t.string("slug");
        t.string("status");
    }
});
exports.Lolstatusv3ShardStatus = nexus_1.schema.objectType({
    name: "Lolstatusv3ShardStatus",
    definition(t) {
        t.string("hostname");
        t.string("locales", { list: [false] });
        t.string("name");
        t.string("region_tag");
        t.field("services", {
            type: exports.Lolstatusv3Service,
            list: [false],
        });
        t.string("slug");
    }
});
exports.Lolstatusv3Translation = nexus_1.schema.objectType({
    name: "Lolstatusv3Translation",
    definition(t) {
        t.string("content");
        t.string("heading");
        t.string("locale");
    }
});
exports.Lorrankedv1Leaderboard = nexus_1.schema.objectType({
    name: "Lorrankedv1Leaderboard",
    definition(t) {
        t.field("players", {
            type: exports.Lorrankedv1Player,
            list: [false],
            description: "A list of players in Master tier.",
        });
    }
});
exports.Lorrankedv1Player = nexus_1.schema.objectType({
    name: "Lorrankedv1Player",
    definition(t) {
        t.int("lp", { description: "League points." });
        t.string("name");
        t.int("rank");
    }
});
exports.Matchv4Mastery = nexus_1.schema.objectType({
    name: "Matchv4Mastery",
    definition(t) {
        t.int("masteryId");
        t.int("rank");
    }
});
exports.Matchv4Match = nexus_1.schema.objectType({
    name: "Matchv4Match",
    definition(t) {
        t.float("gameCreation", { description: "Designates the timestamp when champion select ended and the loading screen appeared, NOT when the game timer was at 0:00." });
        t.float("gameDuration", { description: "Match duration in seconds." });
        t.float("gameId");
        t.string("gameMode", { description: "Please refer to the Game Constants documentation." });
        t.string("gameType", { description: "Please refer to the Game Constants documentation." });
        t.string("gameVersion", { description: "The major.minor version typically indicates the patch the match was played on." });
        t.int("mapId", { description: "Please refer to the Game Constants documentation." });
        t.field("participantIdentities", {
            type: exports.Matchv4ParticipantIdentity,
            list: [false],
            description: "Participant identity information. Participant identity information is purposefully excluded for custom games.",
        });
        t.field("participants", {
            type: exports.Matchv4Participant,
            list: [false],
            description: "Participant information.",
        });
        t.string("platformId", { description: "Platform where the match was played." });
        t.int("queueId", { description: "Please refer to the Game Constants documentation." });
        t.int("seasonId", { description: "Please refer to the Game Constants documentation." });
        t.field("teams", {
            type: exports.Matchv4TeamStats,
            list: [false],
            description: "Team information.",
        });
    }
});
exports.Matchv4MatchEvent = nexus_1.schema.objectType({
    name: "Matchv4MatchEvent",
    definition(t) {
        t.int("afterId", { nullable: true });
        t.string("ascendedType", { nullable: true });
        t.int("assistingParticipantIds", {
            list: [false],
            nullable: true,
        });
        t.int("beforeId", { nullable: true });
        t.string("buildingType", { nullable: true });
        t.int("creatorId", { nullable: true });
        t.string("eventType", { nullable: true });
        t.int("itemId", { nullable: true });
        t.int("killerId", { nullable: true });
        t.string("laneType", { nullable: true });
        t.string("levelUpType", { nullable: true });
        t.string("monsterSubType", { nullable: true });
        t.string("monsterType", { nullable: true });
        t.int("participantId", { nullable: true });
        t.string("pointCaptured", { nullable: true });
        t.field("position", {
            type: exports.Matchv4MatchPosition,
            nullable: true,
        });
        t.int("skillSlot", { nullable: true });
        t.int("teamId", { nullable: true });
        t.float("timestamp");
        t.string("towerType", { nullable: true });
        t.field("type", {
            type: exports.Type,
            description: "(Legal values:  CHAMPION_KILL,  WARD_PLACED,  WARD_KILL,  BUILDING_KILL, \nELITE_MONSTER_KILL,  ITEM_PURCHASED,  ITEM_SOLD,  ITEM_DESTROYED,  ITEM_UNDO, \nSKILL_LEVEL_UP,  ASCENDED_EVENT,  CAPTURE_POINT,  PORO_KING_SUMMON)",
        });
        t.int("victimId", { nullable: true });
        t.string("wardType", { nullable: true });
    }
});
exports.Matchv4MatchFrame = nexus_1.schema.objectType({
    name: "Matchv4MatchFrame",
    definition(t) {
        t.field("events", {
            type: exports.Matchv4MatchEvent,
            list: [false],
        });
        t.field("participantFrames", { type: exports.JSON });
        t.float("timestamp");
    }
});
exports.Matchv4MatchPosition = nexus_1.schema.objectType({
    name: "Matchv4MatchPosition",
    definition(t) {
        t.int("x");
        t.int("y");
    }
});
exports.Matchv4MatchReference = nexus_1.schema.objectType({
    name: "Matchv4MatchReference",
    definition(t) {
        t.int("champion");
        t.float("gameId");
        t.string("lane");
        t.string("platformId");
        t.int("queue");
        t.string("role");
        t.int("season");
        t.float("timestamp");
    }
});
exports.Matchv4MatchTimeline = nexus_1.schema.objectType({
    name: "Matchv4MatchTimeline",
    definition(t) {
        t.float("frameInterval");
        t.field("frames", {
            type: exports.Matchv4MatchFrame,
            list: [false],
        });
    }
});
exports.Matchv4Matchlist = nexus_1.schema.objectType({
    name: "Matchv4Matchlist",
    definition(t) {
        t.int("endIndex");
        t.field("matches", {
            type: exports.Matchv4MatchReference,
            list: [false],
        });
        t.int("startIndex");
        t.int("totalGames", { description: "There is a known issue that this field doesn't correctly return the total\nnumber of games that match the parameters of the request. Please paginate\nusing beginIndex until you reach the end of a player's matchlist." });
    }
});
exports.Matchv4Participant = nexus_1.schema.objectType({
    name: "Matchv4Participant",
    definition(t) {
        t.int("championId");
        t.field("highestAchievedSeasonTier", {
            type: exports.HighestAchievedSeasonTier,
            nullable: true,
            description: "Highest ranked tier achieved for the previous season in a specific subset of\nqueueIds, if any, otherwise null. Used to display border in game loading\nscreen. Please refer to the Ranked Info documentation.\n             (Legal values:  CHALLENGER,  MASTER,  DIAMOND,  PLATINUM,  GOLD,  SILVER,  BRONZE,  UNRANKED)",
        });
        t.field("masteries", {
            type: exports.Matchv4Mastery,
            list: [false],
            nullable: true,
            description: "List of legacy Mastery information. Not included for matches played with Runes Reforged.",
        });
        t.int("participantId");
        t.field("runes", {
            type: exports.Matchv4Rune,
            list: [false],
            nullable: true,
            description: "List of legacy Rune information. Not included for matches played with Runes Reforged.",
        });
        t.int("spell1Id", { description: "First Summoner Spell id." });
        t.int("spell2Id", { description: "Second Summoner Spell id." });
        t.field("stats", { type: exports.Matchv4ParticipantStats });
        t.int("teamId", { description: "100 for blue side. 200 for red side." });
        t.field("timeline", { type: exports.Matchv4ParticipantTimeline });
    }
});
exports.Matchv4ParticipantIdentity = nexus_1.schema.objectType({
    name: "Matchv4ParticipantIdentity",
    definition(t) {
        t.int("participantId");
        t.field("player", { type: exports.Matchv4Player });
    }
});
exports.Matchv4ParticipantStats = nexus_1.schema.objectType({
    name: "Matchv4ParticipantStats",
    definition(t) {
        t.int("altarsCaptured", { nullable: true });
        t.int("altarsNeutralized", { nullable: true });
        t.int("assists");
        t.int("champLevel");
        t.int("combatPlayerScore", { nullable: true });
        t.float("damageDealtToObjectives");
        t.float("damageDealtToTurrets");
        t.float("damageSelfMitigated");
        t.int("deaths");
        t.int("doubleKills");
        t.boolean("firstBloodAssist", { nullable: true });
        t.boolean("firstBloodKill", { nullable: true });
        t.boolean("firstInhibitorAssist", { nullable: true });
        t.boolean("firstInhibitorKill", { nullable: true });
        t.boolean("firstTowerAssist", { nullable: true });
        t.boolean("firstTowerKill", { nullable: true });
        t.int("goldEarned");
        t.int("goldSpent");
        t.int("inhibitorKills", { nullable: true });
        t.int("item0");
        t.int("item1");
        t.int("item2");
        t.int("item3");
        t.int("item4");
        t.int("item5");
        t.int("item6");
        t.int("killingSprees");
        t.int("kills");
        t.int("largestCriticalStrike");
        t.int("largestKillingSpree");
        t.int("largestMultiKill");
        t.int("longestTimeSpentLiving");
        t.float("magicDamageDealt");
        t.float("magicDamageDealtToChampions");
        t.float("magicalDamageTaken");
        t.int("neutralMinionsKilled");
        t.int("neutralMinionsKilledEnemyJungle");
        t.int("neutralMinionsKilledTeamJungle");
        t.int("nodeCapture", { nullable: true });
        t.int("nodeCaptureAssist", { nullable: true });
        t.int("nodeNeutralize", { nullable: true });
        t.int("nodeNeutralizeAssist", { nullable: true });
        t.int("objectivePlayerScore", { nullable: true });
        t.int("participantId");
        t.int("pentaKills");
        t.int("perk0", {
            nullable: true,
            description: "Primary path keystone rune.",
        });
        t.int("perk0Var1", {
            nullable: true,
            description: "Post game rune stats.",
        });
        t.int("perk0Var2", {
            nullable: true,
            description: "Post game rune stats.",
        });
        t.int("perk0Var3", {
            nullable: true,
            description: "Post game rune stats.",
        });
        t.int("perk1", {
            nullable: true,
            description: "Primary path rune.",
        });
        t.int("perk1Var1", {
            nullable: true,
            description: "Post game rune stats.",
        });
        t.int("perk1Var2", {
            nullable: true,
            description: "Post game rune stats.",
        });
        t.int("perk1Var3", {
            nullable: true,
            description: "Post game rune stats.",
        });
        t.int("perk2", {
            nullable: true,
            description: "Primary path rune.",
        });
        t.int("perk2Var1", {
            nullable: true,
            description: "Post game rune stats.",
        });
        t.int("perk2Var2", {
            nullable: true,
            description: "Post game rune stats.",
        });
        t.int("perk2Var3", {
            nullable: true,
            description: "Post game rune stats.",
        });
        t.int("perk3", {
            nullable: true,
            description: "Primary path rune.",
        });
        t.int("perk3Var1", {
            nullable: true,
            description: "Post game rune stats.",
        });
        t.int("perk3Var2", {
            nullable: true,
            description: "Post game rune stats.",
        });
        t.int("perk3Var3", {
            nullable: true,
            description: "Post game rune stats.",
        });
        t.int("perk4", {
            nullable: true,
            description: "Secondary path rune.",
        });
        t.int("perk4Var1", {
            nullable: true,
            description: "Post game rune stats.",
        });
        t.int("perk4Var2", {
            nullable: true,
            description: "Post game rune stats.",
        });
        t.int("perk4Var3", {
            nullable: true,
            description: "Post game rune stats.",
        });
        t.int("perk5", {
            nullable: true,
            description: "Secondary path rune.",
        });
        t.int("perk5Var1", {
            nullable: true,
            description: "Post game rune stats.",
        });
        t.int("perk5Var2", {
            nullable: true,
            description: "Post game rune stats.",
        });
        t.int("perk5Var3", {
            nullable: true,
            description: "Post game rune stats.",
        });
        t.int("perkPrimaryStyle", {
            nullable: true,
            description: "Primary rune path",
        });
        t.int("perkSubStyle", {
            nullable: true,
            description: "Secondary rune path",
        });
        t.float("physicalDamageDealt");
        t.float("physicalDamageDealtToChampions");
        t.float("physicalDamageTaken");
        t.int("playerScore0", { nullable: true });
        t.int("playerScore1", { nullable: true });
        t.int("playerScore2", { nullable: true });
        t.int("playerScore3", { nullable: true });
        t.int("playerScore4", { nullable: true });
        t.int("playerScore5", { nullable: true });
        t.int("playerScore6", { nullable: true });
        t.int("playerScore7", { nullable: true });
        t.int("playerScore8", { nullable: true });
        t.int("playerScore9", { nullable: true });
        t.int("quadraKills");
        t.int("sightWardsBoughtInGame", { nullable: true });
        t.int("teamObjective", { nullable: true });
        t.float("timeCCingOthers");
        t.float("totalDamageDealt");
        t.float("totalDamageDealtToChampions");
        t.float("totalDamageTaken");
        t.float("totalHeal");
        t.int("totalMinionsKilled");
        t.int("totalPlayerScore", { nullable: true });
        t.int("totalScoreRank", { nullable: true });
        t.int("totalTimeCrowdControlDealt");
        t.int("totalUnitsHealed");
        t.int("tripleKills");
        t.float("trueDamageDealt");
        t.float("trueDamageDealtToChampions");
        t.float("trueDamageTaken");
        t.int("turretKills", { nullable: true });
        t.int("unrealKills");
        t.float("visionScore", { nullable: true });
        t.int("visionWardsBoughtInGame");
        t.int("wardsKilled");
        t.int("wardsPlaced", { nullable: true });
        t.boolean("win");
    }
});
exports.Matchv4ParticipantTimeline = nexus_1.schema.objectType({
    name: "Matchv4ParticipantTimeline",
    definition(t) {
        t.field("creepsPerMinDeltas", {
            type: exports.JSON,
            nullable: true,
            description: "Creeps for a specified period.",
        });
        t.field("csDiffPerMinDeltas", {
            type: exports.JSON,
            nullable: true,
            description: "Creep score difference versus the calculated lane opponent(s) for a specified period.",
        });
        t.field("damageTakenDiffPerMinDeltas", {
            type: exports.JSON,
            nullable: true,
            description: "Damage taken difference versus the calculated lane opponent(s) for a specified period.",
        });
        t.field("damageTakenPerMinDeltas", {
            type: exports.JSON,
            nullable: true,
            description: "Damage taken for a specified period.",
        });
        t.field("goldPerMinDeltas", {
            type: exports.JSON,
            nullable: true,
            description: "Gold for a specified period.",
        });
        t.field("lane", {
            type: exports.Lane,
            nullable: true,
            description: "Participant's calculated lane. MID and BOT are legacy values.\n             (Legal values:  MID,  MIDDLE,  TOP,  JUNGLE,  BOT,  BOTTOM)",
        });
        t.int("participantId", { nullable: true });
        t.field("role", {
            type: exports.Role2,
            nullable: true,
            description: "Participant's calculated role.\n             (Legal values:  DUO,  NONE,  SOLO,  DUO_CARRY,  DUO_SUPPORT)",
        });
        t.field("xpDiffPerMinDeltas", {
            type: exports.JSON,
            nullable: true,
            description: "Experience difference versus the calculated lane opponent(s) for a specified period.",
        });
        t.field("xpPerMinDeltas", {
            type: exports.JSON,
            nullable: true,
            description: "Experience change for a specified period.",
        });
    }
});
exports.Matchv4Player = nexus_1.schema.objectType({
    name: "Matchv4Player",
    definition(t) {
        t.string("accountId", { description: "Player's original accountId." });
        t.string("currentAccountId", { description: "Player's current accountId when the match was played." });
        t.string("currentPlatformId", { description: "Player's current platformId when the match was played." });
        t.string("matchHistoryUri");
        t.string("platformId", { description: "Player's original platformId." });
        t.int("profileIcon");
        t.string("summonerId", {
            nullable: true,
            description: "Player's summonerId (Encrypted)",
        });
        t.string("summonerName");
    }
});
exports.Matchv4Rune = nexus_1.schema.objectType({
    name: "Matchv4Rune",
    definition(t) {
        t.int("rank");
        t.int("runeId");
    }
});
exports.Matchv4TeamBans = nexus_1.schema.objectType({
    name: "Matchv4TeamBans",
    definition(t) {
        t.int("championId", { description: "Banned championId." });
        t.int("pickTurn", { description: "Turn during which the champion was banned." });
    }
});
exports.Matchv4TeamStats = nexus_1.schema.objectType({
    name: "Matchv4TeamStats",
    definition(t) {
        t.field("bans", {
            type: exports.Matchv4TeamBans,
            list: [false],
            description: "If match queueId has a draft, contains banned champion data, otherwise empty.",
        });
        t.int("baronKills", { description: "Number of times the team killed Baron." });
        t.int("dominionVictoryScore", { description: "For Dominion matches, specifies the points the team had at game end." });
        t.int("dragonKills", { description: "Number of times the team killed Dragon." });
        t.boolean("firstBaron", { description: "Flag indicating whether or not the team scored the first Baron kill." });
        t.boolean("firstBlood", { description: "Flag indicating whether or not the team scored the first blood." });
        t.boolean("firstDragon", { description: "Flag indicating whether or not the team scored the first Dragon kill." });
        t.boolean("firstInhibitor", { description: "Flag indicating whether or not the team destroyed the first inhibitor." });
        t.boolean("firstRiftHerald", { description: "Flag indicating whether or not the team scored the first Rift Herald kill." });
        t.boolean("firstTower", { description: "Flag indicating whether or not the team destroyed the first tower." });
        t.int("inhibitorKills", { description: "Number of inhibitors the team destroyed." });
        t.int("riftHeraldKills", { description: "Number of times the team killed Rift Herald." });
        t.int("teamId", { description: "100 for blue side. 200 for red side." });
        t.int("towerKills", { description: "Number of towers the team destroyed." });
        t.int("vilemawKills", { description: "Number of times the team killed Vilemaw." });
        t.field("win", {
            type: exports.Win,
            description: "String indicating whether or not the team won. There are only two values visibile in public match history.\n             (Legal values:  Fail,  Win)",
        });
    }
});
exports.Spectatorv4BannedChampion = nexus_1.schema.objectType({
    name: "Spectatorv4BannedChampion",
    definition(t) {
        t.float("championId", { description: "The ID of the banned champion" });
        t.int("pickTurn", { description: "The turn during which the champion was banned" });
        t.float("teamId", { description: "The ID of the team that banned the champion" });
    }
});
exports.Spectatorv4CurrentGameInfo = nexus_1.schema.objectType({
    name: "Spectatorv4CurrentGameInfo",
    definition(t) {
        t.field("bannedChampions", {
            type: exports.Spectatorv4BannedChampion,
            list: [false],
            description: "Banned champion information",
        });
        t.float("gameId", { description: "The ID of the game" });
        t.float("gameLength", { description: "The amount of time in seconds that has passed since the game started" });
        t.string("gameMode", { description: "The game mode" });
        t.float("gameQueueConfigId", {
            nullable: true,
            description: "The queue type (queue types are documented on the Game Constants page)",
        });
        t.float("gameStartTime", { description: "The game start time represented in epoch milliseconds" });
        t.string("gameType", { description: "The game type" });
        t.float("mapId", { description: "The ID of the map" });
        t.field("observers", { type: exports.Spectatorv4Observer });
        t.field("participants", {
            type: exports.Spectatorv4CurrentGameParticipant,
            list: [false],
            description: "The participant information",
        });
        t.string("platformId", { description: "The ID of the platform on which the game is being played" });
    }
});
exports.Spectatorv4CurrentGameParticipant = nexus_1.schema.objectType({
    name: "Spectatorv4CurrentGameParticipant",
    definition(t) {
        t.boolean("bot", { description: "Flag indicating whether or not this participant is a bot" });
        t.float("championId", { description: "The ID of the champion played by this participant" });
        t.field("gameCustomizationObjects", {
            type: exports.Spectatorv4GameCustomizationObject,
            list: [false],
            description: "List of Game Customizations",
        });
        t.field("perks", { type: exports.Spectatorv4Perks });
        t.float("profileIconId", { description: "The ID of the profile icon used by this participant" });
        t.float("spell1Id", { description: "The ID of the first summoner spell used by this participant" });
        t.float("spell2Id", { description: "The ID of the second summoner spell used by this participant" });
        t.string("summonerId", { description: "The encrypted summoner ID of this participant" });
        t.string("summonerName", { description: "The summoner name of this participant" });
        t.float("teamId", { description: "The team ID of this participant, indicating the participant's team" });
    }
});
exports.Spectatorv4FeaturedGameInfo = nexus_1.schema.objectType({
    name: "Spectatorv4FeaturedGameInfo",
    definition(t) {
        t.field("bannedChampions", {
            type: exports.Spectatorv4BannedChampion,
            list: [false],
            description: "Banned champion information",
        });
        t.float("gameId", { description: "The ID of the game" });
        t.float("gameLength", { description: "The amount of time in seconds that has passed since the game started" });
        t.field("gameMode", {
            type: exports.GameMode,
            description: "The game mode\n             (Legal values:  CLASSIC,  ODIN,  ARAM,  TUTORIAL,  ONEFORALL,  ASCENSION,  FIRSTBLOOD,  KINGPORO)",
        });
        t.float("gameQueueConfigId", { description: "The queue type (queue types are documented on the Game Constants page)" });
        t.float("gameStartTime", { description: "The game start time represented in epoch milliseconds" });
        t.field("gameType", {
            type: exports.GameType,
            description: "The game type\n             (Legal values:  CUSTOM_GAME,  MATCHED_GAME,  TUTORIAL_GAME)",
        });
        t.float("mapId", { description: "The ID of the map" });
        t.field("observers", { type: exports.Spectatorv4Observer });
        t.field("participants", {
            type: exports.Spectatorv4Participant,
            list: [false],
            description: "The participant information",
        });
        t.string("platformId", { description: "The ID of the platform on which the game is being played" });
    }
});
exports.Spectatorv4FeaturedGames = nexus_1.schema.objectType({
    name: "Spectatorv4FeaturedGames",
    definition(t) {
        t.float("clientRefreshInterval", { description: "The suggested interval to wait before requesting FeaturedGames again" });
        t.field("gameList", {
            type: exports.Spectatorv4FeaturedGameInfo,
            list: [false],
            description: "The list of featured games",
        });
    }
});
exports.Spectatorv4GameCustomizationObject = nexus_1.schema.objectType({
    name: "Spectatorv4GameCustomizationObject",
    definition(t) {
        t.string("category", { description: "Category identifier for Game Customization" });
        t.string("content", { description: "Game Customization content" });
    }
});
exports.Spectatorv4Observer = nexus_1.schema.objectType({
    name: "Spectatorv4Observer",
    definition(t) {
        t.string("encryptionKey", { description: "Key used to decrypt the spectator grid game data for playback" });
    }
});
exports.Spectatorv4Participant = nexus_1.schema.objectType({
    name: "Spectatorv4Participant",
    definition(t) {
        t.boolean("bot", { description: "Flag indicating whether or not this participant is a bot" });
        t.float("championId", { description: "The ID of the champion played by this participant" });
        t.float("profileIconId", { description: "The ID of the profile icon used by this participant" });
        t.float("spell1Id", { description: "The ID of the first summoner spell used by this participant" });
        t.float("spell2Id", { description: "The ID of the second summoner spell used by this participant" });
        t.string("summonerName", { description: "The summoner name of this participant" });
        t.float("teamId", { description: "The team ID of this participant, indicating the participant's team" });
    }
});
exports.Spectatorv4Perks = nexus_1.schema.objectType({
    name: "Spectatorv4Perks",
    definition(t) {
        t.float("perkIds", {
            list: [false],
            description: "IDs of the perks/runes assigned.",
        });
        t.float("perkStyle", { description: "Primary runes path" });
        t.float("perkSubStyle", { description: "Secondary runes path" });
    }
});
exports.Summonerv4Summoner = nexus_1.schema.objectType({
    name: "Summonerv4Summoner",
    description: "represents a summoner",
    definition(t) {
        t.string("accountId", { description: "Encrypted account ID. Max length 56 characters." });
        t.string("id", { description: "Encrypted summoner ID. Max length 63 characters." });
        t.string("name", { description: "Summoner name." });
        t.int("profileIconId", { description: "ID of the summoner icon associated with the summoner." });
        t.string("puuid", { description: "Encrypted PUUID. Exact length of 78 characters." });
        t.float("revisionDate", { description: "Date summoner was last modified specified as epoch milliseconds. The following\nevents will update this timestamp: summoner name change, summoner level\nchange, or profile icon change." });
        t.float("summonerLevel", { description: "Summoner level associated with the summoner." });
    }
});
exports.Tftleaguev1LeagueEntry = nexus_1.schema.objectType({
    name: "Tftleaguev1LeagueEntry",
    definition(t) {
        t.boolean("freshBlood");
        t.boolean("hotStreak");
        t.boolean("inactive");
        t.string("leagueId");
        t.int("leaguePoints");
        t.int("losses", { description: "Second through eighth placement." });
        t.field("miniSeries", {
            type: exports.Tftleaguev1MiniSeries,
            nullable: true,
        });
        t.string("queueType");
        t.string("rank");
        t.string("summonerId", { description: "Player's encrypted summonerId." });
        t.string("summonerName");
        t.string("tier");
        t.boolean("veteran");
        t.int("wins", { description: "First placement." });
    }
});
exports.Tftleaguev1LeagueItem = nexus_1.schema.objectType({
    name: "Tftleaguev1LeagueItem",
    definition(t) {
        t.boolean("freshBlood");
        t.boolean("hotStreak");
        t.boolean("inactive");
        t.int("leaguePoints");
        t.int("losses", { description: "Second through eighth placement." });
        t.field("miniSeries", {
            type: exports.Tftleaguev1MiniSeries,
            nullable: true,
        });
        t.string("rank");
        t.string("summonerId", { description: "Player's encrypted summonerId." });
        t.string("summonerName");
        t.boolean("veteran");
        t.int("wins", { description: "First placement." });
    }
});
exports.Tftleaguev1LeagueList = nexus_1.schema.objectType({
    name: "Tftleaguev1LeagueList",
    definition(t) {
        t.field("entries", {
            type: exports.Tftleaguev1LeagueItem,
            list: [false],
        });
        t.string("leagueId");
        t.string("name");
        t.string("queue");
        t.string("tier");
    }
});
exports.Tftleaguev1MiniSeries = nexus_1.schema.objectType({
    name: "Tftleaguev1MiniSeries",
    definition(t) {
        t.int("losses");
        t.string("progress");
        t.int("target");
        t.int("wins");
    }
});
exports.Tftmatchv1Companion = nexus_1.schema.objectType({
    name: "Tftmatchv1Companion",
    definition(t) {
        t.string("content_ID");
        t.int("skin_ID");
        t.string("species");
    }
});
exports.Tftmatchv1Info = nexus_1.schema.objectType({
    name: "Tftmatchv1Info",
    definition(t) {
        t.float("game_datetime", { description: "Unix timestamp." });
        t.float("game_length", { description: "Game length in seconds." });
        t.string("game_variation", {
            nullable: true,
            description: "Game variation key. Game variations documented in TFT static data.",
        });
        t.string("game_version", { description: "Game client version." });
        t.field("participants", {
            type: exports.Tftmatchv1Participant,
            list: [false],
            description: "Participants.",
        });
        t.int("queue_id", { description: "Please refer to the League of Legends documentation." });
        t.int("tft_set_number", { description: "Teamfight Tactics set number." });
    }
});
exports.Tftmatchv1Match = nexus_1.schema.objectType({
    name: "Tftmatchv1Match",
    definition(t) {
        t.field("info", { type: exports.Tftmatchv1Info });
        t.field("metadata", { type: exports.Tftmatchv1Metadata });
    }
});
exports.Tftmatchv1Metadata = nexus_1.schema.objectType({
    name: "Tftmatchv1Metadata",
    definition(t) {
        t.string("data_version", { description: "Match data version." });
        t.string("match_id", { description: "Match id." });
        t.string("participants", {
            list: [false],
            description: "A list of encrypted participant PUUIDs.",
        });
    }
});
exports.Tftmatchv1Participant = nexus_1.schema.objectType({
    name: "Tftmatchv1Participant",
    definition(t) {
        t.field("companion", { type: exports.Tftmatchv1Companion });
        t.int("gold_left", { description: "Gold left after participant was eliminated." });
        t.int("last_round", { description: "The round the participant was eliminated in. Note: If the player was eliminated in stage 2-1 their last_round would be 5." });
        t.int("level", { description: "Participant Little Legend level. Note: This is not the number of active units." });
        t.int("placement", { description: "Participant placement upon elimination." });
        t.int("players_eliminated", { description: "Number of players the participant eliminated." });
        t.string("puuid", { description: "Encrypted PUUID." });
        t.float("time_eliminated", { description: "The number of seconds before the participant was eliminated." });
        t.int("total_damage_to_players", { description: "Damage the participant dealt to other players." });
        t.field("traits", {
            type: exports.Tftmatchv1Trait,
            list: [false],
            description: "A complete list of traits for the participant's active units.",
        });
        t.field("units", {
            type: exports.Tftmatchv1Unit,
            list: [false],
            description: "A list of active units for the participant.",
        });
    }
});
exports.Tftmatchv1Trait = nexus_1.schema.objectType({
    name: "Tftmatchv1Trait",
    definition(t) {
        t.string("name", { description: "Trait name." });
        t.int("num_units", { description: "Number of units with this trait." });
        t.int("tier_current", { description: "Current active tier for the trait." });
        t.int("tier_total", {
            nullable: true,
            description: "Total tiers for the trait.",
        });
    }
});
exports.Tftmatchv1Unit = nexus_1.schema.objectType({
    name: "Tftmatchv1Unit",
    definition(t) {
        t.string("character_id", { description: "This field was introduced in patch 9.22 with data_version 2." });
        t.int("items", {
            list: [false],
            description: "A list of the unit's items. Please refer to the Teamfight Tactics documentation for item ids.",
        });
        t.string("name", { description: "Unit name." });
        t.int("rarity", { description: "Unit rarity. This doesn't equate to the unit cost." });
        t.int("tier", { description: "Unit tier." });
    }
});
exports.Tftsummonerv1Summoner = nexus_1.schema.objectType({
    name: "Tftsummonerv1Summoner",
    description: "represents a summoner",
    definition(t) {
        t.string("accountId", { description: "Encrypted account ID. Max length 56 characters." });
        t.string("id", { description: "Encrypted summoner ID. Max length 63 characters." });
        t.string("name", { description: "Summoner name." });
        t.int("profileIconId", { description: "ID of the summoner icon associated with the summoner." });
        t.string("puuid", { description: "Encrypted PUUID. Exact length of 78 characters." });
        t.float("revisionDate", { description: "Date summoner was last modified specified as epoch milliseconds. The following\nevents will update this timestamp: summoner name change, summoner level\nchange, or profile icon change." });
        t.float("summonerLevel", { description: "Summoner level associated with the summoner." });
    }
});
exports.Tournamentstubv4LobbyEvent = nexus_1.schema.objectType({
    name: "Tournamentstubv4LobbyEvent",
    definition(t) {
        t.string("eventType", { description: "The type of event that was triggered" });
        t.string("summonerId", { description: "The summonerId that triggered the event (Encrypted)" });
        t.string("timestamp", { description: "Timestamp from the event" });
    }
});
exports.Tournamentstubv4LobbyEventDTOWrapper = nexus_1.schema.objectType({
    name: "Tournamentstubv4LobbyEventDTOWrapper",
    definition(t) {
        t.field("eventList", {
            type: exports.Tournamentstubv4LobbyEvent,
            list: [false],
        });
    }
});
exports.Tournamentv4LobbyEvent = nexus_1.schema.objectType({
    name: "Tournamentv4LobbyEvent",
    definition(t) {
        t.string("eventType", { description: "The type of event that was triggered" });
        t.string("summonerId", { description: "The summonerId that triggered the event (Encrypted)" });
        t.string("timestamp", { description: "Timestamp from the event" });
    }
});
exports.Tournamentv4LobbyEventDTOWrapper = nexus_1.schema.objectType({
    name: "Tournamentv4LobbyEventDTOWrapper",
    definition(t) {
        t.field("eventList", {
            type: exports.Tournamentv4LobbyEvent,
            list: [false],
        });
    }
});
exports.Tournamentv4TournamentCode = nexus_1.schema.objectType({
    name: "Tournamentv4TournamentCode",
    definition(t) {
        t.string("code", { description: "The tournament code." });
        t.int("id", { description: "The tournament code's ID." });
        t.string("lobbyName", { description: "The lobby name for the tournament code game." });
        t.string("map", { description: "The game map for the tournament code game" });
        t.string("metaData", { description: "The metadata for tournament code." });
        t.string("participants", {
            list: [false],
            description: "The summonerIds of the participants (Encrypted)",
        });
        t.string("password", { description: "The password for the tournament code game." });
        t.string("pickType", { description: "The pick mode for tournament code game." });
        t.int("providerId", { description: "The provider's ID." });
        t.field("region", {
            type: exports.Region2,
            description: "The tournament code's region.\n             (Legal values:  BR,  EUNE,  EUW,  JP,  LAN,  LAS,  NA,  OCE,  PBE,  RU,  TR)",
        });
        t.string("spectators", { description: "The spectator mode for the tournament code game." });
        t.int("teamSize", { description: "The team size for the tournament code game." });
        t.int("tournamentId", { description: "The tournament's ID." });
    }
});
exports.Valcontentv1Content = nexus_1.schema.objectType({
    name: "Valcontentv1Content",
    definition(t) {
        t.field("characters", {
            type: exports.Valcontentv1ContentItem,
            list: [false],
        });
        t.field("charmLevels", {
            type: exports.Valcontentv1ContentItem,
            list: [false],
        });
        t.field("charms", {
            type: exports.Valcontentv1ContentItem,
            list: [false],
        });
        t.field("chromas", {
            type: exports.Valcontentv1ContentItem,
            list: [false],
        });
        t.field("equips", {
            type: exports.Valcontentv1ContentItem,
            list: [false],
        });
        t.field("gameModes", {
            type: exports.Valcontentv1ContentItem,
            list: [false],
        });
        t.field("maps", {
            type: exports.Valcontentv1ContentItem,
            list: [false],
        });
        t.field("playerCards", {
            type: exports.Valcontentv1ContentItem,
            list: [false],
        });
        t.field("playerTitles", {
            type: exports.Valcontentv1ContentItem,
            list: [false],
        });
        t.field("skinLevels", {
            type: exports.Valcontentv1ContentItem,
            list: [false],
        });
        t.field("skins", {
            type: exports.Valcontentv1ContentItem,
            list: [false],
        });
        t.field("sprayLevels", {
            type: exports.Valcontentv1ContentItem,
            list: [false],
        });
        t.field("sprays", {
            type: exports.Valcontentv1ContentItem,
            list: [false],
        });
        t.string("version");
    }
});
exports.Valcontentv1ContentItem = nexus_1.schema.objectType({
    name: "Valcontentv1ContentItem",
    definition(t) {
        t.string("assetName");
        t.field("localizedNames", {
            type: exports.Valcontentv1LocalizedNames,
            nullable: true,
        });
        t.string("name");
    }
});
exports.Valcontentv1LocalizedNames = nexus_1.schema.objectType({
    name: "Valcontentv1LocalizedNames",
    definition(t) {
        t.string("arAE");
        t.string("deDE");
        t.string("enGB");
        t.string("enUS");
        t.string("esES");
        t.string("esMX");
        t.string("frFR");
        t.string("idID");
        t.string("itIT");
        t.string("jaJP");
        t.string("koKR");
        t.string("plPL");
        t.string("ptBR");
        t.string("ruRU");
        t.string("thTH");
        t.string("trTR");
        t.string("viVN");
        t.string("zhCN");
        t.string("zhTW");
    }
});
exports.Valmatchv1Ability = nexus_1.schema.objectType({
    name: "Valmatchv1Ability",
    definition(t) {
        t.string("ability1Effects");
        t.string("ability2Effects");
        t.string("grenadeEffects");
        t.string("ultimateEffects");
    }
});
exports.Valmatchv1Damage = nexus_1.schema.objectType({
    name: "Valmatchv1Damage",
    definition(t) {
        t.int("bodyshots");
        t.int("damage");
        t.int("headshots");
        t.int("legshots");
        t.string("receiver", { description: "PUUID" });
    }
});
exports.Valmatchv1Economy = nexus_1.schema.objectType({
    name: "Valmatchv1Economy",
    definition(t) {
        t.string("armor");
        t.int("loadoutValue");
        t.int("remaining");
        t.int("spent");
        t.string("weapon");
    }
});
exports.Valmatchv1FinishingDamage = nexus_1.schema.objectType({
    name: "Valmatchv1FinishingDamage",
    definition(t) {
        t.string("damageItem");
        t.string("damageType");
        t.boolean("isSecondaryFireMode");
    }
});
exports.Valmatchv1Kill = nexus_1.schema.objectType({
    name: "Valmatchv1Kill",
    definition(t) {
        t.string("assistants", {
            list: [false],
            description: "List of PUUIDs",
        });
        t.field("finishingDamage", { type: exports.Valmatchv1FinishingDamage });
        t.int("gameTime");
        t.string("killer", { description: "PUUID" });
        t.field("playerLocations", {
            type: exports.Valmatchv1PlayerLocations,
            list: [false],
        });
        t.int("roundTime");
        t.string("victim", { description: "PUUID" });
        t.field("victimLocation", { type: exports.Valmatchv1Location });
    }
});
exports.Valmatchv1Location = nexus_1.schema.objectType({
    name: "Valmatchv1Location",
    definition(t) {
        t.int("x");
        t.int("y");
    }
});
exports.Valmatchv1Match = nexus_1.schema.objectType({
    name: "Valmatchv1Match",
    definition(t) {
        t.field("matchInfo", {
            type: exports.Valmatchv1MatchInfo,
            list: [false],
        });
        t.field("players", {
            type: exports.Valmatchv1Player,
            list: [false],
        });
        t.field("roundResults", {
            type: exports.Valmatchv1RoundResult,
            list: [false],
        });
        t.field("teams", {
            type: exports.Valmatchv1Team,
            list: [false],
        });
    }
});
exports.Valmatchv1MatchInfo = nexus_1.schema.objectType({
    name: "Valmatchv1MatchInfo",
    definition(t) {
        t.string("customGameName");
        t.int("gameLengthMillis");
        t.string("gameMode");
        t.float("gameStartMillis");
        t.boolean("isCompleted");
        t.boolean("isRanked");
        t.string("mapId");
        t.string("matchId");
        t.string("provisioningFlowId");
        t.string("queueId");
        t.string("seasonId");
    }
});
exports.Valmatchv1MatchReference = nexus_1.schema.objectType({
    name: "Valmatchv1MatchReference",
    definition(t) {
        t.float("gameStartTime");
        t.string("matchId");
        t.string("teamId");
    }
});
exports.Valmatchv1Matchlist = nexus_1.schema.objectType({
    name: "Valmatchv1Matchlist",
    definition(t) {
        t.field("history", {
            type: exports.Valmatchv1MatchReference,
            list: [false],
        });
        t.string("puuid");
    }
});
exports.Valmatchv1Player = nexus_1.schema.objectType({
    name: "Valmatchv1Player",
    definition(t) {
        t.string("characterId");
        t.int("competitiveTier");
        t.string("partyId");
        t.string("playerCard");
        t.string("playerTitle");
        t.string("puuid");
        t.field("stats", { type: exports.Valmatchv1PlayerStats });
        t.string("teamId");
    }
});
exports.Valmatchv1PlayerLocations = nexus_1.schema.objectType({
    name: "Valmatchv1PlayerLocations",
    definition(t) {
        t.field("location", { type: exports.Valmatchv1Location });
        t.string("puuid");
        t.float("viewRadians");
    }
});
exports.Valmatchv1PlayerStats = nexus_1.schema.objectType({
    name: "Valmatchv1PlayerStats",
    definition(t) {
        t.field("ability", { type: exports.Valmatchv1Ability });
        t.field("damage", {
            type: exports.Valmatchv1Damage,
            list: [false],
        });
        t.field("economy", { type: exports.Valmatchv1Economy });
        t.field("kills", {
            type: exports.Valmatchv1Kill,
            list: [false],
        });
        t.string("puuid");
        t.int("score");
    }
});
exports.Valmatchv1RoundResult = nexus_1.schema.objectType({
    name: "Valmatchv1RoundResult",
    definition(t) {
        t.string("bombDefuser", { description: "PUUID of player" });
        t.string("bombPlanter", { description: "PUUID of player" });
        t.field("defuseLocation", { type: exports.Valmatchv1Location });
        t.field("defusePlayerLocations", {
            type: exports.Valmatchv1PlayerLocations,
            list: [false],
        });
        t.int("defuseRoundTime");
        t.field("plantLocation", { type: exports.Valmatchv1Location });
        t.field("plantPlayerLocations", {
            type: exports.Valmatchv1PlayerLocations,
            list: [false],
        });
        t.int("plantRoundTime");
        t.string("plantSite");
        t.field("playerStats", {
            type: exports.Valmatchv1PlayerStats,
            list: [false],
        });
        t.string("roundCeremony");
        t.int("roundNum");
        t.string("roundResult");
        t.string("roundResultCode");
        t.string("winningTeam");
    }
});
exports.Valmatchv1Team = nexus_1.schema.objectType({
    name: "Valmatchv1Team",
    definition(t) {
        t.int("roundsPlayed");
        t.int("roundsWon");
        t.string("teamId");
        t.boolean("won");
    }
});
exports.Tournamentstubv4ProviderRegistrationParametersInput = nexus_1.schema.inputObjectType({
    name: "Tournamentstubv4ProviderRegistrationParametersInput",
    definition(t) {
        t.field("region", {
            type: exports.Region,
            required: true,
            description: "The region in which the provider will be running tournaments.\n             (Legal values:  BR,  EUNE,  EUW,  JP,  LAN,  LAS,  NA,  OCE,  PBE,  RU,  TR)",
        });
        t.string("url", {
            required: true,
            description: "The provider's callback URL to which tournament game results in this region\nshould be posted. The URL must be well-formed, use the http or https protocol,\nand use the default port for the protocol (http URLs must use port 80, https\nURLs must use port 443).",
        });
    }
});
exports.Tournamentstubv4TournamentCodeParametersInput = nexus_1.schema.inputObjectType({
    name: "Tournamentstubv4TournamentCodeParametersInput",
    definition(t) {
        t.string("allowedSummonerIds", {
            list: [false],
            description: "Optional list of encrypted summonerIds in order to validate the players\neligible to join the lobby. NOTE: We currently do not enforce participants at\nthe team level, but rather the aggregate of teamOne and teamTwo. We may add\nthe ability to enforce at the team level in the future.",
        });
        t.field("mapType", {
            type: exports.MapType,
            required: true,
            description: "The map type of the game.\n             (Legal values:  SUMMONERS_RIFT,  TWISTED_TREELINE,  HOWLING_ABYSS)",
        });
        t.string("metadata", { description: "Optional string that may contain any data in any format, if specified at all.\nUsed to denote any custom information about the game." });
        t.field("pickType", {
            type: exports.PickType,
            required: true,
            description: "The pick type of the game.\n             (Legal values:  BLIND_PICK,  DRAFT_MODE,  ALL_RANDOM,  TOURNAMENT_DRAFT)",
        });
        t.field("spectatorType", {
            type: exports.SpectatorType,
            required: true,
            description: "The spectator type of the game.\n             (Legal values:  NONE,  LOBBYONLY,  ALL)",
        });
        t.int("teamSize", {
            required: true,
            description: "The team size of the game. Valid values are 1-5.",
        });
    }
});
exports.Tournamentstubv4TournamentRegistrationParametersInput = nexus_1.schema.inputObjectType({
    name: "Tournamentstubv4TournamentRegistrationParametersInput",
    definition(t) {
        t.string("name", { description: "The optional name of the tournament." });
        t.int("providerId", {
            required: true,
            description: "The provider ID to specify the regional registered provider data to associate this tournament.",
        });
    }
});
exports.Tournamentv4ProviderRegistrationParametersInput = nexus_1.schema.inputObjectType({
    name: "Tournamentv4ProviderRegistrationParametersInput",
    definition(t) {
        t.field("region", {
            type: exports.Region,
            required: true,
            description: "The region in which the provider will be running tournaments.\n             (Legal values:  BR,  EUNE,  EUW,  JP,  LAN,  LAS,  NA,  OCE,  PBE,  RU,  TR)",
        });
        t.string("url", {
            required: true,
            description: "The provider's callback URL to which tournament game results in this region\nshould be posted. The URL must be well-formed, use the http or https protocol,\nand use the default port for the protocol (http URLs must use port 80, https\nURLs must use port 443).",
        });
    }
});
exports.Tournamentv4TournamentCodeParametersInput = nexus_1.schema.inputObjectType({
    name: "Tournamentv4TournamentCodeParametersInput",
    definition(t) {
        t.string("allowedSummonerIds", {
            list: [false],
            description: "Optional list of encrypted summonerIds in order to validate the players\neligible to join the lobby. NOTE: We currently do not enforce participants at\nthe team level, but rather the aggregate of teamOne and teamTwo. We may add\nthe ability to enforce at the team level in the future.",
        });
        t.field("mapType", {
            type: exports.MapType,
            required: true,
            description: "The map type of the game.\n             (Legal values:  SUMMONERS_RIFT,  TWISTED_TREELINE,  HOWLING_ABYSS)",
        });
        t.string("metadata", { description: "Optional string that may contain any data in any format, if specified at all.\nUsed to denote any custom information about the game." });
        t.field("pickType", {
            type: exports.PickType,
            required: true,
            description: "The pick type of the game.\n             (Legal values:  BLIND_PICK,  DRAFT_MODE,  ALL_RANDOM,  TOURNAMENT_DRAFT)",
        });
        t.field("spectatorType", {
            type: exports.SpectatorType,
            required: true,
            description: "The spectator type of the game.\n             (Legal values:  NONE,  LOBBYONLY,  ALL)",
        });
        t.int("teamSize", {
            required: true,
            description: "The team size of the game. Valid values are 1-5.",
        });
    }
});
exports.Tournamentv4TournamentCodeUpdateParametersInput = nexus_1.schema.inputObjectType({
    name: "Tournamentv4TournamentCodeUpdateParametersInput",
    definition(t) {
        t.string("allowedSummonerIds", {
            list: [false],
            description: "Optional list of encrypted summonerIds in order to validate the players\neligible to join the lobby. NOTE: We currently do not enforce participants at\nthe team level, but rather the aggregate of teamOne and teamTwo. We may add\nthe ability to enforce at the team level in the future.",
        });
        t.field("mapType", {
            type: exports.MapType2,
            required: true,
            description: "The map type\n             (Legal values:  SUMMONERS_RIFT,  TWISTED_TREELINE,  HOWLING_ABYSS)",
        });
        t.field("pickType", {
            type: exports.PickType2,
            required: true,
            description: "The pick type\n             (Legal values:  BLIND_PICK,  DRAFT_MODE,  ALL_RANDOM,  TOURNAMENT_DRAFT)",
        });
        t.field("spectatorType", {
            type: exports.SpectatorType2,
            required: true,
            description: "The spectator type\n             (Legal values:  NONE,  LOBBYONLY,  ALL)",
        });
    }
});
exports.Tournamentv4TournamentRegistrationParametersInput = nexus_1.schema.inputObjectType({
    name: "Tournamentv4TournamentRegistrationParametersInput",
    definition(t) {
        t.string("name", { description: "The optional name of the tournament." });
        t.int("providerId", {
            required: true,
            description: "The provider ID to specify the regional registered provider data to associate this tournament.",
        });
    }
});
exports.Division = nexus_1.schema.enumType({
    name: "Division",
    members: ["I", "II", "III", "IV"],
});
exports.Division2 = nexus_1.schema.enumType({
    name: "Division2",
    members: ["I", "II", "III", "IV"],
});
exports.Game = nexus_1.schema.enumType({
    name: "Game",
    members: ["VAL", "LOR"],
});
exports.GameMode = nexus_1.schema.enumType({
    name: "GameMode",
    members: ["CLASSIC", "ODIN", "ARAM", "TUTORIAL", "ONEFORALL", "ASCENSION", "FIRSTBLOOD", "KINGPORO"],
});
exports.GameType = nexus_1.schema.enumType({
    name: "GameType",
    members: ["CUSTOM_GAME", "MATCHED_GAME", "TUTORIAL_GAME"],
});
exports.HighestAchievedSeasonTier = nexus_1.schema.enumType({
    name: "HighestAchievedSeasonTier",
    members: ["CHALLENGER", "MASTER", "DIAMOND", "PLATINUM", "GOLD", "SILVER", "BRONZE", "UNRANKED"],
});
exports.Lane = nexus_1.schema.enumType({
    name: "Lane",
    members: ["MID", "MIDDLE", "TOP", "JUNGLE", "BOT", "BOTTOM"],
});
exports.MapType = nexus_1.schema.enumType({
    name: "MapType",
    members: ["SUMMONERS_RIFT", "TWISTED_TREELINE", "HOWLING_ABYSS"],
});
exports.MapType2 = nexus_1.schema.enumType({
    name: "MapType2",
    members: ["SUMMONERS_RIFT", "TWISTED_TREELINE", "HOWLING_ABYSS"],
});
exports.PickType = nexus_1.schema.enumType({
    name: "PickType",
    members: ["BLIND_PICK", "DRAFT_MODE", "ALL_RANDOM", "TOURNAMENT_DRAFT"],
});
exports.PickType2 = nexus_1.schema.enumType({
    name: "PickType2",
    members: ["BLIND_PICK", "DRAFT_MODE", "ALL_RANDOM", "TOURNAMENT_DRAFT"],
});
exports.Position = nexus_1.schema.enumType({
    name: "Position",
    members: ["UNSELECTED", "FILL", "TOP", "JUNGLE", "MIDDLE", "BOTTOM", "UTILITY"],
});
exports.Queue = nexus_1.schema.enumType({
    name: "Queue",
    members: ["RANKED_SOLO_5X5", "RANKED_TFT", "RANKED_FLEX_SR", "RANKED_FLEX_TT"],
});
exports.Queue2 = nexus_1.schema.enumType({
    name: "Queue2",
    members: ["RANKED_SOLO_5X5", "RANKED_FLEX_SR", "RANKED_FLEX_TT"],
});
exports.Region = nexus_1.schema.enumType({
    name: "Region",
    members: ["BR", "EUNE", "EUW", "JP", "LAN", "LAS", "NA", "OCE", "PBE", "RU", "TR"],
});
exports.Region2 = nexus_1.schema.enumType({
    name: "Region2",
    members: ["BR", "EUNE", "EUW", "JP", "LAN", "LAS", "NA", "OCE", "PBE", "RU", "TR"],
});
exports.Role = nexus_1.schema.enumType({
    name: "Role",
    members: ["CAPTAIN", "MEMBER"],
});
exports.Role2 = nexus_1.schema.enumType({
    name: "Role2",
    members: ["DUO", "NONE", "SOLO", "DUO_CARRY", "DUO_SUPPORT"],
});
exports.SpectatorType = nexus_1.schema.enumType({
    name: "SpectatorType",
    members: ["NONE", "LOBBYONLY", "ALL"],
});
exports.SpectatorType2 = nexus_1.schema.enumType({
    name: "SpectatorType2",
    members: ["NONE", "LOBBYONLY", "ALL"],
});
exports.Tier = nexus_1.schema.enumType({
    name: "Tier",
    members: ["CHALLENGER", "GRANDMASTER", "MASTER", "DIAMOND", "PLATINUM", "GOLD", "SILVER", "BRONZE", "IRON"],
});
exports.Tier2 = nexus_1.schema.enumType({
    name: "Tier2",
    members: ["DIAMOND", "PLATINUM", "GOLD", "SILVER", "BRONZE", "IRON"],
});
exports.Tier3 = nexus_1.schema.enumType({
    name: "Tier3",
    members: ["DIAMOND", "PLATINUM", "GOLD", "SILVER", "BRONZE", "IRON"],
});
exports.Type = nexus_1.schema.enumType({
    name: "Type",
    members: ["CHAMPION_KILL", "WARD_PLACED", "WARD_KILL", "BUILDING_KILL", "ELITE_MONSTER_KILL", "ITEM_PURCHASED", "ITEM_SOLD", "ITEM_DESTROYED", "ITEM_UNDO", "SKILL_LEVEL_UP", "ASCENDED_EVENT", "CAPTURE_POINT", "PORO_KING_SUMMON"],
});
exports.Win = nexus_1.schema.enumType({
    name: "Win",
    members: ["FAIL", "WIN"],
});
exports.JSON = nexus_1.schema.scalarType({
    name: "JSON",
    description: "The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).",
    serialize() { },
    parseValue() { },
    parseLiteral() { }
});
