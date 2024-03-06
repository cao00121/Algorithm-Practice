/**
 * @param {*} value
 * @return {string}
 */
export default function jsonStringify(value) {
  if (value === null) {
    return 'null';
  }

  switch (typeof value) {
    case 'string':
      return `"${value}"`;
    case 'number':
    case 'boolean':
      return String(value);
    case 'object':
      if (Array.isArray(value)) {
        return `[${value.map(jsonStringify).join(',')}]`;
      } else {
        return `{${Object.entries(value)
        .map(([key, val]) => `"${key}":${jsonStringify(val)}`)
        .join(',')}}`;
      }

      default:
        return undefined;

  }
}