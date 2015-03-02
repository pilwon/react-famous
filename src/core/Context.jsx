import Engine from 'famous/core/Engine';
import React from 'react';

import FamousMixin from '../lib/FamousMixin';

Engine.setOptions({
  appMode: false
});

export default React.createClass({
  mixins: [FamousMixin],

  propTypes: {
    perspective: React.PropTypes.number
  },

  componentDidMount() {
    this._updateFamousNode(this.props);
  },

  componentWillReceiveProps(nextProps) {
    this._updateFamousNode(nextProps);
  },

  componentWillUnmount() {
    Engine.deregisterContext(this.getFamousNode());
    this.deleteFamousNode();
  },

  _updateFamousNode(props) {
    let node = this.getFamousNode();
    let render = true;

    if (!node) {
      let container = React.findDOMNode(this.refs.container);
      node = Engine.createContext(container);
      this.setFamousNode(node);
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
