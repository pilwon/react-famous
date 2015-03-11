import range from 'lodash/utility/range';
import SpringTransition from 'famous/transitions/SpringTransition';
import Transitionable from 'famous/transitions/Transitionable';
import Timer from 'famous/utilities/Timer';
import React from 'react';
import Context from 'react-famous/core/Context';
import Modifier from 'react-famous/core/Modifier';
import Surface from 'react-famous/core/Surface';
import Deck from 'react-famous/views/Deck';

Transitionable.registerMethod('spring', SpringTransition);

export default class extends React.Component {
  constructor(...args) {
    super(...args);

    this._onSurfaceClick = this._onSurfaceClick.bind(this);
  }

  _onSurfaceClick(eventKey) {
    let deck = this.refs.deck.getFamous();

    console.log('Clicked surface #' + eventKey);
    deck.toggle();
  }

  render() {
    let surfaces = range(5).map((i) => {
      let options = {
        properties: {
          backgroundColor: 'hsla(' + ((i * 5 + i) * 15 % 360) + ', 60%, 50%, 0.8)',
          color: 'white',
          lineHeight: '200px',
          textAlign: 'center'
        },
        size: [100, 200]
      };
      return (
        <Surface eventKey={i} key={i} onClick={this._onSurfaceClick} options={options}>
          {i}
        </Surface>
      );
    });

    let deckOptions = {
      itemSpacing: 10,
      transition: {
        method: 'spring',
        period: 300,
        dampingRatio: 0.5
      },
      stackRotation: 0.02
    };

    return (
      <Context>
        <Surface options={{properties: {lineHeight: '100px', textAlign: 'center'}, size: [undefined, 100]}}>
          Open the developer console, then click the deck.
        </Surface>
        <Modifier options={{align: [0.5, 0.5], origin: [0.5, 0.5]}}>
          <Deck ref="deck" options={deckOptions}>
            {surfaces}
          </Deck>
        </Modifier>
      </Context>
    );
  }
};
