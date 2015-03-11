import Transform from 'famous/core/Transform';
import GenericSync from 'famous/inputs/GenericSync';
import MouseSync from 'famous/inputs/MouseSync';
import TouchSync from 'famous/inputs/TouchSync';
import SnapTransition from 'famous/transitions/SnapTransition';
import Transitionable from 'famous/transitions/Transitionable';
import React from 'react';
import Modifier from 'react-famous/core/Modifier';
import Surface from 'react-famous/core/Surface';

GenericSync.register({
  mouse: MouseSync,
  touch: TouchSync
});

Transitionable.registerMethod('spring', SnapTransition);

export default class extends React.Component {
  componentWillMount() {
    this._position = new Transitionable([0, 0]);
  }

  componentDidMount() {
    let position = this._position;
    let clickSurface = this.refs.clickSurface.getFamous();
    let sync = new GenericSync({
      mouse: {},
      touch: {}
    });

    sync.on('update', (data) => {
      let currentPosition = position.get();
      position.set([
        currentPosition[0] + data.delta[0],
        currentPosition[1] + data.delta[1]
      ]);
    });

    sync.on('end', (data) => {
      let velocity = data.velocity;
      position.set([0, 0], {
        method: 'spring',
        period: 150,
        velocity: data.velocity
      });
    });

    clickSurface.pipe(sync);
  }

  render() {
    let position = this._position;

    let modifierOptions = {
      proportions: [0.2, 0.2],
      transform: () => {
        let currentPosition = position.get();
        return Transform.translate(currentPosition[0], currentPosition[1]);
      }
    };

    return (
      <Modifier options={modifierOptions}>
        <Surface options={{properties: {backgroundColor: '#009900'}}}/>
        <Modifier options={{align: [0.5, 0.5], origin: [0.5, 0.5]}}>
          <Surface options={{properties: {color: 'white'}, size: [true, true]}}>
            Bouncy
          </Surface>
        </Modifier>
        <Modifier options={{transform: Transform.inFront}}>
          <Surface ref="clickSurface"/>
        </Modifier>
      </Modifier>
    );
  }
};
