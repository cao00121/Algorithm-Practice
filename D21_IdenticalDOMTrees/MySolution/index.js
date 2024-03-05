/**
 * @param {Node} nodeA
 * @param {Node} nodeB
 * @return {boolean}
 */
export default function identicalDOMTrees(nodeA, nodeB) {
  // Compare if two node type are the same
  if (nodeA.nodeType !== nodeB.nodeType) {
    return false;
  }
  // Compare if two nodes' tag names are the same.
  if (nodeA.nodeType === Node.ELEMENT_NODE && nodeA.tagName !== nodeB.tagName) {
    return false;
  }
  // Compare if two nodes' text content are the same.
  if (nodeA.nodeType === Node.TEXT_NODE && nodeA.textContent !== nodeB.textContent) {
    return false;
  }
  // Compare if two nodes' attributes are the same.
  if (nodeA.attributes && nodeB.attributes) {
    if (nodeA.attributes.length !== nodeB.attributes.length) {
      return false;
    }
    for (let i = 0; i < nodeA.attributes.length; i++) {
      const attrA = nodeA.attributes[i];
      const attrB = nodeB.getAttribute(attrA.name);
      if (attrB === null || attrA.value !== attrB) {
        return false;
      }
    }
  }
  // Check if sub-nodes are the same.
  if (nodeA.childNodes.length !== nodeB.childNodes.length) {
    return false;
  }
  for (let i = 0; i < nodeA.childNodes.length; i++) {
    if (!identicalDOMTrees(nodeA.childNodes[i], nodeB.childNodes[i])) {
      return false;
    }
  }

  return true;
}