# Schwartzian transform in javascript

https://en.wikipedia.org/wiki/Schwartzian_transform

usage:

```javascript
// index.mjs

// named export:
import { schwartzian } from "@zhuangya/schwartzian";

// OR default export
// import schwartzian from "@zhuangya/schwartzian";

function mapperFn({ weight }) {
  return weight;
}

function compareFn(a, b) {
  return a - b;
}

const data = [
  {
    weight: 1,
  },
  {
    weight: 9,
  },
  {
    weight: 5,
  },
];

schwartzian(data, mapperFn, compareFn);
```
