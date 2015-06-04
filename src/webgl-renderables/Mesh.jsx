import FamousColor from 'famous/utilities/Color';
import FamousGeometry from 'famous/webgl-geometries/Geometry';
import FamousMesh from 'famous/webgl-renderables/Mesh';

import FamousComponent from '../lib/FamousComponent';

class Mesh extends FamousComponent {
  famousCreate(node) {
    return new FamousMesh(node);
  }
}

Mesh.propTypes = {
  drawOptions: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array
  ]),
  geometry: React.PropTypes.oneOfType([
    React.PropTypes.instanceOf(FamousGeometry),
    React.PropTypes.string,
    React.PropTypes.array
  ]),
  baseColor: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.instanceOf(FamousColor)
  ]),
  flatShading: React.PropTypes.bool,
  normals: React.PropTypes.object,
  glossiness: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.instanceOf(FamousColor),
    React.PropTypes.array
  ]),
  positionOffset: React.PropTypes.object
};

Mesh.famousPropsMapper = {
  drawOptions: 'setDrawOptions',
  geometry: 'setGeometry',
  baseColor: 'setBaseColor',
  flatShading: 'setFlatShading',
  normals: 'setNormals',
  glossiness: 'setGlossiness',
  positionOffset: 'setPositionOffset'
};

export default Mesh;
