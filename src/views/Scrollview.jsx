import RenderNode from 'famous/core/RenderNode';
import Scrollview from 'famous/views/Scrollview';
import toPlainObject from 'lodash/lang/toPlainObject';
import React from 'react';
import cloneWithProps from 'react/lib/cloneWithProps';

import FamousMixin from '../lib/FamousMixin';
import FamousUtil from '../lib/FamousUtil';

export default React.createClass({
  mixins: [FamousMixin],

  propTypes: {
    direction: React.PropTypes.number,
    drag: React.PropTypes.number,
    friction: React.PropTypes.number,
    edgeDamp: React.PropTypes.number,
    edgeGrip: React.PropTypes.number,
    edgePeriod: React.PropTypes.number,
    groupScroll: React.PropTypes.bool,
    margin: React.PropTypes.number,
    pageDamp: React.PropTypes.number,
    pagePeriod: React.PropTypes.number,
    pageStopSpeed: React.PropTypes.number,
    pageSwitchSpeed: React.PropTypes.number,
    paginated: React.PropTypes.bool,
    rails: React.PropTypes.bool,
    speedLimit: React.PropTypes.number,
    syncScale: React.PropTypes.number
  },

  famousCreate(props) {
    let options = FamousUtil.parseOptions(props);

    let scrollview = new Scrollview(options);
    this.setFamous(scrollview);
    this.setFamousNode(FamousUtil.getFamousParentNode(this).add(scrollview));

    let sequence = props.children.map(() => new RenderNode());
    scrollview.sequenceFrom(sequence);
    this.setFamousKeyedNodes(toPlainObject(sequence));
  },

  famousUpdate(props) {
    let scrollview = this.getFamous();
    let options = FamousUtil.parseOptions(props);
    let optionsChanged = this.setFamousOptions(options);

    if (optionsChanged) {
      scrollview.setOptions(options);
    }
  },

  render() {
    if (!this.getFamousReady()) { return null; }

    return (
      <div data-famous="Scrollview">
        {this.props.children.map((child, key) => cloneWithProps(child, {key}))}
      </div>
    );
  }
});
