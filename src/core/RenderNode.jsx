import RenderNode from 'famous/core/RenderNode';
import React from 'react';

import FamousMixin from '../lib/FamousMixin';

export default React.createClass({
  mixins: [FamousMixin],

  famousCreate() {
    return new RenderNode();
  },

  famousCreateNode(parentNode) {
    let renderNode = this.getFamous();
    let node = parentNode.add(renderNode);
    return this.getFamousChildrenRef().map((child, idx) => [child, node]);
  },

  render() {
    return (
      <div data-famous="RenderNode">
        {this.getFamousChildren()}
      </div>
    );
  }
});
