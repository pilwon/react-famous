import React from 'react';
import Context from 'react-famous/core/Context';
import Modifier from 'react-famous/core/Modifier';
import Surface from 'react-famous/core/Surface';
import Draggable from 'react-famous/modifiers/Draggable';

export default class extends React.Component {
  componentDidMount() {
    let draggable = this.refs.draggable.getFamous();
    let surface = this.refs.surface.getFamous();

    draggable.subscribe(surface);
  }

  render() {
    let draggableOptions = {
      snapX: 40,
      snapY: 40,
      xRange: [-220, 220],
      yRange: [-220, 220]
    };

    let gridOptions = {
      size: [481, 481],
      properties: {
        backgroundColor: 'black',
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.25) 1px, transparent 1px), linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.25) 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px), linear-gradient(transparent 3px, black 3px, black 238px, transparent 238px), linear-gradient(90deg, white 3px, transparent 3px, transparent 238px, white 238px)',
        backgroundSize: '40px 40px, 240px 240px, 40px 40px, 240px 240px, 240px 240px, 240px 240px'
      }
    };

    let surfaceOptions = {
      size: [40, 40],
      content: 'drag',
      properties: {
        backgroundColor: 'red',
        color: 'white',
        cursor: 'pointer',
        lineHeight: '40px',
        textAlign: 'center'
      }
    };

    return (
      <Context>
        <Modifier options={{align: [0.5, 0.5], origin: [0.5, 0.5]}}>
          <Surface options={gridOptions}/>
          <Draggable ref="draggable" options={draggableOptions}>
            <Surface ref="surface" options={surfaceOptions}/>
          </Draggable>
        </Modifier>
      </Context>
    );
  }
};
