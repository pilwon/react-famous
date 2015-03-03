import RenderNode from 'famous/core/RenderNode';
import isFunction from 'lodash/lang/isFunction';
import omit from 'lodash/object/omit';
import values from 'lodash/object/values';
import React from 'react';
import ReactInstanceMap from 'react/lib/ReactInstanceMap';

import FamousMixin from './FamousMixin';

function _buildTraversePath(fromAncestor, toDescendant) {
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
  let famousTraversePath = traversePath.slice(0, -1).filter((instance) => {
    return isFunction(instance.getFamousNode);
  });
  if (famousTraversePath.length) {
    let result = famousTraversePath.slice(-1)[0];
    let key = null;
    if (isFunction(result.getFamousNodeByKey)) {
      for (let i = 0; i < traversePath.length; ++i) {
        if (traversePath[i] === result) {
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
    let searchedSubpath = traversePath.slice(1);
    return _findNearestFamousAncestor(owner, searchedSubpath);
  }
}

export function createPassDownComponent(name) {
  return React.createClass({
    mixins: [FamousMixin],

    renderFamous() {
      return (
        <div data-famous={name}>
          {this.props.children}
        </div>
      );
    },

    updateFamous(props) {
      let renderNode = this.getFamous();
      let render = true;

      if (!renderNode) {
        renderNode = new RenderNode();
        this.setFamous(renderNode);
        this.setFamousNode(getFamousParentNode(this).add(renderNode));
      }

      if (render) {
        this.forceUpdate();
      }
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
