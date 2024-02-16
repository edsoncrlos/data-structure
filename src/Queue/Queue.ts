import { singlyLinkedList } from "../List/List";

interface Queue<T> {
	enqueue(value: T): void,
	dequeue(): T | null;
	peek(): T | null;
}

export class QueueLinkedList<T> implements Queue<T> {
	private list: singlyLinkedList<T>;

	constructor() {
		this.list = new singlyLinkedList<T>();
	}

	public enqueue(value: T) {
		this.list.insertLast(value);
	}

	public dequeue() {
		return this.list.removeFirst();
	}

	public peek() {
		return this.list.getFirst();
	}
}
