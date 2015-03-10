import React from 'react';
import Context from 'react-famous/core/Context';
import Modifier from 'react-famous/core/Modifier';
import Surface from 'react-famous/core/Surface';
import VideoSurface from 'react-famous/surfaces/VideoSurface';

const VIDEO_URL = 'http://video.webmfiles.org/big-buck-bunny_trailer.webm';

export default class extends React.Component {
  render() {
    return (
      <Context>
        <Surface options={{properties: {lineHeight: '100px', textAlign: 'center'}, size: [undefined, 100]}}>
          The video is created with VideoSurface.
        </Surface>
        <Modifier options={{align: [0.5, 0.5], origin: [0.5, 0.5], proportions: [0.8, 0.8]}}>
          <VideoSurface options={{autoplay: true, src: VIDEO_URL}}/>
        </Modifier>
      </Context>
    );
  }
};
