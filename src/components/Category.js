import { IoChevronForwardOutline } from "react-icons/io5";

const Category = ({ children }) => {
  return (
    <>
      <div className="flex place-content-between my-2">
        {children}
        <IoChevronForwardOutline
          size="25px"
          className="text-black dark:text-white"
        />
      </div>
    </>
  );
};

export default Category;
