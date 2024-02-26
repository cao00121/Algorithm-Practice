/**
 * @param {Array} iterable
 * @return {Promise<Array>}
 */
export default function promiseAll(iterable) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(iterable)) {
      return reject(new TypeError('The input must be an array'));
    }

    if (iterable.length === 0) {
      return resolve([]);
    }

    let resolvedCount = 0;

    const results = new Array(iterable.length);

    iterable.forEach((item, index) => {
      Promise.resolve(item).then((value) => {
        results[index] = value;
        resolvedCount++;

        if (resolvedCount === iterable.length) {
          resolve(results);
        }
      })
      .catch((error) => {
        reject(error);
      });
    });
  });
}