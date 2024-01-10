import React from "react";
import CheckBox from "../../components/CheckBox/CheckBox";

import "./AddOnPage.css";

function AddOnPage() {
    return (
        <section className="add-ons">
            <h2 className="page-header">Pick add-ons</h2>
            <p className="page-description">Add-ons help enhance your gaming experience.</p>
            <form className="add-ons-form">
                <menu>
                    <li>
                        <CheckBox
                            labelName={'online_services'}
                            inputName={'online_services'}
                            header={'Online service'}
                            description={'Access to multiplayer games'}
                            planRate={'+$1/mo'}
                        />
                    </li>
                    <li>
                        <CheckBox
                            labelName={'larger_storage'}
                            inputName={'larger_storage'}
                            header={'Larger storage'}
                            description={'Extra 1TB of cloud save'}
                            planRate={'+$2/mo'}
                        />
                    </li>
                    <li>
                        <CheckBox
                            labelName={'customizable_profile'}
                            inputName={'customizable_profile'}
                            header={'Customizable Profile'}
                            description={'Custom theme on your profile'}
                            planRate={'+$2/mo'}
                        />
                    </li>
                </menu>
            </form>
        </section>
    )
}

export default AddOnPage;
