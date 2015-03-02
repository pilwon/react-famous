export default {
  getFamousNode() {
    return this._famousNode;
  },

  releaseFamousNode() {
    delete this._famousNode;
  },

  setFamousNode(node) {
    this._famousNode = node;
  }
};
