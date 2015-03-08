import React from 'react';
import RenderNode from 'react-famous/core/RenderNode';
import Surface from 'react-famous/core/Surface';

export default class extends React.Component {
  render() {
    return (
      <RenderNode>
        <Surface>
          Hello, world! I am a CommentForm.
        </Surface>
      </RenderNode>
    );
  }
};
