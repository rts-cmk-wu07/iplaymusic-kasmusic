import Album from "../components/Album";
import { IoPlayCircle } from "react-icons/io5";

//"flex my-4 mx-5"

const SongList = ({ songs, children }) => {
  return (
    <>
      <section className="m-2 dark:bg-secondary">
        {children}
        {songs &&
          songs.map((song) => {
            return (
              <Album css="flex my-4 mx-5" key={song.name}>
                <IoPlayCircle className={"#EE0979"} size="30px" />
                <div className="ml-5 mr-auto ">
                  <h2 className="font-bold dark:text-white">{song.name}</h2>
                  <p className="font-light dark:text-white">{song.artist}</p>
                </div>
                <p className="dark:text-white">{song.length}</p>
              </Album>
            );
          })}
      </section>
    </>
  );
};

export default SongList;
