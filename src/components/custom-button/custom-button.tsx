import React from "react";

import styles from "./custom-button.module.scss";

const CustomButton = (props: any) => {
    return (
    <button {...props} className={styles.customButton}>
        {props.children}
    </button>)

}

export default CustomButton
