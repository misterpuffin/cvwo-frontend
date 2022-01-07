import React, { useState } from "react"
// import * as styles from "../styles/auth.module.scss"

import { LoginForm, RegisterForm, Header } from "../components"
import styles from "../styles/auth.module.scss"

const AuthPage = () => {
    const [toggleLogin, setToggleLogin] = useState(true);

    return (
        <div className={styles.page}>
            <Header></Header>
            <div className={styles.toggleContainer}>
                <div className={toggleLogin ? styles.toggleButtonFocused : styles.toggleButton} onClick={() => setToggleLogin(true)}>Login</div>
                <div className={toggleLogin ? styles.toggleButton : styles.toggleButtonFocused } onClick={() => setToggleLogin(false)}>Register</div>      
            </div>
            {toggleLogin ? <LoginForm></LoginForm> : <RegisterForm></RegisterForm>}
            
        </div>
    )
}

export default AuthPage