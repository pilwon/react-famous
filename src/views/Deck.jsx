import FamousRenderNode from 'famous/core/RenderNode';
import FamousDeck from 'famous/views/Deck';
import defaults from 'lodash/object/defaults';
import React from 'react';

import FamousComponent from '../lib/FamousComponent';

class Deck extends FamousComponent {
  famousCreate() {
    return new FamousDeck(this.props.options);
  }

  famousCreateNode(parentNode) {
    let deck = this.getFamous();
    let node = parentNode.add(deck);
    let next = [];
    let sequence = this.getFamousChildrenRef().map((child, idx) => {
      let renderNode = new FamousRenderNode();
      next.push([child, renderNode]);
      return renderNode;
    });
    deck.sequenceFrom(sequence);
    return [node, next];
  }

  famousUpdate(nextProps) {
    let deck = this.getFamous();

    deck.setOptions(nextProps.options);
  }

  render() {
    return (
      <div data-famous="Deck">
        {this.getFamousChildren()}
      </div>
    );
  }
}

defaults(Deck, FamousDeck);

export default Deck;
