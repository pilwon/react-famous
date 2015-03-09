import React from 'react';
import Context from 'react-famous/core/Context';
import Modifier from 'react-famous/core/Modifier';
import Surface from 'react-famous/core/Surface';
import ImageSurface from 'react-famous/surfaces/ImageSurface';

const IMAGE_URL = 'http://code.famo.us/assets/famous.jpg';

export default class extends React.Component {
  render() {
    return (
      <Context>
        <Surface options={{properties: {lineHeight: '100px', textAlign: 'center'}, size: [undefined, 100]}}>
          The image is created with ImageSurface.
        </Surface>
        <Modifier options={{align: [0.5, 0.5], origin: [0.5, 0.5]}}>
          <ImageSurface options={{content: IMAGE_URL, size: [200, 200]}}/>
        </Modifier>
      </Context>
    );
  }
};
