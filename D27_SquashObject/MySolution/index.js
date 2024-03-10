/**
 * @param {Object} obj
 * @return {Object}
 */
export default function squashObject(obj, prefix = '') {
  const squashed = {};

  for (const key in obj) {
    const value = obj[key];
    let newKey = prefix ? `${prefix}.${key}` : key;

    if (key === '' && prefix) {
      newKey = prefix;
    }

    if (value && typeof value === 'object') {
      if (Array.isArray(value)) {
        value.forEach((item, index) => {
          Object.assign(squashed, squashObject({ [index]: item }, newKey));
        });
      } else {
        Object.assign(squashed, squashObject(value, newKey));
      }
    } else {
      squashed[newKey] = value;
    }
  }

  return squashed;
}