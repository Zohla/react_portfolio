import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Languages from "./components/Languages";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Projects />
      <Languages />
      <About />
      <Contact />
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
