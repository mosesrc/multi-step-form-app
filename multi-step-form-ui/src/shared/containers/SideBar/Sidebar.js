import React, { useId } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Task from '../../components/Task/Task';

import './SideBar.css';

const sideBarInfo = [
    {
        value: 1,
        step: 'Your Info',
        id: uuidv4()
    },
    {
        value: 2,
        step: 'Select Plan',
        id: uuidv4()
    },
    {
        value: 3,
        step: 'Add-Ons',
        id: uuidv4()
    },
    {
        value: 4,
        step: 'Summary',
        id: uuidv4()
    }
];

function SideBar() {
    return (
        <div className='background'>
            {sideBarInfo.map(task => (
                <div className='tasks' key={task.id}>
                    <Task task={task}/>
                </div>
            ))}
        </div>
    )
}

export default SideBar;