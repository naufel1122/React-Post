import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MyInmage from "./MyImage.png";
import comment from "./chat-left.svg";
import like from "./hand-thumbs-up.svg";
import share from "./share.png";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { HandThumbsUp } from "react-bootstrap-icons";

function Post(props) {
  return (
    <div className="post">
      <div className="Post-2">
        <div className="post-head">
          <img src={props.MyInmage} width={65} height={65} alt="" />
          <div className="h1">
            <h1> {props.name} </h1>
            <div className="date">{props.date}</div>
          </div>
        </div>
        <p>{props.text}</p>
        <img src={props.MyInmage} alt="" />
        <hr className="hr" />
        <div className="postFooter">
          <div className="button">
      <img src={props.like} height={20} width={20} alt="" />
            <span>like</span>
          </div>
          <div className="button">
            <img src={props.comment} height={20} width={20} alt="" />
            <span>Comment</span>
          </div>
          <div className="button">
            <img src={props.share} height={20} width={20} alt="" />
            <span>Share</span>
          </div>
        </div>
        <hr className="hr" />
        <div className="comment-section">
          <img src={props.MyInmage} width={35} height={35} alt="" />
          <input type="text" placeholder="Write a Comment... " />
        </div>
      </div>
    </div>
  );
}
ReactDOM.render(
  <div>
  <Post
    MyInmage={MyInmage}
    name="Muhammad Naufel"
    date="1-Sep-2023 5:44PM"
    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
    like={like}
    comment={comment}
    share={share}
    />
    <Post
    MyInmage={MyInmage}
    name="Muhammad Naufel"
    date="1-Sep-2023 5:44PM"
    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
    like={like}
    comment={comment}
    share={share}
    />
    <Post
    MyInmage={MyInmage}
    name="Muhammad Naufel"
    date="1-Sep-2023 5:44PM"
    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
    like={like}
    comment={comment}
    share={share}
    />
    </div>,
  document.querySelector("#root")
);
