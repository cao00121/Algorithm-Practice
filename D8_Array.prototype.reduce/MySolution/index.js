/**
 * @template T, U
 * @param {(previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U} callbackFn
 * @param {U} [initialValue]
 * @return {Array<U>}
 */
Array.prototype.myReduce = function (callbackFn, initialValue) {
  let accumulator;
  let startIndex;
  let found = false;

  if (initialValue !== undefined) {
    accumulator = initialValue;
    startIndex = 0;
  } else {
    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined) {
        accumulator = this[i];
        startIndex = i + 1;
        found = true;
        break;
      }
    }
    if (!found) {
      throw new TypeError("FUCKING EMPTY ARRAY, WHAT DO YOU WANT ME TO DO???")
    }
  }

  for (let i = startIndex; i < this.length; i++) {
    if (this[i] !== undefined) {
      accumulator = callbackFn(accumulator, this[i], i, this);
    }
  }

  return accumulator;
};