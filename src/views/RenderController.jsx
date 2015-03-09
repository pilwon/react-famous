import FamousRenderNode from 'famous/core/RenderNode';
import FamousRenderController from 'famous/views/RenderController';
import defaults from 'lodash/object/defaults';
import React from 'react';

import FamousComponent from '../lib/FamousComponent';

class RenderController extends FamousComponent {
  famousCreate() {
    return new FamousRenderController(this.props.options);
  }

  famousCreateNode(parentNode) {
    let renderController = this.getFamous();
    parentNode.add(renderController);
    return this.getFamousChildrenRef().map((child, idx) => [child, new RenderNode()]);
  }

  famousUpdate(nextProps) {
    let renderController = this.getFamous();

    renderController.setOptions(nextProps.options);
  }

  render() {
    return (
      <div data-famous="RenderController">
        {this.getFamousChildren()}
      </div>
    );
  }
}

defaults(RenderController, FamousRenderController);

export default RenderController;
