import React from 'react';
import Context from 'react-famous/core/Context';
import Modifier from 'react-famous/core/Modifier';
import Surface from 'react-famous/core/Surface';

export default React.createClass({
  render() {
    let options = {
      size: [150, 100],
      properties: {
        backgroundColor: 'red',
        color: '#fff',
        textAlign: 'center',
        lineHeight: '100px'
      }
    };

    return (
      <Context>
        <Modifier options={{align: [0.5, 0.5], origin: [0.5, 0.5]}}>
          <Surface options={options}>
            Hello World
          </Surface>
        </Modifier>
      </Context>
    );
  }
});
