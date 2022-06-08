class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

//tree set-up
let root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);

let root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.right = new TreeNode(3);

let root3 = new TreeNode(4);
root3.left = new TreeNode(5);
root3.right = new TreeNode(6);

//-------------------------------------------------

const isSameTree = (rootA, rootB) => {
    const stackA = [rootA]; const stackB = [rootB];
    let valsA = ""; let valsB = "";

    while (stackA.length > 0) {
        let node = stackA.pop();
        valsA += node.val;

        if (node.right) {stackA.push(node.right)}
        if (node.left) {stackA.push(node.left)}
    }

    while (stackB.length > 0) {
        let node = stackB.pop();
        valsB += node.val;

        if (node.right) {stackB.push(node.right)}
        if (node.left) {stackB.push(node.left)}
    }

    return valsA === valsB;
}

//-------------------------------------------------

console.log(isSameTree(root1, root2)) //true
console.log(isSameTree(root2, root3)) //false

//-------------------------------------------------

const isSameTree2 = (rootA, rootB) => {
    const stackA = [rootA]; const stackB = [rootB];

    while (stackA.length > 0 && stackB.length > 0) {
        let nodeA = stackA.pop();
        let nodeB = stackB.pop();

        if (nodeA.val !== nodeB.val) {return false}

        if (nodeA.right) {stackA.push(nodeA.right)}
        if (nodeA.left) {stackA.push(nodeA.left)}

        if (nodeB.right) {stackB.push(nodeB.right)}
        if (nodeB.left) {stackB.push(nodeB.left)}
    }

    if (stackA.length !== stackB.length) {return false}

    return true;
}

//-------------------------------------------------

console.log(isSameTree2(root1, root2)) //true
console.log(isSameTree2(root2, root3)) //false
