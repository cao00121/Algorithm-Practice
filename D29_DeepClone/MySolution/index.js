/**
 * @template T
 * @param {T} value
 * @return {T}
 */
export default function deepClone(value) {
  if (typeof value !== 'object' || value === null) {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map(item => deepClone(item));
  }

  const clonedObj = {};
  for (const key in value) {
    clonedObj[key] = deepClone(value[key]);
  }

  return clonedObj;
}