import { singlyLinkedList } from "./List";
let l: singlyLinkedList<number>;

beforeEach(() => {
	l = new singlyLinkedList;
})

test('Is list null', () => {
	expect(l.getFirst()).toBeNull();
	expect(l.getLast()).toBeNull();
})

test('insertFirst', () => {
	l.insertFirst(2);
	expect(l.getFirst()).toBe(2);

	l.insertFirst(6);
	expect(l.getFirst()).toBe(6);

	l.insertFirst(29);
	expect(l.getFirst()).toBe(29);
})


test('insertLast', () => {
	l.insertLast(2);
	expect(l.getLast()).toBe(2);

	l.insertLast(6);
	expect(l.getLast()).toBe(6);

	l.insertLast(29);
	expect(l.getLast()).toBe(29);
})

test('removeFirst', () => {
	l.insertLast(2);
	l.insertLast(6);
	l.insertLast(29);

	expect(l.removeFirst()).toBe(2);
	expect(l.removeFirst()).toBe(6);
	expect(l.removeFirst()).toBe(29);
	expect(l.removeFirst()).toBeNull();
})

test('removeLast', () => {
	l.insertLast(2);
	l.insertLast(6);
	l.insertLast(29);

	expect(l.removeLast()).toBe(29);
	expect(l.removeLast()).toBe(6);
	expect(l.removeLast()).toBe(2);
	expect(l.removeLast()).toBeNull();
})

test('remove', () => {
	l.insertLast(2);
	l.insertLast(6);
	l.insertLast(29);

	expect(l.remove(6)).toBe(6);
	expect(l.remove(32)).toBeNull();
	expect(l.remove(29)).toBe(29);
	expect(l.remove(2)).toBe(2);
	expect(l.remove(3)).toBeNull();
})

test('search', () => {
	l.insertLast(2);
	l.insertLast(6);
	l.insertLast(29);

	expect(l.search(6)).toBe(6);
	expect(l.search(32)).toBeNull();
	expect(l.search(29)).toBe(29);
	expect(l.search(2)).toBe(2);
	expect(l.search(3)).toBeNull();
	expect(l.search(6)).toBe(6);
})

describe('isEmpty', () => {
	test('Should be return true', () => {
		expect(l.isEmpty()).toBeTruthy();
	})

	test('Should be return false', () => {
		l.insertFirst(3);
		expect(l.isEmpty()).toBeFalsy();
	})
})

describe('list values', () => {
	describe('listFirst', () => {
		test('Should return first value', () => {
			l.insertLast(4);
			expect(l.listFirst()).toBe(4);
		})

		test('Should return null', () => {
			expect(l.listFirst()).toBeNull();
		})
	})

	test('listNext', () => {
		l.insertLast(4);
		l.insertLast(2);
		l.insertLast(3);
		l.insertLast(1);

		expect(l.listFirst()).toBe(4);
		expect(l.listNext()).toBe(2);
		expect(l.listNext()).toBe(3);
		expect(l.listNext()).toBe(1);
		expect(l.listNext()).toBeNull();
	})
})
