import isUndefined from 'lodash/lang/isUndefined';
import React from 'react';
import PureRenderMixin from 'react/lib/ReactComponentWithPureRenderMixin';

import FamousMixin from '../lib/FamousMixin';
import Engine from './Engine';

export default React.createClass({
  mixins: [FamousMixin],

  propTypes: {
    perspective: React.PropTypes.number
  },

  famousWillUnmount() {
    Engine.deregisterContext(this.getFamousNode());
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
