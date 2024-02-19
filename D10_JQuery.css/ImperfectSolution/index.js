/**
 * Creates a jQuery-like object for manipulating CSS properties of a selected element.
 * @param {string} selector - The CSS selector for the element to be selected.
 * @returns {Object} - The jQuery-like object with a `css` method for manipulating CSS properties.
 */
export default function $(selector) {
  const element = document.querySelector(selector);

  return {
    /**
     * Gets or sets the value of a CSS property for the selected element.
     * @param {string} prop - The name of the CSS property.
     * @param {boolean|string|number} value - The value to set for the CSS property. If not provided, the current value of the property is returned.
     * @returns {Object|void|string} - If `value` is provided, returns the jQuery-like object for method chaining. If `value` is not provided, returns the current value of the CSS property.
     */
    css: function (prop, value) {
      // Getter case.
      if (value === undefined) {
        // No matching elements.
        if (element == null) {
          return undefined;
        }

        const value = element.style[prop];
        return value === '' ? undefined : value;
      }

      // Setter case.
      if (element != null) {
        element.style[prop] = value;
      }

      return this;
    },
  };
}
