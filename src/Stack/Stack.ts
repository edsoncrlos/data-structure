import { Stack } from "types/Stack";

export class StackVector<T> implements Stack<T> {
	private max: number;
	private top: number;
	private stack: Array<T>;

	constructor (max: number) {
		this.max = max;
		this.top = 0;
		this.stack = Array(max).fill(null);
	}

	public push(element: T) {
		if (this.top < this.max) {
			this.stack[this.top] = element;
			this.top++;
		}
	}

	public pop() {
		if (!this.isEmpty()) {
			this.top--;
			const data = this.stack[this.top];
			return data;
		}
		return null;
	}

	public peek() {
		if (!this.isEmpty()) {
			return this.stack[this.top-1];
		}
		return null;
	}

	public isEmpty() {
		return this.top === 0;
	}

	public isFull() {
		return this.top === this.max;
	}
}
