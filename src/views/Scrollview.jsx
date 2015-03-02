import RenderNode from 'famous/core/RenderNode';
import Scrollview from 'famous/views/Scrollview';
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

  componentDidMount() {
    this._updateFamous(this.props);
  },

  componentWillReceiveProps(nextProps) {
    this._updateFamous(nextProps);
  },

  componentWillUnmount() {
    this.releaseFamousNode();
  },

  getFamousNodeByKey(key) {
    return this._famousNodes[key];
  },

  _updateFamous(props) {
    let node = this.getFamousNode();
    let options = FamousUtil.parseOptions(props);
    let render = true;

    if (!node) {
      node = new Scrollview(options);
      this.setFamousNode(
        FamousUtil.getFamousParentNode(this).add(node)
      );
      this._famousNodes = props.children.map((child) => new RenderNode());
      node.sequenceFrom(this._famousNodes);
    }

    if (render) {
      this.forceUpdate();
    }
  },

  render() {
    return (
      <div data-famous="Scrollview">
        {this.getFamousNode() ? this.props.children.map((child, key) => cloneWithProps(child, {key})) : null}
      </div>
    );
  }
});
