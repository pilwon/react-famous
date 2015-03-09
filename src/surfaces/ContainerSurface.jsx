import FamousContainerSurface from 'famous/surfaces/ContainerSurface';
import defaults from 'lodash/object/defaults';
import React from 'react';

import Context from '../core/Context';
import FamousComponent from '../lib/FamousComponent';

class ContainerSurface extends FamousComponent {
  famousCreate() {
    return new FamousContainerSurface(this.props.options);
  }

  famousCreateNode(parentNode) {
    let containerSurface = this.getFamous();
    let node = parentNode.add(containerSurface);
    let next = this.getFamousChildrenRef().map((child, idx) => [child, containerSurface]);
    return [node, next];
  }

  famousUpdate(nextProps) {
    let containerSurface = this.getFamous();

    containerSurface.setOptions(nextProps.options);
  }

  render() {
    return (
      <div data-famous="ContainerSurface">
        {this.getFamousChildren()}
      </div>
    );
  }
}

defaults(ContainerSurface, FamousContainerSurface);

export default ContainerSurface;
