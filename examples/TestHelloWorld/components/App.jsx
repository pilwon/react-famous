import React from 'react';
import Context from 'react-famous/core/Context';
import Modifier from 'react-famous/core/Modifier';
import Surface from 'react-famous/core/Surface';

export default React.createClass({
  render() {
    return (
      <Context>
        <Modifier align={[0.5, 0.5]} origin={[0.5, 0.5]}>
          <Surface size={[150, 100]} properties={{backgroundColor: 'red', color: '#fff', textAlign: 'center', lineHeight: '100px'}}>
            Hello World
          </Surface>
        </Modifier>
      </Context>
    );
  }
});
