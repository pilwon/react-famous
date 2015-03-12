import isEqual from 'lodash/lang/isEqual';
import isFunction from 'lodash/lang/isFunction';
import values from 'lodash/object/values';
import React from 'react';
import shallowEqual from 'react/lib/shallowEqual';

import FamousNodeMixin from './FamousNodeMixin';
import FamousScheduler from './FamousScheduler';
import FamousUtil from './FamousUtil';

export default {
  mixins: [FamousNodeMixin],

  propTypes: {
    options: React.PropTypes.object
  },

  getDefaultProps() {
    return {
      options: {}
    };
  },

  componentWillMount() {
    if (!this.famousContext) {
      if (isFunction(this.famousCreate)) {
        this.setFamous(this.famousCreate());
      }
      if (isFunction(this.famousUpdate)) {
        this.famousUpdate(this.props, this.state);
      }
    }
  },

  _createFamousNode(component, parentNode = null) {
    if (FamousUtil.isFamous(component)) {
      if (isFunction(component.famousCreateNode)) {
      let [node, next] = component.famousCreateNode(parentNode);
        component.setFamousNode(node);
        (next || []).forEach(([child, parentNode]) => {
          this._createFamousNode(child, parentNode);
        });
      }
    } else {
      let instance = FamousUtil.getInstance(component);
      FamousUtil.getFamousChildren(instance).forEach((child) => {
        this._createFamousNode(child, parentNode);
      });
    }
  },

  componentDidMount() {
    if (this.famousContext) {
      if (isFunction(this.famousCreate)) {
        this.setFamous(this.famousCreate());
      }
      if (isFunction(this.famousUpdate)) {
        this.famousUpdate(this.props, this.state);
      }
      this._createFamousNode(this);
      setTimeout(FamousScheduler.run);
    }
  },

  shouldComponentUpdate(nextProps, nextState) {
    return !shallowEqual(this.props, nextProps) ||
           !shallowEqual(this.state, nextState) ||
           !isEqual(this.props.options, nextProps.options);
  },

  componentWillUpdate(nextProps, nextState) {
    if (isFunction(this.famousUpdate)) {
      this.famousUpdate(nextProps, nextState);
    }
  },

  componentWillUnmount() {
    if (isFunction(this.famousDelete)) {
      this.famousDelete();
    }
    this.releaseFamous();
  }
};
