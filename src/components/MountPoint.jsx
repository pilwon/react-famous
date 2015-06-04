import FamousMountPoint from 'famous/components/MountPoint';

import FamousComponent from '../lib/FamousComponent';

class MountPoint extends FamousComponent {
  famousCreate(node) {
    return new FamousMountPoint(node);
  }
}

MountPoint.propTypes = {
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

MountPoint.famousPropsMapper = {
  x: 'setX',
  y: 'setY',
  z: 'setZ'
};

export default MountPoint;
