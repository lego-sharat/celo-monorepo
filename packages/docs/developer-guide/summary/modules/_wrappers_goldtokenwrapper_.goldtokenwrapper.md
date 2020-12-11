# GoldTokenWrapper

ERC-20 contract for Celo native currency.

## Hierarchy

* [BaseWrapper](../classes/_wrappers_basewrapper_.basewrapper.md)‹GoldToken›

  ↳ **GoldTokenWrapper**

## Index

### Constructors

* [constructor](../classes/_wrappers_goldtokenwrapper_.goldtokenwrapper.md#constructor)

### Properties

* [allowance](../classes/_wrappers_goldtokenwrapper_.goldtokenwrapper.md#allowance)
* [approve](../classes/_wrappers_goldtokenwrapper_.goldtokenwrapper.md#approve)
* [decimals](../classes/_wrappers_goldtokenwrapper_.goldtokenwrapper.md#decimals)
* [decreaseAllowance](../classes/_wrappers_goldtokenwrapper_.goldtokenwrapper.md#decreaseallowance)
* [eventTypes](../classes/_wrappers_goldtokenwrapper_.goldtokenwrapper.md#eventtypes)
* [events](../classes/_wrappers_goldtokenwrapper_.goldtokenwrapper.md#events)
* [increaseAllowance](../classes/_wrappers_goldtokenwrapper_.goldtokenwrapper.md#increaseallowance)
* [methodIds](../classes/_wrappers_goldtokenwrapper_.goldtokenwrapper.md#methodids)
* [name](../classes/_wrappers_goldtokenwrapper_.goldtokenwrapper.md#name)
* [symbol](../classes/_wrappers_goldtokenwrapper_.goldtokenwrapper.md#symbol)
* [totalSupply](../classes/_wrappers_goldtokenwrapper_.goldtokenwrapper.md#totalsupply)
* [transfer](../classes/_wrappers_goldtokenwrapper_.goldtokenwrapper.md#transfer)
* [transferFrom](../classes/_wrappers_goldtokenwrapper_.goldtokenwrapper.md#transferfrom)
* [transferWithComment](../classes/_wrappers_goldtokenwrapper_.goldtokenwrapper.md#transferwithcomment)

### Accessors

* [address](../classes/_wrappers_goldtokenwrapper_.goldtokenwrapper.md#address)

### Methods

* [balanceOf](../classes/_wrappers_goldtokenwrapper_.goldtokenwrapper.md#balanceof)
* [getPastEvents](../classes/_wrappers_goldtokenwrapper_.goldtokenwrapper.md#getpastevents)

## Constructors

### constructor

+ **new GoldTokenWrapper**\(`kit`: [ContractKit](../classes/_kit_.contractkit.md), `contract`: GoldToken\): [_GoldTokenWrapper_](../classes/_wrappers_goldtokenwrapper_.goldtokenwrapper.md)

_Inherited from_ [_BaseWrapper_](../classes/_wrappers_basewrapper_.basewrapper.md)_._[_constructor_](../classes/_wrappers_basewrapper_.basewrapper.md#constructor)

_Defined in_ [_packages/contractkit/src/wrappers/BaseWrapper.ts:26_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L26)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `kit` | [ContractKit](../classes/_kit_.contractkit.md) |
| `contract` | GoldToken |

**Returns:** [_GoldTokenWrapper_](../classes/_wrappers_goldtokenwrapper_.goldtokenwrapper.md)

## Properties

### allowance

• **allowance**: _function_ = proxyCall\(this.contract.methods.allowance, undefined, valueToBigNumber\)

_Defined in_ [_packages/contractkit/src/wrappers/GoldTokenWrapper.ts:28_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/GoldTokenWrapper.ts#L28)

Querying allowance.

**`param`** Account who has given the allowance.

**`param`** Address of account to whom the allowance was given.

**`returns`** Amount of allowance.

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### approve

• **approve**: _function_ = proxySend\(this.kit, this.contract.methods.approve\)

_Defined in_ [_packages/contractkit/src/wrappers/GoldTokenWrapper.ts:59_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/GoldTokenWrapper.ts#L59)

Approve a user to transfer CELO on behalf of another user.

**`param`** The address which is being approved to spend CELO.

**`param`** The amount of CELO approved to the spender.

**`returns`** True if the transaction succeeds.

#### Type declaration:

▸ \(...`args`: InputArgs\): [_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### decimals

• **decimals**: _function_ = proxyCall\(this.contract.methods.decimals, undefined, valueToInt\)

_Defined in_ [_packages/contractkit/src/wrappers/GoldTokenWrapper.ts:45_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/GoldTokenWrapper.ts#L45)

Returns the number of decimals used in the token.

**`returns`** Number of decimals.

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### decreaseAllowance

• **decreaseAllowance**: _function_ = proxySend\(this.kit, this.contract.methods.decreaseAllowance\)

_Defined in_ [_packages/contractkit/src/wrappers/GoldTokenWrapper.ts:77_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/GoldTokenWrapper.ts#L77)

Decreases the allowance of another user.

**`param`** The address which is being approved to spend CELO.

**`param`** The decrement of the amount of CELO approved to the spender.

**`returns`** true if success.

#### Type declaration:

▸ \(...`args`: InputArgs\): [_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### eventTypes

• **eventTypes**: _EventsEnum‹T›_ = Object.keys\(this.events\).reduce&gt;\( \(acc, key\) =&gt; \({ ...acc, \[key\]: key }\), {} as any \)

_Inherited from_ [_BaseWrapper_](../classes/_wrappers_basewrapper_.basewrapper.md)_._[_eventTypes_](../classes/_wrappers_basewrapper_.basewrapper.md#eventtypes)

_Defined in_ [_packages/contractkit/src/wrappers/BaseWrapper.ts:42_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L42)

### events

• **events**: _GoldToken\["events"\]_ = this.contract.events

_Inherited from_ [_BaseWrapper_](../classes/_wrappers_basewrapper_.basewrapper.md)_._[_events_](../classes/_wrappers_basewrapper_.basewrapper.md#events)

_Defined in_ [_packages/contractkit/src/wrappers/BaseWrapper.ts:40_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L40)

### increaseAllowance

• **increaseAllowance**: _function_ = proxySend\( this.kit, this.contract.methods.increaseAllowance, tupleParser\(stringIdentity, valueToString\) \)

_Defined in_ [_packages/contractkit/src/wrappers/GoldTokenWrapper.ts:66_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/GoldTokenWrapper.ts#L66)

Increases the allowance of another user.

**`param`** The address which is being approved to spend CELO.

**`param`** The increment of the amount of CELO approved to the spender.

**`returns`** true if success.

#### Type declaration:

▸ \(...`args`: InputArgs\): [_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹Output›_

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

### name

• **name**: _function_ = proxyCall\(this.contract.methods.name, undefined, \(a: any\) =&gt; a.toString\(\)\)

_Defined in_ [_packages/contractkit/src/wrappers/GoldTokenWrapper.ts:34_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/GoldTokenWrapper.ts#L34)

Returns the name of the token.

**`returns`** Name of the token.

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### symbol

• **symbol**: _function_ = proxyCall\(this.contract.methods.symbol, undefined, \(a: any\) =&gt; a.toString\(\)\)

_Defined in_ [_packages/contractkit/src/wrappers/GoldTokenWrapper.ts:40_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/GoldTokenWrapper.ts#L40)

Returns the three letter symbol of the token.

**`returns`** Symbol of the token.

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### totalSupply

• **totalSupply**: _function_ = proxyCall\(this.contract.methods.totalSupply, undefined, valueToBigNumber\)

_Defined in_ [_packages/contractkit/src/wrappers/GoldTokenWrapper.ts:51_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/GoldTokenWrapper.ts#L51)

Returns the total supply of the token, that is, the amount of tokens currently minted.

**`returns`** Total supply.

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### transfer

• **transfer**: _function_ = proxySend\(this.kit, this.contract.methods.transfer\)

_Defined in_ [_packages/contractkit/src/wrappers/GoldTokenWrapper.ts:94_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/GoldTokenWrapper.ts#L94)

Transfers CELO from one address to another.

**`param`** The address to transfer CELO to.

**`param`** The amount of CELO to transfer.

**`returns`** True if the transaction succeeds.

#### Type declaration:

▸ \(...`args`: InputArgs\): [_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### transferFrom

• **transferFrom**: _function_ = proxySend\(this.kit, this.contract.methods.transferFrom\)

_Defined in_ [_packages/contractkit/src/wrappers/GoldTokenWrapper.ts:103_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/GoldTokenWrapper.ts#L103)

Transfers CELO from one address to another on behalf of a user.

**`param`** The address to transfer CELO from.

**`param`** The address to transfer CELO to.

**`param`** The amount of CELO to transfer.

**`returns`** True if the transaction succeeds.

#### Type declaration:

▸ \(...`args`: InputArgs\): [_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### transferWithComment

• **transferWithComment**: _function_ = proxySend\(this.kit, this.contract.methods.transferWithComment\)

_Defined in_ [_packages/contractkit/src/wrappers/GoldTokenWrapper.ts:86_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/GoldTokenWrapper.ts#L86)

Transfers CELO from one address to another with a comment.

**`param`** The address to transfer CELO to.

**`param`** The amount of CELO to transfer.

**`param`** The transfer comment

**`returns`** True if the transaction succeeds.

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

### balanceOf

▸ **balanceOf**\(`account`: [Address](_base_.md#address)\): _Promise‹BigNumber‹››_

_Defined in_ [_packages/contractkit/src/wrappers/GoldTokenWrapper.ts:110_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/GoldTokenWrapper.ts#L110)

Gets the balance of the specified address.

**Parameters:**

| Name | Type |
| :--- | :--- |
| `account` | [Address](_base_.md#address) |

**Returns:** _Promise‹BigNumber‹››_

The balance of the specified address.

### getPastEvents

▸ **getPastEvents**\(`event`: Events‹GoldToken›, `options`: PastEventOptions\): _Promise‹EventLog\[\]›_

_Inherited from_ [_BaseWrapper_](../classes/_wrappers_basewrapper_.basewrapper.md)_._[_getPastEvents_](../classes/_wrappers_basewrapper_.basewrapper.md#getpastevents)

_Defined in_ [_packages/contractkit/src/wrappers/BaseWrapper.ts:36_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L36)

Contract getPastEvents

**Parameters:**

| Name | Type |
| :--- | :--- |
| `event` | Events‹GoldToken› |
| `options` | PastEventOptions |

**Returns:** _Promise‹EventLog\[\]›_
