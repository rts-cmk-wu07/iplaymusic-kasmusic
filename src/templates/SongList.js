import Album from "../components/Album";
import ViewAll from "../components/ViewAll";

const SongList = ({ songs }) => {
  return (
    <>
      <section className="m-2">
        <div className="flex place-content-between mx-5 mb-4">
          <h2>All Songs</h2>
          <ViewAll />
        </div>
        {songs &&
          songs.map((song) => {
            return (
              <Album
                css="flex my-4 mx-5"
                src="https://picsum.photos/50"
                key={song.name}
              >
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
