import "./Card.css";

function Card(props) {
  return (
    <div className="card-container">
      <a href={props.url} target="_blank" rel="noreferrer">
        <p className="card-name">{props.title}</p>
        <p>{props.info}</p>
        <img src={props.img} alt={props.alt} />
        <div className="tools">
          <p>{props.tools}</p>
        </div>
      </a>
    </div>
  );
}
export default Card;
