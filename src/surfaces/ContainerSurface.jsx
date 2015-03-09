import FamousContainerSurface from 'famous/surfaces/ContainerSurface';
import isUndefined from 'lodash/lang/isUndefined';
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

defaults(ContainerSurface, FamousContainerSurface);

export default ContainerSurface;
