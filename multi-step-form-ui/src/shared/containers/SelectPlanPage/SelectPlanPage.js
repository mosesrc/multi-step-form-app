import React from "react";
import ToggleButton from "../../components/ToggleButton/ToggleButton";

import "./SelectPlanPage.css";

function SelectPlanPage() {
    return (
        <section className="select-plan">
            <h2>Select your plan</h2>
            <p>You have the option of monthly or yearly billing.</p>
            <menu className="plan-items">
                <li>
                    <h3>Arcade</h3>
                    <p>$9/mo</p>
                </li>
                <li>
                    <h3>Advanced</h3>
                    <p>$12/mo</p>
                </li>
                <li>
                    <h3>Pro</h3>
                    <p>$15/mo</p>
                </li>
            </menu>
            <ToggleButton />
        </section>
    )
}

export default SelectPlanPage;
