import startsWith from 'lodash/string/startsWith';
import range from 'lodash/utility/range';
import React from 'react';
import Context from 'react-famous/core/Context';
import Surface from 'react-famous/core/Surface';
import Scrollview from 'react-famous/views/Scrollview';

const NUM_SURFACES = 40;
const SURFACE_REF_PREFIX = 'surface_';

export default class extends React.Component {
  componentDidMount() {
    let scrollview = this.refs.scrollview.getFamous();

    Object.keys(this.refs)
      .filter((key) => startsWith(key, SURFACE_REF_PREFIX))
      .map((key) => this.refs[key].getFamous())
      .forEach((surface) => surface.pipe(scrollview));
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
        <Surface key={idx} ref={`${SURFACE_REF_PREFIX}${idx}`} options={options}>
          Surface {idx + 1}
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
