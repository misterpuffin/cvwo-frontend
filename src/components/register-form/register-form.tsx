// Dependencies
import React, { useState } from "react"
import { connect } from "react-redux"
// @ts-ignore
import Form from "react-validation/build/form";
// @ts-ignore
import CheckButton from "react-validation/build/button";
import validator from "validator";


// Redux Actions
import { register } from "../../redux/auth/auth.actions"

// Components
import { CustomButton, CustomInput, Error } from "../../components";

// CSS Style sheets
import styles from "./register-form.module.scss"

type RegisterProps = {
    message: string,
    dispatch: any
}

const RegisterForm = ({message, dispatch}: RegisterProps): JSX.Element => {

    const [formValue, setFormValue] = useState({
        name: "",
        email: "",
        password: ""
    })

    let formRef: HTMLElement & { validateAll: () => boolean};
    let checkButtonRef: HTMLElement & { context: any };

    const handleSubmit = (event: any) => {
        event.preventDefault()
        formRef.validateAll();
        if (checkButtonRef.context._errors.length === 0) {
            dispatch(register(formValue.name, formValue.email, formValue.password))
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
        <div className={styles.registerFormCard}>
            <Form className={styles.registerForm} onSubmit={handleSubmit} ref={(node: any) => { formRef = node; }}>
                <h2 className={styles.registerFormTitle}>Register</h2>
                <CustomInput
                    type="name"
                    name="name"
                    placeholder="enter a name"
                    value={formValue.name}
                    onChange={handleChange}
                    validations={[required]}
                />
                <CustomInput
                    type="email"
                    name="email"
                    placeholder="enter an email"
                    value={formValue.email}
                    onChange={handleChange}
                    validations={[required, email]}
                />
                <CustomInput
                    type="password"
                    name="password"
                    placeholder="enter a password"
                    value={formValue.password}
                    onChange={handleChange}
                    validations={[required ]}
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
                {message && <Error>{message}</Error>}
            </Form>
        </div>
    )

}

function mapStateToProps(state: any) {
    const { message } = state.message;
    return {
        message
    }
}

export default connect(mapStateToProps)(RegisterForm)