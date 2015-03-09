import FamousRenderNode from 'famous/core/RenderNode';
import FamousDrawerLayout from 'famous/views/DrawerLayout';
import defaults from 'lodash/object/defaults';
import React from 'react';

import FamousComponent from '../lib/FamousComponent';

class DrawerLayout extends FamousComponent {
  famousCreate() {
    return new FamousDrawerLayout(this.props.options);
  }

  famousCreateNode(parentNode) {
    let drawerLayout = this.getFamous();
    let node = parentNode.add(drawerLayout);
    let next = [
      [this.refs.content, drawerLayout.content],
      [this.refs.drawer, drawerLayout.drawer]
    ];
    return [node, next];
  }

  famousUpdate(nextProps) {
    let drawerLayout = this.getFamous();

    drawerLayout.setOptions(nextProps.options);
  }

  render() {
    let children = [];

    React.Children.forEach(this.props.children, (child) => {
      switch (child.type) {
        case DrawerLayout.Content:
          children.push(this.createFamousWrapper(child, {key: 'content', ref: 'content'}));
          break;
        case DrawerLayout.Drawer:
          children.push(this.createFamousWrapper(child, {key: 'drawer', ref: 'drawer'}));
          break;
        default:
          break;
      }
    });

    return (
      <div data-famous="DrawerLayout">
        {children}
      </div>
    );
  }
};

DrawerLayout.Content = class extends FamousComponent {
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
      <div data-famous="DrawerLayout.Content">
        {this.getFamousChildren()}
      </div>
    );
  }
};

DrawerLayout.Drawer = class extends FamousComponent {
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
      <div data-famous="DrawerLayout.Drawer">
        {this.getFamousChildren()}
      </div>
    );
  }
};

defaults(DrawerLayout, FamousDrawerLayout);

export default DrawerLayout;
