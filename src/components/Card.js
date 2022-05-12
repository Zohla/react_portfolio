import "./Card.css";

function Card(props) {
  return (
    <div className="card-container">
      <a href={props.url} target="_blank" rel="noreferrer">
        <p className="card-name">{props.title}</p>
        <p>{props.info}</p>
        <img src={props.img} alt="screenshot of the MAWEB blog index page" />

        <div className="tools">
          <p>{props.tools}</p>
          {/*           <p>JavaScript</p>
          <p>API</p>
          <p>WordPress</p>
 */}{" "}
        </div>
      </a>
    </div>
  );
}
export default Card;
