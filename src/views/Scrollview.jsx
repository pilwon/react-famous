import RenderNode from 'famous/core/RenderNode';
import Scrollview from 'famous/views/Scrollview';
import defaults from 'lodash/object/defaults';
import React from 'react';

import FamousComponent from '../lib/FamousComponent';

class Component extends FamousComponent {
  famousCreate() {
    return new Scrollview(this.props.options);
  }

  famousCreateNode(parentNode) {
    let scrollview = this.getFamous();
    let result = [];
    let sequence = this.getFamousChildrenRef().map((child, idx) => {
      let renderNode = new RenderNode();
      result.push([child, renderNode]);
      return renderNode;
    });
    scrollview.sequenceFrom(sequence);
    parentNode.add(scrollview);
    return result;
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

defaults(Component, Scrollview);

export default Component;
