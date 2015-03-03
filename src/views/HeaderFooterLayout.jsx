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

  getFamousNodeByKey(key) {
    return this._famousNodes[key];
  },

  renderFamous() {
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
  },

  updateFamous(props) {
    let headerFooterlayout = this.getFamous();
    let options = FamousUtil.parseOptions(props);
    let optionsChanged = this.setFamousOptions(options);
    let render = true;

    if (!headerFooterlayout) {
      headerFooterlayout = new HeaderFooterLayout(options);
      this.setFamous(headerFooterlayout);
      this.setFamousNode(FamousUtil.getFamousParentNode(this).add(headerFooterlayout));
      this._famousNodes = {
        content: headerFooterlayout.content,
        footer: headerFooterlayout.footer,
        header: headerFooterlayout.header
      };
    } else if (optionsChanged) {
      surface.setOptions(options);
    }

    if (render) {
      this.forceUpdate();
    }
  }
});

Component.Content = FamousUtil.createPassDownComponent('HeaderFooterLayout.Content');
Component.Footer = FamousUtil.createPassDownComponent('HeaderFooterLayout.Footer');
Component.Header = FamousUtil.createPassDownComponent('HeaderFooterLayout.Header');

export default Component;
