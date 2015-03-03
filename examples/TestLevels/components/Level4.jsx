import React from 'react';
import Surface from 'react-famous/core/Surface';

export default React.createClass({
  render() {
    let options = {
      size: [500, 100],
      properties: {
        backgroundColor: 'blue',
        color: 'white',
        lineHeight: '100px'
      }
    };

    return (
      <div>
        <div>
          <Surface options={options}>
            <center>Deep down there</center>
          </Surface>
        </div>
      </div>
    );
  }
});
