import isEqual from 'lodash/lang/isEqual';

import FamousUtil from './FamousUtil';

const FAMOUS_KEY = '_famous';
const FAMOUS_KEYED_NODES_KEY = '_famousKeyedNodes';
const FAMOUS_NODE_KEY = '_famousNode';
const FAMOUS_READY_KEY = '_famousReady';

export default {
  getFamous() {
    return this[FAMOUS_KEY];
  },

  getFamousKeyedNodes() {
    return this[FAMOUS_KEYED_NODES_KEY];
  },

  getFamousNode() {
    return this[FAMOUS_NODE_KEY];
  },

  getFamousParentNode() {
    return FamousUtil.getFamousParentNode(this);
  },

  getFamousReady() {
    return this[FAMOUS_READY_KEY];
  },

  isFamous() {
    return true;
  },

  releaseFamous() {
    delete this[FAMOUS_KEY];
    delete this[FAMOUS_KEYED_NODES_KEY];
    delete this[FAMOUS_NODE_KEY];
    delete this[FAMOUS_READY_KEY];
    delete this.famous;
  },

  setFamous(famousInstance) {
    this[FAMOUS_KEY] = famousInstance;
  },

  setFamousKeyedNodes(keyedNodes) {
    this[FAMOUS_KEYED_NODES_KEY] = keyedNodes;
  },

  setFamousNode(famousNode) {
    this[FAMOUS_NODE_KEY] = famousNode;
  },

  setFamousReady(ready) {
    this[FAMOUS_READY_KEY] = ready;
  }
};
