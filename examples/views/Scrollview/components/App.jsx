import range from 'lodash/utility/range';
import React from 'react';
import Context from 'react-famous/core/Context';
import Surface from 'react-famous/core/Surface';
import Scrollview from 'react-famous/views/Scrollview';

const NUM_SURFACES = 40;

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
          backgroundColor: 'hsl(' + (idx * 360 / NUM_SURFACES) + ', 100%, 50%)',
          lineHeight: '100px',
          textAlign: 'center'
        },
        size: [undefined, 100]
      };
      return (
        <Surface key={idx} ref={`surface_${idx}`} options={options}>
          Surface: {idx + 1}
        </Surface>
      );
    });

    return (
      <Context>
        <Scrollview ref="scrollview">
          {surfaces}
        </Scrollview>
      </Context>
    );
  }
};
