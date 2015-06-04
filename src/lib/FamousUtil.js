import FamousEngine from 'famous/core/FamousEngine';
import isArray from 'lodash/lang/isArray';
import isEqual from 'lodash/lang/isEqual';
import isFunction from 'lodash/lang/isFunction';
import isString from 'lodash/lang/isString';
import isUndefined from 'lodash/lang/isUndefined';
import values from 'lodash/object/values';
import React from 'react';
import ReactInstanceMap from 'react/lib/ReactInstanceMap';

const clock = FamousEngine.getClock();

function _buildTraversePath(fromAncestor, toDescendant) {
  if (fromAncestor === toDescendant) {
    return [fromAncestor];
  }
  let component = getInstance(fromAncestor);
  if (component._renderedComponent) {
    let traversePath;
    if (isFunction(component._renderedComponent.getPublicInstance)) {
      traversePath = _buildTraversePath(component._renderedComponent.getPublicInstance(), toDescendant);
    } else {
      traversePath = _buildTraversePath(component._renderedComponent, toDescendant);
    }
    if (traversePath.length) {
      return [fromAncestor].concat(traversePath);
    }
  } else if (component._renderedChildren) {
    let children = values(component._renderedChildren);
    for (let i = 0; i < children.length; ++i) {
      let child = children[i];
      let traversePath = _buildTraversePath(child.getPublicInstance(), toDescendant);
      if (traversePath.length) {
        return [fromAncestor].concat(traversePath);
      }
    }
  }
  return [];
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
  }
  return _findNearestFamousAncestor(owner, traversePath.slice(1));
}

export function clearTimer() {
  return clock.clearTimer.apply(clock, arguments);
}

export function getClock() {
  return clock;
}

export function getContextTypes() {
  return {
    routeDepth: React.PropTypes.number,
    router: React.PropTypes.func
  };
}

export function getDOMNodeFromNode(node) {
  return new Promise((resolve) => {
    (function query() {
      let nodeId = node.getLocation();
      let elements = document
        .querySelector(nodeId.split('/')[0])
        .querySelectorAll('[data-fa-path]');
      for (let i = 0; i < elements.length; ++i) {
        if (elements[i].getAttribute('data-fa-path') === nodeId) {
          return resolve(elements[i]);
        }
      }
      clock.setTimeout(query, 16);
    })();
  });
}

export function getEngine() {
  return FamousEngine;
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
  return isFunction(component.getFamous);
}

export function onSizeChange(node, cb) {
  if (!(node instanceof Node)) {
    throw new Error('node must be an instance of Node.');
  }

  let component = {
    onSizeChange(size) {
      node.removeComponent(component);
      cb(size);
    }
  };

  node.addComponent(component);
}

export function propsToTargetWithMapper(mapper, target, from, to) {
  let mapped;
  let toValue;

  for (let key in mapper) {
    toValue = to[key];
    if (!isUndefined(toValue) && !isEqual(from[key], toValue)) {
      mapped = mapper[key];
      if (isString(mapped)) {
        target[mapped].apply(target, isArray(toValue) ? toValue : [toValue]);
      } else if (isFunction(mapped)) {
        mapped(target, toValue);
      } else {
        throw new Error('Mapper can only map to string or function.');
      }
    }
  }
}

export function setInterval() {
  return clock.setInterval.apply(clock, arguments);
}

export function setTimeout() {
  return clock.setTimeout.apply(clock, arguments);
}

export default {
  clearTimer,
  getClock,
  getContextTypes,
  getDOMNodeFromNode,
  getEngine,
  getFamousParent,
  getInstance,
  getOwner,
  isFamous,
  onSizeChange,
  propsToTargetWithMapper,
  setInterval,
  setTimeout,
};
