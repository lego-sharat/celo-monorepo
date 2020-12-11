# PublicPictureAccessor

## Hierarchy

* [PublicBinaryAccessor](../classes/_identity_offchain_accessors_binary_.publicbinaryaccessor.md)

  ↳ **PublicPictureAccessor**

## Implements

* [PublicAccessor](../interfaces/_identity_offchain_accessors_interfaces_.publicaccessor.md)‹Buffer›

## Index

### Constructors

* [constructor](../classes/_identity_offchain_accessors_pictures_.publicpictureaccessor.md#constructor)

### Properties

* [dataPath](../classes/_identity_offchain_accessors_pictures_.publicpictureaccessor.md#readonly-datapath)
* [read](../classes/_identity_offchain_accessors_pictures_.publicpictureaccessor.md#read)
* [wrapper](../classes/_identity_offchain_accessors_pictures_.publicpictureaccessor.md#readonly-wrapper)

### Methods

* [readAsResult](../classes/_identity_offchain_accessors_pictures_.publicpictureaccessor.md#readasresult)
* [write](../classes/_identity_offchain_accessors_pictures_.publicpictureaccessor.md#write)

## Constructors

### constructor

+ **new PublicPictureAccessor**\(`wrapper`: [OffchainDataWrapper](../classes/_identity_offchain_data_wrapper_.offchaindatawrapper.md)\): [_PublicPictureAccessor_](../classes/_identity_offchain_accessors_pictures_.publicpictureaccessor.md)

_Overrides_ [_PublicBinaryAccessor_](../classes/_identity_offchain_accessors_binary_.publicbinaryaccessor.md)_._[_constructor_](../classes/_identity_offchain_accessors_binary_.publicbinaryaccessor.md#constructor)

_Defined in_ [_packages/contractkit/src/identity/offchain/accessors/pictures.ts:4_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/offchain/accessors/pictures.ts#L4)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `wrapper` | [OffchainDataWrapper](../classes/_identity_offchain_data_wrapper_.offchaindatawrapper.md) |

**Returns:** [_PublicPictureAccessor_](../classes/_identity_offchain_accessors_pictures_.publicpictureaccessor.md)

## Properties

### `Readonly` dataPath

• **dataPath**: _string_

_Inherited from_ [_PublicBinaryAccessor_](../classes/_identity_offchain_accessors_binary_.publicbinaryaccessor.md)_._[_dataPath_](../classes/_identity_offchain_accessors_binary_.publicbinaryaccessor.md#readonly-datapath)

_Defined in_ [_packages/contractkit/src/identity/offchain/accessors/binary.ts:12_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/offchain/accessors/binary.ts#L12)

### read

• **read**: _function_ = makeAsyncThrowable\(this.readAsResult.bind\(this\)\)

_Implementation of_ [_PublicAccessor_](../interfaces/_identity_offchain_accessors_interfaces_.publicaccessor.md)_._[_read_](../interfaces/_identity_offchain_accessors_interfaces_.publicaccessor.md#read)

_Inherited from_ [_PublicBinaryAccessor_](../classes/_identity_offchain_accessors_binary_.publicbinaryaccessor.md)_._[_read_](../classes/_identity_offchain_accessors_binary_.publicbinaryaccessor.md#read)

_Defined in_ [_packages/contractkit/src/identity/offchain/accessors/binary.ts:35_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/offchain/accessors/binary.ts#L35)

#### Type declaration:

▸ \(...`args`: TArgs\): _Promise‹TResult›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | TArgs |

### `Readonly` wrapper

• **wrapper**: [_OffchainDataWrapper_](../classes/_identity_offchain_data_wrapper_.offchaindatawrapper.md)

_Overrides_ [_PublicBinaryAccessor_](../classes/_identity_offchain_accessors_binary_.publicbinaryaccessor.md)_._[_wrapper_](../classes/_identity_offchain_accessors_binary_.publicbinaryaccessor.md#readonly-wrapper)

_Defined in_ [_packages/contractkit/src/identity/offchain/accessors/pictures.ts:5_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/offchain/accessors/pictures.ts#L5)

## Methods

### readAsResult

▸ **readAsResult**\(`account`: [Address](_base_.md#address)\): _Promise‹ErrorResult‹_[_OffchainError_](../classes/_identity_offchain_accessors_errors_.offchainerror.md)_‹›› \| OkResult‹Buffer‹›››_

_Inherited from_ [_PublicBinaryAccessor_](../classes/_identity_offchain_accessors_binary_.publicbinaryaccessor.md)_._[_readAsResult_](../classes/_identity_offchain_accessors_binary_.publicbinaryaccessor.md#readasresult)

_Defined in_ [_packages/contractkit/src/identity/offchain/accessors/binary.ts:26_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/offchain/accessors/binary.ts#L26)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `account` | [Address](_base_.md#address) |

**Returns:** _Promise‹ErrorResult‹_[_OffchainError_](../classes/_identity_offchain_accessors_errors_.offchainerror.md)_‹›› \| OkResult‹Buffer‹›››_

### write

▸ **write**\(`data`: Buffer\): _Promise‹undefined \|_ [_OffchainError_](../classes/_identity_offchain_accessors_errors_.offchainerror.md)_‹››_

_Inherited from_ [_PublicBinaryAccessor_](../classes/_identity_offchain_accessors_binary_.publicbinaryaccessor.md)_._[_write_](../classes/_identity_offchain_accessors_binary_.publicbinaryaccessor.md#write)

_Defined in_ [_packages/contractkit/src/identity/offchain/accessors/binary.ts:14_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/offchain/accessors/binary.ts#L14)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `data` | Buffer |

**Returns:** _Promise‹undefined \|_ [_OffchainError_](../classes/_identity_offchain_accessors_errors_.offchainerror.md)_‹››_
