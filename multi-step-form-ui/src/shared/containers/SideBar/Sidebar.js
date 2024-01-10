import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Task from '../../components/Task/Task';

import './SideBar.css';

const sideBarInfo = [
    {
        value: 1,
        step: 'Your Info',
        path: '/info',
        id: uuidv4()
    },
    {
        value: 2,
        step: 'Select Plan',
        path: '/select-plan',
        id: uuidv4()
    },
    {
        value: 3,
        step: 'Add-Ons',
        path: '/add-ons',
        id: uuidv4()
    },
    {
        value: 4,
        step: 'Summary',
        path: '/summary',
        id: uuidv4()
    }
];

function SideBar() {
    return (
        <div className='background'>
            {sideBarInfo.map(task => (
                <div className='tasks' key={task.id}>
                    <Task task={task} />
                </div>
            ))}
        </div>
    )
}

export default SideBar;