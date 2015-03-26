import isFunction from 'lodash/lang/isFunction';
import values from 'lodash/object/values';
import React from 'react';
import ReactInstanceMap from 'react/lib/ReactInstanceMap';

function _buildTraversePath(fromAncestor, toDescendant) {
  if (fromAncestor === toDescendant) {
    return [fromAncestor];
  }
  let component;
  fromAncestor = getInstance(fromAncestor);
  if (component._renderedComponent) {
    let traversePath;
    if (isFunction(component._renderedComponent.getPublicInstance)) {
      traversePath = _buildTraversePath(component._renderedComponent.getPublicInstance(), toDescendant);
    } else {
      traversePath = _buildTraversePath(component._renderedComponent, toDescendant);
    }
    if (traversePath) {
      return [fromAncestor].concat(traversePath);
    }
  } else if (component._renderedChildren) {
    let children = values(component._renderedChildren);
    for (let i = 0; i < children.length; ++i) {
      let child = children[i];
      let traversePath = _buildTraversePath(child.getPublicInstance(), toDescendant);
      if (traversePath) {
        return [fromAncestor].concat(traversePath);
      }
    }
  }
  return null;
}

function _findKeyFromNearestDescendant(traversePath, root) {
  for (let i = 0; i < traversePath.length; ++i) {
    if (traversePath[i] === root) {
      let descendants = traversePath.slice(i + 1);
      for (let j = 0; j < descendants.length; ++j) {
        let descendant = descendants[j];
        descendant = getInstance(descendant);
        if (descendant._currentElement.key) {
          return descendant._currentElement.key;
        }
      }
      break;
    }
  }
  return null;
}

function _findNearestFamousAncestor(component, searchedSubpath = []) {
  let owner = getOwner(component);
  if (!owner || owner === component) {
    return null;
  }
  let traversePath = _buildTraversePath(owner, component).concat(searchedSubpath);
  let famousTraversePath = traversePath.slice(0, -1).filter(isFamous);
  if (famousTraversePath.length) {
    return famousTraversePath.slice(-1)[0];
  } else {
    let searchedSubpath = traversePath.slice(1);
    return _findNearestFamousAncestor(owner, searchedSubpath);
  }
}

export function getFamousChildren(component) {
  if (component._renderedComponent &&
      isFunction(component._renderedComponent.getPublicInstance)) {
    return [component._renderedComponent.getPublicInstance()];
  }
  let instance = component;
  while (instance._renderedComponent && !instance._renderedChildren) {
    instance = instance._renderedComponent;
  }
  if (instance._renderedChildren) {
    return values(instance._renderedChildren).map((child) => {
      return child.getPublicInstance();
    });
  }
  return [];
}

export function getFamousParent(component) {
  return _findNearestFamousAncestor(component);
}

export function getInstance(component) {
  if (ReactInstanceMap.has(component)) {
    return ReactInstanceMap.get(component);
  }
  return component;
}

export function getOwner(component) {
  let pointer = getInstance(component);
  let owner = null;
  do {
    pointer = pointer._currentElement._owner;
    if (!pointer) { break; }
    owner = pointer._renderedComponent.getPublicInstance();
  } while (owner === component);
  return owner;
}

export function isFamous(component) {
  let FamousComponent = require('./FamousComponent');
  return component instanceof FamousComponent;
}

export function renderContent(obj) {
  if (Array.isArray(obj)) {
    return obj.map((obj) => {
      return renderContent(obj);
    }).join('');
  } else if (React.isValidElement(obj)) {
    return React.renderToString(obj);
  } else {
    return obj;
  }
}

export default {
  getFamousChildren,
  getFamousParent,
  getInstance,
  getOwner,
  isFamous,
  renderContent
};
