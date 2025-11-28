/**
 * Currying con tipos genéricos
 */
type Curried<T extends (...args: any[]) => any> = 
  T extends (...args: infer P) => infer R
    ? P extends [infer First, ...infer Rest]
      ? Rest extends []
        ? T
        : (arg: First) => Curried<(...args: Rest) => R>
      : T
    : never;

function curry<T extends (...args: any[]) => any>(fn: T): Curried<T> {
  return function curried(...args: any[]): any {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function(...nextArgs: any[]) {
      return curried.apply(this, args.concat(nextArgs));
    };
  } as Curried<T>;
}

export { curry };

