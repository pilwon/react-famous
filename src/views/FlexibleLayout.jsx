import RenderNode from 'famous/core/RenderNode';
import FlexibleLayout from 'famous/views/FlexibleLayout';
import React from 'react';

import FamousComponent from '../lib/FamousComponent';

export default class extends FamousComponent {
  famousCreate() {
    return new FlexibleLayout(this.props.options);
  }

  famousCreateNode(parentNode) {
    let flexibleLayout = this.getFamous();
    let result = [];
    let sequence = this.getFamousChildrenRef().map((child, idx) => {
      let renderNode = new RenderNode();
      result.push([child, renderNode]);
      return renderNode;
    });
    flexibleLayout.sequenceFrom(sequence);
    parentNode.add(flexibleLayout);
    return result;
  }

  famousUpdate(nextProps) {
    let flexibleLayout = this.getFamous();

    flexibleLayout.setOptions(nextProps.options);
  }

  render() {
    return (
      <div data-famous="FlexibleLayout">
        {this.getFamousChildren()}
      </div>
    );
  }
};
