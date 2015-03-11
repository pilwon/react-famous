import Transitionable from 'famous/transitions/Transitionable';
import React from 'react';
import Modifier from 'react-famous/core/Modifier';
import Surface from 'react-famous/core/Surface';
import FamousScheduler from 'react-famous/lib/FamousScheduler';

export default class extends React.Component {
  componentWillMount() {
    this._transitionable = new Transitionable([0, 0]);
  }

  componentDidMount() {
    FamousScheduler.schedule(() => {
      this._transitionable.set([0, 1], {
        duration: 1000,
        curve: 'easeInOut'
      });
    });
  }

  render() {
    let transitionable = this._transitionable;

    let modifierOptions = {
      align: () => transitionable.get(),
      opacity: 0.7,
      origin: () => transitionable.get(),
      proportions: [1, 0.1]
    };

    return (
      <Modifier ref="modifier" options={modifierOptions}>
        <Surface options={{properties: {backgroundColor: '#333'}}}/>
        <Modifier options={{align: [0.5, 0.5], origin: [0.5, 0.5]}}>
          <Surface options={{properties: {color: 'white'}, size: [true, true]}}>
            Dropping
          </Surface>
        </Modifier>
      </Modifier>
    );
  }
};
