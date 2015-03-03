import RenderNode from 'famous/core/RenderNode';
import GridLayout from 'famous/views/GridLayout';
import React from 'react';
import cloneWithProps from 'react/lib/cloneWithProps';

import FamousMixin from '../lib/FamousMixin';
import FamousUtil from '../lib/FamousUtil';

export default React.createClass({
  mixins: [FamousMixin],

  propTypes: {
    dimensions: React.PropTypes.array,
    gutterSize: React.PropTypes.array,
    transition: React.PropTypes.bool
  },

  getFamousNodeByKey(key) {
    return this._famousNodes[key];
  },

  renderFamous() {
    return (
      <div data-famous="GridLayout">
        {this.props.children.map((child, key) => cloneWithProps(child, {key}))}
      </div>
    );
  },

  updateFamous(props) {
    let gridLayout = this.getFamous();
    let options = FamousUtil.parseOptions(props);
    let optionsChanged = this.setFamousOptions(options);
    let render = true;

    if (!gridLayout) {
      gridLayout = new GridLayout(options);
      this.setFamous(gridLayout);
      this.setFamousNode(FamousUtil.getFamousParentNode(this).add(gridLayout));
      this._famousNodes = props.children.map((child) => new RenderNode());
      gridLayout.sequenceFrom(this._famousNodes);
    } else if (optionsChanged) {
      surface.setOptions(options);
    }

    if (render) {
      this.forceUpdate();
    }
  }
});
