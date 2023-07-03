import React from "react";
import Register from "./registerPages/register";

import "./index.scss";
import HomePage_1 from "./pages/page_1/homePage_1";
import Dashboard from "./dashboard/dashboard";
import HomePage_2 from "./pages/page_2/homePage_2";

export default class Index extends React.Component {
  render() {
    return (
      <>
        <Register />

        <div className="moviePages">
          <Dashboard />
          <HomePage_1 />
        </div>
        <HomePage_2 />
      </>
    );
  }
}
