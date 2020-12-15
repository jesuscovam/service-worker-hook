import { expose } from "comlink";
import {
  takeLongTimeToDoSomething,
  takeALongTimeToAddTwoNumbers,
} from "../takeLongTime";

const exports = {
  takeLongTimeToDoSomething,
  takeALongTimeToAddTwoNumbers,
};

export type MyFirstWorker = typeof exports;

expose(exports);
