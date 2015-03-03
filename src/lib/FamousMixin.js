import isFunction from 'lodash/lang/isFunction';
import PureRenderMixin from 'react/lib/ReactComponentWithPureRenderMixin';

import FamousNodeMixin from './FamousNodeMixin';

export default {
  mixins: [FamousNodeMixin, PureRenderMixin],

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
    if (isFunction(this.famousWillUnmount)) {
      this.famousWillUnmount();
    }
    this.releaseFamous();
  }
};
