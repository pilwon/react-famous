import CanvasSurface from 'famous/surfaces/CanvasSurface';
import React from 'react';

import FamousMixin from '../lib/FamousMixin';

export default React.createClass({
  mixins: [FamousMixin],

  famousCreate() {
    return new CanvasSurface(this.props.options);
  },

  famousCreateNode(parentNode) {
    let surface = this.getFamous();
    parentNode.add(surface);
  },

  famousUpdate(nextProps) {
    let canvasSurface = this.getFamous();

    canvasSurface.setOptions(nextProps.options);
  },

  render() {
    return (
      <div data-famous="CanvasSurface"/>
    );
  }
});
