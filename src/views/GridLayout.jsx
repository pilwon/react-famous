import RenderNode from 'famous/core/RenderNode';
import GridLayout from 'famous/views/GridLayout';
import React from 'react';
import cloneWithProps from 'react/lib/cloneWithProps';

import FamousNodeMixin from '../lib/FamousNodeMixin';
import FamousRenderMixin from '../lib/FamousRenderMixin';
import FamousUtil from '../lib/FamousUtil';

export default React.createClass({
  mixins: [FamousNodeMixin, FamousRenderMixin],

  propTypes: {
    dimensions: React.PropTypes.array,
    gutterSize: React.PropTypes.array,
    transition: React.PropTypes.bool
  },

  componentDidMount() {
    this._updateFamous(this.props);
  },

  componentWillReceiveProps(nextProps) {
    this._updateFamous(nextProps);
  },

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  },

  componentWillUnmount() {
    this.releaseFamous();
    this.releaseFamousNode();
  },

  getFamousNodeByKey(key) {
    return this._famousNodes[key];
  },

  _updateFamous(props) {
    let gridLayout = this.getFamousNode();
    let options = FamousUtil.parseOptions(props);
    let render = true;

    if (!gridLayout) {
      gridLayout = new GridLayout(options);

      this.setFamous(gridLayout);
      this.setFamousNode(FamousUtil.getFamousParentNode(this).add(gridLayout));

      this._famousNodes = props.children.map((child) => new RenderNode());
      gridLayout.sequenceFrom(this._famousNodes);
    }

    if (render) {
      this.forceUpdate();
    }
  },

  renderFamous() {
    return (
      <div data-famous="GridLayout">
        {this.props.children.map((child, key) => cloneWithProps(child, {key}))}
      </div>
    );
  }
});
