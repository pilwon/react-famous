import RenderNode from 'famous/core/RenderNode';
import Scrollview from 'famous/views/Scrollview';
import toPlainObject from 'lodash/lang/toPlainObject';
import React from 'react';

import FamousMixin from '../lib/FamousMixin';

export default React.createClass({
  mixins: [FamousMixin],

  famousName: 'Scrollview',

  famousCreate() {
    let scrollview = new Scrollview(this.props.options);
    this.setFamous(scrollview);
    this.setFamousNode(this.getFamousParentNode().add(scrollview));

    let sequence = this.props.children.map(() => new RenderNode());
    scrollview.sequenceFrom(sequence);
    this.setFamousKeyedNodes(toPlainObject(sequence));
  },

  famousUpdate(nextProps) {
    let scrollview = this.getFamous();

    scrollview.setOptions(nextProps.options);
  },

  render() {
    if (!this.getFamousReady()) { return null; }

    return (
      <div data-famous={this.famousName}>
        {this.props.children.map((child, key) => React.cloneElement(child, {key}))}
      </div>
    );
  }
});
