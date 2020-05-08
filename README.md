# oddment

## Cycler

```javascript
const Cycler = require('oddment/lib/cycler').default;

const handler = function (item) {
    console.log(item);
};
const items = [1, 2, 3, 4, 5];
const option = {
    handler: handler,
};
const cycler = new Cycler(items, option);
cycler.start();

// pause
setTimeout(() => {
    cycler.pause();
}, 3000);

// resume
setTimeout(() => {
    cycler.resume();
}, 5000);

// stop
setTimeout(() => {
    cycler.stop();
}, 10000);
```

**stdout**

```bash
============>start
1
2
3
============>pause
============>resume
4
5
1
2
3
============>stop
```
