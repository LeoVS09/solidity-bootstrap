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
export type Borrowed = ContractEventLog<{
  strategy: string;
  amount: string;
  strategyTotalAssets: string;
  totalDebt: string;
  0: string;
  1: string;
  2: string;
  3: string;
}>;
export type Deposit = ContractEventLog<{
  amount: string;
  shares: string;
  holder: string;
  0: string;
  1: string;
  2: string;
}>;
export type OwnershipTransferred = ContractEventLog<{
  previousOwner: string;
  newOwner: string;
  0: string;
  1: string;
}>;
export type ReturnFromStrategy = ContractEventLog<{
  previusBalance: string;
  targetBalance: string;
  requestedAmount: string;
  loss: string;
  0: string;
  1: string;
  2: string;
  3: string;
}>;
export type Transfer = ContractEventLog<{
  from: string;
  to: string;
  value: string;
  0: string;
  1: string;
  2: string;
}>;
export type Withdraw = ContractEventLog<{
  holder: string;
  maxShares: string;
  maxLoss: string;
  shares: string;
  amount: string;
  totalShares: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
}>;

export interface InvestmentVault extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): InvestmentVault;
  clone(): InvestmentVault;
  methods: {
    allowance(
      owner: string,
      spender: string
    ): NonPayableTransactionObject<string>;

    approve(
      spender: string,
      amount: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    assets(): NonPayableTransactionObject<string>;

    balanceOf(account: string): NonPayableTransactionObject<string>;

    borrow(amount: number | string | BN): NonPayableTransactionObject<void>;

    burn(amount: number | string | BN): NonPayableTransactionObject<void>;

    burnFrom(
      account: string,
      amount: number | string | BN
    ): NonPayableTransactionObject<void>;

    creditAvailable(): NonPayableTransactionObject<string>;

    decimals(): NonPayableTransactionObject<string>;

    decreaseAllowance(
      spender: string,
      subtractedValue: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    deposit(amount: number | string | BN): NonPayableTransactionObject<string>;

    increaseAllowance(
      spender: string,
      addedValue: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    initialize(
      name: string,
      symbol: string,
      storageTokenAddress: string,
      strategyAddress: string
    ): NonPayableTransactionObject<void>;

    name(): NonPayableTransactionObject<string>;

    owner(): NonPayableTransactionObject<string>;

    renounceOwnership(): NonPayableTransactionObject<void>;

    setStrategy(strategyAddress: string): NonPayableTransactionObject<void>;

    strategy(): NonPayableTransactionObject<string>;

    symbol(): NonPayableTransactionObject<string>;

    totalAssets(): NonPayableTransactionObject<string>;

    totalDebt(): NonPayableTransactionObject<string>;

    totalSupply(): NonPayableTransactionObject<string>;

    transfer(
      to: string,
      amount: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    transferFrom(
      from: string,
      to: string,
      amount: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    transferOwnership(newOwner: string): NonPayableTransactionObject<void>;

    withdraw(
      maxShares: number | string | BN,
      maxLoss: number | string | BN
    ): NonPayableTransactionObject<string>;
  };
  events: {
    Approval(cb?: Callback<Approval>): EventEmitter;
    Approval(options?: EventOptions, cb?: Callback<Approval>): EventEmitter;

    Borrowed(cb?: Callback<Borrowed>): EventEmitter;
    Borrowed(options?: EventOptions, cb?: Callback<Borrowed>): EventEmitter;

    Deposit(cb?: Callback<Deposit>): EventEmitter;
    Deposit(options?: EventOptions, cb?: Callback<Deposit>): EventEmitter;

    OwnershipTransferred(cb?: Callback<OwnershipTransferred>): EventEmitter;
    OwnershipTransferred(
      options?: EventOptions,
      cb?: Callback<OwnershipTransferred>
    ): EventEmitter;

    ReturnFromStrategy(cb?: Callback<ReturnFromStrategy>): EventEmitter;
    ReturnFromStrategy(
      options?: EventOptions,
      cb?: Callback<ReturnFromStrategy>
    ): EventEmitter;

    Transfer(cb?: Callback<Transfer>): EventEmitter;
    Transfer(options?: EventOptions, cb?: Callback<Transfer>): EventEmitter;

    Withdraw(cb?: Callback<Withdraw>): EventEmitter;
    Withdraw(options?: EventOptions, cb?: Callback<Withdraw>): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "Approval", cb: Callback<Approval>): void;
  once(event: "Approval", options: EventOptions, cb: Callback<Approval>): void;

  once(event: "Borrowed", cb: Callback<Borrowed>): void;
  once(event: "Borrowed", options: EventOptions, cb: Callback<Borrowed>): void;

  once(event: "Deposit", cb: Callback<Deposit>): void;
  once(event: "Deposit", options: EventOptions, cb: Callback<Deposit>): void;

  once(event: "OwnershipTransferred", cb: Callback<OwnershipTransferred>): void;
  once(
    event: "OwnershipTransferred",
    options: EventOptions,
    cb: Callback<OwnershipTransferred>
  ): void;

  once(event: "ReturnFromStrategy", cb: Callback<ReturnFromStrategy>): void;
  once(
    event: "ReturnFromStrategy",
    options: EventOptions,
    cb: Callback<ReturnFromStrategy>
  ): void;

  once(event: "Transfer", cb: Callback<Transfer>): void;
  once(event: "Transfer", options: EventOptions, cb: Callback<Transfer>): void;

  once(event: "Withdraw", cb: Callback<Withdraw>): void;
  once(event: "Withdraw", options: EventOptions, cb: Callback<Withdraw>): void;
}
