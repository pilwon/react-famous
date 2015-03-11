import FamousModifier from 'famous/core/Modifier';
import defaults from 'lodash/object/defaults';
import React from 'react';

import FamousComponent from '../lib/FamousComponent';

class Modifier extends FamousComponent {
  famousCreate() {
    return new FamousModifier(this.props.options);
  }

  famousCreateNode(parentNode) {
    let modifier = this.getFamous();
    let node = parentNode.add(modifier);
    let next = this.getFamousChildrenRef().map((child, idx) => [child, node]);
    return [node, next];
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

defaults(Modifier, FamousModifier);

export default Modifier;
