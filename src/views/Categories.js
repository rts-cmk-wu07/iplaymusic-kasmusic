import PageTransitions from "../animations/PageTransitions";
import CategoryContainer from "../components/CategoryContainer";
import Heading from "../components/Heading";

const Categories = () => {
  const categoryColors = [
    "bg-primary",
    "bg-red",
    "bg-yellow",
    "bg-orange",
    "bg-green",
    "bg-darkGreen",
    "bg-cyan",
    "bg-blue",
    "bg-darkBlue",
  ];

  const categories = [
    "Alternative",
    "Blues",
    "Classical",
    "Country",
    "Dance",
    "Electronic",
    "Fitness & Workout",
    "Hip-Hop/Rap",
    "Industrial",
  ];
  return (
    <>
      <PageTransitions>
        <section>
          <Heading headingLevel="h1">Categories</Heading>
          {categories.map((category, i) => {
            return (
              <CategoryContainer color={categoryColors[i]}>
                <h2 className="text-white font-bold">{category}</h2>
              </CategoryContainer>
            );
          })}
        </section>
      </PageTransitions>
    </>
  );
};

export default Categories;
