/**
 * @param {Array} iterable
 * @return {Promise<Array<{status: 'fulfilled', value: *}|{status: 'rejected', reason: *}>>}
 */
export default function promiseAllSettled(iterable) {
  return new Promise((resolve) => {
    const results = [];
    let count = iterable.length;

    if (count === 0) {
      resolve([]);
    }

    iterable.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = { status: 'fulfilled', value };
        })
        .catch((reason) => {
          results[index] = { status: 'rejected', reason};
        })
        .finally(() => {
          count -= 1;
          if (count === 0) {
            resolve(results);
          }
        });
    });
  });
}