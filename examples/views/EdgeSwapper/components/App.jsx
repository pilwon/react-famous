import React from 'react';
import Context from 'react-famous/core/Context';
import Engine from 'react-famous/core/Engine';
import Surface from 'react-famous/core/Surface';
import EdgeSwapper from 'react-famous/views/EdgeSwapper';

export default React.createClass({
  onReady() {
    let edgeSwapper = this.refs.edgeSwapper.getFamous();
    let primary = this.refs.primary.getFamous();
    let secondary = this.refs.secondary.getFamous();
    let showing = true;

    edgeSwapper.show(primary);

    Engine.on('click', () => {
      if (showing) {
        edgeSwapper.show(secondary);
      } else {
        edgeSwapper.show(primary);
      }
      showing = !showing;
    });
  },

  render() {
    let primaryOptions = {
      properties: {
        backgroundColor: '#990000',
        color: 'white',
        fontSize: '2em',
        lineHeight: `${window.innerHeight}px`,
        textAlign: 'center'
      }
    };

    let secondaryOptions = {
      properties: {
        backgroundColor: '#000099',
        color: 'white',
        fontSize: '2em',
        lineHeight: `${window.innerHeight}px`,
        textAlign: 'center'
      }
    };

    return (
      <Context>
        <EdgeSwapper ref="edgeSwapper" onReady={this.onReady}>
          <Surface ref="primary" options={primaryOptions}>
            Primary
          </Surface>
          <Surface ref="secondary" options={secondaryOptions}>
            Secondary
          </Surface>
        </EdgeSwapper>
      </Context>
    );
  }
});
