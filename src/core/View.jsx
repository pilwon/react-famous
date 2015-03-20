import FamousView from 'famous/core/View';
import defaults from 'lodash/object/defaults';
import React from 'react';

import FamousComponent from '../lib/FamousComponent';

class View extends FamousComponent {
  famousCreate() {
    return new FamousView(this.props.options);
  }

  famousCreateNode(parentNode) {
    let view = this.getFamous();
    parentNode.add(view);
    let next = this.getFamousChildrenRef().map((child, idx) => [child, view]);
    return [view, next];
  }

  famousUpdate(nextProps) {
    let view = this.getFamous();

    view.setOptions(nextProps.options);
  }

  render() {
    return (
      <div data-famous="View">
        {this.getFamousChildren()}
      </div>
    );
  }
}

defaults(View, FamousView);

export default View;
