// AUDIO PLAYER PACKAGE
// https://www.npmjs.com/package/react-h5-audio-player
//
// DOCUMENTATION:
// https://lhz516.github.io/react-h5-audio-player/?path=/docs/layouts-advanced--custom-additional-controls
//

import { useContext, useRef, useState } from "react";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import { IoChevronBack, IoClose, IoPlayCircle } from "react-icons/io5";
import { motion } from "framer-motion";
import Album from "../components/Album";
import "../react-player.css";
import MusicList from "../context/MusicList";

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

  const formatTime = (milliseconds) => {
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / 1000 / 60) % 60);

    return [
      minutes.toString().padStart(2, "0"),
      seconds.toString().padStart(2, "0"),
    ].join(":");
  };

  console.log(musicList);

  return (
    <>
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
              !e.target.classList.contains("rhap_progress-container") &&
              !e.target.classList.contains("rhap_volume-indicator") &&
              !e.target.classList.contains("rhap_volume-bar-area") &&
              !e.target.classList.contains("rhap_volume-bar")
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
              ? "dark:bg-secondary overflow-scroll fixed z-40 max-w-[425px] w-full bg-white top-[0px] "
              : "dark:bg-secondary fixed z-40 max-w-[425px] w-full bg-white bottom-[62px] "
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
              height: "105px",
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
            src={musicList[currentTrack]?.preview_url}
            volume={0.5}
            showSkipControls={fullPlayer}
            onClickPrevious={handleClickPrev}
            onClickNext={handleClickNext}
            onEnded={handleEnd}
            customProgressBarSection={[
              RHAP_UI.CURRENT_TIME,
              RHAP_UI.PROGRESS_BAR,
              RHAP_UI.VOLUME,
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
          {fullPlayer && musicList && (
            <section>
              <h2 className="text-3xl dark:text-white m-auto w-fit">
                Custom playlist
              </h2>
              {musicList.map((song, index) => {
                return (
                  <Album css="flex my-4 mx-5" key={song.track.name}>
                    <IoPlayCircle
                      className={"#EE0979"}
                      size="30px"
                      onClick={() => {
                        setCurrentTrack(index);
                      }}
                    />
                    <div className="ml-5 mr-auto ">
                      <h2 className="font-bold dark:text-white">{song.name}</h2>
                      <p className="font-light dark:text-white">
                        {song.artists[0].name}
                      </p>
                    </div>
                    <p className="dark:text-white">
                      {formatTime(song.duration_ms)}
                    </p>
                    <IoClose
                      className={"#EE0979 ml-2"}
                      size="15px"
                      onClick={() => {
                        if (currentTrack >= index && currentTrack !== 0) {
                          setCurrentTrack(currentTrack - 1);
                        }
                        musicList.splice(index, 1);
                        console.log(musicList);
                        console.log(index);
                      }}
                    />
                  </Album>
                );
              })}
            </section>
          )}
        </motion.div>
      )}
    </>
  );
};

export default Player;
