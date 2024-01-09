import React from 'react';

import styles from '../CheckBox/CheckBox.module.css';

function CheckBox({ labelName, inputName, header, description, planRate }) {
    return (
        <label htmlFor={labelName} className={styles.checkbox_container}>
            <input name={inputName} type="checkbox" />
            <span className={styles.checkmark}></span>
            <div className={styles.input_info}>
                <h4 className={styles.checkbox_header}>{header}</h4>
                <p className={styles.checkbox_description}>{description}</p>
            </div>
            <p className={styles.plan_rate}>{planRate}</p>
        </label>
    )
}

export default CheckBox;