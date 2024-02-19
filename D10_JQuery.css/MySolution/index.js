/**
 * Creates a jQuery-like object for manipulating DOM elements.
 * @param {string} selector - The CSS selector used to select the DOM element(s).
 * @returns {{css: Function}} - An object with a `css` method for manipulating CSS properties of the selected element(s).
 */
export default function $(selector) {
  const element = document.querySelector(selector);

  return {
    /**
     * Sets or retrieves the value of a CSS property for the selected element.
     * @param {string} property - The name of the CSS property.
     * @param {string} [value] - The value to set for the CSS property. If not provided, retrieves the current value of the property.
     * @returns {object|string|undefined} - If `value` is provided, returns the jQuery-like object for method chaining. If `value` is not provided, returns the current value of the CSS property. If the selected element is not found, returns `undefined`.
     */
    css: function (property, value) {
      if (!element) {
        return value === undefined ? undefined : this;
      }

      if (value !== undefined) {
        element.style[property] = value;
        return this;
      } else {
        const style = getComputedStyle(element)[property];
        return style === "" ? undefined : style;
      }
    }
  };
}