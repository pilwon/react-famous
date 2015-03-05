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
        <GridLayout options={{dimensions: [3, 2]}}>
          <RenderNode>
            <Surface options={{properties: {backgroundColor: 'red'}}}/>
            <Modifier options={{align: [0.5, 0.5], origin: [0.5, 0.5]}}>
              <Surface options={{properties: {color: 'white'}, size: [true, true]}}>
                <h1>Red</h1>
              </Surface>
            </Modifier>
          </RenderNode>
          <Surface options={{properties: {backgroundColor: 'green'}}}>
            Green
          </Surface>
          <Surface options={{properties: {backgroundColor: 'blue'}}}>
            Blue
          </Surface>
          <Surface options={{properties: {backgroundColor: 'pink'}}}>
            Pink
          </Surface>
          <Surface options={{properties: {backgroundColor: 'purple'}}}>
            Purple
          </Surface>
          <GridLayout options={{dimensions: [2, 2]}}>
            <Surface options={{properties: {backgroundColor: 'navy'}}}>
              Navy
            </Surface>
            <Surface options={{properties: {backgroundColor: 'brown'}}}>
              Brown
            </Surface>
            <Surface options={{properties: {backgroundColor: 'khaki'}}}>
              Khaki
            </Surface>
            <Surface options={{properties: {backgroundColor: 'maroon'}}}>
              Maroon
            </Surface>
          </GridLayout>
        </GridLayout>
      </Context>
    );
  }
});
