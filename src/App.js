import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
function App() {
  return (
    <div className="App">
      <Header />
      <Intro />

      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
