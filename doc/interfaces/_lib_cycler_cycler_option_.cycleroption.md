[oddment - v0.0.29](../README.md) › [Globals](../globals.md) › ["lib/cycler/cycler_option"](../modules/_lib_cycler_cycler_option_.md) › [CyclerOption](_lib_cycler_cycler_option_.cycleroption.md)

# Interface: CyclerOption

## Hierarchy

* **CyclerOption**

## Index

### Properties

* [cycleTimes](_lib_cycler_cycler_option_.cycleroption.md#optional-cycletimes)
* [handler](_lib_cycler_cycler_option_.cycleroption.md#handler)
* [interval](_lib_cycler_cycler_option_.cycleroption.md#optional-interval)

## Properties

### `Optional` cycleTimes

• **cycleTimes**? : *number*

*Defined in [lib/cycler/cycler_option.ts:13](https://github.com/youkaisteve/oddment/blob/69633c3/lib/cycler/cycler_option.ts#L13)*

循环次数，默认为0，表示无限循环

___

###  handler

• **handler**: *function*

*Defined in [lib/cycler/cycler_option.ts:9](https://github.com/youkaisteve/oddment/blob/69633c3/lib/cycler/cycler_option.ts#L9)*

处理队列中对象的函数

#### Type declaration:

▸ (`any?`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`any?` | any |

___

### `Optional` interval

• **interval**? : *number*

*Defined in [lib/cycler/cycler_option.ts:5](https://github.com/youkaisteve/oddment/blob/69633c3/lib/cycler/cycler_option.ts#L5)*

间隔，毫秒，默认为1000，
