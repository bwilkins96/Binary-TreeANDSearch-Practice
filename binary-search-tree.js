// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

  class BinarySearchTree {

    constructor() {
      this.root = null;
    }

    insert(val, currentNode=this.root) {
      if (this.root === null) {this.root = new TreeNode(val); return}

      if (currentNode.val > val && currentNode.left === null) {
        currentNode.left = new TreeNode(val); return;
      }
      else if (currentNode.val < val && currentNode.right === null) {
        currentNode.right = new TreeNode(val); return;
      }

      if (currentNode.val > val) {this.insert(val, currentNode.left) }
      else if (currentNode.val < val) {this.insert(val, currentNode.right) }
    }

    search(val) {
      let currentNode = this.root;

      while (currentNode !== null) {
        if (currentNode.val === val) {return true}

        if (currentNode.val > val) {currentNode = currentNode.left}
        else if (currentNode.val < val) {currentNode = currentNode.right}
      }

      return false;
    }


    preOrderTraversal(currentNode = this.root) {
      if (currentNode === null) {return}

      console.log(currentNode.val);

      this.preOrderTraversal(currentNode.left);
      this.preOrderTraversal(currentNode.right);
    }


    inOrderTraversal(currentNode = this.root) {
      if (currentNode === null) {return}

      this.inOrderTraversal(currentNode.left);
      console.log(currentNode.val);
      this.inOrderTraversal(currentNode.right);
    }


    postOrderTraversal(currentNode = this.root) {
      if (currentNode === null) {return}

      this.postOrderTraversal(currentNode.left);
      this.postOrderTraversal(currentNode.right);

      console.log(currentNode.val);
    }

      // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
      let queue = [];
      queue.unshift(this.root);

      while (queue.length > 0) {
        let node = queue.shift();
        console.log(node.val);

        if (node.left) {queue.push(node.left)}
        if (node.right) {queue.push(node.right)}
      }
    }

    // Depth First Traversal - Iterative
    depthFirstTraversal() {
      let stack = [];
      stack.push(this.root);

      while (stack.length > 0) {
        let node = stack.pop();
        console.log(node.val);

        if (node.left) {stack.push(node.left)}
        if (node.right) {stack.push(node.right)}
      }
    }
  }

  module.exports = { BinarySearchTree, TreeNode };
