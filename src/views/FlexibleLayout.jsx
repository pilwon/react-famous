import RenderNode from 'famous/core/RenderNode';
import FlexibleLayout from 'famous/views/FlexibleLayout';
import toPlainObject from 'lodash/lang/toPlainObject';
import React from 'react';

import FamousMixin from '../lib/FamousMixin';

export default React.createClass({
  mixins: [FamousMixin],

  famousName: 'FlexibleLayout',

  famousCreate(parentNode) {
    let flexibleLayout = new FlexibleLayout(this.props.options);
    this.setFamous(flexibleLayout);
    if (parentNode) {
      this.setFamousNode(parentNode.add(flexibleLayout));
    }

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
      <div data-famous={this.famousName}>
        {this.props.children.map((child, idx) => React.cloneElement(child, {key: idx}))}
      </div>
    );
  }
});
