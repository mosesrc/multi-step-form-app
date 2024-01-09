import React from "react";
import Button from "../../components/Button/Button";

import "./ToggleButtons.css";

function ToggleButtons() {
  return (
    <div className='toggle-button-container'>
      <Button style={"go-back"} content={"Go Back"} />
      <Button style={"next-step"} content={"Next Step"} />
    </div>
  );
}

export default ToggleButtons;
