import Card from "./Card";
import "./Projects.css";
import maweb from "../maweb.png";
import rainydays from "../rainydays.png";
import mars_rover from "../mars_rover.png";
/* import ReactTooltip from "react-tooltip";
 */
const icons = document.querySelectorAll(".icon");
console.log(icons);

const projectData = [
  {
    id: "1",
    liveId: "a",
    title: "MAWEB",
    info: "A blog about web development. WordPress as a headless CMS. Posts and gets data.",
    img: maweb,
    alt: "screenshot of the MAWEB blog index page",
    tools: ["HTML/CSS", "JavaScript", "API", "WordPress"],
    url: "https://maweb.netlify.app/index.html",
    gitHubTooltip: "This repo is currently private",
  },
  {
    id: "2",
    liveId: "b",
    title: "Rainydays",
    info: "A website and store for a clothing company. Uses WordPress as a headless CMS.",
    img: rainydays,
    tools: ["HTML/CSS", "JavaScript", "API", "WordPress"],
    url: "https://rainydaysclothes.netlify.app/",
    alt: "screenshot of the Rainydays landing page",
    gitUrl: "https://github.com/Zohla/rainydays",
    gitHubTooltip: "Go to GitHub repo",
  },
  {
    id: "3",
    liveId: "c",
    title: "Mars Rover Photos",
    info: "A web app that uses a NASA API to display photos taken by the Mars rovers.",
    img: mars_rover,
    alt: "screenshot of the Mars Rover Photos web app",
    tools: ["HTML/CSS", "JavaScript", "API"],
    url: "https://roverphotos.netlify.app/",
    gitUrl: "https://github.com/Zohla/Mars-Rover-Photos",
    gitHubTooltip: "Go to GitHub repo",
  },
];

function Projects() {
  return (
    <div>
      <h2>Some things I've made</h2>
      <div className="cards-container" id="cards-container">
        <Card
          id={projectData[0].id}
          liveId={projectData[0].liveId}
          title={projectData[0].title}
          info={projectData[0].info}
          tools={projectData[0].tools}
          img={projectData[0].img}
          url={projectData[0].url}
          gitHubTooltip={projectData[0].gitHubTooltip}
        />
        <Card
          id={projectData[1].id}
          liveId={projectData[1].liveId}
          title={projectData[1].title}
          info={projectData[1].info}
          tools={projectData[1].tools}
          img={projectData[1].img}
          url={projectData[1].url}
          gitUrl={projectData[1].gitUrl}
          gitHubTooltip={projectData[1].gitHubTooltip}
        />
        <Card
          id={projectData[2].id}
          liveId={projectData[2].liveId}
          title={projectData[2].title}
          info={projectData[2].info}
          tools={projectData[2].tools}
          img={projectData[2].img}
          url={projectData[2].url}
          gitUrl={projectData[2].gitUrl}
          gitHubTooltip={projectData[2].gitHubTooltip}
        />
      </div>
    </div>
  );
}
export default Projects;
