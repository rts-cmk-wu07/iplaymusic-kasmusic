import "./App.css";
import PlaylistCarousel from "./components/PlaylistCarousel";
import Nav from "./templates/nav";
import Featured from "./views/Featured";

function App() {
  return (
    <div className="App">
      <Nav />
      <Featured />
      <PlaylistCarousel />
    </div>
  );
}

export default App;
