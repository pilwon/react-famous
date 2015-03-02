import React from 'react';
import Modifier from 'react-famous/core/Modifier';

import Level3 from './Level3';

export default React.createClass({
  render() {
    return (
      <div>
        <Modifier align={[0.5, 1]} origin={[0.5, 1]} opacity={0.5}>
          <Level3/>
        </Modifier>
      </div>
    );
  }
});
