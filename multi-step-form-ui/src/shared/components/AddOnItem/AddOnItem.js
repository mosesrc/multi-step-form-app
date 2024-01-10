import React from 'react';

import './AddOnItem.css';

function AddOnItem({itemInfo, itemRate}) {
    return (
        <div className='item'>
            <p className="item-info">{itemInfo}</p>
            <p className='item-rate'>{`$${itemRate}/mo`}</p>
        </div>
    )
}

export default AddOnItem;