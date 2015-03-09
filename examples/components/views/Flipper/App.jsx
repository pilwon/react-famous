import Transform from 'famous/core/Transform';
import GenericSync from 'famous/inputs/GenericSync';
import MouseSync from 'famous/inputs/MouseSync';
import TouchSync from 'famous/inputs/TouchSync';
import React from 'react';
import Context from 'react-famous/core/Context';
import Modifier from 'react-famous/core/Modifier';
import Surface from 'react-famous/core/Surface';
import Flipper from 'react-famous/views/Flipper';

GenericSync.register({
  mouse: MouseSync,
  touch: TouchSync
});

export default class extends React.Component {
  componentDidMount() {
    let clickSurface = this.refs.clickSurface.getFamous();
    let flipper = this.refs.flipper.getFamous();
    let sync = new GenericSync({
      mouse: {},
      touch: {}
    });
    let toggle = false;

    sync.on('end', (data) => {
      let angle = toggle ? 0 : Math.PI;
      flipper.setAngle(angle, {
        curve: 'easeOutBounce',
        duration: 500
      });
      toggle = !toggle;
    });

    clickSurface.pipe(sync);
  }

  render() {
    let frontOptions = {
      properties: {
        backgroundColor: '#990000',
        color: 'white',
        lineHeight: '200px',
        textAlign: 'center'
      },
      size: [200, 200]
    };

    let backOptions = {
      properties: {
        backgroundColor: '#000099',
        color: 'white',
        lineHeight: '200px',
        textAlign: 'center'
      }, 
      size: [200, 200]
    };

    return (
      <Context perspective={500}>
        <Surface options={{properties: {lineHeight: '100px', textAlign: 'center'}, size: [undefined, 100]}}>
          Click anywhere on the screen.
        </Surface>
        <Modifier options={{align: [.5, .5], origin: [.5, .5]}}>
          <Flipper ref="flipper" options={{headerSize: 100, footerSize: 50}}>
            <Flipper.Front>
              <Surface options={frontOptions}>
                front
              </Surface>
            </Flipper.Front>
            <Flipper.Back>
              <Surface options={backOptions}>
                back
              </Surface>
            </Flipper.Back>
          </Flipper>
        </Modifier>
        <Modifier options={{transform: Transform.inFront}}>
          <Surface ref="clickSurface"/>
        </Modifier>
      </Context>
    );
  }
};
