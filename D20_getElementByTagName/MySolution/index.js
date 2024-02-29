/**
 * @param {Element} el
 * @param {string} tagName
 * @return {Array<Element>}
 */
export default function getElementsByTagName(el, tagName) {
  const result = [];

  const upperTagName = tagName.toUpperCase();

  function searchDescendants(element) {
    for (let i = 0; i < element.childNodes.length; i++) {
      const child = element.childNodes[i];

      if (child.nodeType === Node.ELEMENT_NODE && child.tagName === upperTagName) {
        result.push(child);
      }

      searchDescendants(child);
    }
  }

  searchDescendants(el);

  return result;
}