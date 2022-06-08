const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  while (rootNode.left !== null) {
    rootNode = rootNode.left
  }

  return rootNode.val;
}

function findMaxBST (rootNode) {
  while (rootNode.right !== null) {
    rootNode = rootNode.right;
  }

  return rootNode.val;
}

function findMinBT (rootNode) {
  let min = rootNode.val;
  const stack =[rootNode];

  while(stack.length > 0) {

    let currentNode = stack.pop()
    if (currentNode.val < min) {min = currentNode.val}

    if (currentNode.left) {stack.push(currentNode.left)}
    if (currentNode.right) {stack.push(currentNode.right)}
  }

  return min;
}

function findMaxBT (rootNode) {
  let max = rootNode.val;
  const stack =[rootNode];

  while(stack.length > 0) {

    let currentNode = stack.pop()
    if (currentNode.val > max) {max = currentNode.val}

    if (currentNode.left) {stack.push(currentNode.left)}
    if (currentNode.right) {stack.push(currentNode.right)}
  }

  return max;
}

function getHeight (rootNode) {
  if (rootNode.left === null && rootNode.right === null) {return 0}

  let leftHeight; let rightHeight;

  if (rootNode.left !== null) {leftHeight = 1 + getHeight(rootNode.left)}
  if (rootNode.right !== null) {rightHeight = 1 + getHeight(rootNode.right)}

  if (leftHeight > rightHeight) {return leftHeight}
  else {return rightHeight}

}

function getLeftHeight (rootNode) {
  if (rootNode.left === null) {return 0}
  let leftHeight;

  if (rootNode.left) {leftHeight = 1 + getLeftHeight(rootNode.left)}

  return leftHeight;
}

function getRightHeight (rootNode) {
  if (rootNode.right === null) {return 0}
  let rightHeight;

  if (rootNode.right) {rightHeight = 1 + getRightHeight(rootNode.right)}

  return rightHeight;
}

function countNodes (rootNode) {
  let nodes= 1;
  const stack =[rootNode];

  while(stack.length > 0) {

    let currentNode = stack.pop()

    if (currentNode.left) {nodes++; stack.push(currentNode.left)}
    if (currentNode.right) {nodes++; stack.push(currentNode.right)}
  }

  return nodes;
}

function balancedTree (rootNode) {
  let leftHeight = getLeftHeight(rootNode);
  let rightHeight = getRightHeight(rootNode);

  if (leftHeight < rightHeight - 1) {return false}
  else if (rightHeight < leftHeight - 1) {return false}
  else {return true}
}

function getParentNode (rootNode, target) {
  if (rootNode.val === target) {return null}
  const stack =[rootNode];

  while(stack.length > 0) {

    let currentNode = stack.pop()
    if ((currentNode.left && currentNode.left.val === target) || (currentNode.right && currentNode.right.val === target)) {return currentNode}

    if (currentNode.left) {stack.push(currentNode.left)}
    if (currentNode.right) {stack.push(currentNode.right)}
  }
}

function inOrderPredecessor (rootNode, target) {
  const orderedArr = valuesArray(rootNode);
  orderedArr.sort( (a, b) => {return a - b});

  if (orderedArr[0] === target) {return null}

  for(let i = 1; i < orderedArr.length; i++) {
    if (orderedArr[i + 1] === target) {return orderedArr[i]}
  }

  return false;
}

function valuesArray(currentNode) {
  if (currentNode === null) {return}
  const arr = [];

    if (currentNode.left) {arr.push(...valuesArray(currentNode.left))}
    arr.push(currentNode.val)
    if (currentNode.right) {arr.push(...valuesArray(currentNode.right))}


    return arr;
}


function deleteNodeBST(rootNode, target) {
  if (rootNode.val === target && !rootNode.right && !rootNode.left) {return null}
  else if (rootNode.val === target) {

    if (rootNode.right && rootNode.left) {
      let child = rootNode.left;
      rootNode.val = child.val;
      if (!child.left && !child.right) {rootNode.left = null}
      else if (child.right) {rootNode.val = child.right.val; child.right = null} //
      else {rootNode.left.val = Infinity; deleteNodeBST(rootNode, Infinity)}
      return
    }
    else if (rootNode.right || rootNode.left) {
      let child;
      if (rootNode.right) {child = rootNode.right}
      else if (rootNode.left) {child = rootNode.left}
      rootNode = child;
      return
    }
  }

  const stack =[rootNode];

  while (stack.length > 0) {
    let node = stack.pop();

    if (node.right && node.right.val === target) {
      let child = node.right;

      if (!child.right && !child.left) {node.right = null; return}
      else if (child.right && child.left) {
        let grandchild = child.left;
        child.val = grandchild.val;
        if (!grandchild.left && !grandchild.right) {child.left = null}
        else if (grandchild.right) {child.val = grandchild.right.val; grandchild.right = null} //
        else {grandchild.val = Infinity; deleteNodeBST(rootNode, Infinity)}
        return
      }
      else if (child.right || child.left) {
        let grandchild;
        if (child.right) {grandchild = child.right}
        else if (child.left) {grandchild = child.left}
        node.right = grandchild;
        return
      }
    }

    if (node.left && node.left.val === target) {
      let child = node.left;

      if (!child.right && !child.left) {node.left = null; return}
      else if (child.right && child.left) {
        let grandchild = child.left;
        child.val = grandchild.val;
        if (!grandchild.left && !grandchild.right) {child.left = null}
        else if (grandchild.right) {child.val = grandchild.right.val; grandchild.right = null} //
        else {grandchild.val = Infinity; deleteNodeBST(rootNode, Infinity)}
        return
      }
      else if (child.right || child.left) {
        let grandchild;
        if (child.right) {grandchild = child.right}
        else if (child.left) {grandchild = child.left}
        node.left = grandchild;
        return
      }
    }

    if (node.right) {stack.push(node.right)}
    if (node.left) {stack.push(node.left)}
  }
}

  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   set the parent that points to it to null

  // Case 2: Two children:
  //   set the value to its in-order predecessor, then delete the predecessor

  // Case 3: One child:
  //   Make the parent point to the child


module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}


/*let btRoot = new TreeNode(1);
    btRoot.left = new TreeNode(2);
    btRoot.left.left = new TreeNode(4);
    btRoot.left.right = new TreeNode(5);
    btRoot.right = new TreeNode(3);
    btRoot.right.left = new TreeNode(6);
    btRoot.right.right = new TreeNode(7);

    // 4
    //  \
    //   3
    //    \
    //     2
    //      \
    //       1
    //        \
    //         7
    //          \
    //           6
    //            \
    //             5
    let btRootUnbalanced = new TreeNode(4);
    btRootUnbalanced.right = new TreeNode(3);
    btRootUnbalanced.right.right = new TreeNode(2);
    btRootUnbalanced.right.right.right = new TreeNode(1);
    btRootUnbalanced.right.right.right.right = new TreeNode(7);
    btRootUnbalanced.right.right.right.right.right = new TreeNode(6);
    btRootUnbalanced.right.right.right.right.right.right = new TreeNode(5);


    let bstRoot = new TreeNode(4);
    bstRoot.left = new TreeNode(2);
    bstRoot.left.left = new TreeNode(1);
    bstRoot.left.right = new TreeNode(3);
    bstRoot.right = new TreeNode(6);
    bstRoot.right.left = new TreeNode(5);
    bstRoot.right.right = new TreeNode(7);

    deleteNodeBST(bstRoot, 4)
    console.log(bstRoot.val);
    console.log(bstRoot.left.val);
    console.log(bstRoot.left.left.val); */
