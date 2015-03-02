import React from 'react';

import Context from 'react-famous/core/Context';
import Modifier from 'react-famous/core/Modifier';
import RenderNode from 'react-famous/core/RenderNode';
import Surface from 'react-famous/core/Surface';
import GridLayout from 'react-famous/views/GridLayout';

export default React.createClass({
  render() {
    return (
      <Context>
        <GridLayout dimensions={[3, 2]}>
          <RenderNode>
            <Surface properties={{backgroundColor: 'red'}}/>
            <Modifier align={[0.5, 0.5]} origin={[0.5, 0.5]}>
              <Surface properties={{color: 'white'}} size={[true, true]}>
                <h1>Red</h1>
              </Surface>
            </Modifier>
          </RenderNode>
          <Surface properties={{backgroundColor: 'green'}}>
            Green
          </Surface>
          <Surface properties={{backgroundColor: 'blue'}}>
            Blue
          </Surface>
          <Surface properties={{backgroundColor: 'pink'}}>
            Pink
          </Surface>
          <Surface properties={{backgroundColor: 'purple'}}>
            Purple
          </Surface>
          <GridLayout dimensions={[2, 2]}>
            <Surface properties={{backgroundColor: 'navy'}}>
              Navy
            </Surface>
            <Surface properties={{backgroundColor: 'brown'}}>
              Brown
            </Surface>
            <Surface properties={{backgroundColor: 'khaki'}}>
              Khaki
            </Surface>
            <Surface properties={{backgroundColor: 'maroon'}}>
              Maroon
            </Surface>
          </GridLayout>
        </GridLayout>
      </Context>
    );
  }
});
