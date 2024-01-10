import { useState } from "react";
import SideBar from "../../containers/SideBar/Sidebar";
import RouteContainer from "../../containers/RouteContainer/RouteContainer";
import MenuButtons from "../../containers/MenuButtons/MenuButtons";
import ConfirmationPage from "../ConfirmationPage/ConfirmationPage";

import "./Home.css";

function Home() {
  const [showPrevBtn, setShowPrevBtn] = useState(false)

  return (
      <main>
        <div className='container'>
          <SideBar />
          <div>
            <RouteContainer />
            <MenuButtons show={showPrevBtn} />
          </div>
          {/* <ConfirmationPage /> */}
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
