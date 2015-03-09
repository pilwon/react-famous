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
    parentNode.add(formContainerSurface);
  }

  famousUpdate(nextProps) {
    let formContainerSurface = this.getFamous();

    formContainerSurface.setOptions(nextProps.options);
  }

  render() {
    return (
      <div data-famous="FormContainerSurface">
        <Context>
          {this.props.children}
        </Context>
      </div>
    );
  }
}

defaults(FormContainerSurface, FamousFormContainerSurface);

export default FormContainerSurface;
