import FamousPosition from 'famous/components/Position';

import FamousComponent from '../lib/FamousComponent';

class Position extends FamousComponent {
  famousCreate(node) {
    return new FamousPosition(node);
  }
}

Position.propTypes = {
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

Position.famousPropsMapper = {
  x: 'setX',
  y: 'setY',
  z: 'setZ'
};

export default Position;
