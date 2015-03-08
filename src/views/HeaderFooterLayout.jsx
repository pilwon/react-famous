import RenderNode from 'famous/core/RenderNode';
import HeaderFooterLayout from 'famous/views/HeaderFooterLayout';
import React from 'react';

import FamousComponent from '../lib/FamousComponent';

class Component extends FamousComponent {
  famousCreate() {
    return new HeaderFooterLayout(this.props.options);
  }

  famousCreateNode(parentNode) {
    let headerFooterlayout = this.getFamous();
    parentNode.add(headerFooterlayout);
    return [
      [this.refs.content, headerFooterlayout.content],
      [this.refs.footer, headerFooterlayout.footer],
      [this.refs.header, headerFooterlayout.header]
    ];
  }

  famousUpdate(nextProps) {
    let headerFooterlayout = this.getFamous();

    headerFooterlayout.setOptions(nextProps.options);
  }

  render() {
    let children = [];

    React.Children.forEach(this.props.children, (child) => {
      switch (child.type) {
        case Component.Content:
          children.push(this.createFamousWrapper(child, {key: 'content', ref: 'content'}));
          break;
        case Component.Footer:
          children.push(this.createFamousWrapper(child, {key: 'footer', ref: 'footer'}));
          break;
        case Component.Header:
          children.push(this.createFamousWrapper(child, {key: 'header', ref: 'header'}));
          break;
        default:
          break;
      }
    });

    return (
      <div data-famous="HeaderFooterLayout">
        {children}
      </div>
    );
  }
};

Component.Content = class extends FamousComponent {
  famousCreateNode(parentNode) {
    let renderNode = this.getFamous();
    let node = parentNode.add(renderNode);
    return this.getFamousChildrenRef().map((child, idx) => [child, node]);
  }

  render() {
    return (
      <div data-famous="HeaderFooterLayout.Content">
        {this.getFamousChildren()}
      </div>
    );
  }
};

Component.Footer = class extends FamousComponent {
  famousCreateNode(parentNode) {
    let renderNode = this.getFamous();
    let node = parentNode.add(renderNode);
    return this.getFamousChildrenRef().map((child, idx) => [child, node]);
  }

  render() {
    return (
      <div data-famous="HeaderFooterLayout.Footer">
        {this.getFamousChildren()}
      </div>
    );
  }
};

Component.Header = class extends FamousComponent {
  famousCreateNode(parentNode) {
    let renderNode = this.getFamous();
    let node = parentNode.add(renderNode);
    return this.getFamousChildrenRef().map((child, idx) => [child, node]);
  }

  render() {
    return (
      <div data-famous="HeaderFooterLayout.Header">
        {this.getFamousChildren()}
      </div>
    );
  }
};

export default Component;
