import FamousContextualView from 'famous/views/ContextualView';
import defaults from 'lodash/object/defaults';
import React from 'react';

import FamousComponent from '../lib/FamousComponent';

class ContextualView extends FamousComponent {
  famousCreate() {
    return new FamousContextualView(this.props.options);
  }

  famousCreateNode(parentNode) {
    let contextualView = this.getFamous();
    let node = parentNode.add(contextualView);
    let next = this.getFamousChildrenRef().map((child, idx) => [child, node]);
    return [node, next];
  }

  famousUpdate(nextProps) {
    let contextualView = this.getFamous();

    contextualView.setOptions(nextProps.options);
  }

  render() {
    return (
      <div data-famous="ContextualView">
        {this.getFamousChildren()}
      </div>
    );
  }
}

defaults(ContextualView, FamousContextualView);

export default ContextualView;
