import { List } from "types/List";

type Node<T> = NodeSingly<T> | null;

class NodeSingly<T> {
	private value: T;
	private next: Node<T>;

	constructor(value: T) {
		this.value = value;
		this.next = null;
	}

	public getValue(): T {
		return this.value;
	}
	public setValue(value: T) {
		this.value = value;
	}

	public getNext() {
		return this.next;
	}
	public setNext(value: Node<T>) {
		this.next = value;
	}
}

export class singlyLinkedList<T> implements List<T> {
	private first: Node<T>;
	private last: Node<T>;
	private pos: Node<T>;

	constructor() {
		this.first = this.last = this.pos = null;
	}

	public insertFirst(value: T) {
		const newNode = new NodeSingly(value);

		if (this.first != null) {
			newNode.setNext(this.first);
			this.first = newNode;
		} else {
			this.first = this.last = newNode;
		}
	}

	public insertLast(value: T) {
		const newNode = new NodeSingly(value);

		if (this.first != null && this.last != null) {
			this.last.setNext(newNode);
			this.last = this.last.getNext();
		} else {
			this.first = newNode;
			this.last = this.first;
		}
	}

	public removeFirst() {
		if (this.first != null) {
			const data = this.first.getValue();
			this.first = this.first.getNext();

			if (this.first == null) {
				this.last = this.first;
			}
			return data;
		}
		return null;
	}

	public removeLast() {
		if (this.first != null) {

			let prev: Node<T> = this.first;
			if (prev.getNext() != null) {

				let next: Node<T> = prev.getNext();

				while (next?.getNext() != null) {
					prev = next;
					next = next.getNext();
				}

				const data = next?.getValue()!;
				prev?.setNext(null);
				this.last = prev;

				return data;
			} else {
				const data = this.first.getValue();
				this.first = this.last = null;
				return data;
			}
		}
		return null;
	}

	public getFirst() {
		if (this.first != null) {
			return this.first.getValue();
		}
		return null;
	}

	public getLast() {
		if (this.last != null) {
			return this.last.getValue();
		}
		return null;
	}

	public listFirst() {
		if (this.first != null) {
			this.pos = this.first;
			return this.first.getValue();
		}
		return null;
	}

	public listNext() {
		this.pos = this.pos?.getNext()!;

		if (this.pos != null) {
			return this.pos.getValue();
		}
		return null;
	}

	public remove(value: T) {

		if (this.first != null) {
			let prev: Node<T> = null;
			let next: Node<T> = this.first;
			let data = null;

			while (next?.getValue() !== value && next?.getNext() != null) {
				prev = next;
				next = next.getNext();
			}

			if (next?.getValue() === value) {
				data = next?.getValue();

				if (prev != null) {
					prev?.setNext(next?.getNext()!);
				} else {
					this.first = next?.getNext()!;
				}
			}

			return data;
		}
		return null;
	}

	public search(value: T) {

		if (this.first != null) {
			let prev: Node<T> = this.first;
			let data = null;

			while (prev?.getValue() !== value && prev?.getNext() != null) {
				prev = prev.getNext();
			}

			if (prev?.getValue() === value) {
				data = prev?.getValue();
			}

			return data;
		}
		return null;
	}

	public isEmpty(): boolean {
		if (this.first != null) {
			return false;
		}
		return true;
	}
}
