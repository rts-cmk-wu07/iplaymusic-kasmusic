import "./App.css";
import Nav from "./templates/Nav";
import TopMenu from "./templates/TopMenu";
import Albums from "./views/Albums";
import Featured from "./views/Featured";
import { Routes, Route } from "react-router-dom";
import Album from "./views/Album";
import Categories from "./views/Categories";
import Playlist from "./views/Playlist";

import Login from "./views/Login";
import Player from "./views/Player";
import { useEffect, useState } from "react";
import DarkMode from "./context/DarkMode";
import Callback from "./views/Callback";
import TokenContext from "./context/TokenContext";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  var tokenState = useState(null);

  (darkMode && document.documentElement.classList.add("bg-secondary")) ||
    document.documentElement.classList.add("bg-white");

  return (
    <TokenContext.Provider value={tokenState}>
      <DarkMode.Provider value={{ darkMode, setDarkMode }}>
        <div
          className={
            darkMode
              ? "App dark dark:bg-secondary pb-10"
              : "App dark:bg-secondary pb-10"
          }
        >
          <div className={"dark:bg-secondary pb-10"}>
            <Nav />
            <TopMenu />
            <Player />
            <Routes>
              <Route path="/" element={<Featured />} />
              <Route path="/albums" element={<Albums />} />
              <Route path="/album" element={<Album />} />
              <Route path="/playlist" element={<Playlist />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/login" element={<Login />} />
              <Route path="/callback" element={<Callback />} />
            </Routes>
          </div>
        </div>
      </DarkMode.Provider>
    </TokenContext.Provider>
  );
}

export default App;
