import Card from "./Card";
import "./Projects.css";
import maweb from "../maweb.png";
import rainydays from "../rainydays.png";
import mars_rover from "../mars_rover.png";

const projectData = [
  {
    id: "1",
    title: "Maweb",
    info: "A blog about web development. WordPress as a headless CMS. Posts and gets data.",
    img: maweb,
    tools: "HTML/CSS, JavaScript, API, WordPress",
    url: "https://maweb.netlify.app/index.html",
  },
  {
    id: "2",
    title: "Rainydays",
    info: "A website and store for a clothing company. Uses WordPress as a headless CMS.",
    img: rainydays,
    tools: "HTML/CSS, JavaScript, API, WordPress",
    url: "https://rainydaysclothes.netlify.app/",
  },
  {
    id: "3",
    title: "Mars Rover Photos",
    info: "A web app that uses a NASA API to display photos taken by the Mars rovers.",
    img: mars_rover,
    tools: "HTML/CSS, JavaScript, API",
    url: "https://roverphotos.netlify.app/",
  },
];

function Projects() {
  return (
    <div>
      <h2>Some things I've made</h2>
      <div className="cards-container" id="cards-container">
        <Card
          title={projectData[0].title}
          info={projectData[0].info}
          tools={projectData[0].tools}
          img={projectData[0].img}
          url={projectData[0].url}
        />
        <Card
          title={projectData[1].title}
          info={projectData[1].info}
          tools={projectData[1].tools}
          img={projectData[1].img}
          url={projectData[1].url}
        />
        <Card
          title={projectData[2].title}
          info={projectData[2].info}
          tools={projectData[2].tools}
          img={projectData[2].img}
          url={projectData[2].url}
        />
      </div>
    </div>
  );
}
export default Projects;
