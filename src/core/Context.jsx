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

  famousCreate() {
    let context = Engine.createContext(React.findDOMNode(this.refs.container));
    this.setFamous(context);
    this.setFamousNode(context);
  },

  famousDelete() {
    Engine.deregisterContext(this.getFamousNode());
  },

  famousUpdate({props}) {
    let context = this.getFamous();

    if (!isUndefined(props.perspective)) {
      this._famousContext.setPerspective(props.perspective);
    }
  },

  render() {
    let context = (
      <div data-famous="Context" style={{display: 'none'}}>
        {this.props.children}
      </div>
    );

    return (
      <div className="famous">
        {this.getFamousReady() ? context : null}
        <div className="famous-container" ref="container"/>
      </div>
    );
  }
});
