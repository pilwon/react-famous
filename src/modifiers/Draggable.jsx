import FamousDraggable from 'famous/modifiers/Draggable';
import defaults from 'lodash/object/defaults';
import React from 'react';

import FamousComponent from '../lib/FamousComponent';

class Draggable extends FamousComponent {
  famousCreate() {
    return new FamousDraggable(this.props.options);
  }

  famousCreateNode(parentNode) {
    let draggable = this.getFamous();
    let node = parentNode.add(draggable);
    let next = this.getFamousChildrenRef().map((child, idx) => [child, node]);
    return [node, next];
  }

  famousUpdate(nextProps) {
    let draggable = this.getFamous();

    draggable.setOptions(nextProps.options);
  }

  render() {
    return (
      <div data-famous="Draggable">
        {this.getFamousChildren()}
      </div>
    );
  }
}

defaults(Draggable, FamousDraggable);

export default Draggable;
