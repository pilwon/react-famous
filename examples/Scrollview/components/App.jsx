import React from 'react';

import Context from 'react-famous/core/Context';
import Surface from 'react-famous/core/Surface';
import Scrollview from 'react-famous/views/Scrollview';

export default React.createClass({
  render() {
    let surfaces = [];

    for (let i = 0; i < 40; ++i) {
      let properties = {
        backgroundColor: 'hsl(' + (i * 360 / 40) + ', 100%, 50%)',
        lineHeight: '100px',
        textAlign: 'center'
      };

      let surface = (
        <Surface key={i} properties={properties} size={[undefined, 100]}>
          Surface: {i + 1}
        </Surface>
      );

      surfaces.push(surface);
    }

    return (
      <Context>
        <Scrollview>
          {surfaces}
        </Scrollview>
      </Context>
    );
  }
});
