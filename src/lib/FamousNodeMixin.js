import merge from 'lodash/object/merge';
import React from 'react';

const FAMOUS_KEY = '__famous__';
const FAMOUS_NODE_KEY = '__famous_node__';

export default {
  createFamousWrapper(child, props) {
    return React.createElement('div', merge({
      'data-famous': 'Wrapper'
    }, props), child);
  },

  getFamous() {
    return this[FAMOUS_KEY];
  },

  getFamousNode() {
    return this[FAMOUS_NODE_KEY];
  },

  getFamousChildren() {
    let result = [];
    let children = React.Children.forEach(this.props.children, (child, idx) => {
      result.push(this.createFamousWrapper(child, {key: idx, ref: idx}));
    });
    return result;
  },

  getFamousChildrenRef() {
    return this.getFamousChildren().map((child, idx) => {
      return this.refs[idx];
    });
  },

  releaseFamous() {
    delete this[FAMOUS_KEY];
    delete this[FAMOUS_NODE_KEY];
  },

  setFamous(famousInstance) {
    this[FAMOUS_KEY] = famousInstance;
  },

  setFamousNode(famousNode) {
    this[FAMOUS_NODE_KEY] = famousNode;
  }
};
