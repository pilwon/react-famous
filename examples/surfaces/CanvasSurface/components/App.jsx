import React from 'react';

import Context from 'react-famous/core/Context';
import Modifier from 'react-famous/core/Modifier';
import Surface from 'react-famous/core/Surface';
import CanvasSurface from 'react-famous/surfaces/CanvasSurface';

let CANVAS_SIZE = [400, 400];

export default React.createClass({
  onReady() {
    let canvas = this.refs.canvas.getFamous();
    let ctx = canvas.getContext('2d');

    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(50, 50, 200, 200);

    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(150, 150, 200, 200);
  },

  render() {
    return (
      <Context>
        <Surface options={{properties: {lineHeight: '100px', textAlign: 'center'}, size: [undefined, 100]}}>
          Shapes are drawn on a canvas surface.
        </Surface>
        <Modifier options={{align: [0.5, 0.5], origin: [0.5, 0.5], size: CANVAS_SIZE}}>
          <CanvasSurface ref="canvas" options={{canvasSize: CANVAS_SIZE}} onReady={this.onReady}/>
        </Modifier>
      </Context>
    );
  }
});
