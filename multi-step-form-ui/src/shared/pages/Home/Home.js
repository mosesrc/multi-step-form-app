import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../../containers/SideBar/Sidebar";

import "./Home.css";

function Home() {

  return (
    <main>
      <div className='container'>
        <SideBar />
        <Outlet />
      </div>
      <div className="attribution">
        <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a></p>
        <p>Coded by <a href="https://www.linkedin.com/in/ryan-c-moses/">Ryan Moses</a></p>
        <p>Github Profile <a href="https://github.com/mosesrc">here</a></p>
      </div>
    </main>
  );
}

export default Home;
