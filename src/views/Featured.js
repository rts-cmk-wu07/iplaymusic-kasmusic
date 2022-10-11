import PageTransitions from "../animations/PageTransitions";
import Heading from "../components/Heading";
import FeaturedAlbum from "../templates/FeaturedAlbum";

const Featured = () => {
  return (
    <PageTransitions>
      <div>
        <Heading headingLevel={"h1"}>Featured</Heading>
        <FeaturedAlbum />
      </div>
    </PageTransitions>
  );
};

export default Featured;
