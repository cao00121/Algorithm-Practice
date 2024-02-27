/**
 * @param Object
 * @return Object
 */
export default function camelCaseKeys(object) {
  function toCamelCase(str) {
    return str.split('_').map((word, index) => {
      if (index === 0) return word.toLowerCase();
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join('');

  }
  function convertKeys(obj) {
    if (Array.isArray(obj)) {
      return obj.map(element => convertKeys(element));
    } else if (obj && typeof obj === 'object') {
      return Object.keys(obj).reduce((newObj, key) => {
        let camelCaseKey = toCamelCase(key);
        newObj[camelCaseKey] = convertKeys(obj[key]);
        return newObj;
      }, {});
    } else {
      return obj;
    }
  }

  return convertKeys(object);
}