import { Compare, defaultCompare, ICompareFunction } from '../util';
import { BinarySearchTree } from './binary-search-tree';
import { Node } from './models/node';

export class BinarySearchTreeImperative<T> extends BinarySearchTree<T> {
  constructor(protected compareFn: ICompareFunction<T> = defaultCompare) {
    super(compareFn);
  }

  protected override insertNode(node: Node<T>, key: T) {
    let prev: Node<T> = null;

    while (node != null) {
      prev = node;
      if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
        node = node.left;
      } else {
        node = node.right;
      }
    }

    if (this.compareFn(key, prev.key) === Compare.LESS_THAN) {
      prev.left = new Node(key);
    } else {
      prev.right = new Node(key);
    }
  }

  override search(key: T) {
    return this.searchNode(this.root, key);
  }

  protected override searchNode(root: Node<T>, key: T) {
    let target = root;
    while (target && key !== target.key) {
      if (this.compareFn(key, target.key) === Compare.LESS_THAN) {
        target = target.left;
      } else {
        target = target.right;
      }
    }

    return target;
  }

  override inOrderTraverse(callback: Function) {
    this.inOrderTraverseNode(this.root, callback);
  }

  protected override inOrderTraverseNode(node: Node<T>, callback: Function) {
    if (node == null) {
      return;
    }

    const stack = [];
    let temporaryNode = node;
    while (temporaryNode != null || stack.length > 0) {
      while (temporaryNode != null) {
        stack.push(temporaryNode);
        temporaryNode = temporaryNode.left;
      }

      temporaryNode = stack.pop();
      callback(temporaryNode.key);
      temporaryNode = temporaryNode.right;
    }
  }

  override preOrderTraverse(callback: Function) {
    this.preOrderTraverseNode(this.root, callback);
  }

  protected override preOrderTraverseNode(node: Node<T>, callback: Function) {
    if (node == null) {
      return;
    }

    const nodes: Node<T>[] = [];
    nodes.push(node);

    while (nodes.length) {
      let curr = nodes.pop();
      callback(curr.key);

      if (curr.right) {
        nodes.push(curr.right);
      }

      if (curr.left) {
        nodes.push(curr.left);
      }
    }
  }

  override postOrderTraverse(callback: Function) {
    this.postOrderTraverseNode(this.root, callback);
  }

  protected override postOrderTraverseNode(node: Node<T>, callback: Function) {
    if (node == null) {
      return;
    }

    let temp = node;
    const visited = new Set();

    while (temp && !visited.has(temp)) {
      if (temp.left && !visited.has(temp.left)) {
        temp = temp.left;
      } else if (temp.right && !visited.has(temp.right)) {
        temp = temp.right;
      } else {
        callback(temp.key);
        visited.add(temp);
        temp = node;
      }
    }
  }

  protected override minNode(node: Node<T>) {
    let current = node;
    while (current != null && current.left != null) {
      current = current.left;
    }
    return current;
  }

  protected override maxNode(node: Node<T>) {
    let current = node;
    while (current != null && current.right != null) {
      current = current.right;
    }
    return current;
  }

  protected override removeNode(node: Node<T>, key: T) {
    let current = node;
    let parent: Node<T> = null;
    let target: Node<T> = null;

    // Find the target node to be removed
    while (current != null) {
      if (key == current.key) {
        target = current;
        break;
      }
      parent = current;
      if (key < current.key) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    if (target == null) {
      return node; // Node not found
    }

    // Case 1: Target node is a leaf node
    if (target.left == null && target.right == null) {
      if (parent == null) {
        return null; // Removing the root node of the tree
      }
      if (parent.left == target) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    }
    // Case 2: Target node has only one child
    else if (target.left == null || target.right == null) {
      let child = target.left != null ? target.left : target.right;
      if (parent == null) {
        return child; // Removing the root node of the tree
      }
      if (parent.left == target) {
        parent.left = child;
      } else {
        parent.right = child;
      }
    }
    // Case 3: Target node has two children
    else {
      let successor = target.right;
      let successorParent = target;
      while (successor.left != null) {
        successorParent = successor;
        successor = successor.left;
      }
      target.key = successor.key;
      if (successorParent.left == successor) {
        successorParent.left = successor.right;
      } else {
        successorParent.right = successor.right;
      }
    }

    return node;
  }
}
