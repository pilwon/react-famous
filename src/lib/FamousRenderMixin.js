import isFunction from 'lodash/lang/isFunction';

export default {
  render() {
    let famousNode = this.getFamousNode();
    if (famousNode && isFunction(this.renderFamous)) {
      return this.renderFamous(famousNode);
    } else {
      return null;
    }
  }
};
