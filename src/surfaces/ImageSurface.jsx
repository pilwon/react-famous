import FamousImageSurface from 'famous/surfaces/ImageSurface';
import defaults from 'lodash/object/defaults';
import React from 'react';

import FamousComponent from '../lib/FamousComponent';
import FamousConstants from '../lib/FamousConstants';

class ImageSurface extends FamousComponent {
  famousCreate() {
    let imageSurface = new FamousImageSurface(this.props.options);

    FamousConstants.SURFACE_EVENTS.forEach((event) => {
      if (this.props[event.prop]) {
        imageSurface.on(event.type, () => {
          this.props[event.prop](this.props.eventKey);
        });
      }
    });

    return imageSurface;
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

ImageSurface.propTypes = defaults({}, FamousConstants.SURFACE_PROPTYPES);

export default ImageSurface;
