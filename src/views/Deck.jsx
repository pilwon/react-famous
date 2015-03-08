import RenderNode from 'famous/core/RenderNode';
import Deck from 'famous/views/Deck';
import defaults from 'lodash/object/defaults';
import React from 'react';

import FamousComponent from '../lib/FamousComponent';

class Component extends FamousComponent {
  famousCreate() {
    return new Deck(this.props.options);
  }

  famousCreateNode(parentNode) {
    let deck = this.getFamous();
    let result = [];
    let sequence = this.getFamousChildrenRef().map((child, idx) => {
      let renderNode = new RenderNode();
      result.push([child, renderNode]);
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

defaults(Component, Deck);

export default Component;
