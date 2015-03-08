import range from 'lodash/utility/range';
import React from 'react';
import Modifier from 'react-famous/core/Modifier';
import Surface from 'react-famous/core/Surface';
import FlexibleLayout from 'react-famous/views/FlexibleLayout';

import CommentForm from './CommentForm';
import CommentList from './CommentList';

export default class extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      data: range(5).map(() => {
        return {
          author: '@pilwon',
          text: 'Hello react-famous!'
        };
      })
    };
  }

  _handleCommentSubmit() {

  }

  render() {
    return (
      <FlexibleLayout options={{direction: FlexibleLayout.DIRECTION_Y, ratios: [0.2, 0.6, 0.2]}}>
        <Modifier options={{align: [0.5, 0.5], origin: [0.5, 0.5]}}>
          <Surface options={{size: [true, true], properties: {fontSize: '3em'}}}>
            Comments
          </Surface>
        </Modifier>
        <Modifier options={{align: [0.5, 0.5], origin: [0.5, 0.5]}}>
          <CommentList data={this.state.data}/>
        </Modifier>
        <Modifier options={{align: [0.5, 0.5], origin: [0.5, 0.5]}}>
          <CommentForm onCommentSubmit={this._handleCommentSubmit.bind(this)}/>
        </Modifier>
      </FlexibleLayout>
    );
  }
};
