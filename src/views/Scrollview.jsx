import FamousRenderNode from 'famous/core/RenderNode';
import FamousScrollview from 'famous/views/Scrollview';
import defaults from 'lodash/object/defaults';
import React from 'react';

import FamousComponent from '../lib/FamousComponent';

class Scrollview extends FamousComponent {
  famousCreate() {
    return new FamousScrollview(this.props.options);
  }

  famousCreateNode(parentNode) {
    let scrollview = this.getFamous();
    let node = parentNode.add(scrollview);
    let next = [];
    let sequence = this.getFamousChildrenRef().map((child, idx) => {
      let renderNode = new FamousRenderNode();
      next.push([child, renderNode]);
      return renderNode;
    });
    scrollview.sequenceFrom(sequence);
    return [node, next];
  }

  famousUpdate(nextProps) {
    let scrollview = this.getFamous();

    scrollview.setOptions(nextProps.options);
  }

  render() {
    return (
      <div data-famous="Scrollview">
        {this.getFamousChildren()}
      </div>
    );
  }
}

defaults(Scrollview, FamousScrollview);

export default Scrollview;
