import isFunction from 'lodash/lang/isFunction';
import React from 'react';
import PureRenderMixin from 'react/lib/ReactComponentWithPureRenderMixin';

import FamousNodeMixin from './FamousNodeMixin';
import FamousUtil from './FamousUtil';

export default {
  mixins: [FamousNodeMixin, PureRenderMixin],

  propTypes: {
    _onReady: React.PropTypes.func
  },

  componentWillMount() {
    this.setFamousReady(false);
  },

  componentDidMount() {
    if (isFunction(this.famousCreate)) {
      this.famousCreate(FamousUtil.sanitizeProps(this.props));
    }
    this.setFamousReady(true);
    this.forceUpdate(() => {
      if (this.props._onReady) {
        this.props._onReady();
      }
    });
  },

  componentWillReceiveProps(nextProps) {
    if (isFunction(this.famousUpdate)) {
      this.famousUpdate(FamousUtil.sanitizeProps(nextProps));
    }
  },

  componentWillUnmount() {
    if (isFunction(this.famousDelete)) {
      this.famousDelete();
    }
    this.releaseFamous();
  }
};
