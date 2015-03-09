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
    let result = [];
    let sequence = this.getFamousChildrenRef().map((child, idx) => {
      result.push([child, renderNode]);
      let renderNode = new FamousRenderNode();
      return renderNode;
    });
    parentNode.add(deck);
    deck.sequenceFrom(sequence);
    return result;
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
