import Album from "../components/Album";
import ViewAll from "../components/ViewAll";
import useFetch from "../customHooks/useFetch";

const NewReleases = () => {
  const { content } = useFetch({ link: "browse/new-releases" });
  const tempAlbums = [
    { name: "FIRST ALBUM", artist: "LOLOLOL", songs: 12 },
    { name: "SANDJWNAJKDS", artist: "SADW", songs: 22 },
    { name: "SAD", artist: "asdfd", songs: 3 },
    { name: "GDSFDS", artist: "gdftjrf", songs: 5 },
    { name: "nMKSNA", artist: "asfds", songs: 2 },
    { name: "ujsdabniu21", artist: "safhtr5", songs: 11 },
    { name: "hnuret", artist: "syhzez", songs: 23 },
    { name: "w89jhytri", artist: "ij m4398+HN", songs: 45 },
    { name: "w89jhytri", artist: "ij m4398+HN", songs: 45 },
    { name: "w89jhytri", artist: "ij m4398+HN", songs: 45 },
    { name: "w89jhytri", artist: "ij m4398+HN", songs: 45 },
    { name: "w89jhytri", artist: "ij m4398+HN", songs: 45 },
  ];
  return (
    <section className="m-2 mt-8">
      <div className="flex place-content-between mx-5 mb-4">
        <h2 className="font-bold dark:text-white">New Releases</h2>
        <ViewAll />
      </div>
      {content?.albums?.items.map((item) => {
        return (
          <Album css="flex my-4 mx-5" src={item.images[2].url} key={item.name}>
            <div className="ml-5 mr-auto">
              <h2 className="font-bold dark:text-white">{item.name}</h2>
              <p className="font-light dark:text-white">
                {item.artists[0].name}
              </p>
            </div>
            <p className="dark:text-white">{item.total_tracks} songs</p>
          </Album>
        );
      })}
    </section>
  );
};

export default NewReleases;
