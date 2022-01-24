import React from "react"
import { connect } from "react-redux"

import styles from "./message.module.scss"

const Message = (props: any) => {
    if (props.message === "loading") {
        return (
        <div className={styles.message}>
            <div className={styles.ellipsis}></div>
        </div>)
    } else {
        return (
        <div className={props.error ? styles.error : styles.success}>
            {props.message}
        </div>)
    }
}

const mapStateToProps = (state: any) => {
    const { message, error } = state.message;
    return {
        message, 
        error
    }
}

export default connect(mapStateToProps)(Message)