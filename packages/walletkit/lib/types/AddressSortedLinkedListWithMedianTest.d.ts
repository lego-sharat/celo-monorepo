/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import Contract, { CustomOptions, contractOptions } from "web3/eth/contract";
import { TransactionObject, BlockType } from "web3/eth/types";
import { Callback, EventLog } from "web3/types";
import { EventEmitter } from "events";
import { Provider } from "web3/providers";

export class AddressSortedLinkedListWithMedianTest extends Contract {
  constructor(jsonInterface: any[], address?: string, options?: CustomOptions);
  _address: string;
  options: contractOptions;
  methods: {
    contains(key: string): TransactionObject<boolean>;

    getElements(): TransactionObject<{
      0: (string)[];
      1: (string)[];
      2: (string)[];
    }>;

    insert(
      key: string,
      numerator: number | string,
      lesserKey: string,
      greaterKey: string
    ): TransactionObject<void>;

    update(
      key: string,
      numerator: number | string,
      lesserKey: string,
      greaterKey: string
    ): TransactionObject<void>;

    remove(key: string): TransactionObject<void>;

    getNumElements(): TransactionObject<string>;
    head(): TransactionObject<string>;
    tail(): TransactionObject<string>;
    medianKey(): TransactionObject<string>;
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
  clone(): AddressSortedLinkedListWithMedianTest;
}