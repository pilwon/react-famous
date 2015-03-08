import RenderNode from 'famous/core/RenderNode';
import EdgeSwapper from 'famous/views/EdgeSwapper';
import React from 'react';

import FamousComponent from '../lib/FamousComponent';

export default class extends FamousComponent {
  famousCreate() {
    return new EdgeSwapper(this.props.options);
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
};
