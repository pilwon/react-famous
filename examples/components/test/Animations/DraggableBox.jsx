import Transform from 'famous/core/Transform';
import GenericSync from 'famous/inputs/GenericSync';
import MouseSync from 'famous/inputs/MouseSync';
import TouchSync from 'famous/inputs/TouchSync';
import React from 'react';
import Modifier from 'react-famous/core/Modifier';
import Surface from 'react-famous/core/Surface';

GenericSync.register({
  mouse: MouseSync,
  touch: TouchSync
});

export default class extends React.Component {
  componentWillMount() {
    this._position = [0, 0];
  }

  componentDidMount() {
    let position = this._position;
    let clickSurface = this.refs.clickSurface.getFamous();
    let sync = new GenericSync({
      mouse: {},
      touch: {}
    });

    sync.on('update', (data) => {
      position[0] += data.delta[0];
      position[1] += data.delta[1];
    });

    clickSurface.pipe(sync);
  }

  render() {
    let position = this._position;

    let modifierOptions = {
      proportions: [0.2, 0.2],
      transform: () => {
        return Transform.translate(position[0], position[1]);
      }
    };

    return (
      <Modifier options={modifierOptions}>
        <Surface options={{properties: {backgroundColor: '#990000'}}}/>
        <Modifier options={{align: [0.5, 0.5], origin: [0.5, 0.5]}}>
          <Surface options={{properties: {color: 'white'}, size: [true, true]}}>
            Draggable
          </Surface>
        </Modifier>
        <Modifier options={{transform: Transform.inFront}}>
          <Surface ref="clickSurface"/>
        </Modifier>
      </Modifier>
    );
  }
};
