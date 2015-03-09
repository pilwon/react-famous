import Transform from 'famous/core/Transform';
import GenericSync from 'famous/inputs/GenericSync';
import MouseSync from 'famous/inputs/MouseSync';
import TouchSync from 'famous/inputs/TouchSync';
import React from 'react';
import Context from 'react-famous/core/Context';
import Modifier from 'react-famous/core/Modifier';
import Surface from 'react-famous/core/Surface';
import EdgeSwapper from 'react-famous/views/EdgeSwapper';

GenericSync.register({
  mouse: MouseSync,
  touch: TouchSync
});

export default class extends React.Component {
  componentDidMount() {
    let clickSurface = this.refs.clickSurface.getFamous();
    let edgeSwapper = this.refs.edgeSwapper.getFamous();
    let primary = this.refs.primary.getFamous();
    let secondary = this.refs.secondary.getFamous();
    let showing = true;
    let sync = new GenericSync({
      mouse: {},
      touch: {}
    });

    edgeSwapper.show(primary);

    sync.on('end', (data) => {
      if (showing) {
        edgeSwapper.show(secondary);
      } else {
        edgeSwapper.show(primary);
      }
      showing = !showing;
    });

    clickSurface.pipe(sync);
  }

  render() {
    let primaryOptions = {
      properties: {
        backgroundColor: '#990000',
        color: 'white',
        fontSize: '2em',
        lineHeight: `${window.innerHeight}px`,
        textAlign: 'center'
      }
    };

    let secondaryOptions = {
      properties: {
        backgroundColor: '#000099',
        color: 'white',
        fontSize: '2em',
        lineHeight: `${window.innerHeight}px`,
        textAlign: 'center'
      }
    };

    return (
      <Context>
        <EdgeSwapper ref="edgeSwapper">
          <Surface ref="primary" options={primaryOptions}>
            Primary
          </Surface>
          <Surface ref="secondary" options={secondaryOptions}>
            Secondary
          </Surface>
        </EdgeSwapper>
        <Modifier options={{transform: Transform.inFront}}>
          <Surface ref="clickSurface"/>
        </Modifier>
      </Context>
    );
  }
};
