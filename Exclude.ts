type MyExclude<T, U> = T extends (T & U) ? never : T;
