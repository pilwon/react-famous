import FamousAlign from 'famous/components/Align';

import FamousComponent from '../lib/FamousComponent';

class Align extends FamousComponent {
  famousCreate(node) {
    return new FamousAlign(node);
  }
}

Align.propTypes = {
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

Align.famousPropsMapper = {
  x: 'setX',
  y: 'setY',
  z: 'setZ'
};

export default Align;
