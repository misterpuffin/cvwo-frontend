import React from "react"

import styles from "./error.module.scss"

const Error = (props: any) => {

    return (
    <div className={styles.error}>
        {props.children}
    </div>)
}

export default Error