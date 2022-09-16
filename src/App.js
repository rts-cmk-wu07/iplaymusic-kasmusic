import "./App.css";
import Nav from "./templates/Nav";
import TopMenu from "./templates/TopMenu";
import Albums from "./views/Albums";
import Featured from "./views/Featured";
import { Routes, Route } from "react-router-dom";
import Album from "./views/Album";
import Categories from "./views/Categories";
import Player from "./views/Player";

function App() {
  return (
    <div className="App">
      <Nav />
      <TopMenu />
      <Player />
      <Routes>
        <Route path="/" element={<Featured />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/album" element={<Album />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
