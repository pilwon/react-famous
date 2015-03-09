import FamousRenderNode from 'famous/core/RenderNode';
import FamousFlexibleLayout from 'famous/views/FlexibleLayout';
import defaults from 'lodash/object/defaults';
import React from 'react';

import FamousComponent from '../lib/FamousComponent';

class FlexibleLayout extends FamousComponent {
  famousCreate() {
    return new FamousFlexibleLayout(this.props.options);
  }

  famousCreateNode(parentNode) {
    let flexibleLayout = this.getFamous();
    let node = parentNode.add(flexibleLayout);
    let next = [];
    let sequence = this.getFamousChildrenRef().map((child, idx) => {
      let renderNode = new FamousRenderNode();
      next.push([child, renderNode]);
      return renderNode;
    });
    flexibleLayout.sequenceFrom(sequence);
    return [node, next];
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
}

defaults(FlexibleLayout, FamousFlexibleLayout);

export default FlexibleLayout;
