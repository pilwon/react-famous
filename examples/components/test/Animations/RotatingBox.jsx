import Transform from 'famous/core/Transform';
import React from 'react';
import Modifier from 'react-famous/core/Modifier';
import Surface from 'react-famous/core/Surface';
import FamousScheduler from 'react-famous/lib/FamousScheduler';

export default class extends React.Component {
  componentDidMount() {
    let modifier = this.refs.modifier.getFamous();
    let angle = 0;

    FamousScheduler.schedule(() => {
      modifier.transformFrom(() => {
        angle += 0.03;
        return Transform.rotateZ(angle);
      });
    });
  }

  render() {
    return (
      <Modifier ref="modifier" options={{proportions: [0.2, 0.2]}}>
        <Surface options={{properties: {backgroundColor: '#000099'}}}/>
        <Modifier options={{align: [0.5, 0.5], origin: [0.5, 0.5]}}>
          <Surface options={{properties: {color: 'white'}, size: [true, true]}}>
            Rotating
          </Surface>
        </Modifier>
      </Modifier>
    );
  }
};
