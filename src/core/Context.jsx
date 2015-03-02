import Engine from './Engine';
import React from 'react';

import FamousNodeMixin from '../lib/FamousNodeMixin';

Engine.setOptions({
  appMode: false
});

export default React.createClass({
  mixins: [FamousNodeMixin],

  propTypes: {
    perspective: React.PropTypes.number
  },

  componentDidMount() {
    this._updateFamousNode(this.props);
  },

  componentWillReceiveProps(nextProps) {
    this._updateFamousNode(nextProps);
  },

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  },

  componentWillUnmount() {
    Engine.deregisterContext(this.getFamousNode());
    this.releaseFamousNode();
  },

  _updateFamousNode(props) {
    let node = this.getFamousNode();
    let render = true;

    if (!node) {
      let container = React.findDOMNode(this.refs.container);
      node = Engine.createContext(container);
      this.setFamousNode(node, node);
    }

    if (typeof props.perspective != 'undefined') {
      this._famousContext.setPerspective(props.perspective);
    }

    if (render) {
      this.forceUpdate();
    }
  },

  render() {
    return (
      <div className="famous">
        <div data-famous="Context" style={{display: 'none'}}>
          {this.getFamousNode() ? this.props.children : null}
        </div>
        <div className="famous-container" ref="container"/>
      </div>
    );
  }
});
