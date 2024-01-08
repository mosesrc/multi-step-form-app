import React from 'react';

import './Task.css';

function Task({task}) {
    return (
        <>
            <div className='steps-btn'>
                <p>{task.value}</p>
            </div>
            <div className='steps'>
                <p>{`STEP ${task.value}`}</p>
                <p>{task.step}</p>
            </div>
        </>
    );
}

export default Task;