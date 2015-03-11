import Transform from 'famous/core/Transform';
import React from 'react';
import Context from 'react-famous/core/Context';
import Modifier from 'react-famous/core/Modifier';
import Surface from 'react-famous/core/Surface';
import HeaderFooterLayout from 'react-famous/views/HeaderFooterLayout';

export default class extends React.Component {
  render() {
    let modifierOptions = {
      align: [.5, .5],
      origin: [.5, .5],
      proportions: [0.5, 0.7],
      transform: Transform.rotateZ(.2)
    };

    return (
      <Context>
        <Modifier options={modifierOptions}>
          <HeaderFooterLayout options={{headerSize: 70, footerSize: 50}}>
            <HeaderFooterLayout.Header>
              <Surface options={{properties: {backgroundColor: '#ff8888'}}}/>
              <Modifier options={{align: [0.5, 0.5], origin: [0.5, 0.5]}}>
                <Surface options={{size: [true, true]}}>
                  Header
                </Surface>
              </Modifier>
            </HeaderFooterLayout.Header>
            <HeaderFooterLayout.Content>
              <Surface options={{properties: {backgroundColor: '#88ff88'}}}/>
              <Modifier options={{align: [0.5, 0.5], origin: [0.5, 0.5]}}>
                <Surface options={{size: [true, true]}}>
                  Content
                </Surface>
              </Modifier>
            </HeaderFooterLayout.Content>
            <HeaderFooterLayout.Footer>
              <Surface options={{properties: {backgroundColor: '#8888ff'}}}/>
              <Modifier options={{align: [0.5, 0.5], origin: [0.5, 0.5]}}>
                <Surface options={{size: [true, true]}}>
                  Footer
                </Surface>
              </Modifier>
            </HeaderFooterLayout.Footer>
          </HeaderFooterLayout>
        </Modifier>
      </Context>
    );
  }
};
