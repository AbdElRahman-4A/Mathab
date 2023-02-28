import "./Title.css";

export default function Title(props) {
  return <h1 className='Container font-bold'>{props.children}</h1>;
}
