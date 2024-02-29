/**
 * @param {Function} func
 * @return {Function}
 */
export default function curry(func) {
  return function curried(...args) {
    const context = this;
    if (args.length >= func.length) {
      return func.apply(context, args);
    } else {
      return function(...args2) {
        const allArgs = args.concat(args2);
        if (allArgs.length >= func.length) {
          return func.apply(context, allArgs);
        } else {
          return curried.apply(context, allArgs);
        }
      };
    }
  };
}