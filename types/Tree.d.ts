export interface Tree<K, E> {
	insert(key: K, data: E): void;
	search(key: K): E | null;
	remove(key: K): E | null;
	getNumberNodes(): number;
	getKeysInorder(): K[];
}
