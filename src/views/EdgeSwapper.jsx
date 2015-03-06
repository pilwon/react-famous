import EdgeSwapper from 'famous/views/EdgeSwapper';
import React from 'react';

import FamousMixin from '../lib/FamousMixin';

export default React.createClass({
  mixins: [FamousMixin],

  famousName: 'EdgeSwapper',

  famousCreate(parentNode) {
    let edgeSwapper = new EdgeSwapper(this.props.options);
    this.setFamous(edgeSwapper);
    if (parentNode) {
      this.setFamousNode(parentNode.add(edgeSwapper));
    }
  },

  famousUpdate(nextProps) {
    let edgeSwapper = this.getFamous();

    edgeSwapper.setOptions(nextProps.options);
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
