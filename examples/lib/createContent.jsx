import isEqual from 'lodash/lang/isEqual';
import React from 'react';

export default (group, member) => {
  return class extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
      return !isEqual(this.props, nextProps) || !isEqual(this.state, nextState);
    }

    render() {
      let Component = require(`react-proxy!../components/${group}/${member}/App`);

      return (
        <div className="example">
          <div className="source-code">
            <a href={`https://github.com/pilwon/react-famous/blob/master/examples/components/${group}/${member}/App.jsx`} target="_blank">
              Source Code
            </a>
          </div>
          <Component/>
        </div>
      );
    }
  }
};
