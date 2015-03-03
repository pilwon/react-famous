import Surface from 'famous/core/Surface';
import isUndefined from 'lodash/lang/isUndefined';
import React from 'react';

import FamousMixin from '../lib/FamousMixin';
import FamousUtil from '../lib/FamousUtil';

export default React.createClass({
  mixins: [FamousMixin],

  famousCreate() {
    let surface = new Surface(this.props.options);
    this.setFamous(surface);
    this.setFamousNode(this.getFamousParentNode().add(surface));

    if (!isUndefined(this.props.children)) {
      surface.setContent(FamousUtil.renderContent(this.props.children));
    }
  },

  famousUpdate(nextProps) {
    let surface = this.getFamous();

    surface.setOptions(nextProps.options);

    if (!isUndefined(nextProps.children)) {
      surface.setContent(FamousUtil.renderContent(nextProps.children));
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
