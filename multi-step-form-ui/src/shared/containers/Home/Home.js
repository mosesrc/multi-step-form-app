import React from "react";
import SideBar from "../SideBar/Sidebar";
import RouteContainer from "../RouteContainer/RouteContainer";
import MenuButtons from "../MenuButtons/MenuButtons";
import ConfirmationPage from "../ConfirmationPage/ConfirmationPage";

import "./Home.css";

function Home() {
  return (
    <main>
      <div className='container'>
        <SideBar />
        {/* <div>
          <RouteContainer />
          <MenuButtons />
        </div> */}
        <ConfirmationPage />
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
