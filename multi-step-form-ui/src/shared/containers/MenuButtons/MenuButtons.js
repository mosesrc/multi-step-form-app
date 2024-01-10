import React from "react";
import Button from "../../components/Button/Button";

import "./MenuButtons.css";

function MenuButtons({show}) {
  return (
    <div className='toggle-button-container'>
      <Button style={"go-back"} content={"Go Back"} show={show} />
      <Button style={"next-step"} content={"Next Step"} />
      {show && <Button style={'confirm'} content={'Confirm'} />}
    </div>
  );
}

export default MenuButtons;
