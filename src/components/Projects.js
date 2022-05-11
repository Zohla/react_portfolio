import Card from "./Card";
import "./Projects.css";

function Projects() {
  return (
    <div>
      <h2>Some things I've made</h2>;
      <div className="cards-container">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
export default Projects;
