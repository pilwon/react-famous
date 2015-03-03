import RenderNode from 'famous/core/RenderNode';
import HeaderFooterLayout from 'famous/views/HeaderFooterLayout';
import React from 'react';

import FamousMixin from '../lib/FamousMixin';

let Component = React.createClass({
  mixins: [FamousMixin],

  famousCreate() {
    let headerFooterlayout = new HeaderFooterLayout(this.props.options);
    this.setFamous(headerFooterlayout);
    this.setFamousNode(this.getFamousParentNode().add(headerFooterlayout));
    this.setFamousKeyedNodes({
      content: headerFooterlayout.content,
      footer: headerFooterlayout.footer,
      header: headerFooterlayout.header
    });
  },

  famousUpdate(nextProps) {
    let headerFooterlayout = this.getFamous();

    headerFooterlayout.setOptions(nextProps.options);
  },

  render() {
    if (!this.getFamousReady()) { return null; }

    let children = this.props.children.map((child) => {
      switch (child.type) {
        case Component.Content:
          return React.cloneElement(child, {key: 'content'});
        case Component.Footer:
          return React.cloneElement(child, {key: 'footer'});
        case Component.Header:
          return React.cloneElement(child, {key: 'header'});
        default:
          return null;
      }
    });

    return (
      <div data-famous="HeaderFooterLayout">
        {children}
      </div>
    );
  }
});

Component.Content = React.createClass({
  mixins: [FamousMixin],

  famousCreate() {
    let renderNode = new RenderNode();
    this.setFamous(renderNode);
    this.setFamousNode(this.getFamousParentNode().add(renderNode));
  },

  render() {
    if (!this.getFamousReady()) { return null; }

    return (
      <div data-famous="HeaderFooterLayout.Content">
        {this.props.children}
      </div>
    );
  }
});

Component.Footer = React.createClass({
  mixins: [FamousMixin],

  famousCreate() {
    let renderNode = new RenderNode();
    this.setFamous(renderNode);
    this.setFamousNode(this.getFamousParentNode().add(renderNode));
  },

  render() {
    if (!this.getFamousReady()) { return null; }

    return (
      <div data-famous="HeaderFooterLayout.Footer">
        {this.props.children}
      </div>
    );
  }
});

Component.Header = React.createClass({
  mixins: [FamousMixin],

  famousCreate() {
    let renderNode = new RenderNode();
    this.setFamous(renderNode);
    this.setFamousNode(this.getFamousParentNode().add(renderNode));
  },

  render() {
    if (!this.getFamousReady()) { return null; }

    return (
      <div data-famous="HeaderFooterLayout.Header">
        {this.props.children}
      </div>
    );
  }
});

export default Component;
