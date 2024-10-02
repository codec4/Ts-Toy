import { Compare, defaultCompare, ICompareFunction } from '../util';
import { Node } from './models/node';

export class BinarySearchTree<T> {
  protected root: Node<T>;

  constructor(protected compareFn: ICompareFunction<T> = defaultCompare) {}

  insert(key: T) {
    // special case: first key
    if (this.root == null) {
      this.root = new Node(key);
    } else {
      this.insertNode(this.root, key);
    }
  }

  protected insertNode(node: Node<T>, key: T) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left == null) {
        node.left = new Node(key);
      } else {
        this.insertNode(node.left, key);
      }
    } else if (node.right == null) {
      node.right = new Node(key);
    } else {
      this.insertNode(node.right, key);
    }
  }

  getRoot() {
    return this.root;
  }

  search(key: T) {
    return this.searchNode(this.root, key);
  }

  protected searchNode(node: Node<T>, key: T): Node<T> {
    if (node == null) {
      return node;
    }

    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      return this.searchNode(node.left, key);
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      return this.searchNode(node.right, key);
    }
    // key is equal to node.item
    return node;
  }

  inOrderTraverse(callback: Function) {
    this.inOrderTraverseNode(this.root, callback);
  }

  protected inOrderTraverseNode(node: Node<T>, callback: Function) {
    if (node == null) {
      return;
    }

    this.inOrderTraverseNode(node.left, callback);
    callback(node.key);
    this.inOrderTraverseNode(node.right, callback);
  }

  preOrderTraverse(callback: Function) {
    this.preOrderTraverseNode(this.root, callback);
  }

  protected preOrderTraverseNode(node: Node<T>, callback: Function) {
    if (node == null) {
      return;
    }

    callback(node.key);
    this.preOrderTraverseNode(node.left, callback);
    this.preOrderTraverseNode(node.right, callback);
  }

  postOrderTraverse(callback: Function) {
    this.postOrderTraverseNode(this.root, callback);
  }

  protected postOrderTraverseNode(node: Node<T>, callback: Function) {
    if (node == null) {
      return;
    }

    this.postOrderTraverseNode(node.left, callback);
    this.postOrderTraverseNode(node.right, callback);
    callback(node.key);
  }

  min() {
    return this.minNode(this.root);
  }

  protected minNode(node: Node<T>): Node<T> {
    if (node.left == null) {
      return node;
    }
    return this.minNode(node.left);
  }

  max() {
    return this.maxNode(this.root);
  }

  protected maxNode(node: Node<T>): Node<T> {
    if (node.right == null) {
      return node;
    }
    return this.maxNode(node.right);
  }

  remove(key: T) {
    this.root = this.removeNode(this.root, key);
  }

  protected removeNode(node: Node<T>, key: T) {
    if (node == null) {
      return null;
    }

    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      // key is equal to node.item

      // handle 3 special conditions
      // 1 - a leaf node
      // 2 - a node with only 1 child
      // 3 - a node with 2 children

      // case 1
      if (node.left == null && node.right == null) {
        node = null;
        return node;
      }

      // case 2
      if (node.left == null) {
        node = node.right;
        return node;
      } else if (node.right == null) {
        node = node.left;
        return node;
      }

      // case 3
      const aux = this.minNode(node.right);
      node.key = aux.key;
      node.right = this.removeNode(node.right, aux.key);
      return node;
    }
  }
}
