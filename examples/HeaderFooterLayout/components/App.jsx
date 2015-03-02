import React from 'react';

import Context from 'react-famous/core/Context';
import Modifier from 'react-famous/core/Modifier';
import Surface from 'react-famous/core/Surface';
import Transform from 'react-famous/core/Transform';
import HeaderFooterLayout from 'react-famous/views/HeaderFooterLayout';

export default React.createClass({
  render() {
    return (
      <Context>
        <Modifier align={[.5, .5]}
                  origin={[.5, .5]}
                  size={[300, 300]}
                  transform={Transform.rotateZ(.2)}>
          <HeaderFooterLayout headerSize={100} footerSize={50}>
            <HeaderFooterLayout.Header>
              <Surface properties={{backgroundColor: '#ff8888', lineHeight: '100px', textAlign: 'center'}}
                       size={[undefined, 100]}>
                Header
              </Surface>
            </HeaderFooterLayout.Header>
            <HeaderFooterLayout.Content>
              <Surface properties={{backgroundColor: '#88ff88', lineHeight: '150px', textAlign: 'center'}}>
                Content
              </Surface>
            </HeaderFooterLayout.Content>
            <HeaderFooterLayout.Footer>
              <Surface properties={{backgroundColor: '#8888ff', lineHeight: '50px', textAlign: 'center'}}
                       size={[undefined, 50]}>
                Footer
              </Surface>
            </HeaderFooterLayout.Footer>
          </HeaderFooterLayout>
        </Modifier>
      </Context>
    );
  }
});
