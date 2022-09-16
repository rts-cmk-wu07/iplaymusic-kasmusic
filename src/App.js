import "./App.css";
import Nav from "./templates/Nav";
import TopMenu from "./templates/TopMenu";
import Albums from "./views/Albums";
import Featured from "./views/Featured";
import { Routes, Route } from "react-router-dom";
import Album from "./views/Album";
import Categories from "./views/Categories";
import Playlist from "./views/Playlist";
import Player from "./views/Player";
import { useState } from "react";
import DarkMode from "./context/DarkMode";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  console.log(darkMode);
  return (
    <DarkMode.Provider value={{ darkMode, setDarkMode }}>
      <div className={darkMode ? "App dark" : "App"}>
        <Nav />
        <TopMenu />
        <Player />
        <Routes>
          <Route path="/" element={<Featured />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/album" element={<Album />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </DarkMode.Provider>
  );
}

export default App;
