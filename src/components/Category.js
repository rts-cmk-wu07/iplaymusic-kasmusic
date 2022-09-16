import { ChevronForwardOutline } from "react-ionicons";

const Category = ({ children }) => {
  return (
    <>
      <div className="flex place-content-between my-2">
        {children}
        <ChevronForwardOutline color={"#000000"} height="25px" width="25px" />
      </div>
    </>
  );
};

export default Category;
