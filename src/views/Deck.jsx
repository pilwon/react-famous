import RenderNode from 'famous/core/RenderNode';
import Deck from 'famous/views/Deck';
import toPlainObject from 'lodash/lang/toPlainObject';
import React from 'react';
import cloneWithProps from 'react/lib/cloneWithProps';

import FamousMixin from '../lib/FamousMixin';
import FamousUtil from '../lib/FamousUtil';

export default React.createClass({
  mixins: [FamousMixin],

  propTypes: {
    transition: React.PropTypes.object,
    stackRotation: React.PropTypes.number
  },

  famousCreate({children, options}) {
    let deck = new Deck(options);
    this.setFamous(deck);
    this.setFamousNode(FamousUtil.getFamousParentNode(this).add(deck));

    let sequence = children.map(() => new RenderNode());
    deck.sequenceFrom(sequence);
    this.setFamousKeyedNodes(toPlainObject(sequence));
  },

  famousUpdate({options}) {
    let deck = this.getFamous();

    deck.setOptions(options);
  },

  toggle() {
    return this.getFamous().toggle();
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
