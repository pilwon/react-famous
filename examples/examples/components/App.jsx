import isEqual from 'lodash/lang/isEqual';
import React from 'react';

import Example from './Example';
import Menu from './Menu';

const EXAMPLES = {
  modifiers: [
    'Draggable',
  ],
  surfaces: [
    'CanvasSurface',
    'ContainerSurface',
    'ImageSurface',
  ],
  test: [
    'Animations',
    'CommentBox',
    'HelloWorld',
    'HelloWorldDynamic',
    'Layout'
  ],
  views: [
    'Deck',
    'EdgeSwapper',
    'FlexibleLayout',
    'Flipper',
    'GridLayout',
    'HeaderFooterLayout',
    'RenderController',
    'Scrollview',
    'SequentialLayout'
  ]
};

export default class extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      group: null,
      member: null
    };
  }

  _onHashChange() {
    let [group, member] = window.location.hash.slice(1).split('.');
    if (group && member) {
      this.setState({group, member});
    }
  }

  componentWillMount() {
    window.addEventListener('hashchange', this._onHashChange.bind(this), false);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !isEqual(this.props, nextProps) || !isEqual(this.state, nextState);
  }

  _onMenuChange(group, member) {
    this.setState({group, member});
  }

  render() {
    return (
      <div className="app">
        <Menu examples={EXAMPLES} onMenuChange={this._onMenuChange.bind(this)}/>
        <Example group={this.state.group} member={this.state.member}/>
      </div>
    );
  }
};
