import RenderNode from 'famous/core/RenderNode';
import GridLayout from 'famous/views/GridLayout';
import defaults from 'lodash/object/defaults';
import React from 'react';

import FamousComponent from '../lib/FamousComponent';

class Component extends FamousComponent {
  famousCreate() {
    return new GridLayout(this.props.options);
  }

  famousCreateNode(parentNode) {
    let gridLayout = this.getFamous();
    let result = [];
    let sequence = this.getFamousChildrenRef().map((child, idx) => {
      let renderNode = new RenderNode();
      result.push([child, renderNode]);
      return renderNode;
    });
    gridLayout.sequenceFrom(sequence);
    parentNode.add(gridLayout);
    return result;
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

defaults(Component, GridLayout);

export default Component;
