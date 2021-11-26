import "./Card.css";

function Card(props) {
  const classess = "card " + [props.className];
  // props children is the info between the div in the wrapper.
  return <div className={classess}>{props.children}</div>;
}

export default Card;
