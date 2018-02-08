'use strict';

const defaultMapper = x => x;
const defaultComparer = (a, b) => a - b;

module.exports = (array, mapper=defaultMapper, comparer=defaultComparer) =>
  array.map((item, index) => ({ index, value: mapper(item) }))
      .sort((a, b) => comparer(a.value, b.value))
      .map(({ index }) => array[index]);
