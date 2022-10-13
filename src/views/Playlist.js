import SongList from "../templates/SongList";
import PlaylistCarousel from "../components/PlaylistCarousel";
import Button from "../components/Button";
import useFetch from "../customHooks/useFetch";
import Album from "../components/Album";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import axios from "axios";
import TokenContext from "../context/TokenContext";
import PageTransitions from "../animations/PageTransitions";
import MusicList from "../context/MusicList";

const Playlist = () => {
  const [token] = useContext(TokenContext);
  const { musicList, setMusicList } = useContext(MusicList);
  const [playlistContent, setPlaylistContent] = useState([]);
  const [playlistIndex, setPlaylistIndex] = useState(0);
  const { content } = useFetch({ link: "browse/categories" });
  var categories = content?.categories?.items;
  useEffect(() => {
    categories &&
      axios
        .get(
          "https://api.spotify.com/v1/browse/categories/" +
            categories[playlistIndex].id +
            "/playlists",
          {
            headers: { Authorization: "Bearer " + token?.access_token },
          }
        )
        .then((response) => {
          axios
            .get(response.data.playlists.items[0].href, {
              headers: { Authorization: "Bearer " + token?.access_token },
            })
            .then((response) => {
              setPlaylistContent(response.data);
            });
        });
  }, [setPlaylistContent, categories, playlistIndex, token]);
  return (
    <>
      <PageTransitions>
        <div className="bg-soundwave">
          <h2 className="text-white text-5xl font-bold pt-5 mb-6 ml-7">
            Playlists
          </h2>
          <PlaylistCarousel setPlaylistIndex={setPlaylistIndex}>
            {categories?.map((item) => {
              return (
                <div className="ml-6 mr-6" key={item.id}>
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
            {categories && categories[playlistIndex].name}
          </h2>
          <h2 className="font-bold text-xl text-center dark:text-white">
            {playlistContent && playlistContent.name}
          </h2>

          <SongList songs={playlistContent?.tracks?.items}>
            <div className="flex place-content-between mx-5 mb-4">
              <h2 className="dark:text-white">All Songs</h2>
            </div>
          </SongList>
          <div className="flex place-content-center mb-10">
            <Button
              css={"w-11/12 border-solid border-4 rounded-full border-primary"}
            >
              <p
                className="font-xl text-primary tracking-widest uppercase mb-4 mt-4 font-bold"
                onClick={() => {
                  let allSongs = [];
                  playlistContent?.tracks?.items.map((song) => {
                    allSongs.push(song.track);
                  });
                  musicList
                    ? setMusicList([...musicList, ...allSongs])
                    : setMusicList([...allSongs]);
                  return;
                }}
              >
                listen all
              </p>
            </Button>
          </div>
        </div>
      </PageTransitions>
    </>
  );
};

export default Playlist;
