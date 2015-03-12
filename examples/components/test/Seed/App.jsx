import Transform from 'famous/core/Transform';
import Easing from 'famous/transitions/Easing';
import React from 'react';
import Context from 'react-famous/core/Context';
import Modifier from 'react-famous/core/Modifier';
import Surface from 'react-famous/core/Surface';
import FamousScheduler from 'react-famous/lib/FamousScheduler';
import StateModifier from 'react-famous/modifiers/StateModifier';

const GROUND_RATIO = 0.35;
const INITIAL_MODIFIER_OPTIONS = {align: [0.5, 0], origin: [0.5, 1]};
const URL = 'https://github.com/pilwon/react-famous';

export default class extends React.Component {
  componentDidMount() {
    let beanModifier = this.refs.beanModifier.getFamous();

    function drop() {
      return new Promise((resolve) => {
        beanModifier.setAlign([0.5, 1 - GROUND_RATIO], {
          curve: Easing.outBounce,
          duration: 2500
        }, resolve);
      });
    }

    function moveLeft() {
      return new Promise((resolve) => {
        return Promise.all([
          new Promise((resolve) => {
            beanModifier.setAlign([0.05, 1 - GROUND_RATIO], {
              curve: Easing.outElastic,
              duration: 1000
            }, resolve);
          }),
          new Promise((resolve) => {
            beanModifier.setOrigin([0, 1], {
              curve: Easing.outElastic,
              duration: 1000
            }, resolve);
          })
        ]).then(() => setTimeout(resolve, 300));
      });
    }

    function disappear() {
      return new Promise((resolve) => {
        beanModifier.setAlign([1, 1 - GROUND_RATIO], {
          curve: Easing.inExpo,
          duration: 500
        }, () => setTimeout(resolve, 1000));
      });
    }

    function reset() {
      beanModifier.setAlign(INITIAL_MODIFIER_OPTIONS.align);
      beanModifier.setOrigin(INITIAL_MODIFIER_OPTIONS.origin);
      return Promise.resolve();
    }

    FamousScheduler.schedule(function loop() {
      drop().then(moveLeft).then(disappear).then(reset).then(loop);
    });
  }

  render() {
    let beanOptions = {
      properties: {
        backgroundColor: '#F2EEB3',
        borderRadius: '50px',
        fontSize: '2em',
        fontWeight: 'bold',
        padding: '30px 50px'
      },
      size: [true, true]
    };

    let groundOptions = {
      properties: {
        backgroundColor: '#8C6954',
        borderBottom: '25px solid #260126',
        borderRadius: '200px 200px 0 0',
        borderTop: '30px solid #59323C'
      }
    };

    return (
      <Context>
        <StateModifier ref="beanModifier" options={INITIAL_MODIFIER_OPTIONS}>
          <Surface options={beanOptions}>
            Hello <a href={URL} target="_blank">react-famous</a>!
          </Surface>
        </StateModifier>
        <Modifier options={{align: [0.5, 1], origin: [0.5, 1], proportions: [1, GROUND_RATIO]}}>
          <Surface options={groundOptions}/>
        </Modifier>
      </Context>
    );
  }
};
