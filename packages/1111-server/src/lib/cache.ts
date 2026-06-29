type CacheEntry<T> = {
	data: T;
	expiresAt: number;
};

export class TtlCache<T> {
	private store = new Map<string, CacheEntry<T>>();
	private ttlMs: number;

	constructor(ttlMs = 24 * 60 * 60 * 1000) {
		this.ttlMs = ttlMs;
	}

	get(key: string): T | null {
		const entry = this.store.get(key);
		if (!entry) return null;
		if (Date.now() > entry.expiresAt) {
			this.store.delete(key);
			return null;
		}
		return entry.data;
	}

	set(key: string, data: T): void {
		this.store.set(key, { data, expiresAt: Date.now() + this.ttlMs });
	}

	invalidate(key: string): void {
		this.store.delete(key);
	}

	invalidateAll(): void {
		this.store.clear();
	}
}
