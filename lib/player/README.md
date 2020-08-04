# Player

模拟播放器

## Usage

```javascript
const Player = require('oddment/lib/player').default;

const option = {
    handler: handler,
    total: 10,
};
const player = new Player(option);
player.start();
```

### options

| 名称      | 类型     | 默认值     | 备注                             |
| --------- | -------- | ---------- | -------------------------------- |
| interval  | number   | 1          | 间隔，秒，默认为 1               |
| speed     | number   | 1          | 播放速度，秒，默认为 1           |
| speedList | number[] | [1,4,8,16] | 倍数列表，可空，用于播放速度控制 |
| handler   | Function | undefined  | 处理队列中对象的函数，必填       |
| total     | number   |            | 总时长(秒)                       |

## Methods

### start

开始播放

```js
player.start()
```

### pause

暂停播放

```js
player.pause()
```

### resume

恢复播放，从上次暂停的位置开始

```js
player.resume()
```

### stop

停止播放

```js
player.stop()
```

### speedUp

加速播放，每次加一档（根据speedList）

```js
player.speedUp()
```

### slowDown

减速播放，每次减一档（根据speedList）

```js
player.slowDown()
```