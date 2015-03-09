import isEqual from 'lodash/lang/isEqual';
import React from 'react';

import Home from './Home';

class Content extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return !isEqual(this.props, nextProps) || !isEqual(this.state, nextState);
  }

  render() {
    let group = this.props.group;
    let member = this.props.member;
    let content;

    if (group && member) {
      try {
        let Component = require(`react-proxy!./${group}/${member}/App`);
        content = (
          <div className="example">
            <div className="source-code">
              <a href={`https://github.com/pilwon/react-famous/blob/master/examples/components/${group}/${member}/App.jsx`} target="_blank">
                Source Code
              </a>
            </div>
            <Component/>
          </div>
        );
      } catch (err) {
        if (window.history && window.history.replaceState) {
          window.history.replaceState(null, null, '/');
        }
      }
    }

    return (
      <div className="content">
        {content ? content : <Home/>}
      </div>
    );
  }
}

Content.propTypes = {
  group: React.PropTypes.string,
  member: React.PropTypes.string
};

export default Content;
