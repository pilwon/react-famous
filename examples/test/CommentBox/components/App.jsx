import React from 'react';
import Context from 'react-famous/core/Context';

import CommentBox from './CommentBox';

export default class extends React.Component {
  render() {
    return (
      <Context>
        <CommentBox/>
      </Context>
    );
  }
};
