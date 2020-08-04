[oddment - v0.0.17](../README.md) › [Globals](../globals.md) › ["lib/player/player"](../modules/_lib_player_player_.md) › [Player](_lib_player_player_.player.md)

# Class: Player

## Hierarchy

* **Player**

## Index

### Constructors

* [constructor](_lib_player_player_.player.md#constructor)

### Properties

* [context](_lib_player_player_.player.md#private-context)
* [playerOption](_lib_player_player_.player.md#private-playeroption)
* [speedIndex](_lib_player_player_.player.md#private-speedindex)
* [timer](_lib_player_player_.player.md#private-timer)

### Methods

* [pause](_lib_player_player_.player.md#pause)
* [play](_lib_player_player_.player.md#private-play)
* [resume](_lib_player_player_.player.md#resume)
* [slowDown](_lib_player_player_.player.md#slowdown)
* [speedUp](_lib_player_player_.player.md#speedup)
* [start](_lib_player_player_.player.md#start)
* [stop](_lib_player_player_.player.md#stop)

## Constructors

###  constructor

\+ **new Player**(`playerOption`: [PlayerOption](../interfaces/_lib_player_player_option_.playeroption.md)): *[Player](_lib_player_player_.player.md)*

*Defined in [lib/player/player.ts:8](https://github.com/youkaisteve/oddment/blob/2f3018c/lib/player/player.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`playerOption` | [PlayerOption](../interfaces/_lib_player_player_option_.playeroption.md) |

**Returns:** *[Player](_lib_player_player_.player.md)*

## Properties

### `Private` context

• **context**: *[PlayerContext](../interfaces/_lib_player_context_.playercontext.md)*

*Defined in [lib/player/player.ts:5](https://github.com/youkaisteve/oddment/blob/2f3018c/lib/player/player.ts#L5)*

___

### `Private` playerOption

• **playerOption**: *[PlayerOption](../interfaces/_lib_player_player_option_.playeroption.md)*

*Defined in [lib/player/player.ts:8](https://github.com/youkaisteve/oddment/blob/2f3018c/lib/player/player.ts#L8)*

___

### `Private` speedIndex

• **speedIndex**: *number* = 0

*Defined in [lib/player/player.ts:7](https://github.com/youkaisteve/oddment/blob/2f3018c/lib/player/player.ts#L7)*

___

### `Private` timer

• **timer**: *any*

*Defined in [lib/player/player.ts:6](https://github.com/youkaisteve/oddment/blob/2f3018c/lib/player/player.ts#L6)*

## Methods

###  pause

▸ **pause**(): *void*

*Defined in [lib/player/player.ts:39](https://github.com/youkaisteve/oddment/blob/2f3018c/lib/player/player.ts#L39)*

暂停

**Returns:** *void*

___

### `Private` play

▸ **play**(): *void*

*Defined in [lib/player/player.ts:91](https://github.com/youkaisteve/oddment/blob/2f3018c/lib/player/player.ts#L91)*

播放

**Returns:** *void*

___

###  resume

▸ **resume**(): *void*

*Defined in [lib/player/player.ts:50](https://github.com/youkaisteve/oddment/blob/2f3018c/lib/player/player.ts#L50)*

恢复，暂停后使用

**Returns:** *void*

___

###  slowDown

▸ **slowDown**(): *void*

*Defined in [lib/player/player.ts:80](https://github.com/youkaisteve/oddment/blob/2f3018c/lib/player/player.ts#L80)*

减速，最低减到一倍速，不能慢放

**Returns:** *void*

___

###  speedUp

▸ **speedUp**(): *void*

*Defined in [lib/player/player.ts:69](https://github.com/youkaisteve/oddment/blob/2f3018c/lib/player/player.ts#L69)*

加速

**Returns:** *void*

___

###  start

▸ **start**(): *void*

*Defined in [lib/player/player.ts:28](https://github.com/youkaisteve/oddment/blob/2f3018c/lib/player/player.ts#L28)*

开始

**Returns:** *void*

___

###  stop

▸ **stop**(): *void*

*Defined in [lib/player/player.ts:61](https://github.com/youkaisteve/oddment/blob/2f3018c/lib/player/player.ts#L61)*

停止

**Returns:** *void*
