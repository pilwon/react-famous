import FamousNodeMixin from './FamousNodeMixin';

export default {
  mixins: [FamousNodeMixin],

  componentDidMount() {
    this.updateFamous(this.props);
  },

  componentWillReceiveProps(nextProps) {
    this.updateFamous(nextProps);
  },

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  },

  componentWillUnmount() {
    this.releaseFamous();
    this.releaseFamousNode();
  },

  render() {
    if (this.getFamousNode()) {
      return this.renderFamous();
    } else {
      return null;
    }
  }
};
