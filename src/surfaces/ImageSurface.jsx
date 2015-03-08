import ImageSurface from 'famous/surfaces/ImageSurface';
import React from 'react';

import FamousComponent from '../lib/FamousComponent';

export default class extends FamousComponent {
  famousCreate() {
    return new ImageSurface(this.props.options);
  }

  famousCreateNode(parentNode) {
    let imageSurface = this.getFamous();
    parentNode.add(imageSurface);
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
};
