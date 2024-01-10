import React from 'react';
import { Outlet } from 'react-router-dom';

import './RouteContainer.css';

function RouteContainer() {
    return (
        <div className='routes-container'>
            <Outlet />
        </div>
    )
}

export default RouteContainer;