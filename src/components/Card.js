import "./Card.css";
import maweb from "../maweb.png";

/* const projectData = [
  {
    id: "1",
    title: "Maweb",
    info: "A blog about web development. WordPress as a headless CMS. Posts and gets data.",
    img: "../maweb.png",
    tools: "HTML/CSS, JavaScript, API, WordPress",
  },
  {
    id: "2",
    title: "Rainydays",
    info: "A website and store for a clothing company. Uses WordPress as a headless CMS.",
    img: "../maweb.png",
    tools: "HTML/CSS, JavaScript, API, WordPress",
  },
  {
    id: "3",
    title: "Mars Rover Photos",
    info: "A web app that uses a NASA API to display photos taken by the Mars rovers.",
    img: "../maweb.png",
    tools: "HTML/CSS, JavaScript, API",
  },
]; */

function Card() {
  return (
    <div className="card-container">
      <p>Maweb</p>
      <p>
        A blog about web development. WordPress as a headless CMS. Posts and
        gets data.
      </p>
      <img src={maweb} alt="screenshot of the MAWEB blog index page" />
      <div className="tools">
        <p>HTML/CSS</p>
        <p>JavaScript</p>
        <p>API</p>
        <p>WordPress</p>
      </div>
    </div>
  );
}
export default Card;
