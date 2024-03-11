import { type } from "express/lib/response";

/**
 * @param {*} valueA
 * @param {*} valueB
 * @return {boolean}
 */
export default function deepEqual(valueA, valueB) {
  // Check if both values are the same or are both NaN (since NaN === NaN is false)
  if (valueA === valueB || (Number.isNaN(valueA) && Number.isNaN(valueB))) {
    return true;
  }

  // Check the type of both values
  const typeA = typeof valueA;
  const typeB = typeof valueB;
  
  // If types are different, return false
  if (typeA !== typeB) {
    return false;
  }

  // Check if both values are objects(including arrays)
  if (typeA === 'object' && valueA !== null && valueB !== null) {
    // Check if one is an array and the other is not
    if (Array.isArray(valueA) !== Array.isArray(valueB)) {
      return false;
    }

    // Check if both objects hvae the same number of properties
    const keysA = Object.keys(valueA);
    const keysB = Object.keys(valueB);
    if (keysA.length !== keysB.length) {
      return false;
    }

    //Recursively check each property in both objects
    for (const key of keysA) {
      if (!keysB.includes(key) || !deepEqual(valueA[key], valueB[key])) {
        return false;
      }
    }

    return true;
  }

  // If none of the above conditions are met, the values are not equal
  return false;
}