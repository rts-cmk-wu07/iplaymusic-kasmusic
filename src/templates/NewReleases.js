import Album from "../components/Album";
import ViewAll from "../components/ViewAll";

const NewReleases = () => {
  const tempAlbums = [
    { name: "FIRST ALBUM", artist: "LOLOLOL", songs: 12 },
    { name: "SANDJWNAJKDS", artist: "SADW", songs: 22 },
    { name: "SAD", artist: "asdfd", songs: 3 },
    { name: "GDSFDS", artist: "gdftjrf", songs: 5 },
    { name: "nMKSNA", artist: "asfds", songs: 2 },
    { name: "ujsdabniu21", artist: "safhtr5", songs: 11 },
    { name: "hnuret", artist: "syhzez", songs: 23 },
    { name: "w89jhytri", artist: "ij m4398+HN", songs: 45 },
  ];
  return (
    <section className="m-2">
      <div className="flex place-content-between mx-5 mb-4">
        <h2>New Releases</h2>
        <ViewAll />
      </div>
      {tempAlbums.map((album) => {
        return (
          <Album
            css="flex my-4 mx-5"
            src="https://picsum.photos/50"
            key={album.name}
          >
            <div className="ml-5 mr-auto">
              <h2 className="font-bold">{album.name}</h2>
              <p className="font-light">{album.artist}</p>
            </div>
            <p>{album.songs} songs</p>
          </Album>
        );
      })}
    </section>
  );
};

export default NewReleases;
