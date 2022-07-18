import "./App.css";
import NavBar from "./Component/NavBar";
import Shop from "./Component/Shop";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Shop />
      </div>
    </>
  );
}

export default App;
