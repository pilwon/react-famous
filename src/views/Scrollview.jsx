import FamousRenderNode from 'famous/core/RenderNode';
import FamousScrollview from 'famous/views/Scrollview';
import isFunction from 'lodash/lang/isFunction';
import defaults from 'lodash/object/defaults';
import React from 'react';

import FamousComponent from '../lib/FamousComponent';

class Scrollview extends FamousComponent {
  famousCreate() {
    return new FamousScrollview(this.props.options);
  }

  famousCreateNode(parentNode) {
    let scrollview = this.getFamous();
    let result = [];
    let sequence = this.getFamousChildrenRef().map((child, idx) => {
      result.push([child, renderNode]);
      let renderNode = new FamousRenderNode();
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

defaults(Scrollview, FamousScrollview);

export default Scrollview;
