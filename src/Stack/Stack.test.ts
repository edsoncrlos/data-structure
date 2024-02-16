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

describe('Stack methods', () => {
	let s: StackVector<number>;
	beforeEach(() => {
		s = new StackVector(3);
	})

	describe('isFull', () => {
		test('Should isFull return false', () => {
			s.push(1);
			s.push(2);

			expect(s.isFull()).toBeFalsy();
		})

		test('Should isFull return true', () => {
			s.push(1);
			s.push(2);
			s.push(3);

			expect(s.isFull()).toBeTruthy();
		})
	})

	describe('isEmpty', () => {
		test('Should isEmpty return false', () => {
			s.push(1);

			expect(s.isEmpty()).toBeFalsy();
		})

		test('Should isEmpty return true', () => {
			s.push(1);
			s.push(2);
			s.pop();
			s.pop();

			expect(s.isEmpty()).toBeTruthy();
		})
	})

	describe('peek', () => {
		test('Should return of value top of stack', () => {
			const expected = 3;

			s.push(1);
			s.push(2);
			s.push(3);

			const value = s.peek();
			expect(value).toBe(expected);
		})

		test('Should return null when stack is empty', () => {
			expect(s.peek()).toBeNull();
		})
	})

	describe('pop', () => {
		test('Should return null when stack is empty', () => {
			expect(s.pop()).toBeNull();
		})
	})
})
