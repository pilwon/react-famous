import random from 'lodash/number/random';
import Transform from 'famous/core/Transform';
import Easing from 'famous/transitions/Easing';
import TweenTransition from 'famous/transitions/TweenTransition';
import React from 'react';
import Modifier from 'react-famous/core/Modifier';
import Surface from 'react-famous/core/Surface';
import FamousScheduler from 'react-famous/lib/FamousScheduler';
import StateModifier from 'react-famous/modifiers/StateModifier';

const EASING_NAMES = Object.keys(Easing);

EASING_NAMES.forEach((name) => TweenTransition.registerCurve(name, Easing[name]));

export default class extends React.Component {
  componentDidMount() {
    let stateModifier = this.refs.stateModifier.getFamous();

    function rotate() {
      stateModifier.setTransform(Transform.rotate(Math.random(), Math.random(), Math.random()), {
        curve: EASING_NAMES[random(EASING_NAMES.length)],
        duration: 300
      }, () => {
        stateModifier.setTransform(Transform.rotate(0, 0, 0), {
          duration: 50
        }, rotate);
      });
    }

    FamousScheduler.schedule(rotate);
  }

  render() {
    return (
      <StateModifier ref="stateModifier" options={{proportions: [0.2, 0.2]}}>
        <Surface options={{properties: {backgroundColor: '#990099'}}}/>
        <Modifier options={{align: [0.5, 0.5], origin: [0.5, 0.5]}}>
          <Surface options={{properties: {color: 'white'}, size: [true, true]}}>
            Crazy
          </Surface>
        </Modifier>
      </StateModifier>
    );
  }
};
