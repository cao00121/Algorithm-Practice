# *Instruction & Requirements*
Implement a function `identicalDOMTrees` that checks if two DOM trees are identical or not. The function takes two DOM nodes as the root nodes of two DOM trees and returns a boolean result.

Two DOM trees are considered identical if they are structurally similar, and the DOM nodes on one tree have the exact same attributes as the nodes on the same relative position on the other tree.

**Examples**
Tree A and Tree B are considered the same.
```javascript
<!-- Tree A -->
<div>Hello World</div>

<!-- Tree B -->
<div>Hello World</div>
```

Tree C and Tree D are considered the different.
```javascript
<!-- Tree C -->
<div class="header">Hello World</div>

<!-- Tree D -->
<div id="foo">Hello World</div>
```

**Note**
The only types of `Node`s present in the tree are `Element` nodes and `Text` nodes.

# *My Problem-solving Ideas*
- **Node Type Comparison:** The first step in comparing two DOM trees is to check if the two nodes being compared are of the same type. This is crucial because an element node and a text node can never be considered identical due to their fundamentally different roles in the DOM.

- **Tag Name Comparison (for Element Nodes):** If both nodes are element nodes, their tag names are compared. A mismatch in tag names immediately implies the trees are not identical, as it indicates a structural difference.

- **Text Content Comparison (for Text Nodes):** For text nodes, the text content is compared. Different text content means the nodes cannot be considered identical.

- **Attributes Comparison:** If both nodes are element nodes, their attributes must be compared. This involves checking not only the quantity of attributes but ensuring both nodes share the same attributes with identical values. Any discrepancy in attributes means the nodes (and hence the trees) are not identical.

- **Children Comparison:** A recursive approach is then used to compare the children of the nodes. This involves iterating through each child node and applying the same set of checks. A difference in the number of children or any difference detected in a recursive comparison results in an immediate return of `false`.

- **Immediate Termination Using If Statements:** Throughout this process, the function uses if statements to immediately return false upon detecting any difference between the nodes. This approach streamlines the function, allowing it to exit as soon as it finds evidence that the trees are not identical, rather than executing further unnecessary comparisons.

- **Default True:** If the function does not return `false` through any of its checks, it means all comparisons have passed, indicating the two DOM trees are identical. Thus, the function ends with a default `return true` statement.




# *Better problem-solving ideas*

