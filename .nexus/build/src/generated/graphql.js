"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Win = exports.UpperTier = exports.Type = exports.Tier3 = exports.Tier2 = exports.Tier = exports.SpectatorType = exports.Role2 = exports.Role = exports.RegionInput = exports.Region2 = exports.Region = exports.QueueId = exports.Queue2 = exports.Queue = exports.Position = exports.PickType = exports.MapType = exports.LowerTier = exports.Lane = exports.HighestAchievedSeasonTier = exports.GameType = exports.GameMode = exports.Game = exports.Division2 = exports.Division = exports.AllRankedQueues = void 0;
var AllRankedQueues;
(function (AllRankedQueues) {
    AllRankedQueues["RankedSolo_5x5"] = "RANKED_SOLO_5x5";
    AllRankedQueues["RankedTft"] = "RANKED_TFT";
    AllRankedQueues["RankedFlexSr"] = "RANKED_FLEX_SR";
    AllRankedQueues["RankedFlexTt"] = "RANKED_FLEX_TT";
})(AllRankedQueues = exports.AllRankedQueues || (exports.AllRankedQueues = {}));
var Division;
(function (Division) {
    Division["I"] = "I";
    Division["Ii"] = "II";
    Division["Iii"] = "III";
    Division["Iv"] = "IV";
})(Division = exports.Division || (exports.Division = {}));
var Division2;
(function (Division2) {
    Division2["I"] = "I";
    Division2["Ii"] = "II";
    Division2["Iii"] = "III";
    Division2["Iv"] = "IV";
})(Division2 = exports.Division2 || (exports.Division2 = {}));
var Game;
(function (Game) {
    Game["League"] = "League";
    Game["Tft"] = "TFT";
    /** LOR is not implemented */
    Game["Lor"] = "LOR";
})(Game = exports.Game || (exports.Game = {}));
var GameMode;
(function (GameMode) {
    GameMode["Classic"] = "CLASSIC";
    GameMode["Odin"] = "ODIN";
    GameMode["Aram"] = "ARAM";
    GameMode["Tutorial"] = "TUTORIAL";
    GameMode["Oneforall"] = "ONEFORALL";
    GameMode["Ascension"] = "ASCENSION";
    GameMode["Firstblood"] = "FIRSTBLOOD";
    GameMode["Kingporo"] = "KINGPORO";
})(GameMode = exports.GameMode || (exports.GameMode = {}));
var GameType;
(function (GameType) {
    GameType["CustomGame"] = "CUSTOM_GAME";
    GameType["MatchedGame"] = "MATCHED_GAME";
    GameType["TutorialGame"] = "TUTORIAL_GAME";
})(GameType = exports.GameType || (exports.GameType = {}));
var HighestAchievedSeasonTier;
(function (HighestAchievedSeasonTier) {
    HighestAchievedSeasonTier["Challenger"] = "CHALLENGER";
    HighestAchievedSeasonTier["Master"] = "MASTER";
    HighestAchievedSeasonTier["Diamond"] = "DIAMOND";
    HighestAchievedSeasonTier["Platinum"] = "PLATINUM";
    HighestAchievedSeasonTier["Gold"] = "GOLD";
    HighestAchievedSeasonTier["Silver"] = "SILVER";
    HighestAchievedSeasonTier["Bronze"] = "BRONZE";
    HighestAchievedSeasonTier["Unranked"] = "UNRANKED";
})(HighestAchievedSeasonTier = exports.HighestAchievedSeasonTier || (exports.HighestAchievedSeasonTier = {}));
var Lane;
(function (Lane) {
    Lane["Mid"] = "MID";
    Lane["Middle"] = "MIDDLE";
    Lane["Top"] = "TOP";
    Lane["Jungle"] = "JUNGLE";
    Lane["Bot"] = "BOT";
    Lane["Bottom"] = "BOTTOM";
})(Lane = exports.Lane || (exports.Lane = {}));
var LowerTier;
(function (LowerTier) {
    LowerTier["Diamond"] = "DIAMOND";
    LowerTier["Platinum"] = "PLATINUM";
    LowerTier["Gold"] = "GOLD";
    LowerTier["Silver"] = "SILVER";
    LowerTier["Bronze"] = "BRONZE";
    LowerTier["Iron"] = "IRON";
    LowerTier["Unranked"] = "UNRANKED";
})(LowerTier = exports.LowerTier || (exports.LowerTier = {}));
var MapType;
(function (MapType) {
    MapType["SummonersRift"] = "SUMMONERS_RIFT";
    MapType["TwistedTreeline"] = "TWISTED_TREELINE";
    MapType["HowlingAbyss"] = "HOWLING_ABYSS";
})(MapType = exports.MapType || (exports.MapType = {}));
var PickType;
(function (PickType) {
    PickType["BlindPick"] = "BLIND_PICK";
    PickType["DraftMode"] = "DRAFT_MODE";
    PickType["AllRandom"] = "ALL_RANDOM";
    PickType["TournamentDraft"] = "TOURNAMENT_DRAFT";
})(PickType = exports.PickType || (exports.PickType = {}));
var Position;
(function (Position) {
    Position["Unselected"] = "UNSELECTED";
    Position["Fill"] = "FILL";
    Position["Top"] = "TOP";
    Position["Jungle"] = "JUNGLE";
    Position["Middle"] = "MIDDLE";
    Position["Bottom"] = "BOTTOM";
    Position["Utility"] = "UTILITY";
})(Position = exports.Position || (exports.Position = {}));
var Queue;
(function (Queue) {
    Queue["RankedSolo_5X5"] = "RANKED_SOLO_5X5";
    Queue["RankedTft"] = "RANKED_TFT";
    Queue["RankedFlexSr"] = "RANKED_FLEX_SR";
    Queue["RankedFlexTt"] = "RANKED_FLEX_TT";
})(Queue = exports.Queue || (exports.Queue = {}));
var Queue2;
(function (Queue2) {
    Queue2["RankedSolo_5X5"] = "RANKED_SOLO_5X5";
    Queue2["RankedFlexSr"] = "RANKED_FLEX_SR";
    Queue2["RankedFlexTt"] = "RANKED_FLEX_TT";
})(Queue2 = exports.Queue2 || (exports.Queue2 = {}));
/** League Game Queue Ids */
var QueueId;
(function (QueueId) {
    QueueId["Q420"] = "q420";
    QueueId["Q440"] = "q440";
})(QueueId = exports.QueueId || (exports.QueueId = {}));
var Region;
(function (Region) {
    Region["Br"] = "BR";
    Region["Eune"] = "EUNE";
    Region["Euw"] = "EUW";
    Region["Jp"] = "JP";
    Region["Lan"] = "LAN";
    Region["Las"] = "LAS";
    Region["Na"] = "NA";
    Region["Oce"] = "OCE";
    Region["Pbe"] = "PBE";
    Region["Ru"] = "RU";
    Region["Tr"] = "TR";
})(Region = exports.Region || (exports.Region = {}));
var Region2;
(function (Region2) {
    Region2["Br"] = "BR";
    Region2["Eune"] = "EUNE";
    Region2["Euw"] = "EUW";
    Region2["Jp"] = "JP";
    Region2["Lan"] = "LAN";
    Region2["Las"] = "LAS";
    Region2["Na"] = "NA";
    Region2["Oce"] = "OCE";
    Region2["Pbe"] = "PBE";
    Region2["Ru"] = "RU";
    Region2["Tr"] = "TR";
})(Region2 = exports.Region2 || (exports.Region2 = {}));
var RegionInput;
(function (RegionInput) {
    RegionInput["Br1"] = "br1";
    RegionInput["Eun1"] = "eun1";
    RegionInput["Euw1"] = "euw1";
    RegionInput["Jp1"] = "jp1";
    RegionInput["Kr"] = "kr";
    RegionInput["La1"] = "la1";
    RegionInput["La2"] = "la2";
    RegionInput["Na1"] = "na1";
    RegionInput["Oc1"] = "oc1";
    RegionInput["Tr1"] = "tr1";
    RegionInput["Ru"] = "ru";
    RegionInput["Americas"] = "americas";
    RegionInput["Asia"] = "asia";
    RegionInput["Europe"] = "europe";
})(RegionInput = exports.RegionInput || (exports.RegionInput = {}));
var Role;
(function (Role) {
    Role["Captain"] = "CAPTAIN";
    Role["Member"] = "MEMBER";
})(Role = exports.Role || (exports.Role = {}));
var Role2;
(function (Role2) {
    Role2["Duo"] = "DUO";
    Role2["None"] = "NONE";
    Role2["Solo"] = "SOLO";
    Role2["DuoCarry"] = "DUO_CARRY";
    Role2["DuoSupport"] = "DUO_SUPPORT";
})(Role2 = exports.Role2 || (exports.Role2 = {}));
var SpectatorType;
(function (SpectatorType) {
    SpectatorType["None"] = "NONE";
    SpectatorType["Lobbyonly"] = "LOBBYONLY";
    SpectatorType["All"] = "ALL";
})(SpectatorType = exports.SpectatorType || (exports.SpectatorType = {}));
var Tier;
(function (Tier) {
    Tier["Challenger"] = "CHALLENGER";
    Tier["Grandmaster"] = "GRANDMASTER";
    Tier["Master"] = "MASTER";
    Tier["Diamond"] = "DIAMOND";
    Tier["Platinum"] = "PLATINUM";
    Tier["Gold"] = "GOLD";
    Tier["Silver"] = "SILVER";
    Tier["Bronze"] = "BRONZE";
    Tier["Iron"] = "IRON";
})(Tier = exports.Tier || (exports.Tier = {}));
var Tier2;
(function (Tier2) {
    Tier2["Diamond"] = "DIAMOND";
    Tier2["Platinum"] = "PLATINUM";
    Tier2["Gold"] = "GOLD";
    Tier2["Silver"] = "SILVER";
    Tier2["Bronze"] = "BRONZE";
    Tier2["Iron"] = "IRON";
})(Tier2 = exports.Tier2 || (exports.Tier2 = {}));
var Tier3;
(function (Tier3) {
    Tier3["Diamond"] = "DIAMOND";
    Tier3["Platinum"] = "PLATINUM";
    Tier3["Gold"] = "GOLD";
    Tier3["Silver"] = "SILVER";
    Tier3["Bronze"] = "BRONZE";
    Tier3["Iron"] = "IRON";
})(Tier3 = exports.Tier3 || (exports.Tier3 = {}));
var Type;
(function (Type) {
    Type["ChampionKill"] = "CHAMPION_KILL";
    Type["WardPlaced"] = "WARD_PLACED";
    Type["WardKill"] = "WARD_KILL";
    Type["BuildingKill"] = "BUILDING_KILL";
    Type["EliteMonsterKill"] = "ELITE_MONSTER_KILL";
    Type["ItemPurchased"] = "ITEM_PURCHASED";
    Type["ItemSold"] = "ITEM_SOLD";
    Type["ItemDestroyed"] = "ITEM_DESTROYED";
    Type["ItemUndo"] = "ITEM_UNDO";
    Type["SkillLevelUp"] = "SKILL_LEVEL_UP";
    Type["AscendedEvent"] = "ASCENDED_EVENT";
    Type["CapturePoint"] = "CAPTURE_POINT";
    Type["PoroKingSummon"] = "PORO_KING_SUMMON";
})(Type = exports.Type || (exports.Type = {}));
var UpperTier;
(function (UpperTier) {
    UpperTier["Challenger"] = "CHALLENGER";
    UpperTier["Grandmaster"] = "GRANDMASTER";
    UpperTier["Master"] = "MASTER";
})(UpperTier = exports.UpperTier || (exports.UpperTier = {}));
var Win;
(function (Win) {
    Win["Fail"] = "FAIL";
    Win["Win"] = "WIN";
})(Win = exports.Win || (exports.Win = {}));
