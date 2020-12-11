# GoogleStorageWriter

## Hierarchy

↳ [LocalStorageWriter](../classes/_identity_offchain_storage_writers_.localstoragewriter.md)

↳ **GoogleStorageWriter**

## Index

### Constructors

* [constructor](../classes/_identity_offchain_storage_writers_.googlestoragewriter.md#constructor)

### Properties

* [local](../classes/_identity_offchain_storage_writers_.googlestoragewriter.md#readonly-local)
* [root](../classes/_identity_offchain_storage_writers_.googlestoragewriter.md#readonly-root)

### Methods

* [write](../classes/_identity_offchain_storage_writers_.googlestoragewriter.md#write)

## Constructors

### constructor

+ **new GoogleStorageWriter**\(`local`: string, `bucket`: string\): [_GoogleStorageWriter_](../classes/_identity_offchain_storage_writers_.googlestoragewriter.md)

_Overrides_ [_LocalStorageWriter_](../classes/_identity_offchain_storage_writers_.localstoragewriter.md)_._[_constructor_](../classes/_identity_offchain_storage_writers_.localstoragewriter.md#constructor)

_Defined in_ [_packages/contractkit/src/identity/offchain/storage-writers.ts:40_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/offchain/storage-writers.ts#L40)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `local` | string |
| `bucket` | string |

**Returns:** [_GoogleStorageWriter_](../classes/_identity_offchain_storage_writers_.googlestoragewriter.md)

## Properties

### `Readonly` local

• **local**: _string_

_Defined in_ [_packages/contractkit/src/identity/offchain/storage-writers.ts:42_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/offchain/storage-writers.ts#L42)

### `Readonly` root

• **root**: _string_

_Inherited from_ [_LocalStorageWriter_](../classes/_identity_offchain_storage_writers_.localstoragewriter.md)_._[_root_](../classes/_identity_offchain_storage_writers_.localstoragewriter.md#readonly-root)

_Defined in_ [_packages/contractkit/src/identity/offchain/storage-writers.ts:13_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/offchain/storage-writers.ts#L13)

## Methods

### write

▸ **write**\(`data`: Buffer, `dataPath`: string\): _Promise‹void›_

_Overrides_ [_LocalStorageWriter_](../classes/_identity_offchain_storage_writers_.localstoragewriter.md)_._[_write_](../classes/_identity_offchain_storage_writers_.localstoragewriter.md#write)

_Defined in_ [_packages/contractkit/src/identity/offchain/storage-writers.ts:47_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/offchain/storage-writers.ts#L47)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `data` | Buffer |
| `dataPath` | string |

**Returns:** _Promise‹void›_
