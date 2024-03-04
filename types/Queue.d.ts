export interface Queue<T> {
	enqueue(value: T): void,
	dequeue(): T | null;
	peek(): T | null;
	isEmpty(): boolean;
	isFull(): boolean;
}
