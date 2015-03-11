import FamousRenderNode from 'famous/core/RenderNode';
import FamousScrollContainer from 'famous/views/ScrollContainer';
import defaults from 'lodash/object/defaults';
import React from 'react';

import FamousComponent from '../lib/FamousComponent';

class ScrollContainer extends FamousComponent {
  famousCreate() {
    return new FamousScrollContainer(this.props.options);
  }

  famousCreateNode(parentNode) {
    let scrollContainer = this.getFamous();
    let node = parentNode.add(scrollContainer);
    let next = [];
    let sequence = this.getFamousChildrenRef().map((child, idx) => {
      let renderNode = new FamousRenderNode();
      next.push([child, renderNode]);
      return renderNode;
    });
    scrollContainer.sequenceFrom(sequence);
    return [node, next];
  }

  famousUpdate(nextProps) {
    let scrollContainer = this.getFamous();

    scrollContainer.setOptions(nextProps.options);
  }

  render() {
    return (
      <div data-famous="ScrollContainer">
        {this.getFamousChildren()}
      </div>
    );
  }
}

defaults(ScrollContainer, FamousScrollContainer);

export default ScrollContainer;
