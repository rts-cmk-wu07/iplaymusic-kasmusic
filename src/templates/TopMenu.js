import { ChevronBackSharp, SearchOutline } from "react-ionicons";
import { useLocation } from "react-router-dom";

const TopMenu = () => {
  const location = useLocation();
  const url = location.pathname.slice(1);
  console.log(url);
  return (
    <>
      <section className="w-full flex place-content-between items-center p-5">
        <ChevronBackSharp height="25px" width="25px" />
        <p className="uppercase text-lg tracking-widest">
          {(url && url) || "INDEX"}
        </p>
        <SearchOutline height="25px" width="25px" />
      </section>
    </>
  );
};

export default TopMenu;
