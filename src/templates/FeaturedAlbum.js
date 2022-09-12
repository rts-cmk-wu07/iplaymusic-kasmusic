import Album from "../components/Album";

const FeaturedAlbum = () => {
  const styles = {
    featuredAlbum: "grid drop-shadow ml-[25px] mr-[25px]",
  };
  return (
    <div>
      <Album
        src={"./images/pexels-photo-1816943.png"}
        css={styles.featuredAlbum}
      >
        <div className="mb-[84px] col-start-1 row-start-1 col-end-2 row-end-2 self-end ml-5 text-white">
          <h2 className="text-3xl font-bold max-w-[190px]">
            The Greatest Showman
          </h2>
          <p className="text-xs mt-5">Soundtrack</p>
        </div>
      </Album>
    </div>
  );
};

export default FeaturedAlbum;
