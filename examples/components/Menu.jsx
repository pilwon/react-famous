import isEqual from 'lodash/lang/isEqual';
import React from 'react';
import { Link } from 'react-router';

class Menu extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return !isEqual(this.props, nextProps) || !isEqual(this.state, nextState);
  }

  render() {
    let examples = Object.keys(this.props.examples).reduce((result, group, idx) => {
      let listItems = this.props.examples[group].map((member, idx) => {
        return (
          <li key={idx}>
            <Link to={`${group}.${member}`}>{member}</Link>
          </li>
        );
      });
      result.push(
        <section className="group" key={idx}>
          <header>{group}</header>
          <ul>
            {listItems}
          </ul>
        </section>
      );
      return result;
    }, []);

    return (
      <div className="menu">
        <nav>
          <a href="#">react-famous</a>
        </nav>
        {examples}
      </div>
    );
  }
}

Menu.propTypes = {
  examples: React.PropTypes.object.isRequired
};

export default Menu;
