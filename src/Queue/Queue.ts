import { Queue } from "types/Queue";
import { List } from "types/List";
import { singlyLinkedList } from "../List/List";

export class QueueLinkedList<T> implements Queue<T> {
	private list: List<T>;

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
