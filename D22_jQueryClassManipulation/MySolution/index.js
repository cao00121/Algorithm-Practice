/**
 * @param {string} selector
 * @return {{toggleClass: Function, addClass: Function, removeClass: Function}}
 */
export default function $(selector) {
  const element = document.querySelector(selector);

  return {
    /**
     * @param {string} className
     * @param {boolean} [state]
     * @return {Object|void}
     */
    toggleClass: function (className, state) {
      const classNames = className.trim().split(/\s+/);
      classNames.forEach(cls => {
        if (typeof state === 'boolean') {
          if (state) {
            element.classList.add(cls);
          } else {
            element.classList.remove(cls);
          }
        } else {
          if (element.classList.contains(cls)) {
            element.classList.remove(cls);
          } else {
            element.classList.add(cls);
          }
        }
      });
      return this;
    },
    /**
     * @param {string} className
     * @return {Object}
     */
    addClass: function (className) {
      const classNames = className.trim().split(/\s+/);
      classNames.forEach(cls => {
        element.classList.add(cls);
      });
      return this;
    },
    /**
     * @param {string} className
     * @return {Object}
     */
    removeClass: function (className) {
      const classNames = className.trim().split(/\s+/);
      classNames.forEach(cls => {
        element.classList.remove(cls);
      });
      return this;
    },
  };
}