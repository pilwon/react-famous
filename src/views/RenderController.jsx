import RenderController from 'famous/views/RenderController';
import React from 'react';

import FamousMixin from '../lib/FamousMixin';

export default React.createClass({
  mixins: [FamousMixin],

  famousName: 'RenderController',

  famousCreate(parentNode) {
    let renderController = new RenderController(this.props.options);
    this.setFamous(renderController);
    if (parentNode) {
      this.setFamousNode(parentNode.add(renderController));
    }
  },

  famousUpdate(nextProps) {
    let renderController = this.getFamous();

    renderController.setOptions(nextProps.options);
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
