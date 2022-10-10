// AUDIO PLAYER PACKAGE
// https://www.npmjs.com/package/react-h5-audio-player
//
// DOCUMENTATION:
// https://lhz516.github.io/react-h5-audio-player/?path=/docs/layouts-advanced--custom-additional-controls
//

import { useRef, useState } from "react";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import { IoChevronBack } from "react-icons/io5";
import { motion } from "framer-motion";
import "../react-player.css";

const playlist = [
  { src: "https://hanzluo.s3-us-west-1.amazonaws.com/music/ziyounvshen.mp3" },
  { src: "http://hanzluo.s3-us-west-1.amazonaws.com/music/wuyuwuqing.mp3" },
  { src: "http://hanzluo.s3-us-west-1.amazonaws.com/music/suipian.mp3" },
];

const Player = () => {
  const [fullPlayer, setFullPlayer] = useState(false);

  const [currentTrack, setCurrentTrack] = useState(0);
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

  let playerContainer = useRef();

  return (
    <>
      <motion.div
        ref={playerContainer}
        onClick={(e) => {
          if (
            e.target.tagName != "svg" &&
            e.target.tagName != "path" &&
            e.target.classList.contains("rhap_progress-indic")
          ) {
            playerContainer?.current?.setAttribute(
              "id",
              fullPlayer ? "minified" : "maxified"
            );
            setFullPlayer(!fullPlayer);
          }
          console.log(e.target);
          console.log(e.target.tagName);
        }}
        className={
          fullPlayer
            ? "overflow-hidden fixed z-40 max-w-[425px] w-full bg-white top-[0px] "
            : "overflow-hidden fixed z-40 max-w-[425px] w-full bg-white bottom-[62px] "
        }
        id="minified"
        /* variants={({ show: { height: 700 } }, { hidden: { height: 89 } })}
        animate={fullPlayer ? "show" : "hidden"}
        transition={{
          duration: 0.5,
        }} */
      >
        {fullPlayer && (
          <section className="w-full flex place-content-between items-center p-5">
            <IoChevronBack
              size="25px"
              onClick={() => {
                setFullPlayer(false);
              }}
              className="text-black dark:text-white"
            />
            <p className="uppercase text-lg tracking-widest">Playing</p>
            <div className="w-[25px]"></div>
          </section>
        )}
        {fullPlayer && (
          <img
            src="https://picsum.photos/250"
            alt=""
            className="mx-auto my-[75px] rounded-full"
          />
        )}

        {fullPlayer && (
          <h2 className="mx-auto my-6 max-w-max text-xl font-bold dark:text-white">
            {song.title}
          </h2>
        )}
        <p
          className={
            fullPlayer
              ? "mx-auto my-6 max-w-max dark:text-white"
              : "mx-auto my-1 max-w-max dark:text-white"
          }
        >
          {fullPlayer && song.artist}
        </p>
        <AudioPlayer
          src={playlist[currentTrack].src}
          showSkipControls={fullPlayer}
          onClickPrevious={handleClickPrev}
          onClickNext={handleClickNext}
          onEnded={handleEnd}
          customProgressBarSection={[
            RHAP_UI.CURRENT_TIME,
            RHAP_UI.PROGRESS_BAR,
            RHAP_UI.DURATION,
          ]}
          customControlsSection={[
            <p className="minified_artist hidden">{song.artist}</p>,
            RHAP_UI.MAIN_CONTROLS,
            <p className="minified_songname hidden">{song.title}</p>,
          ]}
        />
      </motion.div>
    </>
  );
};

export default Player;
