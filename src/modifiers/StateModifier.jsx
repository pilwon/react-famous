import StateModifier from 'famous/modifiers/StateModifier';
import React from 'react';

import FamousMixin from '../lib/FamousMixin';

export default React.createClass({
  mixins: [FamousMixin],

  famousName: 'StateModifier',

  famousCreate(parentNode) {
    let stateModifier = new StateModifier(this.props.options);
    this.setFamous(stateModifier);
    if (parentNode) {
      this.setFamousNode(parentNode.add(stateModifier));
    }
  },

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
  },

  render() {
    if (!this.getFamousReady()) { return null; }

    return (
      <div data-famous={this.famousName}>
        {this.props.children}
      </div>
    );
  }
});
