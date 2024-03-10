/**
 * @param {string} text
 * @param {string} query
 * @return {string}
 */
export default function textSearch(text, query) {
  if (!query) {
    return text;
  }

  const escapedQuery = query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  const regex = new RegExp(`(${escapedQuery})+`, 'gi');
  return text.replace(regex, (match) => `<b>${match}</b>`);
}