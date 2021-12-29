import React from "react"
import * as styles from "../styles/auth.module.scss"

import { LoginForm, RegisterForm, Header } from "../components"

const AuthPage = () => {
    return (
        <div>
            <Header></Header>
            <LoginForm></LoginForm>
            <RegisterForm></RegisterForm>
        </div>
    )
}

export default AuthPage