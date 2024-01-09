import React from "react";
import SideBar from "../SideBar/Sidebar";
import RouteContainer from "../RouteContainer/RouteContainer";
import MenuButtons from "../MenuButtons/MenuButtons";

import "./Home.css";

function Home() {
  return (
    <main>
      <div className='container'>
        <SideBar />
        <div>
          <RouteContainer />
          <MenuButtons />
        </div>
      </div>
    </main>
  );
}

export default Home;
