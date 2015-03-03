import Modifier from 'famous/core/Modifier';
import React from 'react';

import FamousMixin from '../lib/FamousMixin';
import FamousUtil from '../lib/FamousUtil';

export default React.createClass({
  mixins: [FamousMixin],

  famousCreate({options}) {
    let modifier = new Modifier(options);
    this.setFamous(modifier);
    this.setFamousNode(FamousUtil.getFamousParentNode(this).add(modifier));
  },

  famousUpdate({options}) {
    let modifier = this.getFamous();

    if (options.transform) {
      modifier.setTransform(options.transform);
    }
    if (options.opacity !== undefined) {
      modifier.setOpacity(options.opacity);
    }
    if (options.origin) {
      modifier.setOrigin(options.origin);
    }
    if (options.align) {
      modifier.setAlign(options.align);
    }
    if (options.size) {
      modifier.setSize(options.size);
    }
    if (options.proportions) {
      modifier.setProportions(options.proportions);
    }
  },

  render() {
    if (!this.getFamousReady()) { return null; }

    return (
      <div data-famous="Modifier">
        {this.props.children}
      </div>
    );
  }
});
