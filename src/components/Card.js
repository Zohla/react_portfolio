import "./Card.css";

import githubIcon from "../github.png";
import linkIcon from "../external-link.png";
/* import ReactTooltip from "react-tooltip";
import GitHubTooltip from "./Tooltip";
 */
function Card(props) {
  return (
    <div className="card-container">
      <div className="Card-header">
        <p className="card-name">{props.title}</p>
        <a target="_blank" rel="noreferrer" href={props.gitUrl}>
          {/* <ReactTooltip id={props.id} place="top" effect="solid">
            {props.gitHubTooltip}
          </ReactTooltip> */}
          {/* data-tip
            data-for={props.id} */}
          <img
            src={githubIcon}
            alt="github-icon"
            className="Github-icon icon"
          ></img>
        </a>
        <a
          href={props.url}
          target="_blank"
          rel="noreferrer"
          className="Live-preview"
        >
          {/*  <ReactTooltip id={props.liveId} place="top" effect="solid">
            View live
          </ReactTooltip> */}
          <img
            src={linkIcon}
            alt="follow link to live page"
            className="Link-icon icon"
            data-tip
            data-for={props.liveId}
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
