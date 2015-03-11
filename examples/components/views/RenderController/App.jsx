import Transform from 'famous/core/Transform';
import GenericSync from 'famous/inputs/GenericSync';
import MouseSync from 'famous/inputs/MouseSync';
import TouchSync from 'famous/inputs/TouchSync';
import range from 'lodash/utility/range';
import React from 'react';
import Context from 'react-famous/core/Context';
import Modifier from 'react-famous/core/Modifier';
import Surface from 'react-famous/core/Surface';
import FamousScheduler from 'react-famous/lib/FamousScheduler';
import RenderController from 'react-famous/views/RenderController';

GenericSync.register({
  mouse: MouseSync,
  touch: TouchSync
});

export default class extends React.Component {
  componentDidMount() {
    let clickSurface = this.refs.clickSurface.getFamous();
    let renderController = this.refs.renderController.getFamous();
    let surfaces = Object.keys(this.refs)
      .filter((key) => /surface_\d+/.test(key))
      .map((key) => this.refs[key].getFamous());
    let sync = new GenericSync({
      mouse: {},
      touch: {}
    });
    let counter = 0;

    sync.on('end', (data) => {
      let next = (counter + 1) % surfaces.length;
      renderController.show(surfaces[next]);
      counter += 1;
    });

    clickSurface.pipe(sync);

    FamousScheduler.schedule(() => {
      if (surfaces[0]) {
        renderController.show(surfaces[0]);
      }
    });
  }

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
        <Modifier options={{transform: Transform.inFront}}>
          <Surface ref="clickSurface"/>
        </Modifier>
      </Context>
    );
  }
};
