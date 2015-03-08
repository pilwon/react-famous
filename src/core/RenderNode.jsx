import RenderNode from 'famous/core/RenderNode';
import React from 'react';

import FamousComponent from '../lib/FamousComponent';

export default class extends FamousComponent {
  famousCreate() {
    return new RenderNode();
  }

  famousCreateNode(parentNode) {
    let renderNode = this.getFamous();
    let node = parentNode.add(renderNode);
    return this.getFamousChildrenRef().map((child, idx) => [child, node]);
  }

  render() {
    return (
      <div data-famous="RenderNode">
        {this.getFamousChildren()}
      </div>
    );
  }
};
