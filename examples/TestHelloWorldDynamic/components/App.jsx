import React from 'react';
import Context from 'react-famous/core/Context';
import Modifier from 'react-famous/core/Modifier';
import Surface from 'react-famous/core/Surface';

export default React.createClass({
  getInitialState() {
    return {
      count: 0
    };
  },

  componentDidMount() {
    this._intervalId = setInterval(() => {
      this.setState((state) => ({
        count: state.count + 1
      }));
    }, 100);
  },

  componentWillUnmount() {
    clearInterval(this._intervalId);
  },

  _textCharUpper(text, position) {
    let str = text.toLowerCase();
    let idx = position % str.length;
    return str.substr(0, idx) + str[idx].toUpperCase() + str.substr(idx + 1);
  },

  render() {
    let properties = {
      backgroundColor: this.state.count % 2 ? 'red' : 'maroon',
      color: '#fff',
      textAlign: 'center',
      lineHeight: '100px'
    };
    let text = this._textCharUpper('Hello World', this.state.count);

    return (
      <Context>
        <Modifier align={[0.5, 0.5]} origin={[0.5, 0.5]}>
          <Surface size={[150, 100]} properties={properties}>
            {text}
          </Surface>
        </Modifier>
      </Context>
    );
  }
});
