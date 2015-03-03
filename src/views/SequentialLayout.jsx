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

  getFamousNodeByKey(key) {
    return this._famousNodes[key];
  },

  renderFamous() {
    return (
      <div data-famous="SequentialLayout">
        {this.props.children.map((child, key) => cloneWithProps(child, {key}))}
      </div>
    );
  },

  updateFamous(props) {
    let sequentialLayout = this.getFamous();
    let options = FamousUtil.parseOptions(props);
    let optionsChanged = this.setFamousOptions(options);
    let render = true;

    if (!sequentialLayout) {
      sequentialLayout = new SequentialLayout(options);
      this.setFamous(sequentialLayout);
      this.setFamousNode(FamousUtil.getFamousParentNode(this).add(sequentialLayout));
      this._famousNodes = props.children.map((child) => new RenderNode());
      sequentialLayout.sequenceFrom(this._famousNodes);
    } else if (optionsChanged) {
      surface.setOptions(options);
    }

    if (render) {
      this.forceUpdate();
    }
  }
});
