export default function schwartzian<T, U>(
    array: Array<T>,
    map: (value: T) => U,
    compare: (a: U, b: U) => number
): Array<T>;
