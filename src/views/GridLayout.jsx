import FamousRenderNode from 'famous/core/RenderNode';
import FamousGridLayout from 'famous/views/GridLayout';
import defaults from 'lodash/object/defaults';
import React from 'react';

import FamousComponent from '../lib/FamousComponent';

class GridLayout extends FamousComponent {
  famousCreate() {
    return new FamousGridLayout(this.props.options);
  }

  famousCreateNode(parentNode) {
    let gridLayout = this.getFamous();
    let node = parentNode.add(gridLayout);
    let next = [];
    let sequence = this.getFamousChildrenRef().map((child, idx) => {
      let renderNode = new FamousRenderNode();
      next.push([child, renderNode]);
      return renderNode;
    });
    gridLayout.sequenceFrom(sequence);
    return [node, next];
  }

  famousUpdate(nextProps) {
    let gridLayout = this.getFamous();

    gridLayout.setOptions(nextProps.options);
  }

  render() {
    return (
      <div data-famous="GridLayout">
        {this.getFamousChildren()}
      </div>
    );
  }
}

defaults(GridLayout, FamousGridLayout);

export default GridLayout;
