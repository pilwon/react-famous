import FamousColor from 'famous/utilities/Color';
import FamousAmbientLight from 'famous/webgl-renderables/lights/AmbientLight';

import FamousComponent from '../../lib/FamousComponent';

class AmbientLight extends FamousComponent {
  famousCreate(node) {
    return new FamousAmbientLight(node);
  }
}

AmbientLight.propTypes = {
  color: React.PropTypes.instanceOf(FamousColor)
};

AmbientLight.famousPropsMapper = {
  color: 'setColor'
};

export default AmbientLight;
