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
    this._updateFamous(this.props);
  },

  componentWillReceiveProps(nextProps) {
    this._updateFamous(nextProps);
  },

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  },

  componentWillUnmount() {
    Engine.deregisterContext(this.getFamousNode());

    this.releaseFamous();
    this.releaseFamousNode();
  },

  _updateFamous(props) {
    let context = this.getFamousNode();
    let render = true;

    if (!context) {
      context = Engine.createContext(React.findDOMNode(this.refs.container));

      this.setFamous(context);
      this.setFamousNode(context);
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
