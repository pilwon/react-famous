import React from 'react';
import Context from 'react-famous/core/Context';
import Modifier from 'react-famous/core/Modifier';
import Surface from 'react-famous/core/Surface';
import SpringTransition from 'react-famous/transitions/SpringTransition';
import Transitionable from 'react-famous/transitions/Transitionable';
import Timer from 'react-famous/utilities/Timer';
import Deck from 'react-famous/views/Deck';

Transitionable.registerMethod('spring', SpringTransition);

export default React.createClass({
  onReady() {
    this.refs.deck.famous.toggle();
  },

  render() {
    let surfaces = [];

    for (let i = 0; i < 5; i++) {
      let options = {
        properties: {
          backgroundColor: 'hsla(' + ((i * 5 + i) * 15 % 360) + ', 60%, 50%, 0.8)',
          color: 'white',
          lineHeight: '200px',
          textAlign: 'center'
        },
        size: [100, 200]
      };
      let surface = (
        <Surface key={i} options={options}>
          {i}
        </Surface>
      );
      surfaces.push(surface);
    }

    let options = {
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
        <Modifier options={{align: [0.5, 0.5], origin: [0.5, 0.5]}}>
          <Deck ref="deck" onReady={this.onReady} options={options}>
            {surfaces}
          </Deck>
        </Modifier>
      </Context>
    );
  }
});
