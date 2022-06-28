import React from "react";
import styles from "./navText.module.scss"

const NavText = ({children}) => {
    return (
        <React.Fragment>
            <span className={`${styles.navText}`}>
                {children}
            </span>
        </React.Fragment>
    );
}

export default NavText;