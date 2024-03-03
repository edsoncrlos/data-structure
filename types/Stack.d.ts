export interface Stack<T> {
    push(element: T): void;
    pop(element: T): T | null;
    peek(): T | null;
    isEmpty(): boolean;
}
