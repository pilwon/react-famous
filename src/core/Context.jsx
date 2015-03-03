import isUndefined from 'lodash/lang/isUndefined';
import React from 'react';

import FamousNodeMixin from '../lib/FamousNodeMixin';
import Engine from './Engine';

Engine.setOptions({
  appMode: false
});

export default React.createClass({
  mixins: [FamousNodeMixin],

  propTypes: {
    perspective: React.PropTypes.number
  },

  componentDidMount() {
    this.updateFamous(this.props);
  },

  componentWillReceiveProps(nextProps) {
    this.updateFamous(nextProps);
  },

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  },

  componentWillUnmount() {
    Engine.deregisterContext(this.getFamousNode());

    this.releaseFamous();
    this.releaseFamousNode();
  },

  updateFamous(props) {
    let context = this.getFamous();
    let render = true;

    if (!context) {
      context = Engine.createContext(React.findDOMNode(this.refs.container));
      this.setFamous(context);
      this.setFamousNode(context);
    }

    if (!isUndefined(props.perspective)) {
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
