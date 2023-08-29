import React from "react";
import ReactDOM from "react-dom";
import "./index.css"

function Post(props) {
  return(
  <div className="post" >
    <div className="Post-2">
    <h1> {props.name} </h1>
    <div>{props.date}</div>
    <p>{props.text}</p>
    </div>
  </div>
  )
}
ReactDOM.render(
  <Post
    name="Naufel"
    date="1-Sep-2023 5:44PM"
    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
  />,
  document.querySelector("#root")
);
