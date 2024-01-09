import React from "react";

import "./InfoPage.css";

function InfoPage() {
  return (
    <section className="info-page">
      <h2>Personal info</h2>
      <p>Please provide your name, email address, and phone number.</p>

      <form>
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
