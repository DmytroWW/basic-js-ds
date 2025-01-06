const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }
  
  root() {
    return this.rootNode;
  }
  
  add(data) {
    const newNode = new Node(data);
    
    if (this.rootNode === null) {
      this.rootNode = newNode;
    } else {
      this._addNode(this.rootNode, newNode);
    }
  }
  
  _addNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._addNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._addNode(node.right, newNode);
      }
    }
  }
  
  has(data) {
    return this._hasNode(this.rootNode, data);
  }
  
  _hasNode(node, data) {
    if (node === null) {
      return false;
    }
    
    if (data < node.data) {
      return this._hasNode(node.left, data);
    } else if (data > node.data) {
      return this._hasNode(node.right, data);
    } else {
      return true;
    }
  }
  
  find(data) {
    return this._findNode(this.rootNode, data);
  }
  
  _findNode(node, data) {
    if (node === null) {
      return null;
    }
    
    if (data < node.data) {
      return this._findNode(node.left, data);
    } else if (data > node.data) {
      return this._findNode(node.right, data);
    } else {
      return node;
    }
  }
  
  remove(data) {
    this.rootNode = this._removeNode(this.rootNode, data);
  }
  
  _removeNode(node, data) {
    if (node === null) {
      return null;
    }
    
    if (data < node.data) {
      node.left = this._removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this._removeNode(node.right, data);
      return node;
    } else {
      // Case 1: node has no children
      if (node.left === null && node.right === null) {
        return null;
      }
      
      // Case 2: node has one child
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }
      
      // Case 3: node has two children
      const minRightNode = this._findMinNode(node.right);
      node.data = minRightNode.data;
      node.right = this._removeNode(node.right, minRightNode.data);
      return node;
    }
  }
  
  min() {
    const minNode = this._findMinNode(this.rootNode);
    return minNode ? minNode.data : null;
  }
  
  _findMinNode(node) {
    if (node === null) {
      return null;
    }
    
    while (node.left !== null) {
      node = node.left;
    }
    
    return node;
  }
  
  max() {
    const maxNode = this._findMaxNode(this.rootNode);
    return maxNode ? maxNode.data : null;
  }
  
  _findMaxNode(node) {
    if (node === null) {
      return null;
    }
    
    while (node.right !== null) {
      node = node.right;
    }
    
    return node;
  }
}

module.exports = {
  BinarySearchTree
};


module.exports = {
  BinarySearchTree
};