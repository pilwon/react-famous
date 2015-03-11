import FamousRenderNode from 'famous/core/RenderNode';
import FamousLightbox from 'famous/views/Lightbox';
import defaults from 'lodash/object/defaults';
import React from 'react';

import FamousComponent from '../lib/FamousComponent';

class Lightbox extends FamousComponent {
  famousCreate() {
    return new FamousLightbox(this.props.options);
  }

  famousCreateNode(parentNode) {
    let lightbox = this.getFamous();
    let node = parentNode.add(lightbox);
    let next = this.getFamousChildrenRef().map((child, idx) => [child, new FamousRenderNode()]);
    return [node, next];
  }

  famousUpdate(nextProps) {
    let lightbox = this.getFamous();

    lightbox.setOptions(nextProps.options);
  }

  render() {
    return (
      <div data-famous="Lightbox">
        {this.getFamousChildren()}
      </div>
    );
  }
}

defaults(Lightbox, FamousLightbox);

export default Lightbox;
