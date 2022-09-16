import { ChevronForwardOutline } from "react-ionicons";

const Category = ({ children }) => {
  return (
    <>
      <div className="flex place-content-between my-2">
        {children}
        <ChevronForwardOutline
          color={"#"}
          height="25px"
          width="25px"
          className="text-black dark:text-white"
        />
      </div>
    </>
  );
};

export default Category;
