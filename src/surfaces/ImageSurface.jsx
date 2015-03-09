import FamousImageSurface from 'famous/surfaces/ImageSurface';
import defaults from 'lodash/object/defaults';
import React from 'react';

import FamousComponent from '../lib/FamousComponent';

class ImageSurface extends FamousComponent {
  famousCreate() {
    return new FamousImageSurface(this.props.options);
  }

  famousCreateNode(parentNode) {
    let imageSurface = this.getFamous();
    let node = parentNode.add(imageSurface);
    return [node, null];
  }

  famousUpdate(nextProps) {
    let imageSurface = this.getFamous();

    imageSurface.setOptions(nextProps.options);
  }

  render() {
    return (
      <div data-famous="ImageSurface"/>
    );
  }
}

defaults(ImageSurface, FamousImageSurface);

export default ImageSurface;
