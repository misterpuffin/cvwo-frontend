import React, { useState } from "react"
import { register } from "../../redux/auth/auth.actions"

import { connect } from "react-redux"

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

    const handleSubmit = (event: any) => {
        event.preventDefault()
        dispatch(register(formValue.name, formValue.email, formValue.password))
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
            <p>Register Form</p>
            <input
                type="name"
                name="name"
                placeholder="enter a name"
                value={formValue.name}
                onChange={handleChange}
            />
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

}

function mapStateToProps(state: any) {
    const { message } = state.message;
    return {
        message
    }
}

export default connect(mapStateToProps)(RegisterForm)