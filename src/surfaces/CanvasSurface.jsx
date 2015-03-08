import CanvasSurface from 'famous/surfaces/CanvasSurface';
import defaults from 'lodash/object/defaults';
import React from 'react';

import FamousComponent from '../lib/FamousComponent';

class Component extends FamousComponent {
  famousCreate() {
    return new CanvasSurface(this.props.options);
  }

  famousCreateNode(parentNode) {
    let surface = this.getFamous();
    parentNode.add(surface);
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

defaults(Component, CanvasSurface);

export default Component;
