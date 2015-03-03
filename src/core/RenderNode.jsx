import RenderNode from 'famous/core/RenderNode';
import React from 'react';

import FamousNodeMixin from '../lib/FamousNodeMixin';
import FamousRenderMixin from '../lib/FamousRenderMixin';
import FamousUtil from '../lib/FamousUtil';

export default React.createClass({
  mixins: [FamousNodeMixin, FamousRenderMixin],

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

  _updateFamous(props) {
    let renderNode = this.getFamous();
    let render = true;

    if (!renderNode) {
      renderNode = new RenderNode();
      this.setFamous(renderNode);
      this.setFamousNode(FamousUtil.getFamousParentNode(this).add(renderNode));
    }

    if (render) {
      this.forceUpdate();
    }
  },

  renderFamous() {
    return (
      <div data-famous="RenderNode">
        {this.props.children}
      </div>
    );
  }
});
