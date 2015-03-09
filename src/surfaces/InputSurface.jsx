import FamousInputSurface from 'famous/surfaces/InputSurface';
import defaults from 'lodash/object/defaults';
import React from 'react';

import FamousComponent from '../lib/FamousComponent';

class InputSurface extends FamousComponent {
  famousCreate() {
    return new FamousInputSurface(this.props.options);
  }

  famousCreateNode(parentNode) {
    let inputSurface = this.getFamous();
    parentNode.add(inputSurface);
  }

  famousUpdate(nextProps) {
    let inputSurface = this.getFamous();

    inputSurface.setOptions(nextProps.options);
  }

  render() {
    return (
      <div data-famous="InputSurface"/>
    );
  }
}

defaults(InputSurface, FamousInputSurface);

export default InputSurface;
