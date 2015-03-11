import FamousCanvasSurface from 'famous/surfaces/CanvasSurface';
import defaults from 'lodash/object/defaults';
import React from 'react';

import FamousComponent from '../lib/FamousComponent';

class CanvasSurface extends FamousComponent {
  famousCreate() {
    return new FamousCanvasSurface(this.props.options);
  }

  famousCreateNode(parentNode) {
    let surface = this.getFamous();
    let node = parentNode.add(surface);
    return [node, null];
  }

  famousUpdate(nextProps) {
    let canvasSurface = this.getFamous();

    canvasSurface.setOptions(nextProps.options);
  }

  render() {
    return (
      <div data-famous="CanvasSurface"/>
    );
  }
}

defaults(CanvasSurface, FamousCanvasSurface);

export default CanvasSurface;
