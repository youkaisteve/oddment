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

| 名称      | 类型     | 默认值     | 备注                                                                                                                                                                   |
| --------- | -------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| interval  | number   | 1          | 间隔，秒，默认为 1                                                                                                                                                     |
| speed     | number   | 1          | 播放速度，秒，默认为 1                                                                                                                                                 |
| speedList | number[] | [1,4,8,16] | 倍数列表，可空，用于播放速度控制                                                                                                                                       |
| handler   | Function | undefined  | 处理队列中对象的函数，必填，该方法接受一个[PlayerContext](https://github.com/youkaisteve/oddment/blob/master/doc/interfaces/_lib_player_context_.playercontext.md)参数 |
| total     | number   |            | 总时长(秒)                                                                                                                                                             |

## [Methods](https://github.com/youkaisteve/oddment/blob/c22ae1e/doc/classes/_lib_player_player_.player.md#methods-1)

## Attention

Please stop player when you didn't use it.