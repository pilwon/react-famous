import startsWith from 'lodash/string/startsWith';
import range from 'lodash/utility/range';
import React from 'react';
import Context from 'react-famous/core/Context';
import Modifier from 'react-famous/core/Modifier';
import Surface from 'react-famous/core/Surface';
import ScrollContainer from 'react-famous/views/ScrollContainer';

const NUM_SURFACES = 40;
const SURFACE_REF_PREFIX = 'surface_';

export default class extends React.Component {
  componentDidMount() {
    let scrollContainer = this.refs.scrollContainer.getFamous();

    Object.keys(this.refs)
      .filter((key) => startsWith(key, SURFACE_REF_PREFIX))
      .forEach((key) => this.refs[key].getFamous().pipe(scrollContainer.scrollview));
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
        <Surface key={idx} ref={`${SURFACE_REF_PREFIX}${idx}`} options={surfaceOptions}>
          Surface {idx + 1}
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
