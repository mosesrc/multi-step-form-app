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

  const navigateToPage = (func, path) => {
    const newPath = func(path);
    navigate(newPath, { state: { lastPath: path } });
  }

  const determineNextPath = (curPath) => {
    const currentPage = paths.indexOf(curPath);
    const nextPage = paths[currentPage + 1];
    return nextPage;
  };

  const determinePrevPath = (curPath) => {
    const currentPage = paths.indexOf(curPath);
    const prevPage = paths[currentPage - 1];
    return prevPage;
  }

  const nextPageHandler = (e) => {
    e.preventDefault();
    navigateToPage(determineNextPath, location.pathname);
  };

  const prevPageHandler = (e) => {
    e.preventDefault();
    navigateToPage(determinePrevPath, location.pathname);
  }

  const confirmHandler = (e) => {
    e.preventDefault();
    navigateToPage(determineNextPath, location.pathname);
  }

  return (
    <div className='toggle-button-container'>
      <Button style={"go-back"} content={"Go Back"} show={themeCtx.hideGoBackBtn} handler={prevPageHandler} />
      {!themeCtx.showConfirmBtn && <Button style={"next-step"} content={"Next Step"} handler={nextPageHandler} />}
      {themeCtx.showConfirmBtn && <Button style={'confirm'} content={'Confirm'} handler={confirmHandler} />}
    </div>
  );
}

export default MenuButtons;
