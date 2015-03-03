import isUndefined from 'lodash/lang/isUndefined';
import React from 'react';
import PureRenderMixin from 'react/lib/ReactComponentWithPureRenderMixin';

import FamousNodeMixin from '../lib/FamousNodeMixin';
import Engine from './Engine';

Engine.setOptions({
  appMode: false
});

export default React.createClass({
  mixins: [FamousNodeMixin, PureRenderMixin],

  propTypes: {
    perspective: React.PropTypes.number
  },

  componentWillMount() {
    this.setFamousReady(false);
  },

  componentDidMount() {
    this.updateFamous(this.props);
    this.setFamousReady(true);
    this.forceUpdate();
  },

  componentWillReceiveProps(nextProps) {
    this.updateFamous(nextProps);
  },

  componentWillUnmount() {
    Engine.deregisterContext(this.getFamousNode());

    this.releaseFamous();
  },

  updateFamous(props) {
    let context = this.getFamous();

    if (!context) {
      context = Engine.createContext(React.findDOMNode(this.refs.container));
      this.setFamous(context);
      this.setFamousNode(context);
    }

    if (!isUndefined(props.perspective)) {
      this._famousContext.setPerspective(props.perspective);
    }
  },

  render() {
    return (
      <div className="famous">
        <div data-famous="Context" style={{display: 'none'}}>
          {this.getFamousReady() ? this.props.children : null}
        </div>
        <div className="famous-container" ref="container"/>
      </div>
    );
  }
});
