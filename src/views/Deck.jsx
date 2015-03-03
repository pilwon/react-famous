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

  famousCreate(props) {
    let options = FamousUtil.parseOptions(props);
    this.setFamousOptions(options);

    let deck = new Deck(options);
    this.setFamous(deck);
    this.setFamousNode(FamousUtil.getFamousParentNode(this).add(deck));

    let sequence = props.children.map(() => new RenderNode());
    deck.sequenceFrom(sequence);
    this.setFamousKeyedNodes(toPlainObject(sequence));
  },

  famousUpdate(props) {
    let deck = this.getFamous();
    let options = FamousUtil.parseOptions(props);
    let optionsChanged = this.setFamousOptions(options);

    if (optionsChanged) {
      deck.setOptions(options);
    }
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
