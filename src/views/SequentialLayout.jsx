import RenderNode from 'famous/core/RenderNode';
import SequentialLayout from 'famous/views/SequentialLayout';
import React from 'react';
import cloneWithProps from 'react/lib/cloneWithProps';

import FamousMixin from '../lib/FamousMixin';
import FamousUtil from '../lib/FamousUtil';

export default React.createClass({
  mixins: [FamousMixin],

  propTypes: {
    direction: React.PropTypes.number,
    itemSpacing: React.PropTypes.number
  },

  componentDidMount() {
    this._updateFamous(this.props);
  },

  componentWillReceiveProps(nextProps) {
    this._updateFamous(nextProps);
  },

  componentWillUnmount() {
    this.releaseFamousNode();
  },

  getFamousNodeByKey(key) {
    return this._famousNodes[key];
  },

  _updateFamous(props) {
    let node = this.getFamousNode();
    let options = FamousUtil.parseOptions(props);
    let render = true;

    if (!node) {
      node = new SequentialLayout(options);
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
      <div data-famous="SequentialLayout">
        {this.getFamousNode() ? this.props.children.map((child, key) => cloneWithProps(child, {key})) : null}
      </div>
    );
  }
});
