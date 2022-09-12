import "./App.css";
import Nav from "./templates/Nav";
import TopMenu from "./templates/TopMenu";
import Featured from "./views/Featured";

function App() {
  return (
    <div className="App">
      <Nav />
      <TopMenu />
      <Featured />
      <Featured />
      <Featured />
    </div>
  );
}

export default App;
