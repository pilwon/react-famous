import FamousRotation from 'famous/components/Rotation';

import FamousComponent from '../lib/FamousComponent';

class Rotation extends FamousComponent {
  famousCreate(node) {
    return new FamousRotation(node);
  }
}

Rotation.propTypes = {
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

Rotation.famousPropsMapper = {
  x: 'setX',
  y: 'setY',
  z: 'setZ'
};

export default Rotation;
