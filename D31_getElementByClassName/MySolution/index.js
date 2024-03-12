/**
 * @param {Element} element
 * @param {string} classNames
 * @return {Array<Element>}
 */
export default function getElementsByClassName(element, classNames) {
  const classList = classNames.split(' ').filter(Boolean);
  const result = [];

  function traverse(node) {
    if (node.nodeType === Node.ELEMENT_NODE) {
      const elementClasses = node.classList;
      if (classList.every((className) => elementClasses.contains(className))) {
        result.push(node);
      }

      node.childNodes.forEach(traverse);
    }
  }

  element.childNodes.forEach(traverse);
  return result;
}