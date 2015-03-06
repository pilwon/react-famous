import CanvasSurface from 'famous/surfaces/CanvasSurface';
import React from 'react';

import FamousMixin from '../lib/FamousMixin';

export default React.createClass({
  mixins: [FamousMixin],

  famousName: 'CanvasSurface',

  famousCreate() {
    let canvasSurface = new CanvasSurface(this.props.options);
    this.setFamous(canvasSurface);
    this.setFamousNode(this.getFamousParentNode().add(canvasSurface));
  },

  famousUpdate(nextProps) {
    let canvasSurface = this.getFamous();

    canvasSurface.setOptions(nextProps.options);
  },

  render() {
    if (!this.getFamousReady()) { return null; }

    return (
      <div data-famous={this.famousName}/>
    );
  }
});
