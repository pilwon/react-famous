import FamousSizeAwareView from 'famous/views/SizeAwareView';
import defaults from 'lodash/object/defaults';
import React from 'react';

import FamousComponent from '../lib/FamousComponent';

class SizeAwareView extends FamousComponent {
  famousCreate() {
    return new FamousSizeAwareView(this.props.options);
  }

  famousCreateNode(parentNode) {
    let sizeAwareView = this.getFamous();
    parentNode.add(sizeAwareView);
    let next = this.getFamousChildrenRef().map((child, idx) => [child, sizeAwareView]);
    return [sizeAwareView, next];
  }

  famousUpdate(nextProps) {
    let sizeAwareView = this.getFamous();

    sizeAwareView.setOptions(nextProps.options);
  }

  render() {
    return (
      <div data-famous="SizeAwareView">
        {this.getFamousChildren()}
      </div>
    );
  }
}

defaults(SizeAwareView, FamousSizeAwareView);

export default SizeAwareView;
