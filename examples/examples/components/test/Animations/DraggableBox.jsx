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
    let surface = this.refs.surface.getFamous();
    let sync = new GenericSync({
      mouse: {},
      touch: {}
    });

    sync.on('update', (data) => {
      position[0] += data.delta[0];
      position[1] += data.delta[1];
    });

    surface.pipe(sync);
  }

  render() {
    let position = this._position;

    let modifierOptions = {
      transform: () => {
        return Transform.translate(position[0], position[1]);
      }
    };

    let surfaceOptions = {
      size: [100, 100],
      properties: {
        background: '#990000',
        color: 'white',
        lineHeight: '100px',
        textAlign: 'center'
      }
    };

    return (
      <Modifier options={modifierOptions}>
        <Surface ref="surface" options={surfaceOptions}>
          Draggable
        </Surface>
      </Modifier>
    );
  }
};
