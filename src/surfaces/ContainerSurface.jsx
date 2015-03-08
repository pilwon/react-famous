import ContainerSurface from 'famous/surfaces/ContainerSurface';
import defaults from 'lodash/object/defaults';
import React from 'react';

import Context from '../core/Context';
import FamousComponent from '../lib/FamousComponent';

class Component extends FamousComponent {
  famousCreate() {
    return new ContainerSurface(this.props.options);
  }

  famousCreateNode(parentNode) {
    let containerSurface = this.getFamous();
    parentNode.add(containerSurface);
  }

  famousUpdate(nextProps) {
    let containerSurface = this.getFamous();

    containerSurface.setOptions(nextProps.options);
  }

  render() {
    return (
      <div data-famous="ContainerSurface">
        <Context>
          {this.props.children}
        </Context>
      </div>
    );
  }
}

defaults(Component, ContainerSurface);

export default Component;
