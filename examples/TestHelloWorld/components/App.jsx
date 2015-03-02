import React from 'react';
import Context from 'react-famous/core/Context';

import CommentBox from './CommentBox';

export default React.createClass({
  render() {
    return (
      <Context>
        <CommentBox/>
      </Context>
    );
  }
});
