import Hashtag from "../components/Hashtag";
import Hero from "../components/Hero";
const album = {
  title: "Old town road",
  songs: ["one", "two", "three", "four"],
};
const Album = () => {
  return (
    <>
      <section>
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
      </section>
    </>
  );
};

export default Album;
