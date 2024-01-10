import React, { useEffect, useContext } from "react";
import { ThemeContext } from "../../context/context";

import "./InfoPage.css";

function InfoPage() {
  const themeCtx = useContext(ThemeContext);

  useEffect(() => {
    themeCtx.hideBtn(true);
    themeCtx.showConfirm(false);
  }, [themeCtx.hideGoBackBtn, themeCtx.showConfirmBtn]);

  return (
    <section className="info-page">
      <h2 className="page-header">Personal info</h2>
      <p className="page-description">Please provide your name, email address, and phone number.</p>

      <form className="info-form">
        <div>
          <label>Name</label>
          <input placeholder='e.g. Stephen King' />
        </div>
        <div>
          <label>Email Address</label>
          <input placeholder='e.g. stephenking@lorem.com' />
        </div>
        <div className='last-input'>
          <label>Phone Number</label>
          <input placeholder='e.g. +1 234 567 890' />
        </div>
      </form>
    </section>
  );
}

export default InfoPage;
