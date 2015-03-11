import FamousSurface from 'famous/core/Surface';
import isUndefined from 'lodash/lang/isUndefined';
import defaults from 'lodash/object/defaults';
import React from 'react';

import FamousComponent from '../lib/FamousComponent';
import FamousConstants from '../lib/FamousConstants';
import FamousUtil from '../lib/FamousUtil';

class Surface extends FamousComponent {
  famousCreate() {
    let surface = new FamousSurface(this.props.options);

    FamousConstants.SURFACE_EVENTS.forEach((event) => {
      if (this.props[event.prop]) {
        surface.on(event.type, () => {
          this.props[event.prop](this.props.eventKey);
        });
      }
    });

    return surface;
  }

  famousCreateNode(parentNode) {
    let surface = this.getFamous();
    let node = parentNode.add(surface);
    return [node, null];
  }

  famousUpdate(nextProps) {
    let surface = this.getFamous();
    let content;

    if (!isUndefined(nextProps.children)) {
      content = FamousUtil.renderContent(nextProps.children);
    }

    surface.setOptions(defaults({}, nextProps.options, {content}));
  }

  render() {
    return (
      <div data-famous="Surface"/>
    );
  }
}

defaults(Surface, FamousSurface);

Surface.propTypes = defaults({}, FamousConstants.SURFACE_PROPTYPES);

export default Surface;
