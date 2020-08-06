[oddment - v0.0.28](../README.md) › [Globals](../globals.md) › ["lib/player/player"](../modules/_lib_player_player_.md) › [Player](_lib_player_player_.player.md)

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

* [changeOption](_lib_player_player_.player.md#changeoption)
* [handleContext](_lib_player_player_.player.md#private-handlecontext)
* [pause](_lib_player_player_.player.md#pause)
* [play](_lib_player_player_.player.md#private-play)
* [resetContext](_lib_player_player_.player.md#private-resetcontext)
* [resume](_lib_player_player_.player.md#resume)
* [setOption](_lib_player_player_.player.md#private-setoption)
* [slowDown](_lib_player_player_.player.md#slowdown)
* [speedUp](_lib_player_player_.player.md#speedup)
* [start](_lib_player_player_.player.md#start)
* [stop](_lib_player_player_.player.md#stop)

## Constructors

###  constructor

\+ **new Player**(`playerOption?`: [PlayerOption](../interfaces/_lib_player_player_option_.playeroption.md)): *[Player](_lib_player_player_.player.md)*

*Defined in [lib/player/player.ts:8](https://github.com/youkaisteve/oddment/blob/e5d31ee/lib/player/player.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`playerOption?` | [PlayerOption](../interfaces/_lib_player_player_option_.playeroption.md) |

**Returns:** *[Player](_lib_player_player_.player.md)*

## Properties

### `Private` context

• **context**: *[PlayerContext](../interfaces/_lib_player_context_.playercontext.md)*

*Defined in [lib/player/player.ts:5](https://github.com/youkaisteve/oddment/blob/e5d31ee/lib/player/player.ts#L5)*

___

### `Private` playerOption

• **playerOption**: *[PlayerOption](../interfaces/_lib_player_player_option_.playeroption.md)*

*Defined in [lib/player/player.ts:8](https://github.com/youkaisteve/oddment/blob/e5d31ee/lib/player/player.ts#L8)*

___

### `Private` speedIndex

• **speedIndex**: *number* = 0

*Defined in [lib/player/player.ts:7](https://github.com/youkaisteve/oddment/blob/e5d31ee/lib/player/player.ts#L7)*

___

### `Private` timer

• **timer**: *any*

*Defined in [lib/player/player.ts:6](https://github.com/youkaisteve/oddment/blob/e5d31ee/lib/player/player.ts#L6)*

## Methods

###  changeOption

▸ **changeOption**(`playerOption`: [PlayerOption](../interfaces/_lib_player_player_option_.playeroption.md)): *void*

*Defined in [lib/player/player.ts:18](https://github.com/youkaisteve/oddment/blob/e5d31ee/lib/player/player.ts#L18)*

重新设置选项

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`playerOption` | [PlayerOption](../interfaces/_lib_player_player_option_.playeroption.md) | 选项  |

**Returns:** *void*

___

### `Private` handleContext

▸ **handleContext**(`extend?`: object): *void*

*Defined in [lib/player/player.ts:118](https://github.com/youkaisteve/oddment/blob/e5d31ee/lib/player/player.ts#L118)*

**Parameters:**

Name | Type |
------ | ------ |
`extend?` | object |

**Returns:** *void*

___

###  pause

▸ **pause**(): *void*

*Defined in [lib/player/player.ts:45](https://github.com/youkaisteve/oddment/blob/e5d31ee/lib/player/player.ts#L45)*

暂停

**Returns:** *void*

___

### `Private` play

▸ **play**(): *void*

*Defined in [lib/player/player.ts:101](https://github.com/youkaisteve/oddment/blob/e5d31ee/lib/player/player.ts#L101)*

播放

**Returns:** *void*

___

### `Private` resetContext

▸ **resetContext**(): *void*

*Defined in [lib/player/player.ts:145](https://github.com/youkaisteve/oddment/blob/e5d31ee/lib/player/player.ts#L145)*

**Returns:** *void*

___

###  resume

▸ **resume**(): *void*

*Defined in [lib/player/player.ts:57](https://github.com/youkaisteve/oddment/blob/e5d31ee/lib/player/player.ts#L57)*

恢复，暂停后使用

**Returns:** *void*

___

### `Private` setOption

▸ **setOption**(`playerOption`: [PlayerOption](../interfaces/_lib_player_player_option_.playeroption.md)): *void*

*Defined in [lib/player/player.ts:130](https://github.com/youkaisteve/oddment/blob/e5d31ee/lib/player/player.ts#L130)*

设置选项

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`playerOption` | [PlayerOption](../interfaces/_lib_player_player_option_.playeroption.md) |   |

**Returns:** *void*

___

###  slowDown

▸ **slowDown**(): *void*

*Defined in [lib/player/player.ts:89](https://github.com/youkaisteve/oddment/blob/e5d31ee/lib/player/player.ts#L89)*

减速，最低减到一倍速，不能慢放

**Returns:** *void*

___

###  speedUp

▸ **speedUp**(): *void*

*Defined in [lib/player/player.ts:76](https://github.com/youkaisteve/oddment/blob/e5d31ee/lib/player/player.ts#L76)*

加速

**Returns:** *void*

___

###  start

▸ **start**(`blocker?`: function): *Promise‹void›*

*Defined in [lib/player/player.ts:27](https://github.com/youkaisteve/oddment/blob/e5d31ee/lib/player/player.ts#L27)*

开始

**Parameters:**

▪`Optional`  **blocker**: *function*

需要异步启动的业务，可设置blocker，待blocker返回true之后，才会真正启动，否则会停止

▸ (): *Promise‹boolean›*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *void*

*Defined in [lib/player/player.ts:68](https://github.com/youkaisteve/oddment/blob/e5d31ee/lib/player/player.ts#L68)*

停止

**Returns:** *void*
