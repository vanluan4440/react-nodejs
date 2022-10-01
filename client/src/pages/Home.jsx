import React from "react";
import "./styles/Home.scss";
import ImgData from "./../logo/img.jpg";
import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "assss",
    desc: "ahsgdsgsgadhasdhgashdgas jadghsgadashdjkshad",
    img: ImgData,
  },
  {
    id: 2,
    title: "assss",
    desc: "ahsgdsgsgadhasdhgashdgas jadghsgadashdjkshad",
    img: ImgData,
  },
  {
    id: 3,
    title: "assss",
    desc: "ahsgdsgsgadhasdhgashdgas jadghsgadashdjkshad",
    img: ImgData,
  },
  {
    id: 4,
    title: "assss",
    desc: "ahsgdsgsgadhasdhgashdgas jadghsgadashdjkshad",
    img: ImgData,
  },
  {
    id: 5,
    title: "assss",
    desc: "ahsgdsgsgadhasdhgashdgas jadghsgadashdjkshad",
    img: ImgData,
  },
  {
    id: 6,
    title: "assss",
    desc: "ahsgdsgsgadhasdhgashdgas jadghsgadashdjkshad",
    img: ImgData,
  },
];
export const Home = () => {
  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
