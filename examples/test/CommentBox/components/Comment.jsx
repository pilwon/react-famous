import React from 'react';
import Modifier from 'react-famous/core/Modifier';
import Surface from 'react-famous/core/Surface';
import FlexibleLayout from 'react-famous/views/FlexibleLayout';

class Component extends React.Component {
  render() {
    return (
      <FlexibleLayout options={{direction: FlexibleLayout.DIRECTION_X, ratios: [4, true, 6]}}>
        <Modifier options={{align: [1, 0.5], origin: [1, 0.5]}}>
          <Surface options={{size: [true, undefined], properties: {fontWeight: 'bold'}}}>
            {this.props.author}
          </Surface>
        </Modifier>
        <Surface options={{size: [10, undefined]}}/>
        <Modifier options={{align: [0, 0.5], origin: [0, 0.5]}}>
          <Surface>
            {this.props.text}
          </Surface>
        </Modifier>
      </FlexibleLayout>
    );
  }
}

Component.propTypes = {
  author: React.PropTypes.string,
  text: React.PropTypes.string
};

export default Component;
