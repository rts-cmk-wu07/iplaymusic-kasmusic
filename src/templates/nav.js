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
          color={"#00000"}
          title={"album"}
          height="25px"
          width="25px"
        />
        <MusicalNotesOutline
          color={"#00000"}
          title={"playlist"}
          height="25px"
          width="25px"
        />
        <WifiOutline
          cssClasses="bg-black p-1 rounded-full"
          color={"#ffffff"}
          title={"featured"}
          height="45px"
          width="45px"
        />
        <ContrastOutline
          color={"#00000"}
          title={"light - dark"}
          height="25px"
          width="25px"
        />
        <FolderOpenOutline
          color={"#00000"}
          title={"categories"}
          height="25px"
          width="25px"
        />
      </nav>
    </>
  );
};

export default Nav;
