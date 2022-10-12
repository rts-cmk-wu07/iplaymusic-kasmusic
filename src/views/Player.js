// AUDIO PLAYER PACKAGE
// https://www.npmjs.com/package/react-h5-audio-player
//
// DOCUMENTATION:
// https://lhz516.github.io/react-h5-audio-player/?path=/docs/layouts-advanced--custom-additional-controls
//

import { useContext, useRef, useState } from "react";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import { IoChevronBack } from "react-icons/io5";
import { motion } from "framer-motion";
import "../react-player.css";
import MusicList from "../context/MusicList";
import Webplayback from "../components/Webplayback";

const Player = () => {
  const { musicList } = useContext(MusicList);

  const [fullPlayer, setFullPlayer] = useState(false);

  const [currentTrack, setCurrentTrack] = useState(0);
  const handleClickPrev = () => {
    setCurrentTrack((currentTrack) =>
      currentTrack === 0 ? musicList.length - 1 : currentTrack - 1
    );
  };
  const handleClickNext = () => {
    setCurrentTrack((currentTrack) =>
      currentTrack < musicList.length - 1 ? currentTrack + 1 : 0
    );
  };
  const handleEnd = () => {
    setCurrentTrack((currentTrack) =>
      currentTrack < musicList.length - 1 ? currentTrack + 1 : 0
    );
  };

  let playerContainer = useRef();

  const [player, setPlayer] = useState(undefined);

  return (
    <>
      <Webplayback player={player} setPlayer={setPlayer} />
      {musicList && (
        <motion.div
          ref={playerContainer}
          onClick={(e) => {
            if (
              // eslint-disable-next-line
              e.target.tagName != "svg" &&
              // eslint-disable-next-line
              e.target.tagName != "path" &&
              !e.target.classList.contains("rhap_progress-indicator") &&
              !e.target.classList.contains("rhap_progress-container")
            ) {
              playerContainer?.current?.setAttribute(
                "id",
                fullPlayer ? "minified" : "maxified"
              );
              setFullPlayer(!fullPlayer);
            }
          }}
          className={
            fullPlayer
              ? "dark:bg-secondary overflow-hidden fixed z-40 max-w-[425px] w-full bg-white top-[0px] "
              : "dark:bg-secondary overflow-hidden fixed z-40 max-w-[425px] w-full bg-white bottom-[62px] "
          }
          id="minified"
          variants={{
            show: {
              top: "0px",
              bottom: "unset",
              height: "100vh",
            },
            hidden: {
              top: "unset",
              bottom: "62px",
              height: "89px",
            },
          }}
          animate={fullPlayer ? "show" : "hidden"}
          transition={{
            duration: 0.5,
          }}
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
              <p className="uppercase text-lg tracking-widest dark:text-white">
                Playing
              </p>
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
              {musicList[currentTrack]?.name}
            </h2>
          )}
          <p
            className={
              fullPlayer
                ? "mx-auto my-6 max-w-max dark:text-white"
                : "mx-auto my-1 max-w-max dark:text-white"
            }
          >
            {fullPlayer && musicList[currentTrack]?.artists[0].name}
          </p>
          <AudioPlayer
            src={musicList[currentTrack]?.uri}
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
              <p className="minified_artist hidden dark:text-white">
                {musicList[currentTrack]?.name}
              </p>,
              RHAP_UI.MAIN_CONTROLS,
              <p className="minified_songname hidden dark:text-white">
                {musicList[currentTrack]?.artists[0].name}
              </p>,
            ]}
          />
        </motion.div>
      )}
    </>
  );
};

export default Player;
