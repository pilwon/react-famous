import FamousRenderNode from 'famous/core/RenderNode';
import FamousScroller from 'famous/views/Scroller';
import defaults from 'lodash/object/defaults';
import React from 'react';

import FamousComponent from '../lib/FamousComponent';

class Scroller extends FamousComponent {
  famousCreate() {
    return new FamousScroller(this.props.options);
  }

  famousCreateNode(parentNode) {
    let scroller = this.getFamous();
    let node = parentNode.add(scroller);
    let next = [];
    let sequence = this.getFamousChildrenRef().map((child, idx) => {
      let renderNode = new FamousRenderNode();
      next.push([child, renderNode]);
      return renderNode;
    });
    scroller.sequenceFrom(sequence);
    return [node, next];
  }

  famousUpdate(nextProps) {
    let scroller = this.getFamous();

    scroller.setOptions(nextProps.options);
  }

  render() {
    return (
      <div data-famous="Scroller">
        {this.getFamousChildren()}
      </div>
    );
  }
}

defaults(Scroller, FamousScroller);

export default Scroller;
