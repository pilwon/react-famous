import isEqual from 'lodash/lang/isEqual';

export default {
  getFamous() {
    return this._famous;
  },

  getFamousKeyedNodes() {
    return this._famousKeyedNodes;
  },

  getFamousNode() {
    return this._famousNode;
  },

  getFamousOptions() {
    return this._famousOptions;
  },

  getFamousReady() {
    return this._famousReady;
  },

  isFamous() {
    return true;
  },

  releaseFamous() {
    delete this._famous;
    delete this._famousKeyedNodes;
    delete this._famousNode;
  },

  setFamous(famousInstance) {
    this._famous = famousInstance;
  },

  setFamousKeyedNodes(keyedNodes) {
    this._famousKeyedNodes = keyedNodes;
  },

  setFamousNode(famousNode) {
    this._famousNode = famousNode;
  },

  setFamousOptions(options) {
    let changed = false;
    if (!isEqual(options, this._famousOptions)) {
      this._famousOptions = options;
      changed = true;
    }
    return changed;
  },

  setFamousReady(ready) {
    this._famousReady = ready;
  }
};
