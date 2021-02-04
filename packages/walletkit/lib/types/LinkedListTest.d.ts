/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import Contract, { CustomOptions, contractOptions } from "web3/eth/contract";
import { TransactionObject, BlockType } from "web3/eth/types";
import { Callback, EventLog } from "web3/types";
import { EventEmitter } from "events";
import { Provider } from "web3/providers";

export class LinkedListTest extends Contract {
  constructor(jsonInterface: any[], address?: string, options?: CustomOptions);
  _address: string;
  options: contractOptions;
  methods: {
    contains(key: string | number[]): TransactionObject<boolean>;

    insert(
      key: string | number[],
      previousKey: string | number[],
      nextKey: string | number[]
    ): TransactionObject<void>;

    update(
      key: string | number[],
      previousKey: string | number[],
      nextKey: string | number[]
    ): TransactionObject<void>;

    remove(key: string | number[]): TransactionObject<void>;

    getNumElements(): TransactionObject<string>;
    getKeys(): TransactionObject<(string)[]>;
    head(): TransactionObject<string>;
    tail(): TransactionObject<string>;
  };
  deploy(options: {
    data: string;
    arguments: any[];
  }): TransactionObject<Contract>;
  events: {
    allEvents: (
      options?: {
        filter?: object;
        fromBlock?: BlockType;
        topics?: (null | string)[];
      },
      cb?: Callback<EventLog>
    ) => EventEmitter;
  };
  getPastEvents(
    event: string,
    options?: {
      filter?: object;
      fromBlock?: BlockType;
      toBlock?: BlockType;
      topics?: (null | string)[];
    },
    cb?: Callback<EventLog[]>
  ): Promise<EventLog[]>;
  setProvider(provider: Provider): void;
  clone(): LinkedListTest;
}