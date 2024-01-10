import React from 'react';
import { NavLink } from 'react-router-dom';

import './Task.css';

function Task({ task }) {
    return (
        <>
            <NavLink to={task.path} className={({isActive}) => isActive ? 'active' : ''}>
                <div className='steps-btn'>
                    <p>{task.value}</p>
                </div>
            </NavLink>
            <div className='steps'>
                <p>{`STEP ${task.value}`}</p>
                <p>{task.step}</p>
            </div>
        </>
    );
}

export default Task;