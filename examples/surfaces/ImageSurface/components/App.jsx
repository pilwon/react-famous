import React from 'react';
import Context from 'react-famous/core/Context';
import Modifier from 'react-famous/core/Modifier';
import ImageSurface from 'react-famous/surfaces/ImageSurface';

const IMAGE_URL = 'http://code.famo.us/assets/famous.jpg';

export default React.createClass({
  render() {
    return (
      <Context>
        <Modifier options={{align: [0.5, 0.5], origin: [0.5, 0.5]}}>
          <ImageSurface options={{content: IMAGE_URL, size: [200, 200]}}/>
        </Modifier>
      </Context>
    );
  }
});
