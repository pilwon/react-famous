import Transform from 'famous/core/Transform';
import React from 'react';
import Context from 'react-famous/core/Context';
import Surface from 'react-famous/core/Surface';
import StateModifier from 'react-famous/modifiers/StateModifier';
import HeaderFooterLayout from 'react-famous/views/HeaderFooterLayout';

export default React.createClass({
  render() {
    return (
      <Context>
        <StateModifier options={{align: [.5, .5], origin: [.5, .5], size: [300, 300], transform: Transform.rotateZ(.2)}}>
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
        </StateModifier>
      </Context>
    );
  }
});
