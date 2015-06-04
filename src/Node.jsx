import isEqual from 'lodash/lang/isEqual';

import FamousUtil from './lib/FamousUtil';

class Node extends React.Component {
  componentWillMount() {
    this._famousParent = this.props._famousParent || FamousUtil.getFamousParent(this);
    if (!this._famousParent) {
      throw new Error('Missing famous scene.');
    }
    this._famousParentNode = this._famousParent.getFamous();
    this._famousNode = this._famousParentNode.addChild();
  }

  componentDidMount() {
    this.famousUpdate({}, this.props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.context.router || !isEqual(this.props, nextProps) || !isEqual(this.state, nextState);
  }

  componentWillUpdate(nextProps, nextState) {
    this.famousUpdate(this.props, nextProps);
  }

  componentWillUnmount() {
    this.famousDelete();
  }

  getFamous() {
    return this._famousNode;
  }

  famousUpdate(from, to) {
    FamousUtil.propsToTargetWithMapper(
      Node.famousPropsMapper,
      this._famousNode,
      from,
      to
    );
  }

  famousDelete() {
    this._famousNode.dismount();
    this._famousNode = null;
  }

  render() {
    return (
      <div style={this.props.style}>
        {
          React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, {_famousParent: this});
          })
        }
      </div>
    );
  }
}

Node.contextTypes = FamousUtil.getContextTypes();

Node.propTypes = {
  align: React.PropTypes.array,
  mountPoint: React.PropTypes.array,
  origin: React.PropTypes.array,
  position: React.PropTypes.array,
  rotation: React.PropTypes.array,
  scale: React.PropTypes.array,
  opacity: React.PropTypes.number,
  sizeMode: React.PropTypes.array,
  proportionalSize: React.PropTypes.array,
  differentialSize: React.PropTypes.array,
  absoluteSize: React.PropTypes.array
};

Node.famousPropsMapper = {
  align: 'setAlign',
  mountPoint: 'setMountPoint',
  origin: 'setOrigin',
  position: 'setPosition',
  rotation: 'setRotation',
  scale: 'setScale',
  opacity: 'setOpacity',
  sizeMode: 'setSizeMode',
  proportionalSize: 'setProportionalSize',
  differentialSize: 'setDifferentialSize',
  absoluteSize: 'setAbsoluteSize'
};

export default Node;
