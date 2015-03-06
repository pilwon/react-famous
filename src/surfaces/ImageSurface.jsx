import ImageSurface from 'famous/surfaces/ImageSurface';
import React from 'react';

import FamousMixin from '../lib/FamousMixin';

export default React.createClass({
  mixins: [FamousMixin],

  famousName: 'ImageSurface',

  famousCreate(parentNode) {
    let imageSurface = new ImageSurface(this.props.options);
    this.setFamous(imageSurface);
    if (parentNode) {
      this.setFamousNode(parentNode.add(imageSurface));
    }
  },

  famousUpdate(nextProps) {
    let imageSurface = this.getFamous();

    imageSurface.setOptions(nextProps.options);
  },

  render() {
    if (!this.getFamousReady()) { return null; }

    return (
      <div data-famous={this.famousName}/>
    );
  }
});
