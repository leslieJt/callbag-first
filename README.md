# callbag-first

[Callbag](https://github.com/callbag/callbag) operator that emit the first value emitted from source on completion, based on provided expression.

`npm install callbag-first`

`first(predicate?: (v: any) => Boolean, resultSelector?: (v: any) => any)`

```javascript
const {
  iterate,
  observe,
  interval,
  pipe,
  fromIter
} = require('callbag-basics');

const first = require('callbag-first');

pipe(
  fromIter([1, 2, 3, 4]),
  first(),
  iterate(v => console.log(v)) // 1
);

pipe(
  interval(100),
  first(v => v > 3),
  observe(v => console.log(v)) // 4
);

pipe(
  interval(100),
  first(v => v > 3, v => `value: ${v}`),
  observe(v => console.log(v)) // value: 4
);
```
