import Transform from 'famous/core/Transform';
import GenericSync from 'famous/inputs/GenericSync';
import MouseSync from 'famous/inputs/MouseSync';
import TouchSync from 'famous/inputs/TouchSync';
import React from 'react';
import Context from 'react-famous/core/Context';
import Modifier from 'react-famous/core/Modifier';
import RenderNode from 'react-famous/core/RenderNode';
import Surface from 'react-famous/core/Surface';
import FamousScheduler from 'react-famous/lib/FamousScheduler';
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

    sync.on('end', (data) => {
      if (showing) {
        edgeSwapper.show(secondary);
      } else {
        edgeSwapper.show(primary);
      }
      showing = !showing;
    });

    clickSurface.pipe(sync);

    FamousScheduler.schedule(() => {
      edgeSwapper.show(primary);
    });
  }

  render() {
    let surfaceOptions = {
      size: [true, true],
      properties: {
        color: 'white',
        fontSize: '2em'
      }
    };

    return (
      <Context>
        <EdgeSwapper ref="edgeSwapper">
          <RenderNode ref="primary">
            <Surface options={{properties: {backgroundColor: '#990000'}}}/>
            <Modifier options={{align: [0.5, 0.5], origin: [0.5, 0.5]}}>
              <Surface options={surfaceOptions}>
                Primary
              </Surface>
            </Modifier>
          </RenderNode>
          <RenderNode ref="secondary">
            <Surface options={{properties: {backgroundColor: '#000099'}}}/>
            <Modifier options={{align: [0.5, 0.5], origin: [0.5, 0.5]}}>
              <Surface options={surfaceOptions}>
                Secondary
              </Surface>
            </Modifier>
          </RenderNode>
        </EdgeSwapper>
        <Modifier options={{transform: Transform.inFront}}>
          <Surface ref="clickSurface"/>
        </Modifier>
      </Context>
    );
  }
};
