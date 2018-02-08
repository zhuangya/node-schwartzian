'use strict';

const schwartzian = require('./');


test('should sort numbers by default', () => {
  const num = [2, 1, 3, 9, 5];
  expect(schwartzian(num)).toEqual([1, 2, 3, 5, 9]);
});

test('should sort object with custom mapper', () => {
  const obj = [{ weight: 38 }, { weight: 9 }, { weight: 10 }];
  expect(schwartzian(obj, x => x.weight)).toEqual([{ weight: 9 }, { weight: 10 }, { weight: 38 }]);
});
