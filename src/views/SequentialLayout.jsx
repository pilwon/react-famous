import RenderNode from 'famous/core/RenderNode';
import SequentialLayout from 'famous/views/SequentialLayout';
import toPlainObject from 'lodash/lang/toPlainObject';
import React from 'react';
import cloneWithProps from 'react/lib/cloneWithProps';

import FamousMixin from '../lib/FamousMixin';
import FamousUtil from '../lib/FamousUtil';

export default React.createClass({
  mixins: [FamousMixin],

  propTypes: {
    direction: React.PropTypes.number,
    itemSpacing: React.PropTypes.number
  },

  famousCreate({children, options}) {
    let sequentialLayout = new SequentialLayout(options);
    this.setFamous(sequentialLayout);
    this.setFamousNode(FamousUtil.getFamousParentNode(this).add(sequentialLayout));

    let sequence = children.map(() => new RenderNode());
    sequentialLayout.sequenceFrom(sequence);
    this.setFamousKeyedNodes(toPlainObject(sequence));
  },

  famusUpdate({options}) {
    let sequentialLayout = this.getFamous();

    surface.setOptions(options);
  },

  render() {
    if (!this.getFamousReady()) { return null; }

    return (
      <div data-famous="SequentialLayout">
        {this.props.children.map((child, key) => cloneWithProps(child, {key}))}
      </div>
    );
  }
});
