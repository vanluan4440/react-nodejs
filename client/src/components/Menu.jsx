import React from "react";
import "./styles/Menu.scss";
const posts = [
  {
    id: 1,
    title: "assss",
    desc: "ahsgdsgsgadhasdhgashdgas jadghsgadashdjkshad",
    img: "https://www.chamsocpet.com/wp-content/uploads/2021/12/kham-pha-nhung-dieu-thu-vi-ve-meo-4.jpg",
  },
  {
    id: 2,
    title: "assss",
    desc: "ahsgdsgsgadhasdhgashdgas jadghsgadashdjkshad",
    img: "https://www.chamsocpet.com/wp-content/uploads/2021/12/kham-pha-nhung-dieu-thu-vi-ve-meo-4.jpg",
  },
  {
    id: 3,
    title: "assss",
    desc: "ahsgdsgsgadhasdhgashdgas jadghsgadashdjkshad",
    img: "https://www.chamsocpet.com/wp-content/uploads/2021/12/kham-pha-nhung-dieu-thu-vi-ve-meo-4.jpg",
  },
  {
    id: 4,
    title: "assss",
    desc: "ahsgdsgsgadhasdhgashdgas jadghsgadashdjkshad",
    img: "https://www.chamsocpet.com/wp-content/uploads/2021/12/kham-pha-nhung-dieu-thu-vi-ve-meo-4.jpg",
  },
  {
    id: 5,
    title: "assss",
    desc: "ahsgdsgsgadhasdhgashdgas jadghsgadashdjkshad",
    img: "https://www.chamsocpet.com/wp-content/uploads/2021/12/kham-pha-nhung-dieu-thu-vi-ve-meo-4.jpg",
  },
  {
    id: 6,
    title: "assss",
    desc: "ahsgdsgsgadhasdhgashdgas jadghsgadashdjkshad",
    img: "https://www.chamsocpet.com/wp-content/uploads/2021/12/kham-pha-nhung-dieu-thu-vi-ve-meo-4.jpg",
  },
];

export const Menu = () => {
  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {
        posts.map(post=>(
            <div className="post">
                <img src={post.img} alt="" />
                <h2>{post.title}</h2>
                <button>Read More</button>
            </div>
        ))
      }
    </div>
  );
};
