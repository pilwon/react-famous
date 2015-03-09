import isEqual from 'lodash/lang/isEqual';
import React from 'react';

import Home from './Home';

class Example extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return !isEqual(this.props, nextProps) || !isEqual(this.state, nextState);
  }

  render() {
    let content;

    if (this.props.group && this.props.member) {
      let Component = require(`react-proxy!./${this.props.group}/${this.props.member}/App`);
      content = <Component/>
    } else {
      content = <Home/>;
    }

    return (
      <div className="example">
        {content}
      </div>
    );
  }
}

Example.propTypes = {
  group: React.PropTypes.string,
  member: React.PropTypes.string
};

export default Example;
