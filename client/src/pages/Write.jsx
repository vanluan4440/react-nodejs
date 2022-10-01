import React, { useState } from "react";
import "./styles/Write.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const category = [
  {
    id: 1,
    name: "art",
    lable: "Art",
  },
  {
    id: 2,
    name: "science",
    lable: "Science",
  },
  {
    id: 3,
    name: "technology",
    lable: "Technology",
  },
  {
    id: 4,
    name: "cinema",
    lable: "Cinema",
  },
  {
    id: 5,
    name: "desgin",
    lable: "Desgin",
  },
  {
    id: 6,
    name: "food",
    lable: "Food",
  },
];

export const Write = () => {
  const [value, setValue] = useState("");
  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Title" />
        <div className="editerContainer">
          <ReactQuill
            className="editer"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <input style={{ display: "none" }} type="file" id="file" />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button>Upadte</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          {category.map((cat) => (
            <span key={cat.id}>
              <div className="cat">
                <input type="radio" name="cat" id={cat.name} value={cat.name} />
                <label htmlFor="art"> {cat.lable}</label>
              </div>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
