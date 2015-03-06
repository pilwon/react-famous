import isEqual from 'lodash/lang/isEqual';
import isFunction from 'lodash/lang/isFunction';
import isObject from 'lodash/lang/isObject';
import React from 'react';
import shallowEqual from 'react/lib/shallowEqual';

import FamousNodeMixin from './FamousNodeMixin';

export default {
  mixins: [FamousNodeMixin],

  propTypes: {
    onReady: React.PropTypes.func,
    options: React.PropTypes.object
  },

  getDefaultProps() {
    return {
      options: {}
    };
  },

  componentWillMount() {
    this.setFamousReady(false);
  },

  _famousNotifyReady() {
    this.setFamousReady(true);
    this.forceUpdate(() => {
      if (this.props.onReady) {
        this.props.onReady(this.props.eventKey);
      }
    });
  },

  componentDidMount() {
    if (isFunction(this.famousCreate)) {
      let parentNode = this.getFamousParentNode();
      let result = this.famousCreate(parentNode);
      if (isObject(result) && isFunction(result.then)) {
        result.then(() => {
          this._famousNotifyReady();
        });
      } else {
        this._famousNotifyReady();
      }
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
