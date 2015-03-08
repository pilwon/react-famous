import Transform from 'famous/core/Transform';
import React from 'react';
import Modifier from 'react-famous/core/Modifier';
import Surface from 'react-famous/core/Surface';

export default React.createClass({
  componentDidMount() {
    let modifier = this.refs.modifier.getFamous();
    let angle = 0;

    modifier.transformFrom(() => {
      angle += 0.03;
      return Transform.rotateZ(angle);
    });
  },

  render() {
    let options = {
      size: [100, 100],
      properties: {
        backgroundColor: '#000099',
        color: 'white',
        lineHeight: '100px',
        textAlign: 'center'
      }
    };

    return (
      <Modifier ref="modifier">
        <Surface options={options}>
          Rotating
        </Surface>
      </Modifier>
    );
  }
});
