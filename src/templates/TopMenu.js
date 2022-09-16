import { ChevronBackSharp, SearchOutline } from "react-ionicons";
import { useLocation, useNavigate } from "react-router-dom";

const TopMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const url = location.pathname.slice(1);
  return (
    <>
      <section className="w-full flex place-content-between items-center p-5">
        <ChevronBackSharp
          height="25px"
          width="25px"
          onClick={() => {
            navigate(-1);
          }}
        />
        <p className="uppercase text-lg tracking-widest">
          {(url && url) || "FEATURED"}
        </p>
        <SearchOutline height="25px" width="25px" />
      </section>
    </>
  );
};

export default TopMenu;
