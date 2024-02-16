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

interface List<T> {
	insertFirst(value: T): void;
	insertLast(value: T): void;
	removeFirst(): T | null;
	removeLast(): T | null;
	getFirst(): T | null;
	getLast(): T | null;
	remove(value: T): T | null;
	search(value: T): T | null;
}

export class singlyLinkedList<T> implements List<T> {
	private first: Node<T>;

	constructor() {
		this.first = null;
	}

	public insertFirst(value: T) {
		const data = new NodeSingly(value);

		if (this.first != null) {
			data.setNext(this.first)
		}
		this.first = data;
	}

	public insertLast(value: T) {
		const data = new NodeSingly(value);

		if (this.first != null) {
			let node: Node<T> = this.first;

			while (node?.getNext() != null) {
				node = node.getNext();
			}
			node?.setNext(data);
		} else {
			this.first = data;
		}
	}

	public removeFirst() {
		if (this.first != null) {
			const data = this.first.getValue();
			this.first = this.first.getNext();
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

				return data;
			} else {
				const data = this.first.getValue();
				this.first = null;
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
		if (this.first != null) {
			let node: Node<T> = this.first;

			while (node?.getNext() != null) {
				node = node.getNext();
			}
			return node?.getValue()!;
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
}
