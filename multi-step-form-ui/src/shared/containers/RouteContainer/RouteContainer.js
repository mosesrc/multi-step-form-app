import React from 'react';
import InfoPage from '../InfoPage/InfoPage';
import SelectPlanPage from '../SelectPlanPage/SelectPlanPage';
import AddOnPage from '../AddOnPage/AddOnPage';

import './RouteContainer.css';

function RouteContainer() {
    return (
        <div className='routes-container'>
            {/* <InfoPage /> */}
            {/* <SelectPlanPage /> */}
            <AddOnPage />
        </div>
    )
}

export default RouteContainer;