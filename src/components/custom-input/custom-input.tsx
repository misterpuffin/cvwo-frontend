import React, { useState } from "react"

// @ts-ignore
import { control } from "react-validation";

import styles from "./custom-input.module.scss"

const CustomInput = (props: any) => {
    return(
    <div>
        <input
            {...props}
            className={styles.input}
        ></input>
        {props.isChanged && props.isUsed && props.error}
    </div>)
}

export default control(CustomInput)