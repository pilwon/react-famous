import React from 'react';
import { RouteHandler } from 'react-router';

import Menu from './Menu';

const EXAMPLES = {
  modifiers: [
    'Draggable'
  ],
  surfaces: [
    'CanvasSurface',
    'ContainerSurface',
    'ImageSurface',
    'VideoSurface'
  ],
  views: [
    'Deck',
    'EdgeSwapper',
    'FlexibleLayout',
    'Flipper',
    'GridLayout',
    'HeaderFooterLayout',
    'Lightbox',
    'RenderController',
    'ScrollContainer',
    'Scrollview',
    'SequentialLayout',
    'SizeAwareView'
  ],
  test: [
    'Animations',
    'CommentBox',
    'HelloWorld',
    'HelloWorldDynamic',
    'Layout',
    'ReactNode',
    'Seed'
  ]
};

export default class extends React.Component {
  render() {
    return (
      <div className="app">
        <Menu examples={EXAMPLES}/>
        <div className="content">
          <RouteHandler/>
        </div>
      </div>
    );
  }
};
