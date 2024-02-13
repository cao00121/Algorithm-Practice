/**
 * @param {Array} array
 * @return {Array}
 */
export default function uniqueArray(array) {
  // Convert the array into a set to remove the duplicated items.
  const uniqueSet = new Set(array);
  // Use the Extended operator to convert the set into an array.
  return [...uniqueSet];
}