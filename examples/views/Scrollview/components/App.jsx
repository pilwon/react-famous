import range from 'lodash/utility/range';
import React from 'react';
import Context from 'react-famous/core/Context';
import Surface from 'react-famous/core/Surface';
import Scrollview from 'react-famous/views/Scrollview';

export default class extends React.Component {
  render() {
    let surfaces = range(40).map((i) => {
      let options = {
        properties: {
          backgroundColor: 'hsl(' + (i * 360 / 40) + ', 100%, 50%)',
          lineHeight: '100px',
          textAlign: 'center'
        },
        size: [undefined, 100]
      };
      return (
        <Surface key={i} options={options}>
          Surface: {i + 1}
        </Surface>
      );
    });

    return (
      <Context>
        <Scrollview>
          {surfaces}
        </Scrollview>
      </Context>
    );
  }
};
