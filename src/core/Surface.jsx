import Surface from 'famous/core/Surface';
import isUndefined from 'lodash/lang/isUndefined';
import React from 'react';

import FamousNodeMixin from '../lib/FamousNodeMixin';
import FamousRenderMixin from '../lib/FamousRenderMixin';
import FamousUtil from '../lib/FamousUtil';

export default React.createClass({
  mixins: [FamousNodeMixin, FamousRenderMixin],

  componentDidMount() {
    this._updateFamous(this.props);
  },

  componentWillReceiveProps(nextProps) {
    this._updateFamous(nextProps);
  },

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  },

  componentWillUnmount() {
    this.releaseFamous();
    this.releaseFamousNode();
  },

  _updateFamous(props) {
    let surface = this.getFamous();
    let options = FamousUtil.parseOptions(props);
    let optionsChanged = this.setFamousOptions(options);
    let render = true;

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

    if (render) {
      this.forceUpdate();
    }
  },

  renderFamous() {
    return (
      <div data-famous="Surface">
        {this.props.children}
      </div>
    );
  }
});
