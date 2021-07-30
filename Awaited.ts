type Awaited<T> = T extends Promise<infer I> ? I : T;
