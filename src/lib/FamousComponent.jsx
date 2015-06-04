import isEqual from 'lodash/lang/isEqual';

import FamousUtil from '../lib/FamousUtil';
import Scene from '../Scene';

class FamousComponent extends React.Component {
  componentWillMount() {
    this._famousParent = this.props._famousParent || FamousUtil.getFamousParent(this);
    if (!this._famousParent) {
      throw new Error('Missing famous Scene.');
    } else if (!this.constructor._famousSkipParentNodeCheck && this._famousParent instanceof Scene) {
      throw new Error('Missing famous parent Node.');
    }
    this._famousParentNode = this._famousParent.getFamous();
    this._famousNode = this._famousParentNode;
    this._famousComponent = this.famousCreate(this._famousNode);
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
    return this._famousComponent;
  }

  famousCreate(node) {
    throw new Error('famousCreate() must be overriden.');
  }

  famousUpdate(from, to) {
    FamousUtil.propsToTargetWithMapper(
      this.constructor.famousPropsMapper || {},
      this._famousComponent,
      from,
      to
    );
  }

  famousDelete() {
    this._famousNode.removeComponent(this._famousComponent);
  }

  render() {
    return null;
  }
}

FamousComponent.contextTypes = FamousUtil.getContextTypes();

export default FamousComponent;
