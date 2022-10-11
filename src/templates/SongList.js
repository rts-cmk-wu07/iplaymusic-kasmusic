import Album from "../components/Album";
import { IoPlayCircle } from "react-icons/io5";

//"flex my-4 mx-5"

const SongList = ({ songs, children }) => {
  //
  const formatTime = (milliseconds) => {
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
    const hours = Math.floor((milliseconds / 1000 / 60 / 60) % 24);

    return [
      /* hours.toString().padStart(2, "0"), */
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
              <Album css="flex my-4 mx-5" key={song.track.name}>
                <IoPlayCircle className={"#EE0979"} size="30px" />
                <div className="ml-5 mr-auto ">
                  <h2 className="font-bold dark:text-white">
                    {song.track.name}
                  </h2>
                  <p className="font-light dark:text-white">
                    {song.track.album.artists[0].name}
                  </p>
                </div>
                <p className="dark:text-white">
                  {formatTime(song.track.duration_ms)}
                </p>
              </Album>
            );
          })}
      </section>
    </>
  );
};

export default SongList;
