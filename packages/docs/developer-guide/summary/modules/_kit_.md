# kit

## Index

### Classes

* [ContractKit](../classes/_kit_.contractkit.md)

### Interfaces

* [KitOptions](../interfaces/_kit_.kitoptions.md)
* [NetworkConfig](../interfaces/_kit_.networkconfig.md)

### Functions

* [newKit](_kit_.md#newkit)
* [newKitFromWeb3](_kit_.md#newkitfromweb3)

## Functions

### newKit

▸ **newKit**\(`url`: string, `wallet?`: [ReadOnlyWallet](../interfaces/_wallets_wallet_.readonlywallet.md)\): [_ContractKit_](../classes/_kit_.contractkit.md)_‹›_

_Defined in_ [_packages/contractkit/src/kit.ts:39_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/kit.ts#L39)

Creates a new instance of `ContractKit` give a nodeUrl

**`optional`** wallet to reuse or add a wallet different that the default \(example ledger-wallet\)

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `url` | string | CeloBlockchain node url |
| `wallet?` | [ReadOnlyWallet](../interfaces/_wallets_wallet_.readonlywallet.md) | - |

**Returns:** [_ContractKit_](../classes/_kit_.contractkit.md)_‹›_

### newKitFromWeb3

▸ **newKitFromWeb3**\(`web3`: Web3, `wallet?`: [ReadOnlyWallet](../interfaces/_wallets_wallet_.readonlywallet.md)\): [_ContractKit_](../classes/_kit_.contractkit.md)_‹›_

_Defined in_ [_packages/contractkit/src/kit.ts:51_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/kit.ts#L51)

Creates a new instance of `ContractKit` give a web3 instance

**`optional`** wallet to reuse or add a wallet different that the default \(example ledger-wallet\)

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `web3` | Web3 | Web3 instance |
| `wallet?` | [ReadOnlyWallet](../interfaces/_wallets_wallet_.readonlywallet.md) | - |

**Returns:** [_ContractKit_](../classes/_kit_.contractkit.md)_‹›_
