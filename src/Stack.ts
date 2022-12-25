interface Stack<T> {
    push(element: T): void;
    pop(element: T): T | null;
    peek(): T | null;
    isEmpty(): boolean;
}

export class StackVector<T> implements Stack<T> {
	private max: number;
	private top: number;
	private stack: Array<T>;

	constructor (max: number) {
		this.max = max;
		this.top = -1;
		this.stack = Array(max).fill(null);
	}

	public push(element: T) {
		if (this.top < this.max) {
			this.top++;
			this.stack[this.top] = element;
		}
	}

	public pop() {
		if (this.top > 0) {
			const data = this.stack[this.top];
			this.top--;
			return data;
		}
		return null;
	}

	public peek() {
		if (!this.isEmpty()) {
			return this.stack[this.top];
		}
		return null;
	}

	public isEmpty() {
		return this.top === -1;
	}

	public isFull() {
		return this.top === this.max;
	}
}
