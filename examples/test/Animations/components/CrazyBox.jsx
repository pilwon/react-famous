import random from 'lodash/number/random';
import Transform from 'famous/core/Transform';
import Easing from 'famous/transitions/Easing';
import TweenTransition from 'famous/transitions/TweenTransition';
import React from 'react';
import Surface from 'react-famous/core/Surface';
import StateModifier from 'react-famous/modifiers/StateModifier';

const EASING_NAMES = Object.keys(Easing);

EASING_NAMES.forEach((name) => TweenTransition.registerCurve(name, Easing[name]));

export default React.createClass({
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

    rotate();
  },

  render() {
    let options = {
      size: [100, 100],
      properties: {
        backgroundColor: '#990099',
        color: 'white',
        lineHeight: '100px',
        textAlign: 'center'
      }
    };

    return (
      <StateModifier ref="stateModifier">
        <Surface options={options}>
          Crazy
        </Surface>
      </StateModifier>
    );
  }
});
