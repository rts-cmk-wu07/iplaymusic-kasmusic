import "./App.css";
import PlaylistCarousel from "./components/PlaylistCarousel";
import Nav from "./templates/Nav";
import TopMenu from "./templates/TopMenu";
import Albums from "./views/Albums";
import Featured from "./views/Featured";

function App() {
  return (
    <div className="App">
      <Nav />
      <TopMenu />
      <Featured />
 Playlists-carousel
      <PlaylistCarousel />
      <Albums />
    </div>
  );
}

export default App;
