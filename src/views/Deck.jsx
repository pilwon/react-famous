import RenderNode from 'famous/core/RenderNode';
import Deck from 'famous/views/Deck';
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

  famousToggle() {
    return this.getFamous().toggle();
  },

  getFamousNodeByKey(key) {
    return this._famousNodes[key];
  },

  renderFamous() {
    return (
      <div data-famous="Deck">
        {this.props.children.map((child, key) => cloneWithProps(child, {key}))}
      </div>
    );
  },

  updateFamous(props) {
    let deck = this.getFamous();
    let options = FamousUtil.parseOptions(props);
    let optionsChanged = this.setFamousOptions(options);
    let render = true;

    if (!deck) {
      deck = new Deck(options);
      this.setFamous(deck);
      this.setFamousNode(FamousUtil.getFamousParentNode(this).add(deck));
      this._famousNodes = props.children.map((child) => new RenderNode());
      deck.sequenceFrom(this._famousNodes);
    } else if (optionsChanged) {
      deck.setOptions(options);
    }

    if (render) {
      this.forceUpdate();
    }
  }
});
