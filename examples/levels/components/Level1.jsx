import React from 'react';
import Context from 'react-famous/core/Context';

import Level2 from './Level2';

export default React.createClass({
  render() {
    return (
      <div>
        <Context>
          <div>
            <div>
              <Level2/>
            </div>
          </div>
        </Context>
      </div>
    );
  }
});
