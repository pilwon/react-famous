import Modifier from 'famous/core/Modifier';
import defaults from 'lodash/object/defaults';
import React from 'react';

import FamousComponent from '../lib/FamousComponent';

class Component extends FamousComponent {
  famousCreate() {
    return new Modifier(this.props.options);
  }

  famousCreateNode(parentNode) {
    let modifier = this.getFamous();
    let node = parentNode.add(modifier);
    return this.getFamousChildrenRef().map((child, idx) => [child, node]);
  }

  famousUpdate(nextProps) {
    let modifier = this.getFamous();

    if (nextProps.options.transform) {
      modifier.setTransform(nextProps.options.transform);
    }
    if (nextProps.options.opacity !== undefined) {
      modifier.setOpacity(nextProps.options.opacity);
    }
    if (nextProps.options.origin) {
      modifier.setOrigin(nextProps.options.origin);
    }
    if (nextProps.options.align) {
      modifier.setAlign(nextProps.options.align);
    }
    if (nextProps.options.size) {
      modifier.setSize(nextProps.options.size);
    }
    if (nextProps.options.proportions) {
      modifier.setProportions(nextProps.options.proportions);
    }
  }

  render() {
    return (
      <div data-famous="Modifier">
        {this.getFamousChildren()}
      </div>
    );
  }
}

defaults(Component, Modifier);

export default Component;
