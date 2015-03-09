import Transform from 'famous/core/Transform';
import React from 'react';
import Context from 'react-famous/core/Context';
import Modifier from 'react-famous/core/Modifier';
import Surface from 'react-famous/core/Surface';
import HeaderFooterLayout from 'react-famous/views/HeaderFooterLayout';

export default class extends React.Component {
  render() {
    return (
      <Context>
        <Modifier options={{align: [.5, .5], origin: [.5, .5], size: [300, 300], transform: Transform.rotateZ(.2)}}>
          <HeaderFooterLayout options={{headerSize: 100, footerSize: 50}}>
            <HeaderFooterLayout.Header>
              <Surface options={{properties: {backgroundColor: '#ff8888', lineHeight: '100px', textAlign: 'center'}, size: [undefined, 100]}}>
                Header
              </Surface>
            </HeaderFooterLayout.Header>
            <HeaderFooterLayout.Content>
              <Surface options={{properties: {backgroundColor: '#88ff88', lineHeight: '150px', textAlign: 'center'}}}>
                Content
              </Surface>
            </HeaderFooterLayout.Content>
            <HeaderFooterLayout.Footer>
              <Surface options={{properties: {backgroundColor: '#8888ff', lineHeight: '50px', textAlign: 'center'}, size: [undefined, 50]}}>
                Footer
              </Surface>
            </HeaderFooterLayout.Footer>
          </HeaderFooterLayout>
        </Modifier>
      </Context>
    );
  }
};
