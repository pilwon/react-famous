import FamousGestureHandler from 'famous/components/GestureHandler';

import FamousComponent from '../lib/FamousComponent';

class GestureHandler extends FamousComponent {
  famousCreate(node) {
    return new FamousGestureHandler(node);
  }
}

GestureHandler.propTypes = {};

GestureHandler.famousPropsMapper = {};

export default GestureHandler;
