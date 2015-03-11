import FamousSubmitInputSurface from 'famous/surfaces/SubmitInputSurface';
import defaults from 'lodash/object/defaults';
import React from 'react';

import FamousComponent from '../lib/FamousComponent';

class SubmitInputSurface extends FamousComponent {
  famousCreate() {
    return new FamousSubmitInputSurface(this.props.options);
  }

  famousCreateNode(parentNode) {
    let submitInputSurface = this.getFamous();
    let node = parentNode.add(submitInputSurface);
    return [node, null];
  }

  famousUpdate(nextProps) {
    let submitInputSurface = this.getFamous();

    submitInputSurface.setOptions(nextProps.options);
  }

  render() {
    return (
      <div data-famous="SubmitInputSurface"/>
    );
  }
}

defaults(SubmitInputSurface, FamousSubmitInputSurface);

export default SubmitInputSurface;
