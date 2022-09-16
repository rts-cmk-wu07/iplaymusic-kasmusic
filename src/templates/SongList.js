import Album from "../components/Album";
import ViewAll from "../components/ViewAll";
import { PlayCircle } from "react-ionicons";

//"flex my-4 mx-5"

const SongList = ({ songs, children }) => {
  return (
    <>
      <section className="m-2">
        {children}
        {songs &&
          songs.map((song) => {
            return (
              <Album css="flex my-4 mx-5" key={song.name}>
                <PlayCircle color={"#EE0979"} height="30px" width="30px" />
                <div className="ml-5 mr-auto">
                  <h2 className="font-bold">{song.name}</h2>
                  <p className="font-light">{song.artist}</p>
                </div>
                <p>{song.length}</p>
              </Album>
            );
          })}
      </section>
    </>
  );
};

export default SongList;
