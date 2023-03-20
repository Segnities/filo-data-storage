import React from 'react';
import styles from "../assets/css/Dialog.module.css";

interface Props {
    gbLeft: number;
}
const Dialog = (props:Props) => {
    const {gbLeft} = props;
    return (
        <div className={`${styles['box']} ${styles['arrow-bottom-right']}`}>
            <p className={styles['dialog-info']}>{gbLeft}<span className={styles['gb-left']}>GB LEFT</span></p>
        </div>
    );
};

export default Dialog;