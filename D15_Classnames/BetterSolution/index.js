export default function classNames(...args) {
  const classes = [];

  args.forEach((arg) => {
    if (!arg) {
      return; // Ignore falsy values.
    }

    const argType = typeof arg;

    if (argType === 'string' || argType === 'number') {
      classes.push(arg); // Handle string and numbers.
      return;
    }

    if (Array.isArray(arg)) {
      classes.push(classNames(...arg)); // Handle arrays recursively.
      return;
    }

    if (argType === 'object') {
      for (const key in arg) {
        if (Object.hasOwn(arg, key) && arg[key]) {
          classes.push(key); // Handle objects by adding keys with truthy values.
        }
      }

      return;
    }
  });

  return classes.join(' '); // Join the collected classes into a string.
}
