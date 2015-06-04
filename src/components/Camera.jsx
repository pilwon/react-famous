import FamousCamera from 'famous/components/Camera';

import FamousComponent from '../lib/FamousComponent';

class Camera extends FamousComponent {
  famousCreate(node) {
    return new FamousCamera(node);
  }
}

Camera._famousSkipParentNodeCheck = true;

Camera.propTypes = {
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

Camera.famousPropsMapper = {
  depth: 'setDepth',
  flat: 'setFlat',
  frustum: 'setFrustum'
};

export default Camera;
