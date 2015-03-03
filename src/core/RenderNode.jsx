import RenderNode from 'famous/core/RenderNode';
import React from 'react';

import FamousMixin from '../lib/FamousMixin';
import FamousUtil from '../lib/FamousUtil';

export default React.createClass({
  mixins: [FamousMixin],

  updateFamous(props) {
    let renderNode = this.getFamous();

    if (!renderNode) {
      renderNode = new RenderNode();
      this.setFamous(renderNode);
      this.setFamousNode(FamousUtil.getFamousParentNode(this).add(renderNode));
    }
  },

  render() {
    if (!this.getFamousReady()) { return null; }

    return (
      <div data-famous="RenderNode">
        {this.props.children}
      </div>
    );
  }
});
