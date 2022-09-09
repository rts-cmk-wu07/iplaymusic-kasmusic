// AUDIO PLAYER PACKAGE
// https://www.npmjs.com/package/react-h5-audio-player
//
// DOCUMENTATION:
// https://lhz516.github.io/react-h5-audio-player/?path=/docs/layouts-advanced--custom-additional-controls
//

import { useState } from "react";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "./react-player.css";

import "./App.css";

const playlist = [
  { src: "https://hanzluo.s3-us-west-1.amazonaws.com/music/ziyounvshen.mp3" },
  { src: "http://hanzluo.s3-us-west-1.amazonaws.com/music/wuyuwuqing.mp3" },
  { src: "http://hanzluo.s3-us-west-1.amazonaws.com/music/suipian.mp3" },
];

function App() {
  const [currentTrack, setCurrentTrack] = useState(0);
  console.log(currentTrack);
  const handleClickPrev = () => {
    setCurrentTrack((currentTrack) =>
      currentTrack === 0 ? playlist.length - 1 : currentTrack - 1
    );
  };
  const handleClickNext = () => {
    setCurrentTrack((currentTrack) =>
      currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
    );
  };
  const handleEnd = () => {
    setCurrentTrack((currentTrack) =>
      currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
    );
  };

  return (
    <div className="App">
      <AudioPlayer
        src={playlist[currentTrack].src}
        showSkipControls
        onClickPrevious={handleClickPrev}
        onClickNext={handleClickNext}
        onEnded={handleEnd}
        customProgressBarSection={[
          RHAP_UI.PROGRESS_BAR,
          RHAP_UI.CURRENT_TIME,
          <div>/</div>,
          RHAP_UI.DURATION,
        ]}
        customControlsSection={[
          <div className="pr-8">
            SONG BEING PLAYED: {currentTrack + 1} / {playlist.length}
          </div>,
          RHAP_UI.ADDITIONAL_CONTROLS,
          RHAP_UI.MAIN_CONTROLS,
          RHAP_UI.VOLUME_CONTROLS,
        ]}
      />
    </div>
  );
}

export default App;
