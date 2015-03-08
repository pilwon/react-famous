import RenderNode from 'famous/core/RenderNode';
import SequentialLayout from 'famous/views/SequentialLayout';
import defaults from 'lodash/object/defaults';
import React from 'react';

import FamousComponent from '../lib/FamousComponent';

class Component extends FamousComponent {
  famousCreate() {
    return new SequentialLayout(this.props.options);
  }

  famousCreateNode(parentNode) {
    let sequentialLayout = this.getFamous();
    let result = [];
    let sequence = this.getFamousChildrenRef().map((child, idx) => {
      let renderNode = new RenderNode();
      result.push([child, renderNode]);
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

defaults(Component, SequentialLayout);

export default Component;
