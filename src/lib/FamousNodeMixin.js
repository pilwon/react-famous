import isEqual from 'lodash/lang/isEqual';

const FAMOUS_KEY = Symbol('famous');
const FAMOUS_KEYED_NODES_KEY = Symbol('famousKeyedNodes');
const FAMOUS_NODE_KEY = Symbol('famousNode');
const FAMOUS_OPTIONS_KEY = Symbol('famousOptions');
const FAMOUS_READY_KEY = Symbol('famousReady');

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

  getFamousOptions() {
    return this[FAMOUS_OPTIONS_KEY];
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
    delete this[FAMOUS_OPTIONS_KEY];
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

  setFamousOptions(options) {
    let changed = false;
    if (!isEqual(options, this[FAMOUS_OPTIONS_KEY])) {
      this[FAMOUS_OPTIONS_KEY] = options;
      changed = true;
    }
    return changed;
  },

  setFamousReady(ready) {
    this[FAMOUS_READY_KEY] = ready;
  }
};
