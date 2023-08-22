import {
  parse,
  stringify,
} from "yaml";

import { parseCustomTags } from "./parseCustomTags.js";
import { yamlOptions } from './yamlOptions.js'

import { issuancePayload } from './issuancePayload.js'
import { disclose } from "./disclose.js";
import { tokenToSchema } from "./tokenToSchema.js"

const dumps = (data: any) => {
  return stringify(data, yamlOptions);
};

const roughlyEqual = (a: string, b: string) => {
  return JSON.stringify(parse(a)) === JSON.stringify(parse(b));
};

const load = (data: string) => {
  return parseCustomTags(data).contents
}

const YAML = {
  load,
  tokenToSchema,
  issuancePayload,
  parseCustomTags,
  loads: parse,
  dumps,
  disclose,
  roughlyEqual,
};

export default YAML;
