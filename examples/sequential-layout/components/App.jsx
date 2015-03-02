import Utility from 'famous/utilities/Utility';
import React from 'react';
import Context from 'react-famous/core/Context';
import Modifier from 'react-famous/core/Modifier';
import RenderNode from 'react-famous/core/RenderNode';
import Surface from 'react-famous/core/Surface';
import SequentialLayout from 'react-famous/views/SequentialLayout';

export default React.createClass({
  render() {
    return (
      <Context>
        <SequentialLayout direction={Utility.Direction.Y}>
          <Modifier size={[undefined, 100]}>
            <RenderNode>
              <Surface properties={{backgroundColor: 'red'}}/>
              <Modifier align={[0.5, 0.5]} origin={[0.5, 0.5]}>
                <Surface properties={{color: 'white'}} size={[true, true]}>
                  <h1>Red</h1>
                </Surface>
              </Modifier>
            </RenderNode>
          </Modifier>
          <Surface properties={{backgroundColor: 'green'}} size={[undefined, 50]}>
            Green
          </Surface>
          <Modifier size={[undefined, 100]}>
            <Surface properties={{backgroundColor: 'blue'}}>
              Blue
            </Surface>
          </Modifier>
          <Modifier size={[undefined, 100]}>
            <SequentialLayout direction={Utility.Direction.X}>
              <Surface properties={{backgroundColor: 'navy'}} size={[200, undefined]}>
                Navy
              </Surface>
              <Surface properties={{backgroundColor: 'brown'}} size={[100, undefined]}>
                Brown
              </Surface>
              <Modifier size={[200, undefined]}>
                <Surface properties={{backgroundColor: 'khaki'}}>
                  Khaki
                </Surface>
              </Modifier>
              <Modifier size={[100, undefined]}>
                <Surface properties={{backgroundColor: 'maroon'}}>
                  Maroon
                </Surface>
              </Modifier>
            </SequentialLayout>
          </Modifier>
        </SequentialLayout>
      </Context>
    );
  }
});
