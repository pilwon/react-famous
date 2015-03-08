import Context from 'famous/core/Context';
import isUndefined from 'lodash/lang/isUndefined';
import defaults from 'lodash/object/defaults';
import React from 'react';

import FamousComponent from '../lib/FamousComponent';
import Engine from './Engine';

class Component extends FamousComponent {
  constructor(...args) {
    super(...args);

    this.famousContext = true;
  }

  famousCreate() {
    return Engine.createContext(React.findDOMNode(this.refs.container));
  }

  famousCreateNode() {
    let context = this.getFamous();
    return this.getFamousChildrenRef().map((child) => [child, context]);
  }

  famousDelete() {
    Engine.deregisterContext(this.getFamousNode());
  }

  famousUpdate(nextProps) {
    let context = this.getFamous();

    if (!isUndefined(nextProps.perspective)) {
      context.setPerspective(nextProps.perspective);
    }
  }

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
}

defaults(Component, Context);

Component.propTypes = {
  perspective: React.PropTypes.number
};

export default Component;
