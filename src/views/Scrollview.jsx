import RenderNode from 'famous/core/RenderNode';
import Scrollview from 'famous/views/Scrollview';
import toPlainObject from 'lodash/lang/toPlainObject';
import React from 'react';
import cloneWithProps from 'react/lib/cloneWithProps';

import FamousMixin from '../lib/FamousMixin';

export default React.createClass({
  mixins: [FamousMixin],

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
      <div data-famous="Scrollview">
        {this.props.children.map((child, key) => cloneWithProps(child, {key}))}
      </div>
    );
  }
});
