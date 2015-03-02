import Modifier from 'famous/core/Modifier';
import React from 'react';

import FamousMixin from '../lib/FamousMixin';
import FamousUtil from '../lib/FamousUtil';

export default React.createClass({
  mixins: [FamousMixin],

  componentDidMount() {
    this._updateFamous(this.props);
  },

  componentWillReceiveProps(nextProps) {
    this._updateFamous(nextProps);
  },

  componentWillUnmount() {
    this.releaseFamousNode();
  },

  _updateFamous(props) {
    let node = this.getFamousNode();
    let options = FamousUtil.parseOptions(props);
    let render = true;

    if (!node) {
      node = new Modifier(options);
      this.setFamousNode(
        FamousUtil.getFamousParentNode(this).add(node)
      );
    }

    if (render) {
      this.forceUpdate();
    }
  },

  render() {
    return (
      <div data-famous="Modifier">
        {this.getFamousNode() ? this.props.children : null}
      </div>
    );
  }
});
