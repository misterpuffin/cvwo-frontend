import React, { useState } from "react"

// import styles from "./login-form.module.scss"

import { useNavigate } from "react-router-dom"

import { connect } from "react-redux"
import { login } from "../../redux/auth/auth.actions"

type LoginProps = {
    isLoggedIn: boolean,
    message: string,
    dispatch: any
}


const LoginForm = ({ isLoggedIn, message, dispatch }: LoginProps): JSX.Element => {
    const navigate = useNavigate();

    const [formValue, setFormValue] = useState({
        email: '', 
        password: ''
    });

    const handleSubmit = (event: any) => {
        event.preventDefault()
        dispatch(login(formValue.email, formValue.password))
            .then(() => navigate("/"))
    
    }

    const handleChange = (event: any) => {
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value
          });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>Login Form</p>
                <input
                    type="email"
                    name="email"
                    placeholder="enter an email"
                    value={formValue.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="enter a password"
                    value={formValue.password}
                    onChange={handleChange}
                />
                <button
                    type="submit"
                >
                    Login
                </button>
            </form>

            <p>{message}</p>
        </div>
    )
};

function mapStateToProps(state: any) {
    const { isLoggedIn } = state.auth;
    const { message } = state.message;
    return {
        isLoggedIn,
        message
    }
}

export default connect(mapStateToProps)(LoginForm)