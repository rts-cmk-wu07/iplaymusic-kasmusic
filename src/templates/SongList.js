import Album from "../components/Album";
import { IoPlayCircle } from "react-icons/io5";
import MusicList from "../context/MusicList";
import { useContext } from "react";

const SongList = ({ songs, children }) => {
  const { musicList, setMusicList } = useContext(MusicList);
  const formatTime = (milliseconds) => {
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / 1000 / 60) % 60);

    return [
      minutes.toString().padStart(2, "0"),
      seconds.toString().padStart(2, "0"),
    ].join(":");
  };

  return (
    <>
      <section className="m-2 dark:bg-secondary">
        {children}
        {songs &&
          songs.map((song) => {
            return (
              <Album css="flex my-4 mx-5" key={song?.id}>
                <IoPlayCircle
                  className={"#EE0979"}
                  size="30px"
                  onClick={() => {
                    musicList
                      ? setMusicList([...musicList, song])
                      : setMusicList([song]);
                  }}
                />
                <div className="ml-5 mr-auto ">
                  <h2 className="font-bold dark:text-white">
                    {song && song?.name}
                  </h2>
                  <p className="font-light dark:text-white">
                    {song && song?.album?.artists[0].name}
                  </p>
                </div>
                <p className="dark:text-white">
                  {formatTime(song && song?.duration_ms)}
                </p>
              </Album>
            );
          })}
      </section>
    </>
  );
};

export default SongList;
