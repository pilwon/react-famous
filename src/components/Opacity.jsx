import FamousOpacity from 'famous/components/Opacity';

import FamousComponent from '../lib/FamousComponent';

class Opacity extends FamousComponent {
  famousCreate(node) {
    return new FamousOpacity(node);
  }
}

Opacity.propTypes = {
  value: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.array
  ])
};

Opacity.famousPropsMapper = {
  value: 'set'
};

export default Opacity;
