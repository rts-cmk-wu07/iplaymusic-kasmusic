import PageTransitions from "../animations/PageTransitions";
import Hashtag from "../components/Hashtag";
import Hero from "../components/Hero";
import SongList from "../templates/SongList";
const album = {
  title: "Old town road",
  songs: [
    { name: "dasnjidanwj", artist: "safjanji", length: "12:55" },
    { name: "<feeg>", artist: "wer32142", length: "12:55" },
    { name: "sA", artist: "zxr", length: "12:55" },
    { name: "DSFEFS", artist: "zxu5s", length: "12:55" },
    { name: "zres54y", artist: "zxye", length: "12:55" },
    { name: "dzherst5h", artist: "e4zst6", length: "12:55" },
    { name: "xngft", artist: "<az4r3>", length: "12:55" },
    { name: "5ezrh", artist: "<53wser5a>", length: "12:55" },
    { name: "zxntr", artist: "23ew<", length: "12:55" },
    { name: "kjbkygy", artist: "324eaw<", length: "12:55" },
  ],
};
const Album = () => {
  return (
    <>
      <PageTransitions>
        <section className="dark:bg-secondary">
          <Hero image="https://picsum.photos/425/500">
            <div className="row-start-1 row-end-2 col-start-1 col-end-1 p-6 flex place-content-between flex-col">
              <div>
                <h2 className="mt-14 text-3xl font-bold">{album.title}</h2>
                <p className="mt-4 font-bold">{album.songs.length} Songs</p>
              </div>
              <div>
                <p>Genre hashtags</p>
                <div className="flex">
                  <Hashtag text="country" />
                  <Hashtag text="awesome" />
                </div>
              </div>
            </div>
          </Hero>
          <SongList songs={album.songs}>
            <h3 className="text-base font-bold ml-6 mt-6 mb-6 dark:text-white">
              All Songs
            </h3>
          </SongList>
        </section>
      </PageTransitions>
    </>
  );
};

export default Album;
