[oddment - v0.0.22](README.md) › [Globals](globals.md)

# oddment - v0.0.22

# Cycler

循环处理器，用来实现间隔处理一组数据的需求，支持同步处理和异步处理

## Usage

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

### options

| 名称       | 类型     | 默认值    | 备注                             |
| ---------- | -------- | --------- | -------------------------------- |
| interval   | number   | 1000      | 间隔，毫秒，默认为 1000          |
| handler    | Function | undefined | 处理队列中对象的函数，必填       |
| cycleTimes | number   | 0         | 循环次数，默认为 0，表示无限循环 |

## Methods

### start

开始轮询

```js
cycler.start(pos)
```

**参数**

- pos - 开始的起始位置，非必填，默认为0

### pause

暂停轮询

```js
cycler.pause()
```

### resume

恢复轮询，从上次暂停的位置开始

```js
cycler.resume()
```

### stop

停止轮询

```js
cycler.stop()
```

### reset

重置轮询，可以重新设置轮询的列表

```js
cycler.reset(items)
```

**参数**

- items - 开始的起始位置，非必填，如果为空，reset的效果等同于stop

### add

重置轮询，可以重新设置轮询的列表

```js
cycler.add(item, pos)
```

**参数**

- item - 插入的数据
- pos - 插入的位置，非必填，默认为0
