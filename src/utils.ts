import { RegionInput } from "./generated/graphql";

const rfdc = require("rfdc")();

// @ts-ignore
export function removeNulls<T>(val: T) {
  function removeNull<T>(val: T): NonNullable<T> | undefined {
    if (val) {
      return val as NonNullable<T>;
    } else {
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

// TODO figure out type safety for this
export function groupRegions(region: any): any {
  switch (region) {
    //  NA, BR, LAN, LAS, and OCE is americas
    case "na1":
    case "br1":
    case "la1":
    case "la2":
    case "oc1":
      return RegionInput.Americas;
    // KR and JP is asia
    case "kr":
    case "jp1":
      return RegionInput.Asia;
    //  EUNE, EUW, TR, and RU is europe
    case "eun1":
    case "euw1":
    case "tr1":
    case "ru":
      return RegionInput.Europe;
    default:
      throw new Error("invalid region");
  }
}
