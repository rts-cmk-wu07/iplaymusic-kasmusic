import { useContext } from "react";
import {
  AlbumsOutline,
  ContrastOutline,
  FolderOpenOutline,
  MusicalNotesOutline,
  WifiOutline,
} from "react-ionicons";
import { Link } from "react-router-dom";
import DarkMode from "../context/DarkMode";

const Nav = () => {
  const { darkMode, setDarkMode } = useContext(DarkMode);

  return (
    <>
      <nav className="flex place-content-around items-center py-2 fixed bottom-0 w-full max-w-[425px] bg-white shadow-inner z-10 dark:bg-additional">
        <Link to="/albums">
          <AlbumsOutline
            cssClasses="text-black dark:text-white"
            color={""}
            title={"album"}
            height="25px"
            width="25px"
          />{" "}
        </Link>
        <Link to="/playlist">
          <MusicalNotesOutline
            cssClasses="text-black dark:text-white"
            color={""}
            title={"playlist"}
            height="25px"
            width="25px"
          />{" "}
        </Link>
        <Link to="/">
          <WifiOutline
            cssClasses="p-1 rounded-full bg-gradient-to-r from-gradientStart to-gradientEnd dark:bg-white dark:text-primary dark:from-white dark:to-white"
            color={""}
            title={"featured"}
            height="45px"
            width="45px"
          />{" "}
        </Link>
        <div
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        >
          <ContrastOutline
            cssClasses="text-black dark:text-white"
            color={""}
            title={"light - dark"}
            height="25px"
            width="25px"
          />
        </div>
        <Link to="/categories">
          <FolderOpenOutline
            cssClasses="text-black dark:text-white"
            color={""}
            title={"categories"}
            height="25px"
            width="25px"
          />
        </Link>
      </nav>
    </>
  );
};

export default Nav;
