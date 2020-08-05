[oddment - v0.0.21](../README.md) › [Globals](../globals.md) › ["lib/cycler/cycler"](../modules/_lib_cycler_cycler_.md) › [Cycler](_lib_cycler_cycler_.cycler.md)

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
* [clearTimer](_lib_cycler_cycler_.cycler.md#private-cleartimer)
* [pause](_lib_cycler_cycler_.cycler.md#pause)
* [reset](_lib_cycler_cycler_.cycler.md#reset)
* [resume](_lib_cycler_cycler_.cycler.md#resume)
* [sleep](_lib_cycler_cycler_.cycler.md#private-sleep)
* [start](_lib_cycler_cycler_.cycler.md#start)
* [stop](_lib_cycler_cycler_.cycler.md#stop)

## Constructors

###  constructor

\+ **new Cycler**(`items`: any[], `options`: [CyclerOption](../interfaces/_lib_cycler_cycler_option_.cycleroption.md)): *[Cycler](_lib_cycler_cycler_.cycler.md)*

*Defined in [lib/cycler/cycler.ts:21](https://github.com/youkaisteve/oddment/blob/5e26528/lib/cycler/cycler.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | any[] |
`options` | [CyclerOption](../interfaces/_lib_cycler_cycler_option_.cycleroption.md) |

**Returns:** *[Cycler](_lib_cycler_cycler_.cycler.md)*

## Properties

###  currentPos

• **currentPos**: *number*

*Defined in [lib/cycler/cycler.ts:9](https://github.com/youkaisteve/oddment/blob/5e26528/lib/cycler/cycler.ts#L9)*

___

###  cycleTimes

• **cycleTimes**: *number*

*Defined in [lib/cycler/cycler.ts:17](https://github.com/youkaisteve/oddment/blob/5e26528/lib/cycler/cycler.ts#L17)*

循环次数

___

###  items

• **items**: *any[]*

*Defined in [lib/cycler/cycler.ts:6](https://github.com/youkaisteve/oddment/blob/5e26528/lib/cycler/cycler.ts#L6)*

___

###  options

• **options**: *[CyclerOption](../interfaces/_lib_cycler_cycler_option_.cycleroption.md)*

*Defined in [lib/cycler/cycler.ts:7](https://github.com/youkaisteve/oddment/blob/5e26528/lib/cycler/cycler.ts#L7)*

___

###  started

• **started**: *boolean*

*Defined in [lib/cycler/cycler.ts:21](https://github.com/youkaisteve/oddment/blob/5e26528/lib/cycler/cycler.ts#L21)*

已经开始了

___

###  status

• **status**: *number*

*Defined in [lib/cycler/cycler.ts:13](https://github.com/youkaisteve/oddment/blob/5e26528/lib/cycler/cycler.ts#L13)*

状态: 0-停止;1-进行中；

___

###  timer

• **timer**: *any*

*Defined in [lib/cycler/cycler.ts:8](https://github.com/youkaisteve/oddment/blob/5e26528/lib/cycler/cycler.ts#L8)*

## Methods

###  [NEXT]

▸ **[NEXT]**(): *any*

*Defined in [lib/cycler/cycler.ts:133](https://github.com/youkaisteve/oddment/blob/5e26528/lib/cycler/cycler.ts#L133)*

**Returns:** *any*

___

###  add

▸ **add**(`item`: any, `pos?`: number): *void*

*Defined in [lib/cycler/cycler.ts:98](https://github.com/youkaisteve/oddment/blob/5e26528/lib/cycler/cycler.ts#L98)*

将新的对象加入到循环队列中

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`item` | any | 要插队的数组或对象 |
`pos?` | number | 要插入的位置  |

**Returns:** *void*

___

### `Private` clearTimer

▸ **clearTimer**(): *void*

*Defined in [lib/cycler/cycler.ts:128](https://github.com/youkaisteve/oddment/blob/5e26528/lib/cycler/cycler.ts#L128)*

清空时钟

**Returns:** *void*

___

###  pause

▸ **pause**(): *void*

*Defined in [lib/cycler/cycler.ts:51](https://github.com/youkaisteve/oddment/blob/5e26528/lib/cycler/cycler.ts#L51)*

暂停

**Returns:** *void*

___

###  reset

▸ **reset**(`items?`: any[]): *void*

*Defined in [lib/cycler/cycler.ts:86](https://github.com/youkaisteve/oddment/blob/5e26528/lib/cycler/cycler.ts#L86)*

重置Cycler，停止循环

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`items?` | any[] | 重置的数据,非必填，如果没有值，效果等同于stop  |

**Returns:** *void*

___

###  resume

▸ **resume**(): *Promise‹void›*

*Defined in [lib/cycler/cycler.ts:58](https://github.com/youkaisteve/oddment/blob/5e26528/lib/cycler/cycler.ts#L58)*

恢复

**Returns:** *Promise‹void›*

___

### `Private` sleep

▸ **sleep**(`millions`: any): *Promise‹unknown›*

*Defined in [lib/cycler/cycler.ts:118](https://github.com/youkaisteve/oddment/blob/5e26528/lib/cycler/cycler.ts#L118)*

模拟sleep

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`millions` | any | 毫秒  |

**Returns:** *Promise‹unknown›*

___

###  start

▸ **start**(`pos?`: number): *Promise‹void›*

*Defined in [lib/cycler/cycler.ts:37](https://github.com/youkaisteve/oddment/blob/5e26528/lib/cycler/cycler.ts#L37)*

开始

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pos?` | number | 开始位置  |

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *void*

*Defined in [lib/cycler/cycler.ts:74](https://github.com/youkaisteve/oddment/blob/5e26528/lib/cycler/cycler.ts#L74)*

停止，等同于释放资源，当不再使用的时候，务必调用一次该方法

**Returns:** *void*
