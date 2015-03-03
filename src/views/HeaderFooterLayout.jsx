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

  famousCreate(props) {
    let options = FamousUtil.parseOptions(props);
    this.setFamousOptions(options);

    let headerFooterlayout = new HeaderFooterLayout(options);
    this.setFamous(headerFooterlayout);
    this.setFamousNode(FamousUtil.getFamousParentNode(this).add(headerFooterlayout));
    this.setFamousKeyedNodes({
      content: headerFooterlayout.content,
      footer: headerFooterlayout.footer,
      header: headerFooterlayout.header
    });
  },

  famousUpdate(props) {
    let headerFooterlayout = this.getFamous();
    let options = FamousUtil.parseOptions(props);
    let optionsChanged = this.setFamousOptions(options);

    if (optionsChanged) {
      headerFooterlayout.setOptions(options);
    }
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

Component.Content = FamousUtil.createPassDownComponent('HeaderFooterLayout.Content');
Component.Footer = FamousUtil.createPassDownComponent('HeaderFooterLayout.Footer');
Component.Header = FamousUtil.createPassDownComponent('HeaderFooterLayout.Header');

export default Component;
