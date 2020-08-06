[oddment - v0.0.25](../README.md) › [Globals](../globals.md) › ["lib/player/player_option"](../modules/_lib_player_player_option_.md) › [PlayerOption](_lib_player_player_option_.playeroption.md)

# Interface: PlayerOption

播放器选项

## Hierarchy

* **PlayerOption**

## Index

### Properties

* [handler](_lib_player_player_option_.playeroption.md#handler)
* [interval](_lib_player_player_option_.playeroption.md#optional-interval)
* [speed](_lib_player_player_option_.playeroption.md#optional-speed)
* [speedList](_lib_player_player_option_.playeroption.md#optional-speedlist)
* [total](_lib_player_player_option_.playeroption.md#total)

## Properties

###  handler

• **handler**: *function*

*Defined in [lib/player/player_option.ts:26](https://github.com/youkaisteve/oddment/blob/64b3024/lib/player/player_option.ts#L26)*

播放回调

#### Type declaration:

▸ (`context`: [PlayerContext](_lib_player_context_.playercontext.md)): *any*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [PlayerContext](_lib_player_context_.playercontext.md) |

___

### `Optional` interval

• **interval**? : *number*

*Defined in [lib/player/player_option.ts:10](https://github.com/youkaisteve/oddment/blob/64b3024/lib/player/player_option.ts#L10)*

间隔，秒，默认为1

___

### `Optional` speed

• **speed**? : *number*

*Defined in [lib/player/player_option.ts:14](https://github.com/youkaisteve/oddment/blob/64b3024/lib/player/player_option.ts#L14)*

播放速度（秒），默认为1

___

### `Optional` speedList

• **speedList**? : *number[]*

*Defined in [lib/player/player_option.ts:18](https://github.com/youkaisteve/oddment/blob/64b3024/lib/player/player_option.ts#L18)*

倍数列表，用于播放速度控制，默认为[1,4,8,16],可定制

___

###  total

• **total**: *number*

*Defined in [lib/player/player_option.ts:22](https://github.com/youkaisteve/oddment/blob/64b3024/lib/player/player_option.ts#L22)*

总时长(秒)
