import React, { useState } from "react"

// import styles from "./login-form.module.scss"

import { useNavigate } from "react-router-dom"

import { connect } from "react-redux"
import { login } from "../../redux/auth/auth.actions"

// @ts-ignore
import Form from "react-validation/build/form";
// @ts-ignore
import CheckButton from "react-validation/build/button";

import validator from "validator";
import { CustomButton, CustomInput, Error, Message } from "../../components";

import styles from "./login-form.module.scss"

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

    let formRef: HTMLElement & { validateAll: () => boolean};
    let checkButtonRef: HTMLElement & { context: any };

    const handleSubmit = (event: any) => {
        event.preventDefault()
        formRef.validateAll();
        if (checkButtonRef.context._errors.length === 0) {
            dispatch(login(formValue.email, formValue.password))
            .then(() => navigate("/"))
        }
    }

    const handleChange = (event: any) => {
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value
          });
    }

    const required = (value: string) => {
        if (!value) {
          return (
            <Error>This field is required!</Error>
          );
        }
    };
    
    const email = (value: string) => {
        if (!validator.isEmail(value)) {
          return (
            <Error>This is not a valid email.</Error>
          );
        }
    };

    return (
        <div className={styles.loginFormCard}>
            <Form className={styles.loginForm} onSubmit={handleSubmit} ref={(node: any) => { formRef = node; }}>
                <h2 className={styles.loginFormTitle}>Login</h2>
                <CustomInput
                    className={styles.loginFormInput}
                    type="email"
                    name="email"
                    placeholder="enter an email"
                    value={formValue.email}
                    onChange={handleChange}
                    validations={[required, email]}
                />
                <CustomInput
                    className={styles.loginFormInput}
                    type="password"
                    name="password"
                    placeholder="enter a password"
                    value={formValue.password}
                    onChange={handleChange}
                    validations={[required]}
                />
                <CustomButton
                    type="submit"
                >
                    Login
                </CustomButton>
                <CheckButton
                    style={{ display: "none" }}
                    ref={(node: any) => {checkButtonRef = node;}}
                />
                {message && <Message/>}
            </Form>
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