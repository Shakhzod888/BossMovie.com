import React from "react";
import Anime_1 from "../assets/anime_1.jpg";
import Anime_2 from "../assets/anime_2.jpg.png";
import Movie_1 from "../assets/movie_1.png";
import Movie_2 from "../assets/movie_2.png";
import Movie_3 from "../assets/movie_3.png";
import Movie_4 from "../assets/movie_4.png";
import Movie_5 from "../assets/movie_5.png";
import Movie_6 from "../assets/movie_6.png";

import "../page_1/homePage_1.scss";

export default class HomePage_1 extends React.Component {
  render() {
    return (
      <>
        <div className="homePage_1">
          <div className="title">
            <p className="weakTitle">Best shows of the weak</p>
            <span className="yourOption">What are you gonna watch today ?</span>
          </div>
          <div className="movies">
            <div class="swiper mySwiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div className="images">
                    <div className="black">
                      <h4>Demon Slayer</h4>
                      <p>
                        Immerse yourself in the epic battles and breathtaking
                        animation of 'Demon Slayer,' as Tanjiro's quest for
                        justice takes you on a thrilling adventure through a
                        world plagued by demons. Join the demon slaying corps
                        and witness the legend unfold!
                      </p>
                      <div className="genre">
                        <a href="#" className="category">
                          Action
                        </a>
                        <a href="#" className="category">
                          Anime
                        </a>
                        <a href="#" className="category">
                          <span>4K</span>
                        </a>
                      </div>
                    </div>

                    <img src={Anime_1} alt="" />
                  </div>
                </div>
              </div>
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
            </div>
          </div>

          <h5>New Realease</h5>
          <div className="moviesOptions">
            <div className="cartoons">
              <div>
                <img src={Movie_1} alt="" />
                <p>
                  Guardian of <br /> Galaxy vol. 3
                </p>
              </div>
              <div>
                <img src={Movie_2} alt="" />
                <p>Demon Slayer </p>
              </div>
              <div>
                <img src={Movie_3} alt="" />
                <p>Demon Slayer </p>
              </div>
              <div>
                <img src={Movie_4} alt="" />
                <p>
                  Spider-Man: <br /> Across the <br /> Spider-Verse
                </p>
              </div>
              <div>
                <img src={Movie_5} alt="" />
                <p>Fast X </p>
              </div>
              <div>
                <img src={Movie_6} alt="" />
                <p>Aoashi</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
