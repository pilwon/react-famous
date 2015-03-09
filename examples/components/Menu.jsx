import isEqual from 'lodash/lang/isEqual';
import React from 'react';

class Menu extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return !isEqual(this.props, nextProps) || !isEqual(this.state, nextState);
  }

  _onClick(group, member) {
    this.props.onMenuChange(group, member);
  }

  render() {
    let examples = Object.keys(this.props.examples).reduce((result, group, idx) => {
      let listItems = this.props.examples[group].map((member, idx) => {
        return (
          <li key={idx}>
            <a href={`#/${group}/${member}`} onClick={this._onClick.bind(this, group, member)}>{member}</a>
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
          <a href="#" onClick={this._onClick.bind(this)}>react-famous</a>
        </nav>
        {examples}
      </div>
    );
  }
}

Menu.propTypes = {
  examples: React.PropTypes.object.isRequired,
  onMenuChange: React.PropTypes.func.isRequired
};

export default Menu;
