import FamousEngine from 'famous/core/FamousEngine';
import isEqual from 'lodash/lang/isEqual';
import merge from 'lodash/object/merge';
import uniqueId from 'lodash/utility/uniqueId';

import FamousUtil from './lib/FamousUtil';

let _famousEngineInit = false;

const SCENE_DIV_STYLE = {
  overflow: 'hidden',
  perspective: 'none',
  position: 'absolute',
  transformStyle: 'preserve-3d',
  WebkitFontSmoothing: 'antialiased',
  WebkitPerspective: 0,
  WebkitTapHighlightColor: 'transparent',
  WebkitTransformStyle: 'preserve-3d',
};

class Scene extends React.Component {
  constructor(props) {
    super(props);

    this._sceneId = uniqueId();
  }

  componentWillMount() {
    if (!_famousEngineInit) {
      FamousEngine.init();
      _famousEngineInit = true;
    }

    let reactId = this._reactInternalInstance._rootNodeID;
    let selector = `[data-reactid="${reactId}"][data-scene-id="${this._sceneId}"]`;

    this._famousScene = FamousEngine.createScene(selector);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.context.router || !isEqual(this.props, nextProps) || !isEqual(this.state, nextState);
  }

  componentWillUnmount() {
    this._famousScene.dismount();
  }

  getFamous() {
    return this._famousScene;
  }

  render() {
    let style = merge(SCENE_DIV_STYLE, this.props.style);

    return (
      <div data-scene-id={this._sceneId} style={style}>
        {
          React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, {_famousParent: this});
          })
        }
      </div>
    );
  }
}

Scene.contextTypes = FamousUtil.getContextTypes();

Scene.propTypes = {};

export default Scene;
