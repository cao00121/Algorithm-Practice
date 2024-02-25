/**
 * @param {Array<*|Array>} value
 * @return {Array}
 */
export default function flatten(value) {
  const result = [];

  function flattenArray(arr) {
    arr.forEach(item => {
      if (Array.isArray(item)) {
        flattenArray(item);
      } else {
        result.push(item);
      }
    });
  }

  flattenArray(value);
  return result;
}