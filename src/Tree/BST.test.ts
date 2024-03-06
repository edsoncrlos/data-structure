import { BST } from "./BST";
let t: BST<number, string>;

beforeEach(() => {
	t = new BST();
})

describe('insert', () => {
	test('Should insert the values mapped with the key', () => {
		t.insert(10, 'abc');
		t.insert(5, 'abcde');
		t.insert(15, 'fifteen');


		expect(t.search(10)).toBe('abc');
		expect(t.search(5)).toBe('abcde');
		expect(t.search(15)).toBe('fifteen');
	})

	test('Should not overwrite the value', () => {
		t.insert(10, 'abc');
		t.insert(5, 'abcde');
		t.insert(10, 'fifteen');


		expect(t.search(10)).toBe('abc');
		expect(t.search(5)).toBe('abcde');
	})

	test('Should not duplicate the key', () => {
		t.insert(10, 'abc');
		t.insert(10, 'abcd');

		t.remove(10);
		expect(t.search(10)).toBeNull();
	})

})

describe('remove', () => {
	test('Should return null', () => {
		t.insert(8, 'eight');

		expect(t.remove(15)).toBeNull();
		expect(t.search(15)).toBeNull();
	})

	test('remove root', () => {
		t.insert(15, 'fifteen');
		t.insert(8, 'eight');
		t.insert(5, 'five');

		expect(t.remove(15)).toBe('fifteen');
		expect(t.search(15)).toBeNull();
		expect(t.search(8)).toBe('eight');
		expect(t.search(5)).toBe('five');
	})

	test('remove child right is null', () => {
		t.insert(4, 'four');
		t.insert(8, 'eight');
		t.insert(5, 'five');

		expect(t.remove(8)).toBe('eight');
		expect(t.search(8)).toBeNull();
		expect(t.search(5)).toBe('five');
		expect(t.search(4)).toBe('four');
	})

	test('remove child left is null', () => {
		t.insert(15, 'fifteen');
		t.insert(8, 'eight');
		t.insert(10, 'ten');

		expect(t.remove(8)).toBe('eight');
		expect(t.search(8)).toBeNull();
		expect(t.search(10)).toBe('ten');
		expect(t.search(15)).toBe('fifteen');
	})

	test('remove when childs is different the null', () => {
		t.insert(15, 'fifteen');
		t.insert(8, 'eight');
		t.insert(5, 'five');
		t.insert(10, 'ten');

		expect(t.remove(8)).toBe('eight');
		expect(t.search(8)).toBeNull();
		expect(t.search(5)).toBe('five');
		expect(t.search(10)).toBe('ten');
	})

	test('remove when childs is different the null', () => {
		t.insert(15, 'fifteen');
		t.insert(8, 'eight');
		t.insert(4, 'four');
		t.insert(5, 'five');
		t.insert(7, 'seven');
		t.insert(6, 'six');
		t.insert(10, 'ten');

		expect(t.remove(8)).toBe('eight');
		expect(t.search(8)).toBeNull();
		expect(t.search(4)).toBe('four');
		expect(t.search(5)).toBe('five');
		expect(t.search(7)).toBe('seven');
		expect(t.search(6)).toBe('six');
		expect(t.search(10)).toBe('ten');
		expect(t.search(15)).toBe('fifteen');
	})
})

describe('getNumKey', () => {
	test('Should be 0 when empty', () => {
		expect(t.getNumberNodes()).toBe(0);
	})

	test('Should be 4 when there are 4 nodes', () => {
		t.insert(4, '94');
		t.insert(2, '93');
		t.insert(1, '3');
		t.insert(8, '54');

		expect(t.getNumberNodes()).toBe(4);
	})
})

describe('Tree traversal', () => {
	test('inorder', () => {
		t.insert(5, 'five');
		t.insert(3, 'three');
		t.insert(1, 'one');
		t.insert(4, 'four');
		t.insert(2, 'two');

		const result = t.getKeysInorder();
		expect(result).toHaveLength(5);
		expect(result).toEqual([1,2,3,4,5]);
	})
})
