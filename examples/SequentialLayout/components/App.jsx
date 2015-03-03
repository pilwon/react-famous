import Utility from 'react-famous/utilities/Utility';
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
        <SequentialLayout options={{direction: Utility.Direction.Y}}>
          <Modifier options={{size: [undefined, 100]}}>
            <RenderNode>
              <Surface options={{properties: {backgroundColor: 'red'}}}/>
              <Modifier options={{align: [0.5, 0.5], origin: [0.5, 0.5]}}>
                <Surface options={{properties: {color: 'white'}, size: [true, true]}}>
                  <h1>Red</h1>
                </Surface>
              </Modifier>
            </RenderNode>
          </Modifier>
          <Surface options={{properties: {backgroundColor: 'green'}, size: [undefined, 50]}}>
            Green
          </Surface>
          <Modifier options={{size: [undefined, 100]}}>
            <Surface options={{properties: {backgroundColor: 'blue'}}}>
              Blue
            </Surface>
          </Modifier>
          <Modifier options={{size: [undefined, 100]}}>
            <SequentialLayout options={{direction: Utility.Direction.X}}>
              <Surface options={{properties: {backgroundColor: 'navy'}, size: [200, undefined]}}>
                Navy
              </Surface>
              <Surface options={{properties: {backgroundColor: 'brown'}, size: [100, undefined]}}>
                Brown
              </Surface>
              <Modifier options={{size: [200, undefined]}}>
                <Surface options={{properties: {backgroundColor: 'khaki'}}}>
                  Khaki
                </Surface>
              </Modifier>
              <Modifier options={{size: [100, undefined]}}>
                <Surface options={{properties: {backgroundColor: 'maroon'}}}>
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
