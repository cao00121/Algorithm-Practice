import { Aggregate } from "mongoose";

/**
 * @param {Array} iterable
 * @return {Promise}
 */
export default function promiseAny(iterable) {
  return new Promise((resolve, reject) => {
    if (iterable.length === 0) {
      reject(new AggregateError([]));
    }

    let rejectedCount = 0;
    const errors = [];

    iterable.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(value => {
          resolve(value);
        })
        .catch(err => {
          rejectedCount++;
          errors[index] = err;
          if (rejectedCount === iterable.length) {
            reject(new AggregateError(errors));
          }
        });
    });
  });
}