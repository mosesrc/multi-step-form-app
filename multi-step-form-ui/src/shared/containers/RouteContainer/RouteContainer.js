import React from 'react';
import InfoPage from '../InfoPage/InfoPage';
import SelectPlanPage from '../SelectPlanPage/SelectPlanPage';

import './RouteContainer.css';

function RouteContainer() {
    return (
        <div className='routes-container'>
            {/* <InfoPage /> */}
            <SelectPlanPage />
        </div>
    )
}

export default RouteContainer;