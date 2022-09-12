import "./App.css";
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
      <Albums />
    </div>
  );
}

export default App;
