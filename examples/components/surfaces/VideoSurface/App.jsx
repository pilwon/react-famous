import React from 'react';
import Context from 'react-famous/core/Context';
import Modifier from 'react-famous/core/Modifier';
import Surface from 'react-famous/core/Surface';
import VideoSurface from 'react-famous/surfaces/VideoSurface';

const VIDEO_URL = 'https://r2---sn-uxa0n-tm3e.googlevideo.com/videoplayback?itag=43&fexp=3300100%2C3300100%2C3300134%2C3300134%2C3300137%2C3300137%2C3300161%2C3300161%2C3310699%2C3310699%2C3311901%2C3311901%2C3312261%2C3312261%2C907263%2C924621%2C927622%2C934963%2C9406140%2C9406394%2C9407752%2C9407821%2C943917%2C945074%2C948124%2C951703%2C952302%2C952612%2C952901%2C955301%2C957201%2C958602%2C959701&key=yt5&upn=h2XKDJIpj-w&ratebypass=yes&ipbits=0&sver=3&initcwndbps=1233750&signature=570819D584B3D60F2841E520406E005E63A91176.7B2F8F90A9BC41F4FDA73A5871CA6F684BFAC79E&dur=0.000&sparams=dur%2Cid%2Cinitcwndbps%2Cip%2Cipbits%2Citag%2Cmime%2Cmm%2Cms%2Cmv%2Cpl%2Cratebypass%2Crequiressl%2Csource%2Cupn%2Cexpire&mt=1425972588&mv=m&id=o-AFTRSzT_oXG7ahOs_KH2a0C_AgZMMadiBnPPfRvkFYWN&ms=au&expire=1425994258&mime=video%2Fwebm&ip=66.203.194.42&requiressl=yes&mm=31&source=youtube&pl=19&title=Meghan%20Trainor%20%E2%80%9CAll%20About%20That%20Bass%E2%80%9D%20Parody%20-%20HAPPY%20HOLIDAYS&cpn=ODnhSjJ9sbiXjOoo';

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
