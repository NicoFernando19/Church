import React from "react";
import styles from "./button.module.scss";

const Button = ({ primary, type, children }) => {
    return (
        <React.Fragment>
            <button type={type ? type : 'button'} className={`${styles.button} ${primary ? styles.primary : styles.secondary} ${styles.text}`}>
                {children}
            </button>
        </React.Fragment>
    );
}

export default Button;