import React from "react";

import "./AddOnPage.css";

function AddOnPage() {
    return (
        <section className="add-ons">
            <h2 className="page-header">Pick add-ons</h2>
            <p className="page-description">Add-ons help enhance your gaming experience.</p>
            <form className="add-ons-form">
                <menu>
                    <li>
                        <input name="online_services" type="checkbox" />
                        <div>
                            <label htmlFor="online_services">
                                <h4>Online service</h4>
                            </label>
                            <p>Access to multiplayer games</p>
                        </div>
                        <p>+$1/mo</p>
                    </li>
                    <li>
                        <input name="larger_storage" type="checkbox" />
                        <div>
                            <label htmlFor="larger_storage">
                                <h4>Larger storage</h4>
                            </label>
                            <p>Extra 1TB of cloud save</p>
                        </div>
                        <p>+$2/mo</p>
                    </li>
                    <li>
                        <input name="customizable_profile" type="checkbox" />
                        <div>
                            <label htmlFor="customizable_profile">
                                <h4>Customizable Profile</h4>
                            </label>
                            <p>Custom theme on your profile</p>
                        </div>
                        <p>+$2/mo</p>
                    </li>
                </menu>
            </form>
        </section>
    )
}

export default AddOnPage;
