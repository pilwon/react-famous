import Modifier from 'famous/core/Modifier';
import React from 'react';

import FamousMixin from '../lib/FamousMixin';
import FamousUtil from '../lib/FamousUtil';

export default React.createClass({
  mixins: [FamousMixin],

  famousCreate(props) {
    let options = FamousUtil.parseOptions(props);

    let modifier = new Modifier(options);
    this.setFamous(modifier);
    this.setFamousNode(FamousUtil.getFamousParentNode(this).add(modifier));
  },

  famousUpdate(props) {
    let modifier = this.getFamous();
    let options = FamousUtil.parseOptions(props);
    let optionsChanged = this.setFamousOptions(options);

    if (optionsChanged) {
      surface.setOptions(options);
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
