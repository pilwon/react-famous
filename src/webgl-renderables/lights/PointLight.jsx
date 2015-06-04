import FamousColor from 'famous/utilities/Color';
import FamousPointLight from 'famous/webgl-renderables/lights/PointLight';

import FamousComponent from '../../lib/FamousComponent';

class PointLight extends FamousComponent {
  famousCreate(node) {
    return new FamousPointLight(node);
  }
}

PointLight.propTypes = {
  color: React.PropTypes.instanceOf(FamousColor)
};

PointLight.famousPropsMapper = {
  color: 'setColor'
};

export default PointLight;
