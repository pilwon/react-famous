import FamousScale from 'famous/components/Scale';

import FamousComponent from '../lib/FamousComponent';

class Scale extends FamousComponent {
  famousCreate(node) {
    return new FamousScale(node);
  }
}

Scale.propTypes = {
  x: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.array
  ]),
  y: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.array
  ]),
  z: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.array
  ])
};

Scale.famousPropsMapper = {
  x: 'setX',
  y: 'setY',
  z: 'setZ'
};

export default Scale;
