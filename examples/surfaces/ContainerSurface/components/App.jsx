import range from 'lodash/utility/range';
import React from 'react';
import Context from 'react-famous/core/Context';
import Modifier from 'react-famous/core/Modifier';
import Surface from 'react-famous/core/Surface';
import ContainerSurface from 'react-famous/surfaces/ContainerSurface';
import Scrollview from 'react-famous/views/Scrollview';

const NUM_SURFACES = 100;

export default class extends React.Component {
  componentDidMount() {
    let scrollview = this.refs.scrollview.getFamous();

    range(NUM_SURFACES).forEach((idx) => {
      let surface = this.refs[`surface_${idx}`].getFamous();
      surface.pipe(scrollview);
    });
  }

  render() {
    let surfaces = range(NUM_SURFACES).map((idx) => {
      let options = {
        properties: {
          backgroundColor: 'rgba(255, 0, 0, 0.5)',
          color: 'white',
          lineHeight: '50px',
          textAlign: 'center'
        },
        size: [undefined, 50]
      };
      return (
        <Surface key={idx} ref={`surface_${idx}`} options={options}>
          I am surface: {idx + 1}
        </Surface>
      );
    });

    return (
      <Context>
        <Surface options={{properties: {lineHeight: '100px', textAlign: 'center'}, size: [undefined, 100]}}>
          Scrollview is created inside a container surface.
        </Surface>
        <Modifier options={{align: [0.5, 0.5], origin: [0.5, 0.5]}}>
          <ContainerSurface options={{properties: {border: '1px solid black', overflow: 'hidden'}, size: [300, 300]}}>
            <Scrollview ref="scrollview">
              {surfaces}
            </Scrollview>
          </ContainerSurface>
        </Modifier>
      </Context>
    );
  }
};
