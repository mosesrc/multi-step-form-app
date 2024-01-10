import React, { useEffect, useContext } from "react";
import { ThemeContext } from "../../context/context";
import AddOnItem from "../../components/AddOnItem/AddOnItem";

import "./SummaryPage.css";

function SummaryPage() {
    const themeCtx = useContext(ThemeContext);

    useEffect(() => {
        themeCtx.hideBtn(false);
        themeCtx.showConfirm(true)
    }, [themeCtx.hideGoBackBtn, themeCtx.showConfirmBtn]);

    return (
        <section className="summary-page">
            <h2 className="page-header">Finishing up</h2>
            <p className="page-description">Double-check everything looks OK before confirming.</p>

            <div className="summary">
                <div className="summary-header">
                    <div>
                        <h4 className="plan-header">PlanChosen(Year/Month)</h4>
                        <a href="#" className="summary-info change-summary-link">Change</a>
                    </div>
                    <p className="plan-rate">$9/mo</p> {/*Plan Rate */}
                </div>

                <hr className="line" />

                {/* this is going to be an array of add-ons chosen */}
                <div className="add-on-items">
                    <AddOnItem itemInfo={"Add-On's Chosen"} itemRate={9} />
                    <AddOnItem itemInfo={"Add-On's Chosen"} itemRate={9} />
                    <AddOnItem itemInfo={"Add-On's Chosen"} itemRate={9} />
                </div>
            </div>
            <div className="total">
                <p className="total-info">Total (per Month)</p>
                <p className="total-rate">+12/mo</p> {/*This is your total rate */}
            </div>
        </section>
    )
}

export default SummaryPage;
