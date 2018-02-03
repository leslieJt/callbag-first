# callbag-first

Emit the first value

```javascript
const {
  iterate,
  observe,
  interval,
  pipe,
  fromIter
} = require('callbag-basics');

pipe(
  fromIter([1, 2, 3, 4]),
  first(),
  iterate(v => console.log(v)) // 1
);

pipe(
  interval(100),
  first(),
  observe(v => console.log(v)) // 0
);
```
