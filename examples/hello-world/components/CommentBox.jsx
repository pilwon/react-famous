import React from 'react';
import Modifier from 'react-famous/core/Modifier';
import Surface from 'react-famous/core/Surface';

import CommentForm from './CommentForm';

export default React.createClass({
  render() {
    return (
      <div>
        <Modifier size={[undefined, 210]}>
          <Surface>
            <h1>Comments</h1>
          </Surface>
        </Modifier>
        <CommentForm/>
      </div>
    );
  }
});
