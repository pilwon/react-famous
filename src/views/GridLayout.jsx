import RenderNode from 'famous/core/RenderNode';
import GridLayout from 'famous/views/GridLayout';
import React from 'react';

import FamousMixin from '../lib/FamousMixin';

export default React.createClass({
  mixins: [FamousMixin],

  famousCreate() {
    return new GridLayout(this.props.options);
  },

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
  },

  famousUpdate(nextProps) {
    let gridLayout = this.getFamous();

    gridLayout.setOptions(nextProps.options);
  },

  render() {
    return (
      <div data-famous="GridLayout">
        {this.getFamousChildren()}
      </div>
    );
  }
});
