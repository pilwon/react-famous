import RenderNode from 'famous/core/RenderNode';
import GridLayout from 'famous/views/GridLayout';
import toPlainObject from 'lodash/lang/toPlainObject';
import React from 'react';

import FamousMixin from '../lib/FamousMixin';

export default React.createClass({
  mixins: [FamousMixin],

  famousCreate() {
    let gridLayout = new GridLayout(this.props.options);
    this.setFamous(gridLayout);
    this.setFamousNode(this.getFamousParentNode().add(gridLayout));

    let sequence = this.props.children.map(() => new RenderNode());
    gridLayout.sequenceFrom(sequence);
    this.setFamousKeyedNodes(toPlainObject(sequence));
  },

  famousUpdate(nextProps) {
    let gridLayout = this.getFamous();

    gridLayout.setOptions(nextProps.options);
  },

  render() {
    if (!this.getFamousReady()) { return null; }

    return (
      <div data-famous="GridLayout">
        {this.props.children.map((child, key) => React.cloneElement(child, {key}))}
      </div>
    );
  }
});
