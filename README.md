# oddment

## Cycler

```javascript
const Cycler, { CyclerOption } = require('oddment/lib/cycler');
const handler = function (item) {
    currentItem = item;
};
const option: CyclerOption = {
    handler: handler,
};
const cycler = new Cycler(items, option);
cycler.start();

// you can stop it anytime as your wish
cycler.stop();
```
