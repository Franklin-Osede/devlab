/**
 * Pipe y Compose con tipos genéricos
 */
type PipeFunction<T> = (value: T) => T;
type ComposeFunction<T> = (value: T) => T;

function pipe<T>(...fns: PipeFunction<T>[]): (value: T) => T {
  return (value: T) => fns.reduce((acc, fn) => fn(acc), value);
}

function compose<T>(...fns: ComposeFunction<T>[]): (value: T) => T {
  return (value: T) => fns.reduceRight((acc, fn) => fn(acc), value);
}

export { pipe, compose };

