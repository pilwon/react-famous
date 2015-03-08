import RenderNode from 'famous/core/RenderNode';
import Flipper from 'famous/views/Flipper';
import defaults from 'lodash/object/defaults';
import React from 'react';

import FamousComponent from '../lib/FamousComponent';

class Component extends FamousComponent {
  famousCreate() {
    return new Flipper(this.props.options);
  }

  famousCreateNode(parentNode) {
    let flipper = this.getFamous();
    let backRenderNode = new RenderNode();
    let frontRenderNode = new RenderNode();
    parentNode.add(flipper);
    flipper.setBack(backRenderNode);
    flipper.setFront(frontRenderNode);
    return [
      [this.refs.back, backRenderNode],
      [this.refs.front, frontRenderNode]
    ];
  }

  famousUpdate(nextProps) {
    let flipper = this.getFamous();

    flipper.setOptions(nextProps.options);
  }

  render() {
    let children = [];

    React.Children.forEach(this.props.children, (child) => {
      switch (child.type) {
        case Component.Back:
          children.push(this.createFamousWrapper(child, {key: 'back', ref: 'back'}));
          break;
        case Component.Front:
          children.push(this.createFamousWrapper(child, {key: 'front', ref: 'front'}));
          break;
        default:
          break;
      }
    });

    return (
      <div data-famous="Flipper">
        {children}
      </div>
    );
  }
}

Component.Back = class extends FamousComponent {
  famousCreate() {
    return new RenderNode();
  }

  famousCreateNode(parentNode) {
    let renderNode = this.getFamous();
    let node = parentNode.add(renderNode);
    return this.getFamousChildrenRef().map((child, idx) => [child, node]);
  }

  render() {
    return (
      <div data-famous="Flipper.Back">
        {this.getFamousChildren()}
      </div>
    );
  }
};

Component.Front = class extends FamousComponent {
  famousCreate() {
    return new RenderNode();
  }

  famousCreateNode(parentNode) {
    let renderNode = this.getFamous();
    let node = parentNode.add(renderNode);
    return this.getFamousChildrenRef().map((child, idx) => [child, node]);
  }

  render() {
    return (
      <div data-famous="Flipper.Front">
        {this.getFamousChildren()}
      </div>
    );
  }
}

defaults(Component, Flipper);

export default Component;
