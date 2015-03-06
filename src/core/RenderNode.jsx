import RenderNode from 'famous/core/RenderNode';
import React from 'react';

import FamousMixin from '../lib/FamousMixin';

export default React.createClass({
  mixins: [FamousMixin],

  famousName: 'RenderNode',

  famousCreate(parentNode) {
    let renderNode = new RenderNode();
    this.setFamous(renderNode);
    if (parentNode) {
      this.setFamousNode(parentNode.add(renderNode));
    }
  },

  render() {
    if (!this.getFamousReady()) { return null; }

    return (
      <div data-famous={this.famousName}>
        {this.props.children}
      </div>
    );
  }
});
