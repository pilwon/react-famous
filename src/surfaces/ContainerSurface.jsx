import ContainerSurface from 'famous/surfaces/ContainerSurface';
import isUndefined from 'lodash/lang/isUndefined';
import React from 'react';

import FamousMixin from '../lib/FamousMixin';
import FamousUtil from '../lib/FamousUtil';

export default React.createClass({
  mixins: [FamousMixin],

  propTypes: {
    eventKey: React.PropTypes.any,
    onClick: React.PropTypes.func
  },

  famousName: 'ContainerSurface',

  famousCreate(parentNode) {
    let containerSurface = new ContainerSurface(this.props.options);
    this.setFamous(containerSurface);
    if (parentNode) {
      this.setFamousNode(parentNode.add(containerSurface));
    }

    if (this.props.onClick) {
      containerSurface.on('click', () => {
        this.props.onClick(this.props.eventKey);
      });
    }

    if (!isUndefined(this.props.children)) {
      containerSurface.setContent(FamousUtil.renderContent(this.props.children));
    }
  },

  famousUpdate(nextProps) {
    let containerSurface = this.getFamous();

    containerSurface.setOptions(nextProps.options);

    if (!isUndefined(nextProps.children)) {
      containerSurface.setContent(FamousUtil.renderContent(nextProps.children));
    }
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
