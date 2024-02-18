/**
 * @param {any} thisArg
 * @param {...*} argArray
 * @return {Function}
 */
Function.prototype.myBind = function (thisArg, ...argArray) {
  const originalFn = this;
  return function(...addtionalArgs) {
    return originalFn.apply(thisArg, argArray.concat(addtionalArgs));
  };
};