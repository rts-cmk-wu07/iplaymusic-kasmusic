import { useContext } from "react";
import {
  IoAlbumsOutline,
  IoContrastOutline,
  IoFolderOpenOutline,
  IoMusicalNotesOutline,
  IoWifiOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import IconGradients from "../components/IconGradients";
import DarkMode from "../context/DarkMode";

const Nav = () => {
  const { darkMode, setDarkMode } = useContext(DarkMode);

  return (
    <>
      <IconGradients />
      <nav className="z-50 flex place-content-around items-center py-2 fixed bottom-0 w-full max-w-[425px] bg-white shadow-inner dark:bg-additional">
        <Link to="/albums">
          <IoAlbumsOutline
            style={{ stroke: "url(#kasGradient)" }}
            className="text-black dark:text-white"
            size="25px"
          />{" "}
        </Link>
        <Link to="/playlist">
          <IoMusicalNotesOutline
            style={{ stroke: "url(#kasGradient)" }}
            className="text-black dark:text-white"
            size="25px"
          />{" "}
        </Link>
        <Link to="/">
          <IoWifiOutline
            style={{ stroke: "url(#kasGradient)" }}
            className="p-1 rounded-full bg-additional dark:bg-white dark:text-primary "
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
            style={{ stroke: "url(#kasGradient)", fill: "url(#kasGradient)" }}
            className="text-black dark:text-white"
            size="25px"
          />
        </div>
        <Link to="/categories">
          <IoFolderOpenOutline
            style={{ stroke: "url(#kasGradient)" }}
            className="text-black dark:text-white"
            size="25px"
          />
        </Link>
      </nav>
    </>
  );
};

export default Nav;
