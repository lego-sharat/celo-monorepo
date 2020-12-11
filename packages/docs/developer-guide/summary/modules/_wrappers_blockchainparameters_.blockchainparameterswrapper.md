# BlockchainParametersWrapper

Network parameters that are configurable by governance.

## Hierarchy

* [BaseWrapper](../classes/_wrappers_basewrapper_.basewrapper.md)‹BlockchainParameters›

  ↳ **BlockchainParametersWrapper**

## Index

### Constructors

* [constructor](../classes/_wrappers_blockchainparameters_.blockchainparameterswrapper.md#constructor)

### Properties

* [eventTypes](../classes/_wrappers_blockchainparameters_.blockchainparameterswrapper.md#eventtypes)
* [events](../classes/_wrappers_blockchainparameters_.blockchainparameterswrapper.md#events)
* [getBlockGasLimit](../classes/_wrappers_blockchainparameters_.blockchainparameterswrapper.md#getblockgaslimit)
* [getIntrinsicGasForAlternativeFeeCurrency](../classes/_wrappers_blockchainparameters_.blockchainparameterswrapper.md#getintrinsicgasforalternativefeecurrency)
* [methodIds](../classes/_wrappers_blockchainparameters_.blockchainparameterswrapper.md#methodids)
* [setBlockGasLimit](../classes/_wrappers_blockchainparameters_.blockchainparameterswrapper.md#setblockgaslimit)
* [setIntrinsicGasForAlternativeFeeCurrency](../classes/_wrappers_blockchainparameters_.blockchainparameterswrapper.md#setintrinsicgasforalternativefeecurrency)
* [setMinimumClientVersion](../classes/_wrappers_blockchainparameters_.blockchainparameterswrapper.md#setminimumclientversion)

### Accessors

* [address](../classes/_wrappers_blockchainparameters_.blockchainparameterswrapper.md#address)

### Methods

* [getConfig](../classes/_wrappers_blockchainparameters_.blockchainparameterswrapper.md#getconfig)
* [getMinimumClientVersion](../classes/_wrappers_blockchainparameters_.blockchainparameterswrapper.md#getminimumclientversion)
* [getPastEvents](../classes/_wrappers_blockchainparameters_.blockchainparameterswrapper.md#getpastevents)

## Constructors

### constructor

+ **new BlockchainParametersWrapper**\(`kit`: [ContractKit](../classes/_kit_.contractkit.md), `contract`: BlockchainParameters\): [_BlockchainParametersWrapper_](../classes/_wrappers_blockchainparameters_.blockchainparameterswrapper.md)

_Inherited from_ [_BaseWrapper_](../classes/_wrappers_basewrapper_.basewrapper.md)_._[_constructor_](../classes/_wrappers_basewrapper_.basewrapper.md#constructor)

_Defined in_ [_packages/contractkit/src/wrappers/BaseWrapper.ts:26_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L26)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `kit` | [ContractKit](../classes/_kit_.contractkit.md) |
| `contract` | BlockchainParameters |

**Returns:** [_BlockchainParametersWrapper_](../classes/_wrappers_blockchainparameters_.blockchainparameterswrapper.md)

## Properties

### eventTypes

• **eventTypes**: _EventsEnum‹T›_ = Object.keys\(this.events\).reduce&gt;\( \(acc, key\) =&gt; \({ ...acc, \[key\]: key }\), {} as any \)

_Inherited from_ [_BaseWrapper_](../classes/_wrappers_basewrapper_.basewrapper.md)_._[_eventTypes_](../classes/_wrappers_basewrapper_.basewrapper.md#eventtypes)

_Defined in_ [_packages/contractkit/src/wrappers/BaseWrapper.ts:42_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L42)

### events

• **events**: _BlockchainParameters\["events"\]_ = this.contract.events

_Inherited from_ [_BaseWrapper_](../classes/_wrappers_basewrapper_.basewrapper.md)_._[_events_](../classes/_wrappers_basewrapper_.basewrapper.md#events)

_Defined in_ [_packages/contractkit/src/wrappers/BaseWrapper.ts:40_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L40)

### getBlockGasLimit

• **getBlockGasLimit**: _function_ = proxyCall\(this.contract.methods.blockGasLimit, undefined, valueToBigNumber\)

_Defined in_ [_packages/contractkit/src/wrappers/BlockchainParameters.ts:41_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BlockchainParameters.ts#L41)

Getting the block gas limit.

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### getIntrinsicGasForAlternativeFeeCurrency

• **getIntrinsicGasForAlternativeFeeCurrency**: _function_ = proxyCall\( this.contract.methods.intrinsicGasForAlternativeFeeCurrency, undefined, valueToBigNumber \)

_Defined in_ [_packages/contractkit/src/wrappers/BlockchainParameters.ts:24_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BlockchainParameters.ts#L24)

Get the extra intrinsic gas for transactions, where gas is paid using non-gold currency.

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### methodIds

• **methodIds**: _Record‹keyof T\["methods"\], string›_ = Object.keys\(this.contract.methods\).reduce, string&gt;&gt;\( \(acc, method: Methods\) =&gt; { const methodABI = this.contract.options.jsonInterface.find\(\(item\) =&gt; item.name === method\)

```text
  acc[method] =
    methodABI === undefined ? '0x' : this.kit.web3.eth.abi.encodeFunctionSignature(methodABI)

  return acc
},
{} as any
```

\)

_Inherited from_ [_BaseWrapper_](../classes/_wrappers_basewrapper_.basewrapper.md)_._[_methodIds_](../classes/_wrappers_basewrapper_.basewrapper.md#methodids)

_Defined in_ [_packages/contractkit/src/wrappers/BaseWrapper.ts:47_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L47)

### setBlockGasLimit

• **setBlockGasLimit**: _function_ = proxySend\(this.kit, this.contract.methods.setBlockGasLimit\)

_Defined in_ [_packages/contractkit/src/wrappers/BlockchainParameters.ts:46_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BlockchainParameters.ts#L46)

Setting the block gas limit.

#### Type declaration:

▸ \(...`args`: InputArgs\): [_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### setIntrinsicGasForAlternativeFeeCurrency

• **setIntrinsicGasForAlternativeFeeCurrency**: _function_ = proxySend\( this.kit, this.contract.methods.setIntrinsicGasForAlternativeFeeCurrency \)

_Defined in_ [_packages/contractkit/src/wrappers/BlockchainParameters.ts:33_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BlockchainParameters.ts#L33)

Setting the extra intrinsic gas for transactions, where gas is paid using non-gold currency.

#### Type declaration:

▸ \(...`args`: InputArgs\): [_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### setMinimumClientVersion

• **setMinimumClientVersion**: _function_ = proxySend\(this.kit, this.contract.methods.setMinimumClientVersion\)

_Defined in_ [_packages/contractkit/src/wrappers/BlockchainParameters.ts:63_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BlockchainParameters.ts#L63)

Set minimum client version.

#### Type declaration:

▸ \(...`args`: InputArgs\): [_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

## Accessors

### address

• **get address**\(\): _string_

_Inherited from_ [_BaseWrapper_](../classes/_wrappers_basewrapper_.basewrapper.md)_._[_address_](../classes/_wrappers_basewrapper_.basewrapper.md#address)

_Defined in_ [_packages/contractkit/src/wrappers/BaseWrapper.ts:30_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L30)

Contract address

**Returns:** _string_

## Methods

### getConfig

▸ **getConfig**\(\): _Promise‹_[_BlockchainParametersConfig_](../interfaces/_wrappers_blockchainparameters_.blockchainparametersconfig.md)_›_

_Defined in_ [_packages/contractkit/src/wrappers/BlockchainParameters.ts:68_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BlockchainParameters.ts#L68)

Returns current configuration parameters.

**Returns:** _Promise‹_[_BlockchainParametersConfig_](../interfaces/_wrappers_blockchainparameters_.blockchainparametersconfig.md)_›_

### getMinimumClientVersion

▸ **getMinimumClientVersion**\(\): _Promise‹_[_ClientVersion_](../interfaces/_wrappers_blockchainparameters_.clientversion.md)_›_

_Defined in_ [_packages/contractkit/src/wrappers/BlockchainParameters.ts:51_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BlockchainParameters.ts#L51)

Get minimum client version.

**Returns:** _Promise‹_[_ClientVersion_](../interfaces/_wrappers_blockchainparameters_.clientversion.md)_›_

### getPastEvents

▸ **getPastEvents**\(`event`: Events‹BlockchainParameters›, `options`: PastEventOptions\): _Promise‹EventLog\[\]›_

_Inherited from_ [_BaseWrapper_](../classes/_wrappers_basewrapper_.basewrapper.md)_._[_getPastEvents_](../classes/_wrappers_basewrapper_.basewrapper.md#getpastevents)

_Defined in_ [_packages/contractkit/src/wrappers/BaseWrapper.ts:36_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L36)

Contract getPastEvents

**Parameters:**

| Name | Type |
| :--- | :--- |
| `event` | Events‹BlockchainParameters› |
| `options` | PastEventOptions |

**Returns:** _Promise‹EventLog\[\]›_
