import "./App.css";
import Nav from "./templates/Nav";
import TopMenu from "./templates/TopMenu";
import Albums from "./views/Albums";
import Featured from "./views/Featured";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Album from "./views/Album";
import Categories from "./views/Categories";
import Playlist from "./views/Playlist";

import Login from "./views/Login";
import Player from "./views/Player";
import { useEffect, useState } from "react";
import DarkMode from "./context/DarkMode";
import Callback from "./views/Callback";
import TokenContext from "./context/TokenContext";
import { AnimatePresence } from "framer-motion";
import MusicList from "./context/MusicList";

const Animated = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter mode={"wait"}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Featured />} key="featured" />
        <Route path="/albums" element={<Albums />} key="ablums" />
        <Route path="/album" element={<Album />} key="album" />
        <Route path="/playlist" element={<Playlist />} key="playlist" />
        <Route path="/categories" element={<Categories />} key="categories" />
        <Route path="/login" element={<Login />} key="login" />
        <Route path="/callback" element={<Callback />} key="callback" />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [darkMode, setDarkMode] = useState(false);
  var [token, setToken] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(token);
  useEffect(() => {
    // eslint-disable-next-line
    if (token == null && location.pathname != "/login") {
      navigate("/login");
    }
  }, [token, location, navigate]);
  // }, [token, location, navigate]);
  //   if (
  //     (!token && location.pathname !== "/login") ||
  //     location.pathname !== "/callback"
  //   ) {
  //     navigate("/login");
  //   }
  //   // eslint-disable-next-line
  // }, [location]);

  const [musicList, setMusicList] = useState(false);

  useEffect(() => {
    document.documentElement.classList.remove("bg-white");
    document.documentElement.classList.remove("bg-secondary");

    darkMode
      ? document.documentElement.classList.toggle("bg-secondary")
      : document.documentElement.classList.add("bg-white");
  }, [darkMode]);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      <MusicList.Provider value={{ musicList, setMusicList }}>
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
              <Animated />
            </div>
          </div>
        </DarkMode.Provider>
      </MusicList.Provider>
    </TokenContext.Provider>
  );
}

export default App;
