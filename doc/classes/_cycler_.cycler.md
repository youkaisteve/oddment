[oddment - v0.0.3](../README.md) › [Globals](../globals.md) › ["cycler"](../modules/_cycler_.md) › [Cycler](_cycler_.cycler.md)

# Class: Cycler

## Hierarchy

* **Cycler**

## Index

### Constructors

* [constructor](_cycler_.cycler.md#constructor)

### Properties

* [currentPos](_cycler_.cycler.md#currentpos)
* [cycleTimes](_cycler_.cycler.md#cycletimes)
* [items](_cycler_.cycler.md#items)
* [options](_cycler_.cycler.md#options)
* [started](_cycler_.cycler.md#started)
* [status](_cycler_.cycler.md#status)
* [timer](_cycler_.cycler.md#timer)

### Methods

* [[NEXT]](_cycler_.cycler.md#[next])
* [add](_cycler_.cycler.md#add)
* [pause](_cycler_.cycler.md#pause)
* [resume](_cycler_.cycler.md#resume)
* [sleep](_cycler_.cycler.md#sleep)
* [start](_cycler_.cycler.md#start)
* [stop](_cycler_.cycler.md#stop)

## Constructors

###  constructor

\+ **new Cycler**(`items`: Array‹any›, `options`: [CyclerOption](../interfaces/_cycler_option_.cycleroption.md)): *[Cycler](_cycler_.cycler.md)*

*Defined in [cycler.ts:21](https://github.com/youkaisteve/oddment/blob/c7d1cb9/lib/cycler/cycler.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | Array‹any› |
`options` | [CyclerOption](../interfaces/_cycler_option_.cycleroption.md) |

**Returns:** *[Cycler](_cycler_.cycler.md)*

## Properties

###  currentPos

• **currentPos**: *number* = 0

*Defined in [cycler.ts:9](https://github.com/youkaisteve/oddment/blob/c7d1cb9/lib/cycler/cycler.ts#L9)*

___

###  cycleTimes

• **cycleTimes**: *number* = 0

*Defined in [cycler.ts:17](https://github.com/youkaisteve/oddment/blob/c7d1cb9/lib/cycler/cycler.ts#L17)*

循环次数

___

###  items

• **items**: *Array‹any›*

*Defined in [cycler.ts:6](https://github.com/youkaisteve/oddment/blob/c7d1cb9/lib/cycler/cycler.ts#L6)*

___

###  options

• **options**: *[CyclerOption](../interfaces/_cycler_option_.cycleroption.md)*

*Defined in [cycler.ts:7](https://github.com/youkaisteve/oddment/blob/c7d1cb9/lib/cycler/cycler.ts#L7)*

___

###  started

• **started**: *Boolean* = false

*Defined in [cycler.ts:21](https://github.com/youkaisteve/oddment/blob/c7d1cb9/lib/cycler/cycler.ts#L21)*

已经开始了

___

###  status

• **status**: *number* = 0

*Defined in [cycler.ts:13](https://github.com/youkaisteve/oddment/blob/c7d1cb9/lib/cycler/cycler.ts#L13)*

状态: 0-停止;1-进行中；

___

###  timer

• **timer**: *any*

*Defined in [cycler.ts:8](https://github.com/youkaisteve/oddment/blob/c7d1cb9/lib/cycler/cycler.ts#L8)*

## Methods

###  [NEXT]

▸ **[NEXT]**(): *any*

*Defined in [cycler.ts:103](https://github.com/youkaisteve/oddment/blob/c7d1cb9/lib/cycler/cycler.ts#L103)*

**Returns:** *any*

___

###  add

▸ **add**(`item`: any, `pos?`: number): *void*

*Defined in [cycler.ts:77](https://github.com/youkaisteve/oddment/blob/c7d1cb9/lib/cycler/cycler.ts#L77)*

将新的对象加入到循环队列中

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`item` | any | 要插队的数组或对象 |
`pos?` | number | 要插入的位置  |

**Returns:** *void*

___

###  pause

▸ **pause**(): *void*

*Defined in [cycler.ts:50](https://github.com/youkaisteve/oddment/blob/c7d1cb9/lib/cycler/cycler.ts#L50)*

暂停

**Returns:** *void*

___

###  resume

▸ **resume**(): *Promise‹void›*

*Defined in [cycler.ts:57](https://github.com/youkaisteve/oddment/blob/c7d1cb9/lib/cycler/cycler.ts#L57)*

恢复

**Returns:** *Promise‹void›*

___

###  sleep

▸ **sleep**(`millions`: any): *Promise‹unknown›*

*Defined in [cycler.ts:97](https://github.com/youkaisteve/oddment/blob/c7d1cb9/lib/cycler/cycler.ts#L97)*

模拟sleep

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`millions` | any | 毫秒  |

**Returns:** *Promise‹unknown›*

___

###  start

▸ **start**(`pos?`: number): *Promise‹void›*

*Defined in [cycler.ts:37](https://github.com/youkaisteve/oddment/blob/c7d1cb9/lib/cycler/cycler.ts#L37)*

开始

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pos?` | number | 开始位置  |

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *void*

*Defined in [cycler.ts:65](https://github.com/youkaisteve/oddment/blob/c7d1cb9/lib/cycler/cycler.ts#L65)*

停止

**Returns:** *void*
