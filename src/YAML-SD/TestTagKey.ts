import {discloseKey } from './constants.js'
export class TestTagKey {
  constructor(public value: object | string | number) {}
  toJSON() {
    return { [discloseKey]: "..." };
  }
  toString() {
    return discloseKey;
  }
}