import SubmitInputSurface from 'famous/surfaces/SubmitInputSurface';
import defaults from 'lodash/object/defaults';
import React from 'react';

import FamousComponent from '../lib/FamousComponent';

class Component extends FamousComponent {
  famousCreate() {
    return new SubmitInputSurface(this.props.options);
  }

  famousCreateNode(parentNode) {
    let submitInputSurface = this.getFamous();
    parentNode.add(submitInputSurface);
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

defaults(Component, SubmitInputSurface);

export default Component;
