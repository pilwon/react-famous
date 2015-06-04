import FamousOrigin from 'famous/components/Origin';

import FamousComponent from '../lib/FamousComponent';

class Origin extends FamousComponent {
  famousCreate(node) {
    return new FamousOrigin(node);
  }
}

Origin.propTypes = {
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

Origin.famousPropsMapper = {
  x: 'setX',
  y: 'setY',
  z: 'setZ'
};

export default Origin;
