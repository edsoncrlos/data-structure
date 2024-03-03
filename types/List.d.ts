export interface List<T> {
	insertFirst(value: T): void;
	insertLast(value: T): void;
	removeFirst(): T | null;
	removeLast(): T | null;
	getFirst(): T | null;
	getLast(): T | null;
	listFirst(): T | null;
	listNext(): T | null;
	remove(value: T): T | null;
	search(value: T): T | null;
	isEmpty(): boolean;
}
