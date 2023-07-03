import React from "react";
import "./login.scss";

export default class Login extends React.Component {
  render() {
    return (
      <>
        <div className="loginPage">
          <header>
            <p>AnimovieList</p>
            <div className="regBtn">
              <button className="loginBtn regBtns active">
                <a href="#">Login</a>
              </button>
              <button className="signupBtn regBtns notActive">
                <a href="#">signup</a>
              </button>
            </div>
          </header>

          <div className="loginContainer">
            <h1 className="loginTitle">Login</h1>
            <input
              className="username loginInputs"
              type="text"
              placeholder="Username"
            />
            <input
              className="password loginInputs"
              type="text"
              placeholder="Password"
            />
            <button type="submit" className="loginRegBtn">
              Login
            </button>
          </div>
        </div>
      </>
    );
  }
}
