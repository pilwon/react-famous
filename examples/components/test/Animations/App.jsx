import React from 'react';
import Context from 'react-famous/core/Context';
import Modifier from 'react-famous/core/Modifier';

import BouncyBox from './BouncyBox';
import CrazyBox from './CrazyBox';
import DraggableBox from './DraggableBox';
import DroppingBox from './DroppingBox';
import RotatingBox from './RotatingBox';

export default class extends React.Component {
  render() {
    return (
      <Context>
        <Modifier options={{align: [0.3, 0.3], origin: [0.5, 0.5]}}>
          <DraggableBox/>
        </Modifier>
        <Modifier options={{align: [0.7, 0.3], origin: [0.5, 0.5]}}>
          <BouncyBox/>
        </Modifier>
        <Modifier options={{align: [0.3, 0.7], origin: [0.5, 0.5]}}>
          <RotatingBox/>
        </Modifier>
        <Modifier options={{align: [0.7, 0.7], origin: [0.5, 0.5]}}>
          <CrazyBox/>
        </Modifier>
        <DroppingBox/>
      </Context>
    );
  }
};
