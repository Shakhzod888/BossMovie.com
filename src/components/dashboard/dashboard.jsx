import React from "react";
import Home from "../assets/Home.png";
import library from "../assets/Libary.png";
import Friends from "../assets/Friends.png";
import Icon_1 from "../assets/icon_1.png";
import Icon_2 from "../assets/icon_2.png";
import Icon_3 from "../assets/icon_3.png";
import Icon_4 from "../assets/icon_4.png";

import "../dashboard/dashboard.scss";

export default class Dashboard extends React.Component {
  render() {
    return (
      <>
        <div className="dashboard">
          <h1>BossMovie.com</h1>
          <div className="line"></div>

          <div className="catigories">
            <input className="searchInput" type="text" placeholder="Search" />
            <div className="home boxes activeBox">
              <img className="images" src={Home} alt="" />
              <p>Home</p>
            </div>
            <div className="library boxes ">
              <img className="images" src={library} alt="" />
              <p>library</p>
            </div>
            <div className="friends boxes">
              <div className="boxes">
                <img className="images" src={Friends} alt="" />
                <p>Friends</p>
              </div>
              <span>1</span>
            </div>
            <div className="line_2"></div>
          </div>

          <div className="myLists">
            <h2>MY LISTS</h2>
            <div className="list">
              <img src={Icon_1} alt="" />
              <p>Shounen</p>
            </div>
            <div className="list">
              <img src={Icon_2} alt="" />
              <p>DCU</p>
            </div>
            <div className="list">
              <img src={Icon_3} alt="" />
              <p>Fantasy</p>
            </div>
            <div className="list">
              <img src={Icon_4} alt="" />
              <p> sci fi</p>
            </div>

            <button className="createList">+ Create list</button>
          </div>
        </div>
      </>
    );
  }
}
