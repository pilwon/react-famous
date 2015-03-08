import React from 'react';
import Modifier from 'react-famous/core/Modifier';
import Surface from 'react-famous/core/Surface';

import CommentForm from './CommentForm';

export default class extends React.Component {
  render() {
    return (
      <div>
        <Modifier options={{size: [150, true]}}>
          <Surface>
            <h1>Comments</h1>
          </Surface>
        </Modifier>
        <Modifier options={{align: [1, 0], origin: [1, 0], size: [150, true]}}>
          <CommentForm/>
        </Modifier>
      </div>
    );
  }
};
