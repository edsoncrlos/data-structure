import { StackVector } from "./Stack";

describe('Stack length', () => {
	test('', () => {
		const s = new StackVector(3);
		const expected = 2;

		for (let i = 0; i < (expected+2); i++) {
			s.push(i);
		}

		const value = s.pop();
		expect(value).toBe(expected);
	})

	test('', () => {
		const s = new StackVector(2);
		const expected = 5;

		s.push(1);
		s.push(2);
		s.pop();
		s.push(3);
		s.push(4);
		s.pop();
		s.push(5);

		const value = s.pop();
		expect(value).toBe(expected);
	})
})

test('isFull', () => {
	const s = new StackVector(3);
	const expected = true;

	s.push(1);
	s.push(2);
	s.push(3);

	expect(s.isFull()).toBe(expected);
})

test('isEmpty', () => {
	const s = new StackVector(3);
	const expected = true;

	s.push(1);
	s.push(2);
	s.pop();
	s.pop();

	expect(s.isEmpty()).toBe(expected);
})

test('peek', () => {
	const s = new StackVector(3);
	const expected = 3;

	s.push(1);
	s.push(2);
	s.push(3);

	const value = s.peek();
	expect(value).toBe(expected);
})
