import RenderNode from 'famous/core/RenderNode';
import Scrollview from 'famous/views/Scrollview';
import React from 'react';
import cloneWithProps from 'react/lib/cloneWithProps';

import FamousNodeMixin from '../lib/FamousNodeMixin';
import FamousRenderMixin from '../lib/FamousRenderMixin';
import FamousUtil from '../lib/FamousUtil';

export default React.createClass({
  mixins: [FamousNodeMixin, FamousRenderMixin],

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

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  },

  componentWillUnmount() {
    this.releaseFamous();
    this.releaseFamousNode();
  },

  getFamousNodeByKey(key) {
    return this._famousNodes[key];
  },

  _updateFamous(props) {
    let scrollview = this.getFamous();
    let options = FamousUtil.parseOptions(props);
    let render = true;

    if (!scrollview) {
      scrollview = new Scrollview(options);

      this.setFamous(scrollview);
      this.setFamousNode(FamousUtil.getFamousParentNode(this).add(scrollview));

      this._famousNodes = props.children.map((child) => new RenderNode());
      scrollview.sequenceFrom(this._famousNodes);
    }

    if (render) {
      this.forceUpdate();
    }
  },

  renderFamous() {
    return (
      <div data-famous="Scrollview">
        {this.props.children.map((child, key) => cloneWithProps(child, {key}))}
      </div>
    );
  }
});
