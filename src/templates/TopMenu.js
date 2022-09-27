import { IoChevronBack, IoSearchOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";

const TopMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const url = location.pathname.slice(1);
  return (
    <>
      <section className="w-full flex place-content-between items-center p-5 dark:bg-secondary dark:text-white">
        <IoChevronBack
          size="25px"
          onClick={() => {
            navigate(-1);
          }}
          className="text-black dark:text-white"
        />
        <p className="uppercase text-lg tracking-widest">
          {(url && url) || "FEATURED"}
        </p>
        <IoSearchOutline size="25px" className="text-black dark:text-white" />
      </section>
    </>
  );
};

export default TopMenu;
