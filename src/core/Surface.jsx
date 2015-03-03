import Surface from 'famous/core/Surface';
import isUndefined from 'lodash/lang/isUndefined';
import React from 'react';

import FamousMixin from '../lib/FamousMixin';
import FamousUtil from '../lib/FamousUtil';

export default React.createClass({
  mixins: [FamousMixin],

  updateFamous(props) {
    let surface = this.getFamous();
    let options = FamousUtil.parseOptions(props);
    let optionsChanged = this.setFamousOptions(options);

    if (!surface) {
      surface = new Surface(options);
      this.setFamous(surface);
      this.setFamousNode(FamousUtil.getFamousParentNode(this).add(surface));
    } else if (optionsChanged) {
      surface.setOptions(options);
    }

    if (!isUndefined(props.children)) {
      surface.setContent(FamousUtil.renderContent(props.children));
    }
  },

  render() {
    if (!this.getFamousReady()) { return null; }

    return (
      <div data-famous="Surface">
        {this.props.children}
      </div>
    );
  }
});
