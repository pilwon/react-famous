import StateModifier from 'famous/modifiers/StateModifier';
import defaults from 'lodash/object/defaults';
import React from 'react';

import FamousComponent from '../lib/FamousComponent';

class Component extends FamousComponent {
  famousCreate() {
    return new StateModifier(this.props.options);
  }

  famousCreateNode(parentNode) {
    let stateModifier = this.getFamous();
    let node = parentNode.add(stateModifier);
    return this.getFamousChildrenRef().map((child, idx) => [child, node]);
  }

  famousUpdate(nextProps) {
    let stateModifier = this.getFamous();

    if (nextProps.options.transform) {
      stateModifier.setTransform(nextProps.options.transform);
    }
    if (nextProps.options.opacity !== undefined) {
      stateModifier.setOpacity(nextProps.options.opacity);
    }
    if (nextProps.options.origin) {
      stateModifier.setOrigin(nextProps.options.origin);
    }
    if (nextProps.options.align) {
      stateModifier.setAlign(nextProps.options.align);
    }
    if (nextProps.options.size) {
      stateModifier.setSize(nextProps.options.size);
    }
    if (nextProps.options.proportions) {
      stateModifier.setProportions(nextProps.options.proportions);
    }
  }

  render() {
    return (
      <div data-famous="StateModifier">
        {this.getFamousChildren()}
      </div>
    );
  }
}

defaults(Component, StateModifier);

export default Component;
