import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MyInmage from "./MyImage.png";
import comment from "./chat-left.svg";
import like from "./hand-thumbs-up.svg";
import share from "./share.png";
import ElonSmoke from "./elon-smoke.jpg";
import elonProfile from "./Elon.jpg";
import billgates from "./BillGates.jpg";
import billpost from "./billpost.jpg";
// import Girl from "https://images.pexels.com/photos/12074238/pexels-photo-12074238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
// import "bootstrap/dist/css/bootstrap.min.css";
// import { HandThumbsUp } from "react-bootstrap-icons";

function Post(props) {
  return (
    <div className="post">
      <div className="Post-2">
        <div className="post-head">
          <img src={props.MyInmage} width={60} height={60} alt="" />
          <div className="h1">
            <h1> {props.name} </h1>
            <div className="date">{props.date}</div>
          </div>
        </div>
        <p>{props.text}</p>
        <img src={props.img}  alt="" />
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
    MyInmage={'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1600'}
    name="Elon Sutta"
    date="1-Sep-2023 5:44PM"
    text="Artificial intelligence (AI) is the groundbreaking technology that is reshaping the way we interact with the digital world and beyond. With its ability to learn, reason, and make decisions, AI systems are becoming increasingly integrated into our daily lives, from virtual assistants and recommendation algorithms to autonomous vehicles and medical diagnosis tools. As AI continues to advance, it holds the promise of solving complex problems, improving efficiency, and enhancing our understanding of the world. However, it also raises important questions about ethics, privacy, and the future of work. In this age of AI, the potential for innovation is boundless, but the responsible development and application of AI are paramount to harnessing its transformative power for the benefit of society. 🤖🌐📈 "
    img={'https://images.pexels.com/photos/1921326/pexels-photo-1921326.jpeg?auto=compress&cs=tinysrgb&w=1600'}
    like={like}
    comment={comment}
    share={share}
    />
    <Post
    MyInmage={'https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=1600'}
    name="Bill Gates"
    date="1-Sep-2023 5:44PM"
    text="Cycling is more than just a mode of transportation; it's a journey of freedom, fitness, and exploration. With each pedal stroke, you leave behind the worries of the world and enter a realm of tranquility. The wind in your hair, the rhythm of your heart, and the open road ahead create a symphony of sensations that make every ride an exhilarating experience. Whether you're racing against the clock, meandering through scenic trails, or simply commuting to work, cycling connects you with the world in a unique way, reminding us that the simplest pleasures can be found on two wheels. So, gear up, hop on your bike, and let the adventure begin! 🚴‍♂️🌍✨ "
    img={'https://images.pexels.com/photos/3642537/pexels-photo-3642537.jpeg?auto=compress&cs=tinysrgb&w=1600'}
    like={like}
    comment={comment}
    share={share}
    />
    <Post
    MyInmage={'https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=1600'}
    name="Bill Gates"
    date="1-Sep-2023 5:44PM"
    text='"Embracing the beauty of every moment 💫 #LifeUnfiltered"'
    img={'https://images.pexels.com/photos/2010877/pexels-photo-2010877.jpeg?auto=compress&cs=tinysrgb&w=1600'}
    like={like}
    comment={comment}
    share={share}
    />
    </div>,
  document.querySelector("#root")
);
