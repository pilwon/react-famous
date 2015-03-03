import isEqual from 'lodash/lang/isEqual';

export default {
  getFamous() {
    return this._famous;
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

  releaseFamous() {
    delete this._famous;
  },

  releaseFamousNode() {
    delete this._famousNode;
  },

  setFamous(famousInstance) {
    this._famous = famousInstance;
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
