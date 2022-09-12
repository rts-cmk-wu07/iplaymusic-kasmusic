import {
  AlbumsOutline,
  ContrastOutline,
  FolderOpenOutline,
  MusicalNotesOutline,
  WifiOutline,
} from "react-ionicons";

const Nav = () => {
  return (
    <>
      <nav className="flex place-content-around items-center py-2 fixed bottom-0 w-full max-w-[425px]">
        <AlbumsOutline
          cssClasses="GRADIENTTEST"
          color={"#000000"}
          title={"album"}
          height="25px"
          width="25px"
        />
        <MusicalNotesOutline
          color={"#000000"}
          title={"playlist"}
          height="25px"
          width="25px"
        />
        <WifiOutline
          cssClasses="p-1 rounded-full bg-gradient-to-r from-gradientStart to-gradientEnd"
          color={"#ffffff"}
          title={"featured"}
          height="45px"
          width="45px"
        />
        <ContrastOutline
          color={"#000000"}
          title={"light - dark"}
          height="25px"
          width="25px"
        />
        <FolderOpenOutline
          color={"#000000"}
          title={"categories"}
          height="25px"
          width="25px"
        />
      </nav>
    </>
  );
};

export default Nav;
