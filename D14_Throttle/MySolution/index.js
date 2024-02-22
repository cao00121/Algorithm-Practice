export default function throttle(func, wait) {
  let timeout = null;
  let shouldCall = true;

  return function() {
    if (shouldCall) {
      func.apply(this, arguments);
      shouldCall = false;
      timeout = setTimeout(() => {
        shouldCall = true;
      }, wait);
    }
  };
}
