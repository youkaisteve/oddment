[oddment - v0.0.10](README.md) › [Globals](globals.md)

# oddment - v0.0.10

# oddment

## Install

```bash
npm install oddment --save
# or
yarn add oddment
```

## Cycler

循环处理器，用来实现间隔处理一组数据的需求，支持同步处理和异步处理

### 用法

**Sync**

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
```

**Async**

```javascript
const Cycler = require('oddment/lib/cycler').default;

const asyncHandler = function (item) {
    console.log(item);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
};
const items = [1, 2, 3, 4, 5];
const option = {
    handler: asyncHandler,
};
const cycler = new Cycler(items, option);
cycler.start();
```

### 选项(option)

| 名称       | 类型     | 默认值    | 备注                             |
| ---------- | -------- | --------- | -------------------------------- |
| interval   | number   | 1000      | 间隔，毫秒，默认为 1000          |
| handler    | Function | undefined | 处理队列中对象的函数，必填       |
| cycleTimes | number   | 0         | 循环次数，默认为 0，表示无限循环 |
