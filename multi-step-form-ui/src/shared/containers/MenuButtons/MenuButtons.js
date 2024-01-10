import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../context/context";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

import "./MenuButtons.css";

const paths = ['/info', '/select-plan', '/add-ons', '/summary', '/confirm'];

function MenuButtons() {
  const themeCtx = useContext(ThemeContext);
  const location = useLocation();
  const navigate = useNavigate();

  const determineNextPath = (curPath) => {
    const currentPage = paths.indexOf(curPath);
    const nextPage = paths[currentPage + 1];
    return nextPage;
  };

  const nextPageHandler = (e) => {
    e.preventDefault();
    themeCtx.hideBtn(false);
    const newPath = determineNextPath(location.pathname);
    navigate(newPath, {state: {lastPath: location.pathname}});
  };

  const determinePrevPath = (curPath) => {
    const currentPage = paths.indexOf(curPath);
    const prevPage = paths[currentPage - 1];
    return prevPage;
  }

  const prevPageHandler = (e) => {
    e.preventDefault();
    themeCtx.showConfirm(false);
    const newPath = determinePrevPath(location.pathname);
    navigate(newPath, {state: {lastPath: location.pathname}});
  }
  
  return (
    <div className='toggle-button-container'>
      <Button style={"go-back"} content={"Go Back"} show={themeCtx.hideGoBackBtn} handler={prevPageHandler} />
      {!themeCtx.showConfirmBtn && <Button style={"next-step"} content={"Next Step"} handler={nextPageHandler} />}
      {themeCtx.showConfirmBtn && <Button style={'confirm'} content={'Confirm'} />}
    </div>
  );
}

export default MenuButtons;
