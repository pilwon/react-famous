import RenderNode from 'famous/core/RenderNode';
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
    let render = true;

    if (!node) {
      node = new RenderNode();
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
      <div data-famous="RenderNode">
        {this.getFamousNode() ? this.props.children : null}
      </div>
    );
  }
});
