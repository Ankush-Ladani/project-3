import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import "./index.css";
import Main from "./components/Main";
function App() {
  return (
    <div className="App">
      <div className="main-div">
        <Navbar></Navbar>
        <Main></Main>
      </div>
    </div>
  );
}

export default App;
