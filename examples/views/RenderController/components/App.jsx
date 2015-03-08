import range from 'lodash/utility/range';
import React from 'react';
import Context from 'react-famous/core/Context';
import Engine from 'react-famous/core/Engine';
import Modifier from 'react-famous/core/Modifier';
import Surface from 'react-famous/core/Surface';
import RenderController from 'react-famous/views/RenderController';

export default React.createClass({
  componentDidMount() {
    let renderController = this.refs.renderController.getFamous();
    let surfaces = Object.keys(this.refs)
      .filter((key) => /surface_\d+/.test(key))
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
    let surfaces = range(10).map((i) => {
      let options = {
        size: [200, 200],
        properties: {
          backgroundColor: 'hsl(' + (i * 360 / 10) + ', 100%, 50%)',
          lineHeight: '200px',
          textAlign: 'center'
        }
      };
      return (
        <Surface key={i} ref={`surface_${i}`} options={options}>
          Surface: {i + 1}
        </Surface>
      );
    });

    return (
      <Context>
        <Surface options={{properties: {lineHeight: '100px', textAlign: 'center'}, size: [undefined, 100]}}>
          Click anywhere on the screen.
        </Surface>
        <Modifier options={{align: [0.5, 0.5], origin: [0.5, 0.5]}}>
          <RenderController ref="renderController">
            {surfaces}
          </RenderController>
        </Modifier>
      </Context>
    );
  }
});
