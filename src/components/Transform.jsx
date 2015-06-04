import FamousTransform from 'famous/components/Transform';

import FamousComponent from '../lib/FamousComponent';

class Transform extends FamousComponent {
  famousCreate(node) {
    return new FamousTransform(node);
  }
}

Transform.propTypes = {
  align: React.PropTypes.array,
  mountPoint: React.PropTypes.array,
  origin: React.PropTypes.array,
  position: React.PropTypes.array,
  rotation: React.PropTypes.array,
  scale: React.PropTypes.array
};

Transform.famousPropsMapper = {
  align: 'setAlign',
  mountPoint: 'setMountPoint',
  origin: 'setOrigin',
  position: 'setPosition',
  rotation: 'setRotation',
  scale: 'setScale'
};

export default Transform;
