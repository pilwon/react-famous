export default {
  getFamous() {
    return this._famous;
  },

  getFamousNode() {
    return this._famousNode;
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
  }
};
