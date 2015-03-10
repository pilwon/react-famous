import range from 'lodash/utility/range';
import React from 'react';
import Context from 'react-famous/core/Context';
import Modifier from 'react-famous/core/Modifier';
import Surface from 'react-famous/core/Surface';
import ScrollContainer from 'react-famous/views/ScrollContainer';

const NUM_SURFACES = 40;

export default class extends React.Component {
  componentDidMount() {
    let scrollContainer = this.refs.scrollContainer.getFamous();

    range(NUM_SURFACES).forEach((idx) => {
      let surface = this.refs[`surface_${idx}`].getFamous();
      surface.pipe(scrollContainer.scrollview);
    });
  }

  render() {
    let surfaces = range(NUM_SURFACES).map((idx) => {
      let surfaceOptions = {
        size: [undefined, 50],
        properties: {
          backgroundColor: 'hsl(' + (idx * 360 / NUM_SURFACES) + ', 100%, 50%)',
          lineHeight: '50px',
          textAlign: 'center'
        }
      };
      return (
        <Surface key={idx} ref={`surface_${idx}`} options={surfaceOptions}>
          Surface {idx}
        </Surface>
      );
    });

    return (
      <Context>
        <Surface options={{properties: {lineHeight: '100px', textAlign: 'center'}, size: [undefined, 100]}}>
          Surfaces are clipped by ScrollContainer.
        </Surface>
        <Modifier options={{align: [0.5, 0.5], origin: [0.5, 0.5], size: [500, 300]}}>
          <ScrollContainer ref="scrollContainer">
            {surfaces}
          </ScrollContainer>
        </Modifier>
      </Context>
    );
  }
};
