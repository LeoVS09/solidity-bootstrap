/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type BN from "bn.js";
import type { ContractOptions } from "web3-eth-contract";
import type { EventLog } from "web3-core";
import type { EventEmitter } from "events";
import type {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "./types";

export interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export type Approval = ContractEventLog<{
  owner: string;
  spender: string;
  value: string;
  0: string;
  1: string;
  2: string;
}>;
export type Transfer = ContractEventLog<{
  from: string;
  to: string;
  value: string;
  0: string;
  1: string;
  2: string;
}>;

export interface TutorialToken extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): TutorialToken;
  clone(): TutorialToken;
  methods: {
    INITIAL_SUPPLY(): NonPayableTransactionObject<string>;

    /**
     * See {IERC20-allowance}.
     */
    allowance(
      owner: string,
      spender: string
    ): NonPayableTransactionObject<string>;

    /**
     * See {IERC20-approve}.     * Requirements:     * - `spender` cannot be the zero address.
     */
    approve(
      spender: string,
      amount: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    /**
     * See {IERC20-balanceOf}.
     */
    balanceOf(account: string): NonPayableTransactionObject<string>;

    decimals(): NonPayableTransactionObject<string>;

    /**
     * Atomically decreases the allowance granted to `spender` by the caller.     * This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}.     * Emits an {Approval} event indicating the updated allowance.     * Requirements:     * - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.
     */
    decreaseAllowance(
      spender: string,
      subtractedValue: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    /**
     * Atomically increases the allowance granted to `spender` by the caller.     * This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}.     * Emits an {Approval} event indicating the updated allowance.     * Requirements:     * - `spender` cannot be the zero address.
     */
    increaseAllowance(
      spender: string,
      addedValue: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    name(): NonPayableTransactionObject<string>;

    symbol(): NonPayableTransactionObject<string>;

    /**
     * See {IERC20-totalSupply}.
     */
    totalSupply(): NonPayableTransactionObject<string>;

    /**
     * See {IERC20-transfer}.     * Requirements:     * - `recipient` cannot be the zero address. - the caller must have a balance of at least `amount`.
     */
    transfer(
      recipient: string,
      amount: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    /**
     * See {IERC20-transferFrom}.     * Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20};     * Requirements: - `sender` and `recipient` cannot be the zero address. - `sender` must have a balance of at least `amount`. - the caller must have allowance for `sender`'s tokens of at least `amount`.
     */
    transferFrom(
      sender: string,
      recipient: string,
      amount: number | string | BN
    ): NonPayableTransactionObject<boolean>;
  };
  events: {
    Approval(cb?: Callback<Approval>): EventEmitter;
    Approval(options?: EventOptions, cb?: Callback<Approval>): EventEmitter;

    Transfer(cb?: Callback<Transfer>): EventEmitter;
    Transfer(options?: EventOptions, cb?: Callback<Transfer>): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "Approval", cb: Callback<Approval>): void;
  once(event: "Approval", options: EventOptions, cb: Callback<Approval>): void;

  once(event: "Transfer", cb: Callback<Transfer>): void;
  once(event: "Transfer", options: EventOptions, cb: Callback<Transfer>): void;
}
