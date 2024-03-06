import { Tree } from "types/Tree";

type node<K, E> = nodeBST<K, E> | null;
type treeTraversal<K, E> = (node: node<K, E>) => void;

class nodeBST<K, E> {
	private left: node<K, E> = null;
	private right: node<K, E> = null;
	private key: K;
	private data: E;

	constructor(key: K, data: E) {
		this.key = key;
		this.data = data;
	}

	public getKey() {
		return this.key;
	}
	public setKey(key: K) {
		this.key = key;
	}

	public getData() {
		return this.data;
	}
	public setData(data: E) {
		this.data = data;
	}

	public getLeft() {
		return this.left;
	}
	public setLeft(node: node<K, E>) {
		this.left = node;
	}
	public getRight() {
		return this.right;
	}
	public setRight(node: node<K, E>) {
		this.right = node;
	}
}

export class BST<K, E> implements Tree<K, E> {
	private root: node<K, E>;
	private aux: E | null;

	constructor() {
		this.root = null;
		this.aux = null;
	}

	public insert(key: K, data: E) {
		this.root = this.insertNode(this.root, key, data);
	}

	private insertNode(node: node<K, E>, key: K, data: E): node<K, E> {
		if (node == null) {
			return new nodeBST(key, data);
		} else if (key < node.getKey()) {
			node.setLeft(this.insertNode(node.getLeft(), key, data));
		} else if (key > node.getKey()) {
			node.setRight(this.insertNode(node.getRight(), key, data));
		}
		return node;
	}

	public search(key: K) {
		return this.searchNode(this.root, key);
	}

	private searchNode(node: node<K, E>, key: K): E | null {
		if (node == null) {
			return null;
		} else if (key < node.getKey()) {
			return this.searchNode(node.getLeft(), key);
		} else if (key > node.getKey()) {
			return this.searchNode(node.getRight(), key);
		}
		return node.getData();
	}

	public remove(key: K) {
		this.root = this.removeNode(this.root, key);
		return this.aux;
	}

	private removeNode(node: node<K, E>, key: K): node<K,E> {
		if (node == null) {
			return null;
		} else if (key < node.getKey()) {
			node.setLeft( this.removeNode(node.getLeft(), key) );
		} else if (key > node.getKey()) {
			node.setRight( this.removeNode(node.getRight(), key) );
		} else {
			this.aux = node.getData();

			if (node.getRight() == null) {
				node = node.getLeft();
			} else if (node.getLeft() == null) {
				node = node.getRight();
			} else {
				node.setLeft( this.replaceNodeWithNodeHigherKey(node, node.getLeft()) );
			}
		}
		return node;
	}

	private replaceNodeWithNodeHigherKey(l: node<K, E>, r: node<K, E>) {
		if (r?.getRight() != null) {
			r.setRight( this.replaceNodeWithNodeHigherKey(l, r.getRight()) );
		} else {
			l?.setKey(r?.getKey()!);
			l?.setData(r?.getData()!);

			r = r?.getLeft()!;
		}
		return r;
	}

	public getNumberNodes() {
		return this.root ? this.getNumNodes(this.root) : 0;
	}

	private getNumNodes(node: node<K, E>) {
		let numberNode = 1;
		if (node?.getLeft() != null) {
			numberNode += this.getNumNodes(node?.getLeft());
		}
		if (node?.getRight() != null) {
			numberNode += this.getNumNodes(node?.getRight());
		}

		return numberNode;
	}
	private getKeys(treeTraversal: (node: node<K,E>, func: treeTraversal<K, E>) => void) {
		const result = new Array<K>();

		treeTraversal(this.root, (node: node<K,E>) => {
			result.push( node?.getKey()! );
		});
		return result;
	}

	public getKeysInorder() {
		return this.getKeys(this.inorder.bind(this));
	}

	private inorder(node: node<K, E>, func: treeTraversal<K, E>) {
		if (node?.getLeft())
			this.inorder( node?.getLeft(), func );

		func(node);

		if (node?.getRight())
			this.inorder( node?.getRight(), func );
	}
}
