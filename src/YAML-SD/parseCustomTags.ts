import {
  parseDocument,
} from "yaml";

import { walkMap } from "./walkMap.js";
import {yamlOptions  } from './yamlOptions.js'

const replacer = (node: any) => {
  // no op
};

export const parseCustomTags = (data: string) => {
  const doc = parseDocument(data, yamlOptions);
  walkMap(doc.contents as any, replacer);
  return doc;
};