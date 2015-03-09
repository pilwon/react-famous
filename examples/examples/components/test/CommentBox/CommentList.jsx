import Transform from 'famous/core/Transform';
import Transitionable from 'famous/transitions/Transitionable';
import React from 'react';
import Modifier from 'react-famous/core/Modifier';
import FamousScheduler from 'react-famous/lib/FamousScheduler';
import Scrollview from 'react-famous/views/Scrollview';

import Comment from './Comment';

class Component extends React.Component {
  componentWillMount() {
    this._transitionables = this.props.data.map(() => new Transitionable(0));
  }

  componentDidMount() {
    let transitionables = this._transitionables;

    FamousScheduler.schedule(() => {
      this.props.data.forEach((comment, idx) => {
        let modifier = this.refs[`modifier_${idx}`].getFamous();
        let transitionable = transitionables[idx];
        transitionable.set(1, {
          curve: 'easeInOut',
          duration: (idx + 1) * (1500 / this.props.data.length)
        });
      });
    });
  }

  render() {
    let transitionables = this._transitionables;

    let commentNodes = this.props.data.map((comment, idx) => {
      let transitionable = transitionables[idx];
      let modifierOptions = {
        opacity: () => {
          return transitionable.get();
        },
        size: [undefined, 50],
        transform: () => {
          return Transform.translate(300 * (1 - transitionable.get()), 0);
        }
      };

      return (
        <Modifier key={idx} ref={`modifier_${idx}`} options={modifierOptions}>
          <Comment author={comment.author} text={comment.text}/>
        </Modifier>
      );
    });

    return (
      <Modifier options={{align: [0.5, 0.5], origin: [0.5, 0.5]}}>
        <Modifier options={{proportions: [0.8, undefined]}}>
          <Scrollview>
            {commentNodes}
          </Scrollview>
        </Modifier>
      </Modifier>
    );
  }
}

Component.propTypes = {
  data: React.PropTypes.array
};

export default Component;
