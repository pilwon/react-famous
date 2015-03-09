import FamousRenderNode from 'famous/core/RenderNode';
import FamousFlipper from 'famous/views/Flipper';
import defaults from 'lodash/object/defaults';
import React from 'react';

import FamousComponent from '../lib/FamousComponent';

class Flipper extends FamousComponent {
  famousCreate() {
    return new FamousFlipper(this.props.options);
  }

  famousCreateNode(parentNode) {
    let flipper = this.getFamous();
    let backRenderNode = new FamousRenderNode();
    let frontRenderNode = new FamousRenderNode();
    let node = parentNode.add(flipper);
    let next = [
      [this.refs.back, backRenderNode],
      [this.refs.front, frontRenderNode]
    ];
    flipper.setBack(backRenderNode);
    flipper.setFront(frontRenderNode);
    return [node, next];
  }

  famousUpdate(nextProps) {
    let flipper = this.getFamous();

    flipper.setOptions(nextProps.options);
  }

  render() {
    let children = [];

    React.Children.forEach(this.props.children, (child) => {
      switch (child.type) {
        case Flipper.Back:
          children.push(this.createFamousWrapper(child, {key: 'back', ref: 'back'}));
          break;
        case Flipper.Front:
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

Flipper.Back = class extends FamousComponent {
  famousCreate() {
    return new FamousRenderNode();
  }

  famousCreateNode(parentNode) {
    let renderNode = this.getFamous();
    let node = parentNode.add(renderNode);
    let next = this.getFamousChildrenRef().map((child, idx) => [child, node]);
    return [node, next];
  }

  render() {
    return (
      <div data-famous="Flipper.Back">
        {this.getFamousChildren()}
      </div>
    );
  }
};

Flipper.Front = class extends FamousComponent {
  famousCreate() {
    return new FamousRenderNode();
  }

  famousCreateNode(parentNode) {
    let renderNode = this.getFamous();
    let node = parentNode.add(renderNode);
    let next = this.getFamousChildrenRef().map((child, idx) => [child, node]);
    return [node, next];
  }

  render() {
    return (
      <div data-famous="Flipper.Front">
        {this.getFamousChildren()}
      </div>
    );
  }
}

defaults(Flipper, FamousFlipper);

export default Flipper;
