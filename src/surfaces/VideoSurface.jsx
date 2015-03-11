import FamousVideoSurface from 'famous/surfaces/VideoSurface';
import defaults from 'lodash/object/defaults';
import React from 'react';

import FamousComponent from '../lib/FamousComponent';

class VideoSurface extends FamousComponent {
  famousCreate() {
    return new FamousVideoSurface(this.props.options);
  }

  famousCreateNode(parentNode) {
    let videoSurface = this.getFamous();
    let node = parentNode.add(videoSurface);
    return [node, null];
  }

  famousUpdate(nextProps) {
    let videoSurface = this.getFamous();

    videoSurface.setOptions(nextProps.options);
  }

  render() {
    return (
      <div data-famous="VideoSurface"/>
    );
  }
}

defaults(VideoSurface, FamousVideoSurface);

export default VideoSurface;
