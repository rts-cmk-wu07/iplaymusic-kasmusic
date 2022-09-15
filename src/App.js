import "./App.css";
import Nav from "./templates/Nav";
import TopMenu from "./templates/TopMenu";
import Albums from "./views/Albums";
import Featured from "./views/Featured";
import { Routes, Route } from "react-router-dom";
import Album from "./views/Album";

function App() {
  return (
    <div className="App">
      <Nav />
      <TopMenu />
      <Routes>
        <Route path="/featured" element={<Featured />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/album" element={<Album />} />
      </Routes>
    </div>
  );
}

export default App;
