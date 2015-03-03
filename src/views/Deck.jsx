import RenderNode from 'famous/core/RenderNode';
import Deck from 'famous/views/Deck';
import React from 'react';
import cloneWithProps from 'react/lib/cloneWithProps';

import FamousNodeMixin from '../lib/FamousNodeMixin';
import FamousRenderMixin from '../lib/FamousRenderMixin';
import FamousUtil from '../lib/FamousUtil';

export default React.createClass({
  mixins: [FamousNodeMixin, FamousRenderMixin],

  propTypes: {
    transition: React.PropTypes.object,
    stackRotation: React.PropTypes.number
  },

  componentDidMount() {
    this._updateFamous(this.props);
  },

  componentWillReceiveProps(nextProps) {
    this._updateFamous(nextProps);
  },

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  },

  componentWillUnmount() {
    this.releaseFamous();
    this.releaseFamousNode();
  },

  getFamousNodeByKey(key) {
    return this._famousNodes[key];
  },

  _updateFamous(props) {
    let deck = this.getFamousNode();
    let options = FamousUtil.parseOptions(props);
    let render = true;

    if (!deck) {
      deck = new Deck(options);

      this.setFamous(deck);
      this.setFamousNode(FamousUtil.getFamousParentNode(this).add(deck));

      this._famousNodes = props.children.map((child) => new RenderNode());
      deck.sequenceFrom(this._famousNodes);
    }

    if (render) {
      this.forceUpdate();
    }
  },

  famousToggle() {
    let deck = this.getFamous();
    return deck.toggle();
  },

  renderFamous() {
    return (
      <div data-famous="Deck">
        {this.props.children.map((child, key) => cloneWithProps(child, {key}))}
      </div>
    );
  }
});
