import "./Card.css";
import githubIcon from "../github.png";
import linkIcon from "../external-link.png";

function Card(props) {
  return (
    <div className="card-container">
      <div className="Card-header">
        <p className="card-name">{props.title}</p>
        <a href={props.gitUrl}>
          <img src={githubIcon} alt="github-icon" className="Github-icon"></img>
        </a>
        <a
          href={props.url}
          target="_blank"
          rel="noreferrer"
          className="Live-preview"
        >
          <img
            src={linkIcon}
            alt="follow link to live page"
            className="Link-icon"
          ></img>
        </a>
      </div>
      <p>{props.info}</p>
      <img src={props.img} alt={props.alt} />
      <div className="tools">
        <p>{props.tools[0]}</p>
        <p>{props.tools[1]}</p>
        <p>{props.tools[2]}</p>
        <p>{props.tools[3]}</p>
      </div>
    </div>
  );
}
export default Card;
