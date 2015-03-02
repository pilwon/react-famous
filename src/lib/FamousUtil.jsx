import RenderNode from 'famous/core/RenderNode';
import isFunction from 'lodash/lang/isFunction';
import omit from 'lodash/object/omit';
import values from 'lodash/object/values';
import React from 'react';
import ReactInstanceMap from 'react/lib/ReactInstanceMap';

import FamousNodeMixin from './FamousNodeMixin';
import FamousRenderMixin from './FamousRenderMixin';

function _buildTraversePath(fromAncestor, toDescendant) {
  // console.log([
  //   ReactInstanceMap.has(fromAncestor) ? ReactInstanceMap.get(fromAncestor)._rootNodeID : fromAncestor._rootNodeID,
  //   ReactInstanceMap.has(toDescendant) ? ReactInstanceMap.get(toDescendant)._rootNodeID : toDescendant._rootNodeID
  // ]);
  // console.log(fromAncestor);
  if (fromAncestor === toDescendant) {
    return [fromAncestor];
  }
  let instance;
  if (ReactInstanceMap.has(fromAncestor)) {
    instance = ReactInstanceMap.get(fromAncestor);
  } else {
    instance = fromAncestor;
  }
  if (instance._renderedComponent) {
    let traversePath;
    if (isFunction(instance._renderedComponent.getPublicInstance)) {
      traversePath = _buildTraversePath(instance._renderedComponent.getPublicInstance(), toDescendant);
    } else {
      traversePath = _buildTraversePath(instance._renderedComponent, toDescendant);
    }
    if (traversePath) {
      return [fromAncestor].concat(traversePath);
    }
  } else if (instance._renderedChildren) {
    for (let child of values(instance._renderedChildren)) {
      // console.log(child._rootNodeID);
      let traversePath = _buildTraversePath(child.getPublicInstance(), toDescendant);
      if (traversePath) {
        return [fromAncestor].concat(traversePath);
      }
    }
  }
  return null;
}

function _findNearestFamousAncestor(instance, searchedSubpath = []) {
  let owner = getOwner(instance);
  if (!owner || owner === instance) {
    return null;
  }
  let traversePath = _buildTraversePath(owner, instance).concat(searchedSubpath);
  // console.log(traversePath);
  // console.log('N==>', traversePath.map((node) => {
  //   if (ReactInstanceMap.has(node)) {
  //     return ReactInstanceMap.get(node)._rootNodeID;
  //   } else {
  //     return node._rootNodeID;
  //   }
  // }));
  let famousTraversePath = traversePath.slice(0, -1).filter((instance) => {
    return isFunction(instance.getFamousNode);
  });
  if (famousTraversePath.length) {
    // console.log('F==>', famousTraversePath.map((node) => ReactInstanceMap.get(node)._rootNodeID));
    let result = famousTraversePath.slice(-1)[0];
    let key = null;
    if (isFunction(result.getFamousNodeByKey)) {
      for (let i = 0; i < traversePath.length; ++i) {
        if (traversePath[i] === result) {
          // console.log(traversePath);
          // console.log(i, traversePath.slice(i + 1));
          for (let descendant of traversePath.slice(i + 1)) {
            if (ReactInstanceMap.has(descendant)) {
              descendant = ReactInstanceMap.get(descendant);
            }
            if (descendant._currentElement.key) {
              key = descendant._currentElement.key;
              break;
            }
          }
          break;
        }
      }
    }
    return [result, key];
  } else {
    // console.log('again');
    let searchedSubpath = traversePath.slice(1);
    return _findNearestFamousAncestor(owner, searchedSubpath);
  }
}

export function createPassDownComponent(name) {
  return React.createClass({
    mixins: [FamousNodeMixin, FamousRenderMixin],

    componentDidMount() {
      this._updateFamous(this.props);
    },

    componentWillReceiveProps(nextProps) {
      this._updateFamous(nextProps);
    },

    shouldComponentUpdate(nextProps, nextState) {
      return false;
    },

    componentWillUnmount() {
      this.releaseFamousNode();
    },

    _updateFamous(props) {
      let node = this.getFamousNode();
      let render = true;

      if (!node) {
        node = new RenderNode();
        this.setFamousNode(
          getFamousParentNode(this).add(node)
        );
      }

      if (render) {
        this.forceUpdate();
      }
    },

    renderFamous() {
      return (
        <div data-famous={name}>
          {this.props.children}
        </div>
      );
    }
  });
}

export function getOwner(instance) {
  let pointer = ReactInstanceMap.get(instance);
  let owner = null;
  do {
    pointer = pointer._currentElement._owner;
    if (!pointer) { break; }
    owner = pointer._renderedComponent.getPublicInstance();
  } while (owner === instance);
  return owner;
}

export function getFamousParentNode(instance) {
  let result = _findNearestFamousAncestor(instance);

  if (!result) {
    throw new Error('Missing Famous context.');
  }

  let [famousParent, key] = result;
  // console.log(famousParent);
  // console.log(ReactInstanceMap.get(famousParent)._rootNodeID);
  if (famousParent) {
    if (isFunction(famousParent.getFamousNodeByKey)) {
      return famousParent.getFamousNodeByKey(key);
    }
    return famousParent.getFamousNode();
  } else {
    return null;
  }
}

export function parseOptions(props) {
  return omit(props, 'children');
}

export function renderContent(obj) {
  if (Array.isArray(obj)) {
    return obj.map((obj) => {
      return renderContent(obj);
    }).join('\n');
  } else if (React.isValidElement(obj)) {
    return React.renderToString(obj);
  } else {
    return obj;
  }
}

export default {
  createPassDownComponent,
  getOwner,
  getFamousParentNode,
  parseOptions,
  renderContent
};
