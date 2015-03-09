import FamousRenderNode from 'famous/core/RenderNode';
import FamousEdgeSwapper from 'famous/views/EdgeSwapper';
import defaults from 'lodash/object/defaults';
import React from 'react';

import FamousComponent from '../lib/FamousComponent';

class EdgeSwapper extends FamousComponent {
  famousCreate() {
    return new FamousEdgeSwapper(this.props.options);
  }

  famousCreateNode(parentNode) {
    let edgeSwapper = this.getFamous();
    parentNode.add(edgeSwapper);
    return this.getFamousChildrenRef().map((child, idx) => [child, new RenderNode()]);
  }

  famousUpdate(nextProps) {
    let edgeSwapper = this.getFamous();

    edgeSwapper.setOptions(nextProps.options);
  }

  render() {
    return (
      <div data-famous="DeckSwapper">
        {this.getFamousChildren()}
      </div>
    );
  }
}

defaults(EdgeSwapper, FamousEdgeSwapper);

export default EdgeSwapper;
