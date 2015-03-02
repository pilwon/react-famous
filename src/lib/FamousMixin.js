export default {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  },

  deleteFamousNode() {
    delete this._famousNode;
  },

  getFamousNode() {
    return this._famousNode;
  },

  setFamousNode(node) {
    this._famousNode = node;
  }
};
