import RenderNode from 'famous/core/RenderNode';
import FlexibleLayout from 'famous/views/FlexibleLayout';
import toPlainObject from 'lodash/lang/toPlainObject';
import React from 'react';

import FamousMixin from '../lib/FamousMixin';

export default React.createClass({
  mixins: [FamousMixin],

  famousCreate() {
    let flexibleLayout = new FlexibleLayout(this.props.options);
    this.setFamous(flexibleLayout);
    this.setFamousNode(this.getFamousParentNode().add(flexibleLayout));

    let sequence = this.props.children.map(() => new RenderNode());
    flexibleLayout.sequenceFrom(sequence);
    this.setFamousKeyedNodes(toPlainObject(sequence));
  },

  famousUpdate(nextProps) {
    let flexibleLayout = this.getFamous();

    flexibleLayout.setOptions(nextProps.options);
  },

  render() {
    if (!this.getFamousReady()) { return null; }

    return (
      <div data-famous="FlexibleLayout">
        {this.props.children.map((child, idx) => React.cloneElement(child, {key: idx}))}
      </div>
    );
  }
});
