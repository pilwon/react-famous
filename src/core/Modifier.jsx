import Modifier from 'famous/core/Modifier';
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
    let modifier = this.getFamous();
    let options = FamousUtil.parseOptions(props);
    let optionsChanged = this.setFamousOptions(options);
    let render = true;

    if (!modifier) {
      modifier = new Modifier(options);

      this.setFamous(modifier);
      this.setFamousNode(FamousUtil.getFamousParentNode(this).add(modifier));
    } else if (optionsChanged) {
      surface.setOptions(options);
    }

    if (render) {
      this.forceUpdate();
    }
  },

  renderFamous() {
    return (
      <div data-famous="Modifier">
        {this.props.children}
      </div>
    );
  }
});
