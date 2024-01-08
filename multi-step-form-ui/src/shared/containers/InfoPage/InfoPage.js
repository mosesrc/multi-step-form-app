import React from 'react';

import './InfoPage.css';

function InfoPage() {
    return (
        <div>
            <h2>Personal info</h2>
            <p>Please provide your name, email address, and phone number.</p>

            <form>
                <div>
                    <lable>Name</lable>
                    <input placeholder='e.g. Stephen King' />
                </div>
                <div>
                    <lable>Email Address</lable>
                    <input placeholder='e.g. stephenking@lorem.com' />
                </div>
                <div>
                    <lable>Phone Number</lable>
                    <input placeholder='e.g. +1 234 567 890' />
                </div>
            </form>
        </div>
    )
}

export default InfoPage;