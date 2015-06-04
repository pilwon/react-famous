import FamousSize from 'famous/components/Size';

import FamousComponent from '../lib/FamousComponent';

class Size extends FamousComponent {
  famousCreate(node) {
    return new FamousSize(node);
  }
}

Size.propTypes = {
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

Size.famousPropsMapper = {
  mode: 'setMode',
  absolute: 'setAbsolute',
  differential: 'setDifferential',
  proportional: 'setProportional'
};

export default Size;
