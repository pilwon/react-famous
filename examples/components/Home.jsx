import Transform from 'famous/core/Transform';
import Easing from 'famous/transitions/Easing';
import Timer from 'famous/utilities/Timer';
import React from 'react';
import Context from 'react-famous/core/Context';
import Modifier from 'react-famous/core/Modifier';
import Surface from 'react-famous/core/Surface';
import FamousScheduler from 'react-famous/lib/FamousScheduler';
import StateModifier from 'react-famous/modifiers/StateModifier';

class Home extends React.Component {
  componentDidMount() {
    let stateModifier = this.refs.stateModifier.getFamous();

    FamousScheduler.schedule(() => {
      function animate() {
        stateModifier.halt();
        stateModifier.setTransform(Transform.translate(-50, 0), {
          duration: 250
        }, () => {
          stateModifier.setTransform(Transform.translate(0, 0), {
            duration: 500
          }, () => {
            Timer.setTimeout(animate, 1250);
          });
        });
      }

      animate();
    });
  }

  render() {
    return (
      <div className="home">
        <Context>
          <Modifier options={{align: [0.5, 0.4], origin: [0.5, 0.5]}}>
            <Surface options={{size: [true, true], properties: {fontSize: '3em'}}}>
              <a href="https://github.com/pilwon/react-famous" target="_blank">react-famous</a>
              examples
            </Surface>
          </Modifier>
          <StateModifier ref="stateModifier" options={{align: [0.5, 0.6], origin: [0.5, 0.5]}}>
            <Surface options={{size: [true, true], properties: {fontSize: '2em'}}}>
              &larr; &nbsp; Please select an example.
            </Surface>
          </StateModifier>
        </Context>
      </div>
    );
  }
}

export default Home;
