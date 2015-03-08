import RenderNode from 'famous/core/RenderNode';
import RenderController from 'famous/views/RenderController';
import React from 'react';

import FamousMixin from '../lib/FamousMixin';

export default React.createClass({
  mixins: [FamousMixin],

  famousCreate() {
    return new RenderController(this.props.options);
  },

  famousCreateNode(parentNode) {
    let renderController = this.getFamous();
    parentNode.add(renderController);
    return this.getFamousChildrenRef().map((child, idx) => [child, new RenderNode()]);
  },

  famousUpdate(nextProps) {
    let renderController = this.getFamous();

    renderController.setOptions(nextProps.options);
  },

  render() {
    return (
      <div data-famous="RenderController">
        {this.getFamousChildren()}
      </div>
    );
  }
});
