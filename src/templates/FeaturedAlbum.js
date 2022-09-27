import Album from "../components/Album";
import useFetch from "../customHooks/useFetch";

const FeaturedAlbum = () => {
  const styles = {
    featuredAlbum: "grid drop-shadow ml-[25px] mr-[25px] my-[30px]",
  };

  const { content } = useFetch({ link: "featured-playlists" });

  return (
    <div>
      {content.map((item) => {
        return (
          <Album src={item?.images[0].url} css={styles.featuredAlbum}>
            <div className="mb-[84px] col-start-1 row-start-1 col-end-2 row-end-2 self-end ml-5 text-white">
              <h2 className="text-3xl font-bold max-w-[190px]">{item?.name}</h2>
              <p className="text-xs mt-5">{item?.description}</p>
            </div>
          </Album>
        );
      })}
    </div>
  );
};

export default FeaturedAlbum;
