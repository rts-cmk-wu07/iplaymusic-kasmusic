import { useContext } from "react";
import {
  IoAlbumsOutline,
  IoContrastOutline,
  IoFolderOpenOutline,
  IoMusicalNotesOutline,
  IoWifiOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import DarkMode from "../context/DarkMode";

const Nav = () => {
  const { darkMode, setDarkMode } = useContext(DarkMode);

  return (
    <>
      <nav className="z-50 flex place-content-around items-center py-2 fixed bottom-0 w-full max-w-[425px] bg-white shadow-inner dark:bg-additional">
        <Link to="/albums">
          <IoAlbumsOutline className="text-black dark:text-white" size="25px" />{" "}
        </Link>
        <Link to="/playlist">
          <IoMusicalNotesOutline
            className="text-black dark:text-white"
            size="25px"
          />{" "}
        </Link>
        <Link to="/">
          <IoWifiOutline
            className="p-1 rounded-full bg-gradient-to-r from-gradientStart to-gradientEnd dark:bg-white dark:text-primary dark:from-white dark:to-white"
            title={"featured"}
            size="45px"
          />{" "}
        </Link>
        <div
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        >
          <IoContrastOutline
            className="text-black dark:text-white"
            size="25px"
          />
        </div>
        <Link to="/categories">
          <IoFolderOpenOutline
            className="text-black dark:text-white"
            size="25px"
          />
        </Link>
      </nav>
    </>
  );
};

export default Nav;
