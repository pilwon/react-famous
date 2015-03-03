import isFunction from 'lodash/lang/isFunction';
import PureRenderMixin from 'react/lib/ReactComponentWithPureRenderMixin';

import FamousNodeMixin from './FamousNodeMixin';

export default {
  mixins: [FamousNodeMixin, PureRenderMixin],

  componentWillMount() {
    this.setFamousReady(false);
  },

  componentDidMount() {
    if (isFunction(this.famousCreate)) {
      this.famousCreate(this.props);
    }
    this.setFamousReady(true);
    this.forceUpdate();
  },

  componentWillReceiveProps(nextProps) {
    if (isFunction(this.famousUpdate)) {
      this.famousUpdate(nextProps);
    }
  },

  componentWillUnmount() {
    if (isFunction(this.famousDelete)) {
      this.famousDelete();
    }
    this.releaseFamous();
  }
};
