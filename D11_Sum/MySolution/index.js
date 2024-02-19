/**
 * @param {number} value
 * @return {Function}
 */
export default function sum(value) {
  return function innerSum(nextValue) {
    if (nextValue !== undefined) {
      return sum(value + nextValue);
    } else {
      return value;
    }
  };
}