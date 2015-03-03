import React from 'react';

import Context from 'react-famous/core/Context';
import Engine from 'react-famous/core/Engine';
import Modifier from 'react-famous/core/Modifier';
import Surface from 'react-famous/core/Surface';
import Flipper from 'react-famous/views/Flipper';

export default React.createClass({
  onReady() {
    let toggle = false;
    Engine.on('click', () => {
      let angle = toggle ? 0 : Math.PI;
      this.refs.flipper.famous.setAngle(angle, {
        curve: 'easeOutBounce',
        duration: 500
      });
      toggle = !toggle;
    });
  },

  render() {
    let frontOptions = {
      properties: {
        backgroundColor: 'red',
        color: 'white',
        lineHeight: '200px',
        textAlign: 'center'
      },
      size: [200, 200]
    };

    let backOptions = {
      properties: {
        backgroundColor: 'blue',
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
          <Flipper ref="flipper" onReady={this.onReady} options={{headerSize: 100, footerSize: 50}}>
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
      </Context>
    );
  }
});
