import Heading from "../components/Heading";
import AlbumSlider from "../templates/AlbumSlider";
import NewReleases from "../templates/NewReleases";

const Albums = () => {
  return (
    <>
      <Heading headingLevel="h1">All Albums</Heading>
      <AlbumSlider />
      <NewReleases />
    </>
  );
};

export default Albums;
