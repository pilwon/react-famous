import EdgeSwapper from 'famous/views/EdgeSwapper';
import React from 'react';

import FamousMixin from '../lib/FamousMixin';

export default React.createClass({
  mixins: [FamousMixin],

  famousCreate() {
    let edgeSwapper = new EdgeSwapper(this.props.options);
    this.setFamous(edgeSwapper);
    this.setFamousNode(this.getFamousParentNode().add(edgeSwapper));
  },

  famousUpdate(nextProps) {
    let edgeSwapper = this.getFamous();

    edgeSwapper.setOptions(nextProps.options);
  },

  render() {
    if (!this.getFamousReady()) { return null; }

    return (
      <div data-famous="EdgeSwapper">
        {this.props.children}
      </div>
    );
  }
});
