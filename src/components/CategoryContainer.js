import { ChevronDownOutline } from "react-ionicons";
import Category from "./Category";

const CategoryContainer = ({ color, children }) => {
  const tempSubCategories = ["1", "2", "3", "4", "5", "6"];
  return (
    <>
      <section
        className={
          "p-[25px] rounded-xl flex place-content-between my-4 " + color
        }
      >
        {children}
        <ChevronDownOutline color={"#ffffff"} height="25px" width="25px" />
      </section>
      <section className="mx-">
        {tempSubCategories.map((category) => {
          return (
            <Category>
              <p className="text-lg">{category}</p>
            </Category>
          );
        })}
      </section>
    </>
  );
};

export default CategoryContainer;
