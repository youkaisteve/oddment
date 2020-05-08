[oddment - v0.0.2](../README.md) › [Globals](../globals.md) › ["lib/cycler/cycler"](../modules/_lib_cycler_cycler_.md) › [Cycler](_lib_cycler_cycler_.cycler.md)

# Class: Cycler

## Hierarchy

* **Cycler**

## Index

### Constructors

* [constructor](_lib_cycler_cycler_.cycler.md#constructor)

### Properties

* [currentPos](_lib_cycler_cycler_.cycler.md#currentpos)
* [cycleTimes](_lib_cycler_cycler_.cycler.md#cycletimes)
* [items](_lib_cycler_cycler_.cycler.md#items)
* [options](_lib_cycler_cycler_.cycler.md#options)
* [started](_lib_cycler_cycler_.cycler.md#started)
* [status](_lib_cycler_cycler_.cycler.md#status)
* [timer](_lib_cycler_cycler_.cycler.md#timer)

### Methods

* [[NEXT]](_lib_cycler_cycler_.cycler.md#[next])
* [add](_lib_cycler_cycler_.cycler.md#add)
* [pause](_lib_cycler_cycler_.cycler.md#pause)
* [resume](_lib_cycler_cycler_.cycler.md#resume)
* [sleep](_lib_cycler_cycler_.cycler.md#sleep)
* [start](_lib_cycler_cycler_.cycler.md#start)
* [stop](_lib_cycler_cycler_.cycler.md#stop)

## Constructors

###  constructor

\+ **new Cycler**(`items`: Array‹any›, `options`: [CyclerOption](../interfaces/_lib_cycler_cycler_option_.cycleroption.md)): *[Cycler](_lib_cycler_cycler_.cycler.md)*

*Defined in [lib/cycler/cycler.ts:21](https://github.com/youkaisteve/oddment/blob/8e6815a/lib/cycler/cycler.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | Array‹any› |
`options` | [CyclerOption](../interfaces/_lib_cycler_cycler_option_.cycleroption.md) |

**Returns:** *[Cycler](_lib_cycler_cycler_.cycler.md)*

## Properties

###  currentPos

• **currentPos**: *number* = 0

*Defined in [lib/cycler/cycler.ts:9](https://github.com/youkaisteve/oddment/blob/8e6815a/lib/cycler/cycler.ts#L9)*

___

###  cycleTimes

• **cycleTimes**: *number* = 0

*Defined in [lib/cycler/cycler.ts:17](https://github.com/youkaisteve/oddment/blob/8e6815a/lib/cycler/cycler.ts#L17)*

循环次数

___

###  items

• **items**: *Array‹any›*

*Defined in [lib/cycler/cycler.ts:6](https://github.com/youkaisteve/oddment/blob/8e6815a/lib/cycler/cycler.ts#L6)*

___

###  options

• **options**: *[CyclerOption](../interfaces/_lib_cycler_cycler_option_.cycleroption.md)*

*Defined in [lib/cycler/cycler.ts:7](https://github.com/youkaisteve/oddment/blob/8e6815a/lib/cycler/cycler.ts#L7)*

___

###  started

• **started**: *Boolean* = false

*Defined in [lib/cycler/cycler.ts:21](https://github.com/youkaisteve/oddment/blob/8e6815a/lib/cycler/cycler.ts#L21)*

已经开始了

___

###  status

• **status**: *number* = 0

*Defined in [lib/cycler/cycler.ts:13](https://github.com/youkaisteve/oddment/blob/8e6815a/lib/cycler/cycler.ts#L13)*

状态: 0-停止;1-进行中；

___

###  timer

• **timer**: *any*

*Defined in [lib/cycler/cycler.ts:8](https://github.com/youkaisteve/oddment/blob/8e6815a/lib/cycler/cycler.ts#L8)*

## Methods

###  [NEXT]

▸ **[NEXT]**(): *any*

*Defined in [lib/cycler/cycler.ts:103](https://github.com/youkaisteve/oddment/blob/8e6815a/lib/cycler/cycler.ts#L103)*

**Returns:** *any*

___

###  add

▸ **add**(`item`: any, `pos?`: number): *void*

*Defined in [lib/cycler/cycler.ts:77](https://github.com/youkaisteve/oddment/blob/8e6815a/lib/cycler/cycler.ts#L77)*

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

*Defined in [lib/cycler/cycler.ts:50](https://github.com/youkaisteve/oddment/blob/8e6815a/lib/cycler/cycler.ts#L50)*

暂停

**Returns:** *void*

___

###  resume

▸ **resume**(): *Promise‹void›*

*Defined in [lib/cycler/cycler.ts:57](https://github.com/youkaisteve/oddment/blob/8e6815a/lib/cycler/cycler.ts#L57)*

恢复

**Returns:** *Promise‹void›*

___

###  sleep

▸ **sleep**(`millions`: any): *Promise‹unknown›*

*Defined in [lib/cycler/cycler.ts:97](https://github.com/youkaisteve/oddment/blob/8e6815a/lib/cycler/cycler.ts#L97)*

模拟sleep

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`millions` | any | 毫秒  |

**Returns:** *Promise‹unknown›*

___

###  start

▸ **start**(`pos?`: number): *Promise‹void›*

*Defined in [lib/cycler/cycler.ts:37](https://github.com/youkaisteve/oddment/blob/8e6815a/lib/cycler/cycler.ts#L37)*

开始

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pos?` | number | 开始位置  |

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *void*

*Defined in [lib/cycler/cycler.ts:65](https://github.com/youkaisteve/oddment/blob/8e6815a/lib/cycler/cycler.ts#L65)*

停止

**Returns:** *void*
