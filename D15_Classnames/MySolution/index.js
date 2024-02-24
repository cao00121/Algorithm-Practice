/**
 * @param {...(any|Object|Array<any|Object|Array>)} args
 * @return {string}
 */
export default function classNames(...args) {
  let classes = [];

  args.forEach(arg => {
    if (typeof arg === 'string' && arg.trim() !== '') {
      classes.push(arg);
    } else if (typeof arg === 'number' && arg !== 0) {
      classes.push(String(arg));
    } else if (Array.isArray(arg)) {
      classes.push(classNames(...arg).split(' '));
    } else if (typeof arg === 'object' && arg !== null) {
      Object.keys(arg).forEach(key => {
        if (arg[key]) {
          classes.push(key);
        }
      });
    }
  })

  return classes.join(' ').trim();
}