import RenderNode from 'famous/core/RenderNode';
import Deck from 'famous/views/Deck';
import toPlainObject from 'lodash/lang/toPlainObject';
import React from 'react';
import cloneWithProps from 'react/lib/cloneWithProps';

import FamousMixin from '../lib/FamousMixin';
import FamousUtil from '../lib/FamousUtil';

export default React.createClass({
  mixins: [FamousMixin],

  famousCreate() {
    let deck = new Deck(this.props.options);
    this.setFamous(deck);
    this.setFamousNode(FamousUtil.getFamousParentNode(this).add(deck));

    let sequence = this.props.children.map(() => new RenderNode());
    deck.sequenceFrom(sequence);
    this.setFamousKeyedNodes(toPlainObject(sequence));
  },

  famousUpdate(nextProps) {
    let deck = this.getFamous();

    deck.setOptions(nextProps.options);
  },

  render() {
    if (!this.getFamousReady()) { return null; }

    return (
      <div data-famous="Deck">
        {this.props.children.map((child, idx) => cloneWithProps(child, {key: idx}))}
      </div>
    );
  }
});
