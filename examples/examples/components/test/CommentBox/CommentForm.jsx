import Utility from 'famous/utilities/Utility';
import React from 'react';
import Modifier from 'react-famous/core/Modifier';
import Surface from 'react-famous/core/Surface';
import FormContainerSurface from 'react-famous/surfaces/FormContainerSurface';
import InputSurface from 'react-famous/surfaces/InputSurface';
import SubmitInputSurface from 'react-famous/surfaces/SubmitInputSurface';
import SequentialLayout from 'react-famous/views/SequentialLayout';

export default class extends React.Component {
  render() {
    return (
      <FormContainerSurface>
        <Modifier options={{align: [0.5, 0.5], origin: [0.5, 0.5]}}>
          <SequentialLayout options={{direction: Utility.Direction.X, itemSpacing: 10}}>
            <Modifier options={{proportions: [0.2, 0.5]}}>
              <InputSurface ref="author" options={{type: 'text', placeholder: 'Your name'}}/>
            </Modifier>  
            <Modifier options={{proportions: [0.4, 0.5]}}>
              <InputSurface ref="text" options={{type: 'text', placeholder: 'Say something...'}}/>
            </Modifier>
            <Modifier options={{proportions: [0.2, 0.5]}}>
              <SubmitInputSurface options={{value: 'Post', properties: {lineHeight: '100%'}}}/>
            </Modifier>
          </SequentialLayout>
        </Modifier>
      </FormContainerSurface>
    );
  }
};
