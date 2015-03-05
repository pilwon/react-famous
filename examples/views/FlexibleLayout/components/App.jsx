import SpringTransition from 'famous/transitions/SpringTransition';
import Transitionable from 'famous/transitions/Transitionable';
import Timer from 'famous/utilities/Timer';
import React from 'react';
import Context from 'react-famous/core/Context';
import Engine from 'react-famous/core/Engine';
import Modifier from 'react-famous/core/Modifier';
import Surface from 'react-famous/core/Surface';
import FlexibleLayout from 'react-famous/views/FlexibleLayout';

const COLORS = [
  'rgba(255, 0, 0, .7)',
  'rgba(0, 255, 0, .7)',
  'rgba(0, 0, 255, .7)',
  'rgba(255, 0, 0, .7)',
  'rgba(0, 255, 0, .7)',
  'rgba(0, 0, 255, .7)',
  'rgba(255, 0, 0, .7)',
  'rgba(0, 255, 0, .7)',
  'rgba(0, 0, 255, .7)'
];
const INITIAL_RATIOS = [1, true, 1, true, 1, true, 1, true];
const FINAL_RATIOS = [4, true, 1, true, 0, true, 7, true];

export default React.createClass({
  onReady() {
    let flexibleLayout = this.refs.flexibleLayout.getFamous();
    let toggle = false;

    Engine.on('click', () => {
      let ratios = toggle ? INITIAL_RATIOS : FINAL_RATIOS;
      flexibleLayout.setRatios(ratios, {
        curve: 'easeOut',
        duration: 500
      });
      toggle = !toggle;
    });
  },

  render() {
    let surfaces = [];

    for (let i = 0; i <= 8; ++i) {
      let surfaceOptions = {
        properties: {
          backgroundColor: COLORS[i - 1]
        },
        size: (i % 2 === 0) ? [10, undefined] : [undefined, undefined]
      };
      let surface = (
        <Surface key={i} options={surfaceOptions}/>
      );
      surfaces.push(surface);
    }

    return (
      <Context>
        <Modifier options={{align: [0.5, 0.5], origin: [0.5, 0.5]}}>
          <FlexibleLayout ref="flexibleLayout" options={{ratios: INITIAL_RATIOS}} onReady={this.onReady}>
            {surfaces}
          </FlexibleLayout>
        </Modifier>
      </Context>
    );
  }
});
