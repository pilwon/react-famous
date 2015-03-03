import RenderNode from 'famous/core/RenderNode';
import Flipper from 'famous/views/Flipper';
import React from 'react';

import FamousMixin from '../lib/FamousMixin';

let Component = React.createClass({
  mixins: [FamousMixin],

  famousCreate() {
    let flipper = new Flipper(this.props.options);
    this.setFamous(flipper);
    this.setFamousNode(this.getFamousParentNode().add(flipper));

    let backNode = new RenderNode();
    let frontNode = new RenderNode();
    flipper.setBack(backNode);
    flipper.setFront(frontNode);

    this.setFamousKeyedNodes({
      back: backNode,
      front: frontNode
    });
  },

  famousUpdate(nextProps) {
    let flipper = this.getFamous();

    flipper.setOptions(nextProps.options);
  },

  render() {
    if (!this.getFamousReady()) { return null; }

    let children = this.props.children.map((child) => {
      switch (child.type) {
        case Component.Back:
          return React.cloneElement(child, {key: 'back'});
        case Component.Front:
          return React.cloneElement(child, {key: 'front'});
        default:
          return null;
      }
    });

    return (
      <div data-famous="Flipper">
        {children}
      </div>
    );
  }
});

Component.Back = React.createClass({
  mixins: [FamousMixin],

  famousCreate() {
    let renderNode = new RenderNode();
    this.setFamous(renderNode);
    this.setFamousNode(this.getFamousParentNode().add(renderNode));
  },

  render() {
    if (!this.getFamousReady()) { return null; }

    return (
      <div data-famous="Flipper.Back">
        {this.props.children}
      </div>
    );
  }
});

Component.Front = React.createClass({
  mixins: [FamousMixin],

  famousCreate() {
    let renderNode = new RenderNode();
    this.setFamous(renderNode);
    this.setFamousNode(this.getFamousParentNode().add(renderNode));
  },

  render() {
    if (!this.getFamousReady()) { return null; }

    return (
      <div data-famous="Flipper.Front">
        {this.props.children}
      </div>
    );
  }
});

export default Component;
