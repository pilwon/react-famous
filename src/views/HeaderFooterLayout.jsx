import FamousRenderNode from 'famous/core/RenderNode';
import FamousHeaderFooterLayout from 'famous/views/HeaderFooterLayout';
import defaults from 'lodash/object/defaults';
import React from 'react';

import FamousComponent from '../lib/FamousComponent';

class HeaderFooterLayout extends FamousComponent {
  famousCreate() {
    return new FamousHeaderFooterLayout(this.props.options);
  }

  famousCreateNode(parentNode) {
    let headerFooterlayout = this.getFamous();
    let node = parentNode.add(headerFooterlayout);
    let next = [
      [this.refs.content, headerFooterlayout.content],
      [this.refs.footer, headerFooterlayout.footer],
      [this.refs.header, headerFooterlayout.header]
    ];
    return [node, next];
  }

  famousUpdate(nextProps) {
    let headerFooterlayout = this.getFamous();

    headerFooterlayout.setOptions(nextProps.options);
  }

  render() {
    let children = [];

    React.Children.forEach(this.props.children, (child) => {
      switch (child.type) {
        case HeaderFooterLayout.Content:
          children.push(this.createFamousWrapper(child, {key: 'content', ref: 'content'}));
          break;
        case HeaderFooterLayout.Footer:
          children.push(this.createFamousWrapper(child, {key: 'footer', ref: 'footer'}));
          break;
        case HeaderFooterLayout.Header:
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

HeaderFooterLayout.Content = class extends FamousComponent {
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
      <div data-famous="HeaderFooterLayout.Content">
        {this.getFamousChildren()}
      </div>
    );
  }
};

HeaderFooterLayout.Footer = class extends FamousComponent {
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
      <div data-famous="HeaderFooterLayout.Footer">
        {this.getFamousChildren()}
      </div>
    );
  }
};

HeaderFooterLayout.Header = class extends FamousComponent {
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
      <div data-famous="HeaderFooterLayout.Header">
        {this.getFamousChildren()}
      </div>
    );
  }
}

defaults(HeaderFooterLayout, FamousHeaderFooterLayout);

export default HeaderFooterLayout;
