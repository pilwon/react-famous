import range from 'lodash/utility/range';
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
  'rgba(0, 255, 0, .7)'
];
const INITIAL_RATIOS = [1, true, 1, true, 1, true, 1, true];
const FINAL_RATIOS = [4, true, 1, true, 0, true, 7, true];

export default React.createClass({
  componentDidMount() {
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
    let surfaces = range(COLORS.length).map((idx) => {
      let options = {
        properties: {
          backgroundColor: COLORS[idx]
        },
        size: (idx % 2 === 0) ? [undefined, undefined] : [10, undefined]
      };
      return (
        <Surface key={idx} options={options}/>
      );
    });

    return (
      <Context>
        <Modifier options={{align: [0.5, 0.5], origin: [0.5, 0.5]}}>
          <FlexibleLayout ref="flexibleLayout" options={{ratios: INITIAL_RATIOS}}>
            {surfaces}
          </FlexibleLayout>
        </Modifier>
      </Context>
    );
  }
});
