import React from 'react';
import Context from 'react-famous/core/Context';
import Modifier from 'react-famous/core/Modifier';
import Surface from 'react-famous/core/Surface';
import SizeAwareView from 'react-famous/views/SizeAwareView';

export default class extends React.Component {
  componentDidMount() {
    let sizeAwareView = this.refs.sizeAwareView.getFamous();
    let surface = this.refs.surface.getFamous();

    sizeAwareView._eventInput.on('parentResize', () => {
      let content = `Parent Size: ${JSON.stringify(sizeAwareView.getParentSize())}`;
      surface.setContent(content);
    });
  }

  render() {
    return (
      <Context>
        <SizeAwareView ref="sizeAwareView">
          <Modifier options={{align: [0.5, 0.5], origin: [0.5, 0.5]}}>
            <Surface ref="surface" options={{size: [true, true]}}/>
          </Modifier>
        </SizeAwareView>
      </Context>
    );
  }
};
