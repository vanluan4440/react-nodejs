import React from "react";
import "./styles/Single.scss";
import Edit from "./../logo/edit.png";
import Delete from "./../logo/delete.png";
import { Link } from "react-router-dom";
import { Menu } from "../components/Menu";

export const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://www.chamsocpet.com/wp-content/uploads/2021/12/kham-pha-nhung-dieu-thu-vi-ve-meo-4.jpg"
          alt=""
        />
        <div className="user">
          <img
            src="https://www.chamsocpet.com/wp-content/uploads/2021/12/kham-pha-nhung-dieu-thu-vi-ve-meo-4.jpg"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Poster 2 day ago</p>
          </div>
          <div className="edit">
            <Link to={"/write?edit=2"}>
              <img src={Edit} alt="" />
            </Link>

            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>
            hagsdha asdhgasd hagsdhasgdhasdgasd hjsdghs
          </h1>
          <p>
            hagsdhasd hagsdhasd hgasdgashd hgdashdhasgdhasd asdhj ádas
          </p>
      </div>
      <Menu/>
    </div>
  );
};
