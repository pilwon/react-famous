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

  famousCreate() {
    let sequentialLayout = new SequentialLayout(this.props.options);
    this.setFamous(sequentialLayout);
    this.setFamousNode(FamousUtil.getFamousParentNode(this).add(sequentialLayout));

    let sequence = this.props.children.map(() => new RenderNode());
    sequentialLayout.sequenceFrom(sequence);
    this.setFamousKeyedNodes(toPlainObject(sequence));
  },

  famousUpdate(nextProps) {
    let sequentialLayout = this.getFamous();

    sequentialLayout.setOptions(nextProps.options);
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
