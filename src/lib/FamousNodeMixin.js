export default {
  getFamousNode(returnReactNode = true) {
    if (returnReactNode) {
      return this._famousReactNode;
    } else {
      return this._famousNode;
    }
  },

  releaseFamousNode() {
    delete this._famousReactNode;
    delete this._famousNode;
  },

  setFamousNode(reactNode, famousNode) {
    this._famousReactNode = reactNode;
    this._famousNode = famousNode;
  }
};
