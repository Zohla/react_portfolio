import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Projects />
      <p>
        <p>
          Successfully Deployed <code>A React application</code> to Netlify with
          CircleCI
        </p>
      </p>

      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
