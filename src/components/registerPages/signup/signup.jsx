import React from "react";
import "../signup/signup.scss";

export default class Signup extends React.Component {
  render() {
    return (
      <>
        <div className="signupPage">
          <header>
            <p>AnimovieList</p>
            <div className="regBtn">
              <button className="signupbtns regBtns notActive">
                <a href="#">Signup</a>
              </button>
              <button className="signupBtn regBtns active">
                <a href="#">signup</a>
              </button>
            </div>
          </header>

          <div className="signupContainer">
            <h1 className="signupTitle">Login</h1>
            <input
              className="username signupInputs"
              type="text"
              placeholder="Username"
            />
            <input
              className="password signupInputs"
              type="text"
              placeholder="Email"
            />
            <input
              className="password signupInputs"
              type="text"
              placeholder="Password"
            />
            <button type="submit" className="signupRegBtn">
              Login
            </button>
          </div>
        </div>
      </>
    );
  }
}
