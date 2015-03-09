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
    let result = [];
    let sequence = this.getFamousChildrenRef().map((child, idx) => {
      result.push([child, renderNode]);
      let renderNode = new FamousRenderNode();
      return renderNode;
    });
    sequentialLayout.sequenceFrom(sequence);
    parentNode.add(sequentialLayout);
    return result;
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
