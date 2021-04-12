"use strict";

const defaultMapper = (x) => x;
const defaultComparer = (a, b) => a - b;

export function schwartzian(
  array,
  mapper = defaultMapper,
  comparer = defaultComparer
) {
  return array
    .map((item, index) => ({ index, value: mapper(item) }))
    .sort((a, b) => comparer(a.value, b.value))
    .map(({ index }) => array[index]);
}

export default schwartzian;
