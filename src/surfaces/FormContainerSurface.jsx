import FamousFormContainerSurface from 'famous/surfaces/FormContainerSurface';
import defaults from 'lodash/object/defaults';
import React from 'react';

import Context from '../core/Context';
import FamousComponent from '../lib/FamousComponent';

class FormContainerSurface extends FamousComponent {
  famousCreate() {
    return new FamousFormContainerSurface(this.props.options);
  }

  famousCreateNode(parentNode) {
    let formContainerSurface = this.getFamous();
    let node = parentNode.add(formContainerSurface);
    let next = this.getFamousChildrenRef().map((child, idx) => [child, formContainerSurface]);
    return [node, next];
  }

  famousUpdate(nextProps) {
    let formContainerSurface = this.getFamous();

    formContainerSurface.setOptions(nextProps.options);
  }

  render() {
    return (
      <div data-famous="FormContainerSurface">
        {this.getFamousChildren()}
      </div>
    );
  }
}

defaults(FormContainerSurface, FamousFormContainerSurface);

export default FormContainerSurface;
