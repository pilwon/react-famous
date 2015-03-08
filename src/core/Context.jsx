import isUndefined from 'lodash/lang/isUndefined';
import React from 'react';

import FamousMixin from '../lib/FamousMixin';
import Engine from './Engine';

export default React.createClass({
  mixins: [FamousMixin],

  propTypes: {
    perspective: React.PropTypes.number
  },

  famousContext: true,

  famousCreate() {
    return Engine.createContext(React.findDOMNode(this.refs.container));
  },

  famousCreateNode() {
    let context = this.getFamous();
    return this.getFamousChildrenRef().map((child) => [child, context]);
  },

  famousDelete() {
    Engine.deregisterContext(this.getFamousNode());
  },

  famousUpdate(nextProps) {
    let context = this.getFamous();

    if (!isUndefined(nextProps.perspective)) {
      context.setPerspective(nextProps.perspective);
    }
  },

  render() {
    return (
      <div className="famous">
        <div data-famous="Context" style={{display: 'none'}}>
          {this.getFamousChildren()}
        </div>
        <div className="famous-container" ref="container"/>
      </div>
    );
  }
});
