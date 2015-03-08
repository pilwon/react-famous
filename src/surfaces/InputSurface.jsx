import InputSurface from 'famous/surfaces/InputSurface';
import defaults from 'lodash/object/defaults';
import React from 'react';

import FamousComponent from '../lib/FamousComponent';

class Component extends FamousComponent {
  famousCreate() {
    return new InputSurface(this.props.options);
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

defaults(Component, InputSurface);

export default Component;
