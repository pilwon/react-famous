import Modifier from 'famous/core/Modifier';
import React from 'react';

import FamousMixin from '../lib/FamousMixin';
import FamousUtil from '../lib/FamousUtil';

export default React.createClass({
  mixins: [FamousMixin],

  renderFamous() {
    return (
      <div data-famous="Modifier">
        {this.props.children}
      </div>
    );
  },

  updateFamous(props) {
    let modifier = this.getFamous();
    let options = FamousUtil.parseOptions(props);
    let optionsChanged = this.setFamousOptions(options);

    if (!modifier) {
      modifier = new Modifier(options);
      this.setFamous(modifier);
      this.setFamousNode(FamousUtil.getFamousParentNode(this).add(modifier));
    } else if (optionsChanged) {
      surface.setOptions(options);
    }
  }
});
