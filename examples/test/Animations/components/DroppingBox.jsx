import Transitionable from 'famous/transitions/Transitionable';
import React from 'react';
import Modifier from 'react-famous/core/Modifier';
import Surface from 'react-famous/core/Surface';

export default React.createClass({
  componentWillMount() {
    this._transitionable = new Transitionable([0, 0]);
  },

  onReady() {
    this._transitionable.set([0, 1], {
      duration: 1000,
      curve: 'easeInOut'
    });
  },

  render() {
    let transitionable = this._transitionable;

    let modifierOptions = {
      align: () => transitionable.get(),
      origin: () => transitionable.get()
    };

    let surfaceOptions = {
      size: [undefined, 50],
      properties: {
        backgroundColor: '#333',
        color: 'white',
        lineHeight: '50px',
        textAlign: 'center'
      }
    };

    return (
      <Modifier ref="modifier" options={modifierOptions}>
        <Surface options={surfaceOptions} onReady={this.onReady}>
          Dropping
        </Surface>
      </Modifier>
    );
  }
});
