import FamousRenderNode from 'famous/core/RenderNode';
import defaults from 'lodash/object/defaults';
import React from 'react';

import FamousComponent from '../lib/FamousComponent';

class RenderNode extends FamousComponent {
  famousCreate() {
    return new FamousRenderNode();
  }

  famousCreateNode(parentNode) {
    let renderNode = this.getFamous();
    let node = parentNode.add(renderNode);
    let next = this.getFamousChildrenRef().map((child, idx) => [child, node]);
    return [node, next];
  }

  render() {
    return (
      <div data-famous="RenderNode">
        {this.getFamousChildren()}
      </div>
    );
  }
}

defaults(RenderNode, FamousRenderNode);

export default RenderNode;
