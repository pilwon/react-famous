import Transform from 'famous/core/Transform';
import React from 'react';
import Context from 'react-famous/core/Context';
import Modifier from 'react-famous/core/Modifier';
import Surface from 'react-famous/core/Surface';
import FamousScheduler from 'react-famous/lib/FamousScheduler';
import Lightbox from 'react-famous/views/Lightbox';

export default class extends React.Component {
  componentDidMount() {
    let lightbox = this.refs.lightbox.getFamous();
    let red = this.refs.red.getFamous();
    let green = this.refs.green.getFamous();
    let blue = this.refs.blue.getFamous();

    function showRed() {
      lightbox.show(red, {duration: 1500}, showGreen);
    }

    function showGreen() {
      lightbox.show(green, {duration: 1500}, showBlue);
    }

    function showBlue() {
      lightbox.show(blue, {duration: 1500}, showRed);
    }

    FamousScheduler.schedule(showRed);
  }

  render() {
    let lightboxOptions = {
      inAlign: [0, 0.5],
      inOpacity: 0.5,
      inOrigin: [0, 0.5],
      inTransform: Transform.scale(0.5, 0.5, 0.5),
      outAlign: [1, 0.5],
      outOpacity: 0,
      outOrigin: [1, 0.5],
      outTransform: Transform.scale(0.001, 0.001, 0.001),
      overlap: true
    };

    return (
      <Context>
        <Surface options={{properties: {lineHeight: '100px', textAlign: 'center'}, size: [undefined, 100]}}>
          Lightbox showing and hiding renderables.
        </Surface>
        <Modifier options={{align: [0.5, 0.5], origin: [0.5, 0.5], size: [300, 200]}}>
          <Lightbox ref="lightbox" options={lightboxOptions}>
            <Surface ref="red" options={{properties: {backgroundColor: '#990000'}}}/>
            <Surface ref="green" options={{properties: {backgroundColor: '#009900'}}}/>
            <Surface ref="blue" options={{properties: {backgroundColor: '#000099'}}}/>
          </Lightbox>
        </Modifier>
      </Context>
    );
  }
};
