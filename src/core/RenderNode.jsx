import RenderNode from 'famous/core/RenderNode';
import defaults from 'lodash/object/defaults';
import React from 'react';

import FamousComponent from '../lib/FamousComponent';

class Component extends FamousComponent {
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
}

defaults(Component, RenderNode);

export default Component;
