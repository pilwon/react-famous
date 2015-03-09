import FamousTextareaSurface from 'famous/surfaces/TextareaSurface';
import defaults from 'lodash/object/defaults';
import React from 'react';

import FamousComponent from '../lib/FamousComponent';

class TextareaSurface extends FamousComponent {
  famousCreate() {
    return new FamousTextareaSurface(this.props.options);
  }

  famousCreateNode(parentNode) {
    let textareaSurface = this.getFamous();
    let node = parentNode.add(textareaSurface);
    return [node, null];
  }

  famousUpdate(nextProps) {
    let textareaSurface = this.getFamous();

    textareaSurface.setOptions(nextProps.options);
  }

  render() {
    return (
      <div data-famous="TextareaSurface"/>
    );
  }
}

defaults(TextareaSurface, FamousTextareaSurface);

export default TextareaSurface;
