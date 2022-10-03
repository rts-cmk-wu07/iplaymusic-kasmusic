import SongList from "../templates/SongList";
import PlaylistCarousel from "../components/PlaylistCarousel";
import Button from "../components/Button";
import useFetch from "../customHooks/useFetch";
import Album from "../components/Album";
const Playlist = () => {
  const { content } = useFetch({ link: "browse/categories" });
  var categories = content?.categories?.items;
  const playlist = {
    title: "Rock ballads",
    songs: [
      { name: "rock", artist: "rock artist 33", length: "13:37" },
      { name: "n", artist: "n artist 11", length: "4:20" },
      { name: "roll", artist: "roll artist 22", length: "6:99" },
      { name: "wanted", artist: "dead", length: "12:55" },
      { name: "or", artist: "alive", length: "12:55" },
      { name: "dont", artist: "stop", length: "12:55" },
      { name: "me", artist: "now", length: "12:55" },
      { name: "im", artist: "having", length: "12:55" },
      { name: "such", artist: "a good time", length: "12:55" },
      { name: "im having", artist: "a ball", length: "12:55" },
    ],
  };
  console.log(content);
  return (
    <>
      <div className="bg-soundwave">
        <h2 className="text-white text-5xl font-bold pt-5 mb-6 ml-7">
          Playlists
        </h2>
        <PlaylistCarousel>
          {categories?.map((item) => {
            return (
              <div className="ml-6 mr-6">
                <Album>
                  <img
                    className="w-[155px] h-[155px]"
                    src={item.icons[0].url}
                    alt={item.name}
                  ></img>
                </Album>
              </div>
            );
          })}
        </PlaylistCarousel>
      </div>
      <div>
        <h2 className="font-bold text-xl text-center mt-4 dark:text-white">
          Top 50
        </h2>
        <h2 className="font-bold text-xl text-center dark:text-white">
          {playlist.title}
        </h2>

        <SongList songs={playlist.songs}>
          <div className="flex place-content-between mx-5 mb-4">
            <h2 className="dark:text-white">All Songs</h2>
          </div>
        </SongList>
        <div className="flex place-content-center">
          <Button
            css={"w-11/12 border-solid border-4 rounded-full border-primary"}
          >
            <p className="font-xl text-primary tracking-widest uppercase mb-4 mt-4 font-bold">
              listen all
            </p>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Playlist;
