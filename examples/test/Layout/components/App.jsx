import range from 'lodash/utility/range';
import React from 'react';
import Context from 'react-famous/core/Context';
import Modifier from 'react-famous/core/Modifier';
import Surface from 'react-famous/core/Surface';
import GridLayout from 'react-famous/views/GridLayout';
import HeaderFooterLayout from 'react-famous/views/HeaderFooterLayout';

export default React.createClass({
  render() {
    let views = range(2).map((i) => {
      let options = {
        size: [100, 100],
        properties: {
          backgroundColor: '#fa5c4f',
          color: 'white',
          lineHeight: '100px',
          textAlign: 'center'
        }
      };

      return (
        <Modifier key={i} options={{align: [0.5, 0.5], origin: [0.5, 0.5]}}>
          <Surface options={options}>
            content {i + 1}
          </Surface>
        </Modifier>
      );
    });

    return (
      <Context>
        <HeaderFooterLayout options={{headerSize: 100, footerSize: 50}}>
          <HeaderFooterLayout.Header>
            <Surface options={{properties: {backgroundColor: 'gray', lineHeight: '100px', textAlign: 'center'}}}>
              Header
            </Surface>
          </HeaderFooterLayout.Header>
          <HeaderFooterLayout.Content>
            <GridLayout options={{dimensions: [2, 1]}}>
              {views}
            </GridLayout>
          </HeaderFooterLayout.Content>
          <HeaderFooterLayout.Footer>
            <Surface options={{properties: {backgroundColor: 'gray', lineHeight: '50px', textAlign: 'center'}}}>
              Footer
            </Surface>
          </HeaderFooterLayout.Footer>
        </HeaderFooterLayout>
      </Context>
    );
  }
});
