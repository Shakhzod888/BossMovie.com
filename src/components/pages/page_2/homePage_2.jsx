import React from "react";
import Movie_7 from "../assets/movie_7.png";
import Movie_8 from "../assets/movie_8.png";
import Movie_9 from "../assets/movie_9.png";
import Movie_10 from "../assets/movie_10.png";
import Movie_11 from "../assets/movie_11.png";
import Movie_12 from "../assets/movie_12.png";
import Movie_13 from "../assets/movie_13.png";
import Movie_14 from "../assets/movie_14.png";
import Movie_15 from "../assets/movie_15.png";
import Movie_16 from "../assets/movie_16.png";
import Movie_17 from "../assets/movie_17.png";
import Movie_18 from "../assets/movie_18.png";

import "../page_2/homePage_2.scss";

export default class HomePage_2 extends React.Component {
  render() {
    return (
      <>
        <div className="homePage_2">
          <h4>Popular</h4>
          <div className="moviesOptions padd">
            <div className="cartoons">
              <div>
                <img src={Movie_7} alt="" />
                <p>Alien</p>
              </div>
              <div>
                <img src={Movie_8} alt="" />
                <p>
                  Avatar: Shape of <br /> Water
                </p>
              </div>
              <div>
                <img src={Movie_9} alt="" />
                <p>One Piece</p>
              </div>
              <div>
                <img src={Movie_10} alt="" />
                <p>
                  Dungeons and <br /> Dragons
                </p>
              </div>
              <div>
                <img src={Movie_11} alt="" />
                <p>Creed III</p>
              </div>
              <div>
                <img src={Movie_12} alt="" />
                <p>Creed III</p>
              </div>
            </div>
          </div>

          <h5>Movie</h5>
          <div className="moviesOptions_2">
            <div className="cartoons_2">
              <div>
                <img src={Movie_13} alt="" />
                <p>
                  Princess <br /> Mononoke
                </p>
              </div>
              <div>
                <img src={Movie_14} alt="" />
                <p>Fight Club</p>
              </div>
              <div>
                <img src={Movie_15} alt="" />
                <p>
                  Neon Genesis <br /> Evangelion
                </p>
              </div>
              <div>
                <img src={Movie_16} alt="" />
                <p>Aoashi</p>
              </div>
              <div>
                <img src={Movie_17} alt="" />
                <p>
                  Inglorious <br /> Bastards
                </p>
              </div>
              <div>
                <img src={Movie_18} alt="" />
                <p>The Lord Of the Rings</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
