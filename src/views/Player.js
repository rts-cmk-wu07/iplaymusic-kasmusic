// AUDIO PLAYER PACKAGE
// https://www.npmjs.com/package/react-h5-audio-player
//
// DOCUMENTATION:
// https://lhz516.github.io/react-h5-audio-player/?path=/docs/layouts-advanced--custom-additional-controls
//

import { useState } from "react";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "../react-player.css";

const playlist = [
  { src: "https://hanzluo.s3-us-west-1.amazonaws.com/music/ziyounvshen.mp3" },
  { src: "http://hanzluo.s3-us-west-1.amazonaws.com/music/wuyuwuqing.mp3" },
  { src: "http://hanzluo.s3-us-west-1.amazonaws.com/music/suipian.mp3" },
];

const Player = () => {
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

  const song = {
    title: "SOME SONG",
    artist: "SOME ARTIST",
  };

  return (
    <>
      <div className="">
        <img
          src="https://picsum.photos/250"
          alt=""
          className="mx-auto my-[75px] rounded-full"
        />
        <h2 className="mx-auto my-6 max-w-max text-xl font-bold">
          {song.title}
        </h2>
        <p className="mx-auto my-6 max-w-max">{song.artist}</p>
        <AudioPlayer
          src={playlist[currentTrack].src}
          showSkipControls
          onClickPrevious={handleClickPrev}
          onClickNext={handleClickNext}
          onEnded={handleEnd}
          customProgressBarSection={[
            RHAP_UI.CURRENT_TIME,
            RHAP_UI.PROGRESS_BAR,
            RHAP_UI.DURATION,
          ]}
          customControlsSection={[RHAP_UI.MAIN_CONTROLS]}
        />
      </div>
    </>
  );
};

export default Player;
