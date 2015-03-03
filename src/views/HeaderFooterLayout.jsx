import RenderNode from 'famous/core/RenderNode';
import HeaderFooterLayout from 'famous/views/HeaderFooterLayout';
import React from 'react';
import cloneWithProps from 'react/lib/cloneWithProps';

import FamousMixin from '../lib/FamousMixin';
import FamousUtil from '../lib/FamousUtil';

let Component = React.createClass({
  mixins: [FamousMixin],

  propTypes: {
    defaultFooterSize: React.PropTypes.number,
    defaultHeaderSize: React.PropTypes.number,
    direction: React.PropTypes.number,
    footerSize: React.PropTypes.number,
    headerSize: React.PropTypes.number
  },

  famousCreate({options}) {
    let headerFooterlayout = new HeaderFooterLayout(options);
    this.setFamous(headerFooterlayout);
    this.setFamousNode(FamousUtil.getFamousParentNode(this).add(headerFooterlayout));
    this.setFamousKeyedNodes({
      content: headerFooterlayout.content,
      footer: headerFooterlayout.footer,
      header: headerFooterlayout.header
    });
  },

  famousUpdate({options}) {
    let headerFooterlayout = this.getFamous();

    headerFooterlayout.setOptions(options);
  },

  render() {
    if (!this.getFamousReady()) { return null; }

    let children = this.props.children.map((child) => {
      switch (child.type) {
        case Component.Content:
          return cloneWithProps(child, {key: 'content'});
        case Component.Footer:
          return cloneWithProps(child, {key: 'footer'});
        case Component.Header:
          return cloneWithProps(child, {key: 'header'});
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
    this.setFamousNode(FamousUtil.getFamousParentNode(this).add(renderNode));
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
    this.setFamousNode(FamousUtil.getFamousParentNode(this).add(renderNode));
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
    this.setFamousNode(FamousUtil.getFamousParentNode(this).add(renderNode));
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
