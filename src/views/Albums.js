import PageTransitions from "../animations/PageTransitions";
import Heading from "../components/Heading";
import AlbumSlider from "../templates/AlbumSlider";
import NewReleases from "../templates/NewReleases";

const Albums = () => {
  return (
    <>
      <PageTransitions>
        <Heading headingLevel="h1">All Albums</Heading>
        <AlbumSlider />
        <NewReleases />
      </PageTransitions>
    </>
  );
};

export default Albums;
