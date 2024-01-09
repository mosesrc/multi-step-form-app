import React from 'react';

import styles from './ToggleButton.module.css';

function ToggleButton() {
    return (
        <div className={styles.toggle_button}>
            <div>
                <p className={styles.not_selected}>Monthly</p>
                <label className={styles.switch}>
                    <input type="checkbox" />
                    <span className={`${styles.slider} ${styles.round}`}></span>
                </label>
                <p className={styles.not_selected}>Yearly</p>
            </div>
        </div>
    )
}

export default ToggleButton;