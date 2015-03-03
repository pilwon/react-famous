import Surface from 'famous/core/Surface';
import isUndefined from 'lodash/lang/isUndefined';
import React from 'react';

import FamousMixin from '../lib/FamousMixin';
import FamousUtil from '../lib/FamousUtil';

export default React.createClass({
  mixins: [FamousMixin],

  famousCreate({children, options}) {
    let surface = new Surface(options);
    this.setFamous(surface);
    this.setFamousNode(FamousUtil.getFamousParentNode(this).add(surface));

    if (!isUndefined(children)) {
      surface.setContent(FamousUtil.renderContent(children));
    }
  },

  famousUpdate({children, options}) {
    let surface = this.getFamous();

    surface.setOptions(options);

    if (!isUndefined(children)) {
      surface.setContent(FamousUtil.renderContent(children));
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
