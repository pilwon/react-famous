import React from 'react';
import Surface from 'react-famous/core/Surface';

export default React.createClass({
  render() {
    return (
      <div>
        <div>
          <Surface size={[500, 100]} properties={{backgroundColor: 'blue', color: 'white', lineHeight: '100px'}}>
            <center>Deep down there</center>
          </Surface>
        </div>
      </div>
    );
  }
});
