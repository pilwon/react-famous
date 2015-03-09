import isEqual from 'lodash/lang/isEqual';
import React from 'react';

import Home from './Home';

class Content extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return !isEqual(this.props, nextProps) || !isEqual(this.state, nextState);
  }

  render() {
    let content;

    if (this.props.group && this.props.member) {
      try {
        let Component = require(`react-proxy!./${this.props.group}/${this.props.member}/App`);
        content = <Component/>;
      } catch (err) {
        console.error(err.message);
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
