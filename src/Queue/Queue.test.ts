import { QueueLinkedList } from "./Queue";

let q: QueueLinkedList<number>;
beforeEach(() => {
	q = new QueueLinkedList;
})

describe('enqueue', () => {
	test('', () => {
		q.enqueue(1);
		q.enqueue(6);
		q.enqueue(33);

		expect(q.dequeue()).toBe(1);
		expect(q.dequeue()).toBe(6);
		expect(q.dequeue()).toBe(33);
	})
})

describe('dequeue', () => {
	test('Should return null when queue is empty', () => {
		expect(q.dequeue()).toBeNull();
	})

	test('', () => {
		q.enqueue(1);
		q.enqueue(6);
		q.enqueue(33);

		q.dequeue();
		q.dequeue();
		expect(q.dequeue()).toBe(33);
	})
})

describe('peek', () => {
	test('', () => {
		q.enqueue(1);
		q.enqueue(6);
		q.enqueue(33);

		q.dequeue();
		expect(q.peek()).toBe(6);
	})

	test('Should return null when queue is empty', () => {
		expect(q.peek()).toBeNull();
	})
})
