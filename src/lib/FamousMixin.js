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
  },

  componentWillReceiveProps(nextProps) {
    this.updateFamous(nextProps);
  },

  componentWillUnmount() {
    this.releaseFamous();
    this.releaseFamousNode();
  },

  render() {
    if (this.getFamousReady()) {
      return this.renderFamous();
    } else {
      return null;
    }
  }
};
