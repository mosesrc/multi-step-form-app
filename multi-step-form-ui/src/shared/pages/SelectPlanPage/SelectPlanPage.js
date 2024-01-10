import React, { useEffect, useContext } from "react";
import { ThemeContext } from "../../context/context";
import ToggleButton from "../../components/ToggleButton/ToggleButton";
import { ReactComponent as ArcadeIcon } from '../../../assets/images/icon-arcade.svg';
import { ReactComponent as AdvancedIcon } from '../../../assets/images/icon-advanced.svg';
import { ReactComponent as ProIcon } from '../../../assets/images/icon-pro.svg';

import "./SelectPlanPage.css";

function SelectPlanPage() {
    const themeCtx = useContext(ThemeContext);

    useEffect(() => {
        themeCtx.hideBtn(false);
        themeCtx.showConfirm(false);
    }, [themeCtx.hideGoBackBtn, themeCtx.showConfirmBtn]); 

    return (
        <section className="select-plan">
            <h2 className="page-header">Select your plan</h2>
            <p className="page-description">You have the option of monthly or yearly billing.</p>
            <menu className="plan-items">
                <li>
                    <ArcadeIcon />
                    <h4>Arcade</h4>
                    <p>$9/mo</p>
                </li>
                <li>
                    <AdvancedIcon />
                    <h4>Advanced</h4>
                    <p>$12/mo</p>
                </li>
                <li>
                    <ProIcon />
                    <h4>Pro</h4>
                    <p>$15/mo</p>
                </li>
            </menu>
            <ToggleButton />
        </section>
    )
}

export default SelectPlanPage;
