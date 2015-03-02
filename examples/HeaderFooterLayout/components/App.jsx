import React from 'react';

import Context from 'react-famous/core/Context';
import Surface from 'react-famous/core/Surface';
import HeaderFooterLayout from 'react-famous/views/HeaderFooterLayout';

export default React.createClass({
  render() {
    return (
      <Context>
        <HeaderFooterLayout headerSize={50} footerSize={20}>
          <HeaderFooterLayout.Header>
            <Surface properties={{backgroundColor: '#4B4F53', color: 'white'}}>
              Header
            </Surface>
          </HeaderFooterLayout.Header>
          <HeaderFooterLayout.Content>
            <Surface properties={{backgroundColor: '#131416', color: 'white'}}>
              Content
            </Surface>
          </HeaderFooterLayout.Content>
          <HeaderFooterLayout.Footer>
            <Surface properties={{backgroundColor: '#26292C', color: 'white'}}>
              Footer
            </Surface>
          </HeaderFooterLayout.Footer>
        </HeaderFooterLayout>
      </Context>
    );
  }
});
