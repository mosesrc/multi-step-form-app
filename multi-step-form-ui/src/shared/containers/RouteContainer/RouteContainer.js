import React from 'react';
import InfoPage from '../../pages/InfoPage/InfoPage';
import SelectPlanPage from '../../pages/SelectPlanPage/SelectPlanPage';
import AddOnPage from '../../pages/AddOnPage/AddOnPage';
import SummaryPage from '../../pages/SummaryPage/SummaryPage';

import './RouteContainer.css';

function RouteContainer() {
    return (
        <div className='routes-container'>
            <InfoPage />
            {/* <SelectPlanPage /> */}
            {/* <AddOnPage /> */}
            {/* <SummaryPage /> */}
        </div>
    )
}

export default RouteContainer;