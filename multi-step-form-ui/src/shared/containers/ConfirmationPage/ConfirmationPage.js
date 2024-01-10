import React from "react";
import {ReactComponent as ConfirmationIcon} from '../../../assets/images/icon-thank-you.svg'

import "./ConfirmationPage.css";

function ConfirmationPage() {
    return (
        <section className="confirmation-page">
            <div>
                <ConfirmationIcon />
                <h1 className="confirmation-header">Thank you!</h1>
                <p className="confirmation-description">
                    Thanks for confirming your subscription! We hope you have fun
                    using our platform. If you ever need support, please feel free
                    to email us at support@loremgaming.com.
                </p>
            </div>
        </section>
    )
}

export default ConfirmationPage;
