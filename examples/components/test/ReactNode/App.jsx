import React from 'react';
import Context from 'react-famous/core/Context';
import Modifier from 'react-famous/core/Modifier';
import RenderNode from 'react-famous/core/RenderNode';
import Surface from 'react-famous/core/Surface';
import ReactNode from 'react-famous/lib/ReactNode';
import GridLayout from 'react-famous/views/GridLayout';

import EdgeSwapperApp from '../../views/EdgeSwapper/App';
import FlexibleLayoutApp from '../../views/FlexibleLayout/App';
import FlipperApp from '../../views/Flipper/App';
import GridLayoutApp from '../../views/GridLayout/App';
import HeaderFooterLayoutApp from '../../views/HeaderFooterLayout/App';
import ScrollviewApp from '../../views/Scrollview/App';
import AnimationsApp from '../Animations/App';
import CommentBoxApp from '../CommentBox/App';
import HelloWorldDynamicApp from '../HelloWorldDynamic/App';

export default class extends React.Component {
  render() {
    return (
      <Context>
        <GridLayout options={{dimensions: [3, 3]}}>
          <ReactNode>
            <EdgeSwapperApp/>
          </ReactNode>
          <ReactNode>
            <FlexibleLayoutApp/>
          </ReactNode>
          <ReactNode>
            <FlipperApp/>
          </ReactNode>
          <ReactNode>
            <GridLayoutApp/>
          </ReactNode>
          <ReactNode>
            <HeaderFooterLayoutApp/>
          </ReactNode>
          <ReactNode>
            <ScrollviewApp/>
          </ReactNode>
          <ReactNode>
            <AnimationsApp/>
          </ReactNode>
          <ReactNode>
            <CommentBoxApp/>
          </ReactNode>
          <ReactNode>
            <HelloWorldDynamicApp/>
          </ReactNode>
        </GridLayout>
      </Context>
    );
  }
};
