[oddment - v0.0.28](../README.md) › [Globals](../globals.md) › ["lib/player/context"](../modules/_lib_player_context_.md) › [PlayerContext](_lib_player_context_.playercontext.md)

# Interface: PlayerContext

播放器上下文

## Hierarchy

* **PlayerContext**

## Index

### Properties

* [current](_lib_player_context_.playercontext.md#current)
* [interval](_lib_player_context_.playercontext.md#interval)
* [speed](_lib_player_context_.playercontext.md#speed)
* [speedList](_lib_player_context_.playercontext.md#speedlist)
* [status](_lib_player_context_.playercontext.md#status)
* [total](_lib_player_context_.playercontext.md#total)

## Properties

###  current

• **current**: *number*

*Defined in [lib/player/context.ts:12](https://github.com/youkaisteve/oddment/blob/e5d31ee/lib/player/context.ts#L12)*

当前时间(秒)

___

###  interval

• **interval**: *number*

*Defined in [lib/player/context.ts:8](https://github.com/youkaisteve/oddment/blob/e5d31ee/lib/player/context.ts#L8)*

间隔，秒，默认为1

___

###  speed

• **speed**: *number*

*Defined in [lib/player/context.ts:20](https://github.com/youkaisteve/oddment/blob/e5d31ee/lib/player/context.ts#L20)*

当前播放速度，默认为1，即每秒播放一次；

___

###  speedList

• **speedList**: *number[]*

*Defined in [lib/player/context.ts:24](https://github.com/youkaisteve/oddment/blob/e5d31ee/lib/player/context.ts#L24)*

倍数列表，用于播放速度控制，默认为[1,4,8,16],可定制

___

###  status

• **status**: *number*

*Defined in [lib/player/context.ts:28](https://github.com/youkaisteve/oddment/blob/e5d31ee/lib/player/context.ts#L28)*

当前状态，0-停止/未开始；1-播放中；2-暂停；

___

###  total

• **total**: *number*

*Defined in [lib/player/context.ts:16](https://github.com/youkaisteve/oddment/blob/e5d31ee/lib/player/context.ts#L16)*

总时长(秒)
