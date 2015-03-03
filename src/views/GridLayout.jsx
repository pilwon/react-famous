import RenderNode from 'famous/core/RenderNode';
import GridLayout from 'famous/views/GridLayout';
import toPlainObject from 'lodash/lang/toPlainObject';
import React from 'react';
import cloneWithProps from 'react/lib/cloneWithProps';

import FamousMixin from '../lib/FamousMixin';
import FamousUtil from '../lib/FamousUtil';

export default React.createClass({
  mixins: [FamousMixin],

  propTypes: {
    dimensions: React.PropTypes.array,
    gutterSize: React.PropTypes.array,
    transition: React.PropTypes.bool
  },

  famousCreate(props) {
    let options = FamousUtil.parseOptions(props);
    this.setFamousOptions(options);

    let gridLayout = new GridLayout(options);
    this.setFamous(gridLayout);
    this.setFamousNode(FamousUtil.getFamousParentNode(this).add(gridLayout));

    let sequence = props.children.map(() => new RenderNode());
    gridLayout.sequenceFrom(sequence);
    this.setFamousKeyedNodes(toPlainObject(sequence));
  },

  famousUpdate(props) {
    let gridLayout = this.getFamous();
    let options = FamousUtil.parseOptions(props);
    let optionsChanged = this.setFamousOptions(options);

    if (optionsChanged) {
      gridLayout.setOptions(options);
    }
  },

  render() {
    if (!this.getFamousReady()) { return null; }

    return (
      <div data-famous="GridLayout">
        {this.props.children.map((child, key) => cloneWithProps(child, {key}))}
      </div>
    );
  }
});
