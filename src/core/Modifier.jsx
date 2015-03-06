import Modifier from 'famous/core/Modifier';
import React from 'react';

import FamousMixin from '../lib/FamousMixin';

export default React.createClass({
  mixins: [FamousMixin],

  famousName: 'Modifier',

  famousCreate() {
    let modifier = new Modifier(this.props.options);
    this.setFamous(modifier);
    this.setFamousNode(this.getFamousParentNode().add(modifier));
  },

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
