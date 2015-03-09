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
    let result = [];
    let sequence = this.getFamousChildrenRef().map((child, idx) => {
      result.push([child, renderNode]);
      let renderNode = new FamousRenderNode();
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
}

defaults(FlexibleLayout, FamousFlexibleLayout);

export default FlexibleLayout;
