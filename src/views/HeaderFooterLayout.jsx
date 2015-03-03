import HeaderFooterLayout from 'famous/views/HeaderFooterLayout';
import React from 'react';
import cloneWithProps from 'react/lib/cloneWithProps';

import FamousNodeMixin from '../lib/FamousNodeMixin';
import FamousRenderMixin from '../lib/FamousRenderMixin';
import FamousUtil from '../lib/FamousUtil';

let Component = React.createClass({
  mixins: [FamousNodeMixin, FamousRenderMixin],

  propTypes: {
    defaultFooterSize: React.PropTypes.number,
    defaultHeaderSize: React.PropTypes.number,
    direction: React.PropTypes.number,
    footerSize: React.PropTypes.number,
    headerSize: React.PropTypes.number
  },

  componentDidMount() {
    this._updateFamous(this.props);
  },

  componentWillReceiveProps(nextProps) {
    this._updateFamous(nextProps);
  },

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  },

  componentWillUnmount() {
    this.releaseFamous();
    this.releaseFamousNode();
  },

  getFamousNodeByKey(key) {
    return this._famousNodes[key];
  },

  _updateFamous(props) {
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
  }
});

Component.Content = FamousUtil.createPassDownComponent('HeaderFooterLayout.Content');
Component.Footer = FamousUtil.createPassDownComponent('HeaderFooterLayout.Footer');
Component.Header = FamousUtil.createPassDownComponent('HeaderFooterLayout.Header');

export default Component;
