import FamousRenderNode from 'famous/core/RenderNode';
import FamousSequentialLayout from 'famous/views/SequentialLayout';
import defaults from 'lodash/object/defaults';
import React from 'react';

import FamousComponent from '../lib/FamousComponent';

class SequentialLayout extends FamousComponent {
  famousCreate() {
    return new FamousSequentialLayout(this.props.options);
  }

  famousCreateNode(parentNode) {
    let sequentialLayout = this.getFamous();
    let node = parentNode.add(sequentialLayout);
    let next = [];
    let sequence = this.getFamousChildrenRef().map((child, idx) => {
      let renderNode = new FamousRenderNode();
      next.push([child, renderNode]);
      return renderNode;
    });
    sequentialLayout.sequenceFrom(sequence);
    return [node, next];
  }

  famousUpdate(nextProps) {
    let sequentialLayout = this.getFamous();

    sequentialLayout.setOptions(nextProps.options);
  }

  render() {
    return (
      <div data-famous="SequentialLayout">
        {this.getFamousChildren()}
      </div>
    );
  }
}

defaults(SequentialLayout, FamousSequentialLayout);

export default SequentialLayout;
