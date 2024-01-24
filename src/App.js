import logo from "./logo.svg";
import "./App.css";
import AudioProcessor from "./Component.jsx/AudioProcessor";
import Home from "./Component.jsx/Home";
import AllRoutes from "./Component.jsx/AllRoutes/AllRoutes";

function App() {
  return (
    <div className="App">
      <AllRoutes />
      {/* <AudioProcessor /> */}
    </div>
  );
}

export default App;
