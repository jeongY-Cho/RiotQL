"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupRegions = exports.removeNulls = void 0;
const graphql_1 = require("./generated/graphql");
const rfdc = require("rfdc")();
// @ts-ignore
function removeNulls(val) {
    function removeNull(val) {
        if (val) {
            return val;
        }
        else {
            return undefined;
        }
    }
    if (val instanceof Array) {
        return val.map(removeNulls);
    }
    if (val instanceof Object) {
        const valCopy = rfdc(val);
        for (const key of Object.keys(valCopy)) {
            valCopy[key] = removeNull(valCopy[key]);
        }
        return valCopy;
    }
    return removeNull(val);
}
exports.removeNulls = removeNulls;
// TODO figure out type safety for this
function groupRegions(region) {
    switch (region) {
        //  NA, BR, LAN, LAS, and OCE is americas
        case "na1":
        case "br1":
        case "la1":
        case "la2":
        case "oc1":
            return graphql_1.RegionInput.Americas;
        // KR and JP is asia
        case "kr":
        case "jp1":
            return graphql_1.RegionInput.Asia;
        //  EUNE, EUW, TR, and RU is europe
        case "eun1":
        case "euw1":
        case "tr1":
        case "ru":
            return graphql_1.RegionInput.Europe;
        default:
            throw new Error("invalid region");
    }
}
exports.groupRegions = groupRegions;
