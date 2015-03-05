import React from 'react';
import Context from 'react-famous/core/Context';
import Engine from 'react-famous/core/Engine';
import Modifier from 'react-famous/core/Modifier';
import Surface from 'react-famous/core/Surface';
import RenderController from 'react-famous/views/RenderController';

export default React.createClass({
  onReady() {
    let renderController = this.refs.renderController.getFamous();
    let surfaces = Object.keys(this.refs)
      .filter((key) => /surface\d+/.test(key))
      .map((key) => this.refs[key].getFamous());
    let counter = 0;

    if (surfaces[0]) {
      renderController.show(surfaces[0]);
    }

    Engine.on('click', () => {
      let next = (counter + 1) % surfaces.length;
      renderController.show(surfaces[next]);
      counter += 1;
    });
  },

  render() {
    let surfaces = [];

    for (let i = 0; i < 10; ++i) {
      let surfaceOptions = {
        size: [200, 200],
        properties: {
          backgroundColor: 'hsl(' + (i * 360 / 10) + ', 100%, 50%)',
          lineHeight: '200px',
          textAlign: 'center'
        }
      };

      let surface = (
        <Surface key={i} ref={`surface${i}`} options={surfaceOptions}>
          Surface: {i + 1}
        </Surface>
      );

      surfaces.push(surface);
    }

    return (
      <Context>
        <Surface options={{properties: {lineHeight: '100px', textAlign: 'center'}, size: [undefined, 100]}}>
          Click anywhere on the screen.
        </Surface>
        <Modifier options={{align: [0.5, 0.5], origin: [0.5, 0.5]}}>
          <RenderController ref="renderController" onReady={this.onReady}>
            {surfaces}
          </RenderController>
        </Modifier>
      </Context>
    );
  }
});
