import React from 'react';

import Context from 'react-famous/core/Context';
import Modifier from 'react-famous/core/Modifier';
import Surface from 'react-famous/core/Surface';
import ContainerSurface from 'react-famous/surfaces/ContainerSurface';
import Scrollview from 'react-famous/views/Scrollview';

export default React.createClass({
  render() {
    let surfaces = [];

    for (let i = 0; i < 100; ++i) {
      let surfaceOptions = {
        properties: {
          backgroundColor: 'rgba(255, 0, 0, 0.5)',
          color: 'white',
          lineHeight: '50px',
          textAlign: 'center'
        },
        size: [undefined, 50]
      };

      surfaces.push(
        <Surface key={i} options={surfaceOptions}>
          I am surface: {i + 1}
        </Surface>
      );
    }

    return (
      <Context>
        <Surface options={{properties: {lineHeight: '100px', textAlign: 'center'}, size: [undefined, 100]}}>
          Container surface is created, but scrollview is not being rendered since it currently draws asynchronously. (TODO)
        </Surface>
        <Modifier options={{align: [0.5, 0.5], origin: [0.5, 0.5]}}>
          <ContainerSurface options={{properties: {border: '1px solid black', overflow: 'hidden'}, size: [400, 400]}}>
            <Scrollview>
              {surfaces}
            </Scrollview>
          </ContainerSurface>
        </Modifier>
      </Context>
    );
  }
});
