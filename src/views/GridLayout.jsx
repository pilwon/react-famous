import RenderNode from 'famous/core/RenderNode';
import GridLayout from 'famous/views/GridLayout';
import React from 'react';
import cloneWithProps from 'react/lib/cloneWithProps';

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
    this.deleteFamousNode();
  },

  getFamousNodeByKey(key) {
    return this._famousNodes[key];
  },

  _updateFamous(props) {
    let node = this.getFamousNode();
    let options = FamousUtil.parseOptions(props);
    let render = true;

    if (!node) {
      node = new GridLayout(options);
      this.setFamousNode(
        FamousUtil.getFamousParentNode(this).add(node)
      );
      this._famousNodes = props.children.map((child) => new RenderNode());
      node.sequenceFrom(this._famousNodes);
    }

    if (render) {
      this.forceUpdate();
    }
  },

  render() {
    return (
      <div data-famous="GridLayout">
        {this.getFamousNode() ? this.props.children.map((child, key) => cloneWithProps(child, {key})) : null}
      </div>
    );
  }
});
